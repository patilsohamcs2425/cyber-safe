import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ClipboardList, ArrowRight } from 'lucide-react';
import { PRE_SURVEY_QUESTIONS } from '../data/surveyQuestions';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';

export const PreSurvey: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { savePreSurvey } = useProgress();
  const [studentName, setStudentName] = useState(currentUser?.displayName || '');
  const [studentRollNo, setStudentRollNo] = useState('');
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSelect = (qId: string, val: any) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all questions answered
    const unanswered = PRE_SURVEY_QUESTIONS.filter(q => answers[q.id] === undefined);
    if (unanswered.length > 0) {
      setErrorMsg(`Please answer all questions before submitting (${unanswered.length} remaining).`);
      return;
    }

    setIsSubmitting(true);
    try {
      await savePreSurvey(answers, {
        name: studentName.trim() || currentUser?.displayName || 'Anonymous Student',
        rollNo: studentRollNo.trim()
      });
      navigate('/spot-the-scam');
    } catch (err) {
      setErrorMsg('Failed to save survey. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8 bg-[#f8fafc]">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
          <ClipboardList className="w-3.5 h-3.5" />
          <span>Awareness Study</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Pre-Learning Cyber Awareness Survey
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Help us measure baseline digital safety habits before exploring the learning modules. Responses are confidential and used to evaluate educational impact.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
        
        {/* Student Identification Section */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-3">
          <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">
            👤 Student Information (For CEP Study Record)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                Full Name / Student Name
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                Roll Number / College ID (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. CS-2024-042"
                value={studentRollNo}
                onChange={(e) => setStudentRollNo(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        
        {PRE_SURVEY_QUESTIONS.map((q, idx) => (
          <div key={q.id} className="space-y-3 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div>
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {q.question}
                </p>
                <span className="text-[11px] text-slate-400 font-medium">Category: {q.category}</span>
              </div>
            </div>

            {/* Scale type (1 to 5) */}
            {q.type === 'scale' && (
              <div className="pt-2">
                <div className="grid grid-cols-5 gap-2 text-center">
                  {[1, 2, 3, 4, 5].map((num) => {
                    const isSelected = answers[q.id] === num;
                    return (
                      <button
                        type="button"
                        key={num}
                        onClick={() => handleSelect(q.id, num)}
                        className={`py-3 rounded-xl border font-mono font-bold text-sm sm:text-base transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm scale-105'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {num}
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 px-1">
                  <span>1: Not Confident</span>
                  <span>3: Moderate</span>
                  <span>5: Very Confident</span>
                </div>
              </div>
            )}

            {/* Single choice & Yes/No types */}
            {(q.type === 'single' || q.type === 'yes_no') && q.options && (
              <div className="space-y-2 pt-1">
                {q.options.map((opt, optIdx) => {
                  const isSelected = answers[q.id] === opt;
                  return (
                    <div
                      key={optIdx}
                      onClick={() => handleSelect(q.id, opt)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-center justify-between select-none ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-400 text-blue-950 font-semibold shadow-2xs'
                          : 'bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{opt}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-300 bg-white'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        ))}

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
            {errorMsg}
          </div>
        )}

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.008] active:scale-[0.99]"
          >
            <span>{isSubmitting ? 'Saving...' : 'Submit & Start Learning'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link to="/spot-the-scam" className="text-xs text-slate-500 hover:text-slate-800 transition-colors">
            Skip to simulator for now →
          </Link>
        </div>

      </form>

    </div>
  );
};
