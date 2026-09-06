import React, { useState } from 'react';
import { Wifi, Battery, Signal, ShieldCheck, AlertOctagon, CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';
import type { ScamScenario } from '../../data/scamScenarios';
import { MessageBubble } from './MessageBubble';

interface PhoneSimulatorProps {
  scenario: ScamScenario;
  onAnswer: (isCorrect: boolean) => void;
  onNext?: () => void;
  currentIndex?: number;
  totalScenarios?: number;
  compact?: boolean;
}

export const PhoneSimulator: React.FC<PhoneSimulatorProps> = ({
  scenario,
  onAnswer,
  onNext,
  currentIndex = 1,
  totalScenarios = 10,
  compact = false
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<'safe' | 'scam' | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChoice = (choice: 'safe' | 'scam') => {
    if (hasSubmitted) return;
    setSelectedAnswer(choice);
    setHasSubmitted(true);

    const isUserCorrect = (choice === 'scam' && scenario.isScam) || (choice === 'safe' && !scenario.isScam);
    onAnswer(isUserCorrect);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setHasSubmitted(false);
    if (onNext) onNext();
  };

  const isCorrect = (selectedAnswer === 'scam' && scenario.isScam) || (selectedAnswer === 'safe' && !scenario.isScam);

  return (
    <div className={`w-full ${compact ? 'max-w-md' : 'max-w-lg'} mx-auto`}>
      
      {/* Smartphone Chassis (Modern Silver/Titanium Light Frame) */}
      <div className="rounded-[2.5rem] p-2.5 sm:p-3.5 bg-slate-200/90 shadow-[0_12px_40px_-8px_rgba(15,23,42,0.12)] border-4 border-slate-300 relative">
        
        {/* Dynamic Island / Notch Bar */}
        <div className="absolute top-4.5 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-slate-300 rounded-full flex items-center justify-center z-20">
          <div className="w-8 h-1 bg-slate-400/80 rounded-full"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700 ml-2"></div>
        </div>

        {/* Screen Display Area (Light Canvas) */}
        <div className="rounded-[2rem] bg-white border border-slate-200 overflow-hidden flex flex-col min-h-[470px] sm:min-h-[510px]">
          
          {/* Status Bar */}
          <div className="pt-2 px-6 pb-2 flex items-center justify-between text-[11px] text-slate-500 font-medium z-10 border-b border-slate-100">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-slate-600">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Scenario Counter Header */}
          <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
            <span className="font-bold text-slate-800">
              Scenario {currentIndex} of {totalScenarios}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              scenario.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800' :
              scenario.difficulty === 'Medium' ? 'bg-amber-100 text-amber-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {scenario.difficulty}
            </span>
          </div>

          {/* Chat / Message Viewport */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50/50 flex flex-col justify-center">
            <MessageBubble scenario={scenario} />
          </div>

          {/* Interaction & Decision Area */}
          <div className="p-4 bg-white border-t border-slate-200 space-y-3">
            
            {!hasSubmitted ? (
              <div>
                <p className="text-xs text-center font-bold text-slate-700 mb-2.5">
                  Is this message SAFE or a SCAM?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleChoice('safe')}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-500 text-emerald-700 font-bold text-sm sm:text-base shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    SAFE
                  </button>
                  <button
                    onClick={() => handleChoice('scam')}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-50 hover:bg-red-100 border-2 border-red-500 text-red-700 font-bold text-sm sm:text-base shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <AlertOctagon className="w-5 h-5 text-red-600" />
                    SCAM
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 animate-fadeIn">
                
                {/* Result Pill */}
                <div className={`p-3.5 rounded-xl border flex items-start gap-2.5 ${
                  isCorrect 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                    : 'bg-red-50 border-red-300 text-red-900'
                }`}>
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold">
                      {isCorrect ? 'Correct Analysis!' : 'Warning: That is a Scam!'}
                    </h5>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      {scenario.explanation}
                    </p>
                  </div>
                </div>

                {/* Red Flags List */}
                {scenario.isScam && scenario.redFlags.length > 0 && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      🚩 Red Flags to Spot:
                    </p>
                    <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                      {scenario.redFlags.map((flag, idx) => (
                        <li key={idx}>{flag}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Student Action Advice */}
                <div className="text-[11px] text-slate-600 bg-blue-50/60 p-2.5 rounded-lg border border-blue-100 leading-relaxed">
                  <span className="font-bold text-blue-900">🛡️ What you should do: </span>
                  {scenario.studentAdvice}
                </div>

                {/* Next Button */}
                {onNext && (
                  <button
                    onClick={handleNext}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.01] active:scale-95"
                  >
                    <span>Next Message</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
