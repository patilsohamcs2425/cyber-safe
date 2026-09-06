import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Target, 
  RotateCcw, 
  Award, 
  Flame, 
  HelpCircle
} from 'lucide-react';
import { SCAM_SCENARIOS } from '../data/scamScenarios';
import { PhoneSimulator } from '../components/scam/PhoneSimulator';
import { useProgress } from '../context/ProgressContext';
import { Link } from 'react-router-dom';

export const SpotTheScam: React.FC = () => {
  const { progress, recordScamAttempt } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [hasFinishedAll, setHasFinishedAll] = useState(false);

  const currentScenario = SCAM_SCENARIOS[currentIndex];

  const handleAnswer = async (isCorrect: boolean) => {
    if (isCorrect) {
      setSessionCorrect(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
    } else {
      setStreak(0);
    }

    await recordScamAttempt(currentScenario.id, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex + 1 < SCAM_SCENARIOS.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setHasFinishedAll(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSessionCorrect(0);
    setStreak(0);
    setHasFinishedAll(false);
  };

  const accuracy = progress.scamsAttempted > 0 
    ? Math.round((progress.scamsCorrect / progress.scamsAttempted) * 100) 
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 bg-[#f8fafc]">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
          <Target className="w-3.5 h-3.5 text-blue-600" />
          <span>Interactive Message Simulator</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Spot The Scam
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Inspect real-world messages across WhatsApp, Instagram, SMS, and UPI. Can you identify the subtle red flags?
        </p>
      </div>

      {/* Live HUD Stats Bar */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-3">
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Current Streak</span>
          <div className="flex items-center justify-center gap-1 text-lg font-black text-amber-500 my-0.5">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>{streak}</span>
          </div>
          <span className="text-[10px] text-slate-500">Best: {maxStreak}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Solved</span>
          <div className="text-lg font-black text-slate-900 my-0.5">
            {progress.scamsAttempted}
          </div>
          <span className="text-[10px] text-slate-500">{progress.scamsCorrect} correct</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Accuracy</span>
          <div className="text-lg font-black text-emerald-600 my-0.5">
            {accuracy}%
          </div>
          <span className="text-[10px] text-slate-500">Overall</span>
        </div>
      </div>

      {/* Main Simulator Area */}
      {!hasFinishedAll ? (
        <div className="flex justify-center pt-2">
          <PhoneSimulator
            key={currentScenario.id}
            scenario={currentScenario}
            currentIndex={currentIndex + 1}
            totalScenarios={SCAM_SCENARIOS.length}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        </div>
      ) : (
        /* Completed All Scenarios Victory Screen */
        <div className="max-w-md mx-auto p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-xl animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Simulation Complete!
            </h2>
            <p className="text-xs text-slate-600">
              You tested all 10 realistic mobile fraud scenarios.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-500 font-medium">Session Score</p>
              <p className="text-2xl font-black text-slate-900 font-mono">
                {sessionCorrect} / {SCAM_SCENARIOS.length}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Max Streak</p>
              <p className="text-2xl font-black text-amber-600 font-mono">
                {maxStreak} 🔥
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed italic">
            "Constant vigilance is the best defense. Continue applying these red flag checks to your everyday messages!"
          </p>

          <div className="space-y-2.5 pt-2">
            <button
              onClick={handleRestart}
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-200 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Scenarios</span>
            </button>
            <Link
              to="/quiz"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>Test Knowledge in Cyber Quiz →</span>
            </Link>
          </div>
        </div>
      )}

      {/* Educational Red Flags Reference Guide */}
      <div className="max-w-3xl mx-auto p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-blue-600" />
          The 6 Universal Scam Signals to Remember
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-red-600">1. Artificial Urgency:</span> "Act in 2 hours or face suspension."
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-red-600">2. Unrealistic Rewards:</span> Free laptops, ₹25 Lakh lottery wins.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-red-600">3. Lookalike Links:</span> bit.ly, .online, .xyz external domains.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-red-600">4. UPI PIN for Receiving:</span> Claiming PIN is needed for refunds.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-red-600">5. Screen-Sharing Requests:</span> Asking to download AnyDesk or TeamViewer.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-red-600">6. Upfront Registration Fees:</span> Demanding money before starting internships.
          </div>
        </div>
      </div>

    </div>
  );
};
