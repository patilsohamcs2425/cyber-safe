import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Compass, 
  CheckCircle2, 
  ChevronRight, 
  Lightbulb,
  Lock,
  X
} from 'lucide-react';
import { SCENARIO_DILEMMAS } from '../data/scenarioDilemmas';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const Scenarios: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, loginWithGoogle } = useAuth();
  const { progress, recordScenarioComplete } = useProgress();
  
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [selectedChoiceIdx, setSelectedChoiceIdx] = useState<number | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const scenario = SCENARIO_DILEMMAS[activeScenarioIdx];

  const handleSelectChoice = async (idx: number) => {
    // REQUIRE LOGIN: block making dilemma decisions if not logged in!
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }

    setSelectedChoiceIdx(idx);
    recordScenarioComplete(scenario.id);

    // Save decision to Firestore with user's login ID
    if (isFirebaseConfigured && db && currentUser) {
      try {
        const option = scenario.options[idx];
        await addDoc(collection(db, 'scenario_submissions'), {
          userId: currentUser.uid,
          loginId: currentUser.email || currentUser.uid,
          userName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Cadet',
          userEmail: currentUser.email || '',
          scenarioId: scenario.id,
          scenarioTitle: scenario.title,
          selectedChoiceIdx: idx,
          choiceText: option.text,
          isBest: option.isBest,
          consequence: option.consequence,
          submittedAt: new Date().toISOString(),
          createdAt: serverTimestamp()
        });
        console.log('✅ Scenario decision saved to Firestore for:', currentUser.email || currentUser.uid);
      } catch (error) {
        console.error('⚠️ Could not save scenario decision to Firestore:', error);
      }
    }
  };

  const handleNextScenario = () => {
    if (activeScenarioIdx + 1 < SCENARIO_DILEMMAS.length) {
      setActiveScenarioIdx(prev => prev + 1);
      setSelectedChoiceIdx(null);
    }
  };

  const handleSelectFromList = (idx: number) => {
    setActiveScenarioIdx(idx);
    setSelectedChoiceIdx(null);
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8 bg-[#f8fafc]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-2xs">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive Decision Game</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          What Would You Do?
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Step into realistic student situations. Make the call and discover the real-world digital consequences of each choice.
        </p>

        {/* Login status banner */}
        {currentUser ? (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Logged in as <strong>{currentUser.displayName || currentUser.email}</strong> • Decisions recorded to your profile</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
            <Lock className="w-3.5 h-3.5 text-amber-600" />
            <span>Sign in required to make decisions and view consequence ratings</span>
            <button
              onClick={() => setShowAuthModal(true)}
              className="text-blue-600 font-bold hover:underline ml-1"
            >
              Sign In Now →
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Scenario Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-3 order-2 lg:order-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            Student Dilemmas ({SCENARIO_DILEMMAS.length} Scenarios)
          </h3>
          <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
            {SCENARIO_DILEMMAS.map((dilemma, idx) => {
              const isSelected = idx === activeScenarioIdx;
              const isDone = progress.completedScenarios.includes(dilemma.id);
              return (
                <div
                  key={dilemma.id}
                  onClick={() => handleSelectFromList(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-300 text-slate-900 shadow-sm'
                      : 'bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                    <span className="font-mono font-medium">Case #{idx + 1}</span>
                    <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full text-[10px]">{dilemma.badge}</span>
                  </div>
                  <h4 className={`text-xs sm:text-sm font-bold leading-snug ${isSelected ? 'text-blue-950' : 'text-slate-800'}`}>
                    {dilemma.title}
                  </h4>
                  {isDone && (
                    <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium mt-2">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Solved
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Active Scenario & Decision Sandbox (8 cols) */}
        <div className="lg:col-span-8 order-1 lg:order-2 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
          
          <div className="space-y-2 pb-4 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs">
                Scenario #{activeScenarioIdx + 1} of {SCENARIO_DILEMMAS.length}
              </span>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">{scenario.badge}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {scenario.title}
            </h2>
          </div>

          {/* Situation Card */}
          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/70 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
              <span>The Situation</span>
            </p>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
              {scenario.situation}
            </p>
          </div>

          {/* Decision Options */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              What is your decision? Pick an option:
            </p>

            <div className="space-y-2.5">
              {scenario.options.map((option, idx) => {
                const isSelected = selectedChoiceIdx === idx;
                let btnStyle = 'bg-slate-50/80 hover:bg-slate-100/80 border-slate-200 text-slate-800';
                
                if (selectedChoiceIdx !== null) {
                  if (isSelected) {
                    btnStyle = option.isBest 
                      ? 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold shadow-sm' 
                      : 'bg-red-50 border-2 border-red-500 text-red-950 font-bold shadow-sm';
                  } else {
                    btnStyle = 'opacity-50 bg-slate-50 border-slate-200 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedChoiceIdx !== null}
                    onClick={() => handleSelectChoice(idx)}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-start gap-3.5 skiper-card-interactive ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-white border border-slate-300 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 shadow-2xs">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed font-medium">{option.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Consequence Reveal */}
          {selectedChoiceIdx !== null && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-fadeIn">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Consequence of your choice:
                </p>
                <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                  scenario.options[selectedChoiceIdx].isBest
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-red-50 border-red-200 text-red-900'
                }`}>
                  <p className="font-bold">{scenario.options[selectedChoiceIdx].consequence}</p>
                  <p className="mt-1 text-slate-700">{scenario.options[selectedChoiceIdx].explanation}</p>
                </div>
              </div>

              {/* Master Lesson */}
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-blue-950 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-blue-900">Key Takeaway: </span>
                  <span className="text-slate-700">{scenario.keyTakeaway}</span>
                </div>
              </div>

              {/* Next Scenario Button */}
              {activeScenarioIdx + 1 < SCENARIO_DILEMMAS.length && (
                <button
                  onClick={handleNextScenario}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.008] active:scale-[0.99]"
                >
                  <span>Next Dilemma Case</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

        </div>

      </div>

      {/* AUTH REQUIRED MODAL DIALOG FOR SCENARIOS */}
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
                Please sign in to make decisions in student dilemma scenarios and record your outcomes in the database.
              </p>
            </div>

            <div className="space-y-3 pt-2">
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
