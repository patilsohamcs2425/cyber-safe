import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, setDoc, getDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { useAuth } from './AuthContext';

export interface QuizAttempt {
  score: number;
  total: number;
  percentage: number;
  date: string;
}

export interface ProgressState {
  completedModules: string[];
  quizHistory: QuizAttempt[];
  scamsAttempted: number;
  scamsCorrect: number;
  answeredScamIds: Record<string, boolean>; // id -> wasCorrect
  socialScore: number | null;
  socialChecklist: Record<string, boolean>;
  preSurveyCompleted: boolean;
  preSurveyData?: Record<string, any>;
  postSurveyCompleted: boolean;
  postSurveyData?: Record<string, any>;
  completedScenarios: string[];
}

interface ProgressContextType {
  progress: ProgressState;
  markModuleComplete: (moduleId: string) => Promise<void>;
  unmarkModuleComplete: (moduleId: string) => Promise<void>;
  saveQuizResult: (score: number, total: number) => Promise<void>;
  recordScamAttempt: (scenarioId: string, isCorrect: boolean) => Promise<void>;
  saveSocialAudit: (score: number, checklist: Record<string, boolean>) => Promise<void>;
  savePreSurvey: (answers: Record<string, any>) => Promise<void>;
  savePostSurvey: (answers: Record<string, any>) => Promise<void>;
  recordScenarioComplete: (scenarioId: string) => void;
  getUserRank: () => { rank: string; color: string; level: number; nextLevelRequirement: string };
  getBadges: () => Array<{ id: string; name: string; desc: string; icon: string; earned: boolean }>;
  resetAllProgress: () => void;
}

