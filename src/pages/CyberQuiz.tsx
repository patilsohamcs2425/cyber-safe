import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Link, useNavigate } from 'react-router-dom';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  Sparkles,
  Lock,
  User,
  Shield,
  Target,
  X
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc, arrayUnion } from 'firebase/firestore';

export const CyberQuiz: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, loginWithGoogle } = useAuth();
  const { saveQuizResult } = useProgress();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  
  // Track detailed selected answers for Firestore recording
  const [userAnswers, setUserAnswers] = useState<Array<{
    questionId: string;
    question: string;
    category: string;
    selectedOption: string;
    correctOption: string;
    isCorrect: boolean;
  }>>([]);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const totalQ = QUIZ_QUESTIONS.length;

  const handleSelect = (idx: number) => {
    // REQUIRE LOGIN: if user is not logged in, block selection and open prompt!
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }

    if (isSubmitted) return;
    setSelectedOption(idx);
    setIsSubmitted(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Record the user's answer
    const answerEntry = {
      questionId: currentQ.id,
      question: currentQ.question,
      category: currentQ.category,
      selectedOption: currentQ.options[idx],
      correctOption: currentQ.options[currentQ.correctIndex],
      isCorrect
    };
    setUserAnswers(prev => [...prev, answerEntry]);
  };

  const handleNext = async () => {
    if (currentIndex + 1 < totalQ) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      const finalScore = score;
      setQuizFinished(true);
      
      // Save locally via ProgressContext
      await saveQuizResult(finalScore, totalQ);

      // Save to Firestore database with user login ID and selected answer details
      if (isFirebaseConfigured && db && currentUser) {
        try {
          const finalAnswers = [...userAnswers];
          
          // 1. Store full detailed record in dedicated 'quiz_submissions' collection
          await addDoc(collection(db, 'quiz_submissions'), {
            userId: currentUser.uid,
            loginId: currentUser.email || currentUser.uid,
            userName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Cadet',
            userEmail: currentUser.email || '',
            score: finalScore,
            total: totalQ,
            percentage: Math.round((finalScore / totalQ) * 100),
            answers: finalAnswers,
            submittedAt: new Date().toISOString(),
            createdAt: serverTimestamp()
          });

          // 2. Update user's personal profile document in 'users/{uid}'
          const userRef = doc(db, 'users', currentUser.uid);
          await updateDoc(userRef, {
            quizHistory: arrayUnion({
              score: finalScore,
              total: totalQ,
              percentage: Math.round((finalScore / totalQ) * 100),
              date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
            }),
            updatedAt: serverTimestamp()
          });
          console.log('✅ Quiz results successfully saved to Firestore for:', currentUser.email || currentUser.uid);
        } catch (error) {
          console.error('⚠️ Could not save quiz results to Firestore:', error);
        }
      }

      if (finalScore >= totalQ * 0.7) {
        confetti({
          particleCount: 140,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsSubmitted(false);
    setQuizFinished(false);
    setUserAnswers([]);
  };

  const handleGoogleQuickAuth = async () => {
    setGoogleLoading(true);
    try {
      await loginWithGoogle();
      setShowAuthModal(false);
    } catch (err) {
      console.error(err);
    } finally {
      setGoogleLoading(false);
    }
  };

  const percentage = Math.round((score / totalQ) * 100);

  const getEncouragement = (pct: number) => {
    if (pct >= 90) return { title: 'Elite Cyber Defender! 🛡️', msg: 'Outstanding mastery of digital security concepts. You are fully equipped to protect yourself and guide peers.', color: 'text-emerald-700' };
    if (pct >= 70) return { title: 'Smart Digital Citizen! ⭐', msg: 'Great job! You have a solid grasp of cyber safety and scam detection fundamentals.', color: 'text-blue-700' };
    if (pct >= 50) return { title: 'Aware Learner 🌱', msg: 'Good effort! You understand the basics. Keep practicing on the scam simulator to level up your instincts.', color: 'text-amber-700' };
    return { title: 'Great Start — Keep Learning! 💡', msg: 'Cyber threats evolve fast. Practice with our interactive simulators to master digital safety!', color: 'text-purple-700' };
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 bg-[#f8fafc]">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-2xs">
          <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
          <span>Knowledge Assessment</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Cyber Knowledge Quiz
        </h1>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          Test your comprehension of UPI security, phishing red flags, password entropy, and student safety rules.
        </p>

        {/* Status Indicator Bar */}
        {currentUser ? (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Logged in as <strong>{currentUser.displayName || currentUser.email}</strong> • Answers will sync to your record</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
            <Lock className="w-3.5 h-3.5 text-amber-600" />
            <span>Sign in required to select answers and record your score</span>
            <button
              onClick={() => setShowAuthModal(true)}
              className="text-blue-600 font-bold hover:underline ml-1"
            >
              Sign In Now →
            </button>
          </div>
        )}
      </div>

      {!quizFinished ? (
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
          
          {/* Progress & Category Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-blue-600 font-mono">
                Question {currentIndex + 1} of {totalQ}
              </span>
              <span className="text-slate-600 bg-slate-100 px-3 py-0.5 rounded-full font-medium">
                {currentQ.category}
              </span>
            </div>
            
            {/* Clean Progress Track */}
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / totalQ) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug pt-2">
            {currentQ.question}
          </h2>

          {/* Options Grid */}
          <div className="space-y-2.5 pt-2">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let style = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
              if (isSubmitted) {
                if (isCorrect) {
                  style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-2xs';
                } else if (isSelected && !isCorrect) {
                  style = 'bg-red-50 border-red-500 text-red-950 font-bold shadow-2xs';
                } else {
                  style = 'opacity-50 bg-white border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isSubmitted}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-4 rounded-2xl border text-sm sm:text-base transition-all flex items-center justify-between gap-3 skiper-card-interactive shadow-2xs ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug">{option}</span>
                  </div>

                  {isSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Drawer */}
          {isSubmitted && (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Expert Explanation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentQ.explanation}
              </p>
              <p className="text-xs text-amber-800 italic pt-1">
                💡 <span className="font-semibold not-italic">Pro Tip: </span>{currentQ.tip}
              </p>

              <button
                onClick={handleNext}
                className="w-full mt-3 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.008] active:scale-[0.99]"
              >
                <span>{currentIndex + 1 < totalQ ? 'Next Question' : 'View Your Score'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Quiz Completed Screen */
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 text-center space-y-6 shadow-sm animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-blue-600 shadow-2xs">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Assessment Completed
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Your Cyber Safety Score
            </h2>
            {currentUser && (
              <p className="text-xs text-emerald-700 font-medium pt-1">
                ✓ Recorded in Firestore under: <strong>{currentUser.email || currentUser.uid}</strong>
              </p>
            )}
          </div>

          {/* Score Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto space-y-2">
            <div className="text-5xl sm:text-6xl font-black text-slate-900 font-mono">
              {score} <span className="text-2xl text-slate-400 font-normal">/ {totalQ}</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-blue-700">
              {percentage}% Mastery
            </p>
          </div>

          {/* Feedback & Encouragement */}
          {(() => {
            const enc = getEncouragement(percentage);
            return (
              <div className="max-w-md mx-auto space-y-1.5">
                <h3 className={`text-lg font-bold ${enc.color}`}>
                  {enc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {enc.msg}
                </p>
              </div>
            );
          })()}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto">
            <button
              onClick={handleRestart}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 flex items-center justify-center gap-2 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
            <Link
              to="/spot-the-scam"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <Target className="w-4 h-4" />
              <span>Spot The Scam Simulator</span>
            </Link>
          </div>

        </div>
      )}

      {/* AUTH REQUIRED MODAL DIALOG */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-md w-full p-6 sm:p-7 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2 pt-2">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-blue-600 shadow-2xs">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Sign In Required
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To prevent duplicate test responses and record your official score badge on the student leaderboard, please sign in.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {/* Google 1-Click Auth */}
              <button
                onClick={handleGoogleQuickAuth}
                disabled={googleLoading}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all shadow-2xs flex items-center justify-center gap-3 border border-slate-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                </svg>
                <span>{googleLoading ? 'Connecting...' : 'Continue with Google'}</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => navigate('/login')}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm text-center transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm text-center border border-slate-200 transition-colors"
                >
                  Create Account
                </button>
              </div>
            </div>

            <p className="text-[11px] text-center text-slate-400">
              Interactive tools like Password Strength & Spot The Scam remain accessible without an account.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
