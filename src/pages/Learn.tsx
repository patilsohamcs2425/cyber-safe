import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  ArrowRight,
  HelpCircle,
  Award,
  Filter,
  CheckCircle
} from 'lucide-react';
import { LEARNING_MODULES, type LearningModule } from '../data/learningModules';
import { useProgress } from '../context/ProgressContext';
import {
  PhishingIllustration,
  PaymentScamIllustration,
  PasswordVaultIllustration,
  SocialSafetyIllustration,
  ScholarshipScamIllustration,
  CyberbullyingIllustration,
  PublicWifiIllustration,
  IdentityIllustration
} from '../assets/illustrations/CyberIllustrations';

export const Learn: React.FC = () => {
  const { progress, markModuleComplete, unmarkModuleComplete } = useProgress();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(LEARNING_MODULES[0].id);

  const categories = ['All', 'Scam Detection', 'Payments', 'Credentials', 'Social', 'Privacy', 'Network'];

  const filteredModules = activeCategory === 'All'
    ? LEARNING_MODULES
    : LEARNING_MODULES.filter(m => m.category === activeCategory);

  const completedCount = progress.completedModules.length;
  const progressPercent = Math.round((completedCount / LEARNING_MODULES.length) * 100);

  const handleChallengeSelect = (moduleId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [moduleId]: optionIndex }));
  };

  const toggleModuleCompletion = async (moduleId: string) => {
    if (progress.completedModules.includes(moduleId)) {
      await unmarkModuleComplete(moduleId);
    } else {
      await markModuleComplete(moduleId);
    }
  };

  const getIllustration = (slug: string) => {
    switch (slug) {
      case 'phishing':
        return <PhishingIllustration className="w-full max-w-sm mx-auto h-auto" />;
      case 'upi-payment-scams':
        return <PaymentScamIllustration className="w-full max-w-sm mx-auto h-auto" />;
      case 'password-safety':
        return <PasswordVaultIllustration className="w-full max-w-sm mx-auto h-auto" />;
      case 'social-media-safety':
        return <SocialSafetyIllustration className="w-full max-w-sm mx-auto h-auto" />;
      case 'privacy-protection':
        return <SocialSafetyIllustration className="w-full max-w-sm mx-auto h-auto" />;
      case 'fake-profiles-identity':
        return <IdentityIllustration className="w-full max-w-sm mx-auto h-auto" />;
      case 'cyberbullying':
        return <CyberbullyingIllustration className="w-full max-w-sm mx-auto h-auto" />;
      case 'internship-scholarship-scams':
        return <ScholarshipScamIllustration className="w-full max-w-sm mx-auto h-auto" />;
      case 'public-wifi-safety':
        return <PublicWifiIllustration className="w-full max-w-sm mx-auto h-auto" />;
      default:
        return <PhishingIllustration className="w-full max-w-sm mx-auto h-auto" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 bg-[#f8fafc]">
      
      {/* Header with Editorial Styling */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
          <span>Interactive Curriculum</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          Master Digital Safety.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Explore essential security topics crafted for modern students. Learn to spot deception, protect private data, and test your instincts with interactive challenges.
        </p>
      </div>

      {/* Progress & Category Filter Ribbon */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Curriculum Progress</span>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-slate-900 font-mono">
                {completedCount} <span className="text-sm font-normal text-slate-400">/ {LEARNING_MODULES.length} Completed</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-mono font-bold text-xs border border-blue-200">
                {progressPercent}%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              <span>Take Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/spot-the-scam"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
            >
              <span>Simulator</span>
            </Link>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Curriculum Modules Grid / Storytelling Cards */}
      <div className="space-y-8">
        {filteredModules.map((module, idx) => {
          const isCompleted = progress.completedModules.includes(module.id);
          const isExpanded = expandedModuleId === module.id;
          const challengeAnswer = selectedAnswers[module.id];
          const hasAnsweredChallenge = challengeAnswer !== undefined;
          const isChallengeCorrect = challengeAnswer === module.miniChallenge.correctIndex;

          return (
            <motion.div
              key={module.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={`rounded-3xl bg-white border transition-all duration-300 overflow-hidden shadow-2xs ${
                isCompleted ? 'border-emerald-200 ring-1 ring-emerald-500/10' : 'border-slate-200/90'
              }`}
            >
              {/* Card Banner / Header */}
              <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold">
                      {module.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {module.readTime}
                    </span>
                    {isCompleted && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                        <CheckCircle className="w-3.5 h-3.5" /> Mastered
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {module.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {module.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => toggleModuleCompletion(module.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span>{isCompleted ? 'Completed' : 'Mark as Completed'}</span>
                  </button>

                  <button
                    onClick={() => setExpandedModuleId(isExpanded ? null : module.id)}
                    className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-sm"
                  >
                    <span>{isExpanded ? 'Hide Details' : 'Explore Topic'}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Collapsible Deep-Dive Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-100 bg-slate-50/50 p-6 sm:p-8 space-y-8"
                  >
                    {/* Visual & Summary Split Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-7 space-y-4">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Understanding the Threat
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {module.summary}
                        </p>
                        <div className="space-y-2 pt-2">
                          {module.fullExplanation.map((paragraph, pIdx) => (
                            <p key={pIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              • {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Visual Mockup Preview */}
                      <div className="lg:col-span-5 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                        {getIllustration(module.slug)}
                      </div>
                    </div>

                    {/* Red Flags vs Stay Safe Rules Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      
                      {/* Red Flags Column */}
                      <div className="p-5 rounded-2xl bg-red-50/50 border border-red-200 space-y-3">
                        <div className="flex items-center gap-2 text-red-700 font-bold text-xs sm:text-sm">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span>Red Flags to Spot</span>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-700">
                          {module.redFlags.map((flag, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <span className="text-red-500 font-bold mt-0.5">✕</span>
                              <span>{flag}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stay Safe Rules Column */}
                      <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3">
                        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs sm:text-sm">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>Defensive Action Rules</span>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-700">
                          {module.staySafeRules.map((rule, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Real-Life Student Case Study */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                          Real Case: {module.realLifeCase.studentName}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">Verified Case Study</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        "{module.realLifeCase.scenario}"
                      </p>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                        <p><strong className="text-slate-900">What Happened: </strong>{module.realLifeCase.whatHappened}</p>
                        <p className="text-blue-700 font-semibold pt-1">💡 <strong>Key Takeaway: </strong>{module.realLifeCase.lesson}</p>
                      </div>
                    </div>

                    {/* Interactive Mini Challenge */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider">
                        <HelpCircle className="w-4 h-4 text-blue-600" />
                        <span>Interactive Check: {module.miniChallenge.question}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {module.miniChallenge.options.map((option, optIdx) => {
                          const isSelected = challengeAnswer === optIdx;
                          const isCorrectOpt = optIdx === module.miniChallenge.correctIndex;

                          let btnStyle = 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200';
                          if (hasAnsweredChallenge) {
                            if (isCorrectOpt) {
                              btnStyle = 'bg-emerald-50 text-emerald-950 font-bold border-emerald-500 shadow-2xs';
                            } else if (isSelected && !isCorrectOpt) {
                              btnStyle = 'bg-red-50 text-red-950 font-bold border-red-500 shadow-2xs';
                            } else {
                              btnStyle = 'opacity-50 bg-white border-slate-200 text-slate-400';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={hasAnsweredChallenge}
                              onClick={() => handleChallengeSelect(module.id, optIdx)}
                              className={`p-3.5 rounded-xl border text-xs text-left transition-all leading-snug flex items-center justify-between gap-2 ${btnStyle}`}
                            >
                              <span>{option}</span>
                              {hasAnsweredChallenge && isCorrectOpt && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {hasAnsweredChallenge && (
                        <div className={`p-3.5 rounded-xl border text-xs leading-relaxed animate-fadeIn ${
                          isChallengeCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-amber-50 border-amber-300 text-amber-900'
                        }`}>
                          <p className="font-bold">
                            {isChallengeCorrect ? '✓ Correct Analysis!' : '⚠️ Learning Note:'}
                          </p>
                          <p className="mt-0.5">{module.miniChallenge.explanation}</p>
                        </div>
                      )}
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
};