const defaultProgress: ProgressState = {
  completedModules: [],
  quizHistory: [],
  scamsAttempted: 0,
  scamsCorrect: 0,
  answeredScamIds: {},
  socialScore: null,
  socialChecklist: {},
  preSurveyCompleted: false,
  postSurveyCompleted: false,
  completedScenarios: []
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState<ProgressState>(defaultProgress);

  // Storage key is user-specific or guest
  const getStorageKey = (uid: string | undefined) => `cybersafe_progress_${uid || 'guest'}`;

  // Load progress when user changes
  useEffect(() => {
    const key = getStorageKey(currentUser?.uid);
    const cached = localStorage.getItem(key);
    
    if (cached) {
      try {
        setProgress(JSON.parse(cached));
      } catch {
        setProgress(defaultProgress);
      }
    } else {
      setProgress(defaultProgress);
    }

    // If connected to Firebase and user is real, attempt sync from Firestore
    if (isFirebaseConfigured && db && currentUser) {
      const userDocRef = doc(db, 'userProgress', currentUser.uid);
      getDoc(userDocRef).then((snapshot) => {
        if (snapshot.exists()) {
          const remoteData = snapshot.data() as ProgressState;
          setProgress((prev) => {
            const merged: ProgressState = {
              ...prev,
              ...remoteData,
              completedModules: Array.from(new Set([...prev.completedModules, ...(remoteData.completedModules || [])]))
            };
            localStorage.setItem(key, JSON.stringify(merged));
            return merged;
          });
        }
      }).catch((err) => {
        console.warn('Could not sync Firestore progress, using local cache:', err);
      });
    }
  }, [currentUser?.uid]);

  // Helper to persist locally and to Firestore
  const updateAndPersist = (updater: (prev: ProgressState) => ProgressState) => {
    setProgress((prev) => {
      const next = updater(prev);
      const key = getStorageKey(currentUser?.uid);
      localStorage.setItem(key, JSON.stringify(next));

      // Push to Firestore asynchronously if real user
      if (isFirebaseConfigured && db && currentUser) {
        const userDocRef = doc(db, 'userProgress', currentUser.uid);
        setDoc(userDocRef, {
          ...next,
          updatedAt: serverTimestamp(),
          userEmail: currentUser.email,
          userName: currentUser.displayName
        }, { merge: true }).catch((err) => {
          console.error('Firestore background sync error:', err);
        });
      }

      return next;
    });
  };

  const markModuleComplete = async (moduleId: string) => {
    updateAndPersist((prev) => {
      if (prev.completedModules.includes(moduleId)) return prev;
      return {
        ...prev,
        completedModules: [...prev.completedModules, moduleId]
      };
    });
  };

  const unmarkModuleComplete = async (moduleId: string) => {
    updateAndPersist((prev) => ({
      ...prev,
      completedModules: prev.completedModules.filter((id) => id !== moduleId)
    }));
  };

  const saveQuizResult = async (score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    const newAttempt: QuizAttempt = {
      score,
      total,
      percentage,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    updateAndPersist((prev) => ({
      ...prev,
      quizHistory: [newAttempt, ...prev.quizHistory]
    }));

    // Record individual quiz result in Firestore collection for analytics
    if (isFirebaseConfigured && db && currentUser) {
      try {
        await addDoc(collection(db, 'quizResults'), {
          userId: currentUser.uid,
          userName: currentUser.displayName,
          score,
          total,
          percentage,
          createdAt: serverTimestamp()
        });
      } catch (e) {
        console.warn('Could not record quizResult doc:', e);
      }
    }
  };

  const recordScamAttempt = async (scenarioId: string, isCorrect: boolean) => {
    updateAndPersist((prev) => {
      const isFirstTime = !(scenarioId in prev.answeredScamIds);
      return {
        ...prev,
        scamsAttempted: isFirstTime ? prev.scamsAttempted + 1 : prev.scamsAttempted,
        scamsCorrect: (isFirstTime && isCorrect) ? prev.scamsCorrect + 1 : prev.scamsCorrect,
        answeredScamIds: {
          ...prev.answeredScamIds,
          [scenarioId]: isCorrect
        }
      };
    });
  };

  const saveSocialAudit = async (score: number, checklist: Record<string, boolean>) => {
    updateAndPersist((prev) => ({
      ...prev,
      socialScore: score,
      socialChecklist: checklist
    }));
  };

  const savePreSurvey = async (answers: Record<string, any>) => {
    updateAndPersist((prev) => ({
      ...prev,
      preSurveyCompleted: true,
      preSurveyData: answers
    }));

    if (isFirebaseConfigured && db && currentUser) {
      try {
        await addDoc(collection(db, 'surveyResponses'), {
          userId: currentUser.uid,
          surveyType: 'pre',
          responses: answers,
          createdAt: serverTimestamp()
        });
      } catch (e) {
        console.warn('Could not save preSurvey doc:', e);
      }
    }
  };

  const savePostSurvey = async (answers: Record<string, any>) => {
    updateAndPersist((prev) => ({
      ...prev,
      postSurveyCompleted: true,
      postSurveyData: answers
    }));

    if (isFirebaseConfigured && db && currentUser) {
      try {
        await addDoc(collection(db, 'surveyResponses'), {
          userId: currentUser.uid,
          surveyType: 'post',
          responses: answers,
          createdAt: serverTimestamp()
        });
      } catch (e) {
        console.warn('Could not save postSurvey doc:', e);
      }
    }
  };

  const recordScenarioComplete = (scenarioId: string) => {
    updateAndPersist((prev) => {
      if (prev.completedScenarios.includes(scenarioId)) return prev;
      return {
        ...prev,
        completedScenarios: [...prev.completedScenarios, scenarioId]
      };
    });
  };

  const resetAllProgress = () => {
    const key = getStorageKey(currentUser?.uid);
    localStorage.removeItem(key);
    setProgress(defaultProgress);
  };

  // Gamification: Student Rank Engine
  const getUserRank = () => {
    const modulesCount = progress.completedModules.length;
    const bestQuiz = progress.quizHistory.length > 0 ? Math.max(...progress.quizHistory.map(q => q.percentage)) : 0;
    const scamsCount = progress.scamsAttempted;

    let points = modulesCount * 15 + scamsCount * 10 + Math.floor(bestQuiz / 2);
    if (progress.socialScore !== null) points += 20;
    if (progress.preSurveyCompleted) points += 15;
    if (progress.postSurveyCompleted) points += 25;

    if (points >= 200) {
      return { rank: 'CyberSafe Champion 🏆', color: 'text-emerald-800 border-emerald-300 bg-emerald-50', level: 4, nextLevelRequirement: 'Maximum Rank Achieved!' };
    } else if (points >= 120) {
      return { rank: 'Smart Defender 🛡️', color: 'text-blue-800 border-blue-300 bg-blue-50', level: 3, nextLevelRequirement: `${200 - points} pts to CyberSafe Champion` };
    } else if (points >= 50) {
      return { rank: 'Aware Cadet ⚡', color: 'text-purple-800 border-purple-300 bg-purple-50', level: 2, nextLevelRequirement: `${120 - points} pts to Smart Defender` };
    } else {
      return { rank: 'Cyber Rookie 🌱', color: 'text-slate-800 border-slate-300 bg-slate-100', level: 1, nextLevelRequirement: `${50 - points} pts to Aware Cadet` };
    }
  };

  const getBadges = () => {
    const modulesCount = progress.completedModules.length;
    const bestQuiz = progress.quizHistory.length > 0 ? Math.max(...progress.quizHistory.map(q => q.percentage)) : 0;

    return [
      {
        id: 'b1',
        name: 'First Step',
        desc: 'Completed your first cyber safety learning module',
        icon: '🎯',
        earned: modulesCount >= 1
      },
      {
        id: 'b2',
        name: 'Scam Spotter',
        desc: 'Tested 5+ real-world messages in Spot-The-Scam',
        icon: '🔍',
        earned: progress.scamsAttempted >= 5
      },
      {
        id: 'b3',
        name: 'Quiz Ace',
        desc: 'Scored 80% or higher on the Cyber Safety Quiz',
        icon: '⭐',
        earned: bestQuiz >= 80
      },
      {
        id: 'b4',
        name: 'Privacy Guardian',
        desc: 'Completed the Social Media Safety Audit',
        icon: '🔒',
        earned: progress.socialScore !== null
      },
      {
        id: 'b5',
        name: 'Knowledge Master',
        desc: 'Mastered 5 or more educational modules',
        icon: '📚',
        earned: modulesCount >= 5
      },
      {
        id: 'b6',
        name: 'Community Contributor',
        desc: 'Completed both Pre & Post CEP awareness surveys',
        icon: '🎓',
        earned: progress.preSurveyCompleted && progress.postSurveyCompleted
      }
    ];
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markModuleComplete,
        unmarkModuleComplete,
        saveQuizResult,
        recordScamAttempt,
        saveSocialAudit,
        savePreSurvey,
        savePostSurvey,
        recordScenarioComplete,
        getUserRank,
        getBadges,
        resetAllProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
