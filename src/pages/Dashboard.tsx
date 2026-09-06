import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Target, 
  Lock, 
  TrendingUp, 
  Sparkles,
  ClipboardList,
  ArrowUpRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';

export const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const { progress, getUserRank, getBadges } = useProgress();

  const userRank = getUserRank();
  const badges = getBadges();

  const modulePercent = Math.round((progress.completedModules.length / 9) * 100);
  const scamAccuracy = progress.scamsAttempted > 0 
    ? Math.round((progress.scamsCorrect / progress.scamsAttempted) * 100) 
    : 0;
  const bestQuizScore = progress.quizHistory.length > 0 
    ? Math.max(...progress.quizHistory.map(q => q.percentage)) 
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8 bg-[#f8fafc]">
      
      {/* Welcome & Gamification Banner */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 relative overflow-hidden shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold">
              <span>CyberSafe Student Account</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Good to see you, {currentUser?.displayName || 'Learner'} 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Track your learning progress, completed cybersecurity topics, quiz credentials, and safety badges in one place.
            </p>
          </div>

          {/* Rank Badge Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4 shrink-0 shadow-2xs">
            <div className="w-13 h-13 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-sm shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Current Safety Rank
              </p>
              <p className="text-base sm:text-lg font-black text-slate-900">
                {userRank.rank}
              </p>
              <p className="text-[11px] text-blue-600 font-medium">
                {userRank.nextLevelRequirement}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Core Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Modules Progress */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Learning Modules</span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 font-mono">
            {progress.completedModules.length} <span className="text-base text-slate-400 font-sans font-normal">/ 9</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${modulePercent}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            {progress.completedModules.length === 0 
              ? 'Start exploring modules to track progress' 
              : `${modulePercent}% curriculum completed`}
          </p>
        </div>

        {/* Quiz High Score */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Top Quiz Score</span>
            <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <HelpCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 font-mono">
            {bestQuizScore !== null ? `${bestQuizScore}%` : '—'}
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${bestQuizScore || 0}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            {bestQuizScore !== null 
              ? `${progress.quizHistory.length} quiz attempt(s) recorded` 
              : 'Take the Cyber Quiz to set your score'}
          </p>
        </div>

        {/* Spot The Scam Accuracy */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Scam Detection</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 font-mono">
            {scamAccuracy}%
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-emerald-600 rounded-full transition-all duration-500"
              style={{ width: `${scamAccuracy}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            {progress.scamsAttempted > 0 
              ? `${progress.scamsCorrect} of ${progress.scamsAttempted} messages caught` 
              : 'Try the Spot The Scam simulator'}
          </p>
        </div>

        {/* Social Privacy Score */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Social Privacy</span>
            <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <Lock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 font-mono">
            {progress.socialScore !== null ? `${progress.socialScore}%` : '—'}
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${progress.socialScore || 0}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            {progress.socialScore !== null 
              ? 'Social media privacy audit completed' 
              : 'Run the Social Media Safety check'}
          </p>
        </div>

      </div>

      {/* Badges & Gamification Showcase */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Safety Badges & Milestones
            </h3>
            <p className="text-xs text-slate-500">
              Unlock badges by mastering topics, spotting suspicious messages, and taking quizzes.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
            {badges.filter(b => b.earned).length} / {badges.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                badge.earned
                  ? 'bg-slate-50/70 border-slate-200 text-slate-900 shadow-2xs'
                  : 'bg-slate-50/30 border-dashed border-slate-200 opacity-45 grayscale'
              }`}
            >
              <div className="text-2xl p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                {badge.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-900">{badge.name}</h4>
                  {badge.earned && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  )}
                </div>
                <p className="text-xs text-slate-500 leading-snug">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Surveys & CEP Research Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Research Surveys Card */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 space-y-4 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-blue-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Awareness Research Surveys
            </h3>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            These quick assessments evaluate the real-world impact of digital safety education on student online habits.
          </p>

          <div className="space-y-3 pt-2">
            
            {/* Pre-Survey Status */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900">Pre-Learning Survey</p>
                <p className="text-[11px] text-slate-500">Baseline cyber safety assessment</p>
              </div>
              {progress.preSurveyCompleted ? (
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                </span>
              ) : (
                <Link
                  to="/survey/pre"
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all"
                >
                  Take Pre-Survey
                </Link>
              )}
            </div>

            {/* Post-Survey Status */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900">Post-Learning Survey</p>
                <p className="text-[11px] text-slate-500">Post-training knowledge retention</p>
              </div>
              {progress.postSurveyCompleted ? (
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                </span>
              ) : (
                <Link
                  to="/survey/post"
                  className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all"
                >
                  Take Post-Survey
                </Link>
              )}
            </div>

          </div>
        </div>

        {/* Quiz History Log */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 space-y-4 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Quiz Activity History
              </h3>
            </div>
            <Link to="/quiz" className="text-xs text-blue-600 hover:underline font-semibold flex items-center gap-0.5">
              <span>Retake Quiz</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {progress.quizHistory.length > 0 ? (
            <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
              {progress.quizHistory.map((attempt, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-mono text-slate-800 font-bold">
                      {attempt.score} / {attempt.total} Correct
                    </span>
                    <p className="text-[10px] text-slate-400">{attempt.date}</p>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full font-mono font-bold ${
                    attempt.percentage >= 80 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    attempt.percentage >= 60 ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {attempt.percentage}%
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-slate-50 border border-dashed border-slate-200 text-center space-y-3">
              <p className="text-xs text-slate-500">
                No quiz attempts logged yet.
              </p>
              <Link
                to="/quiz"
                className="inline-block px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Start First Cyber Quiz
              </Link>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
