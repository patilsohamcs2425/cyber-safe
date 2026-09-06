import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Target, Users, Award, ArrowRight, CheckCircle2, Lock, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 bg-[#f8fafc]">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
          <Shield className="w-3.5 h-3.5" />
          <span>Our Mission</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          About CyberSafe
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          An interactive digital safety platform designed to empower learners with practical scam defense, privacy hygiene, and online decision-making skills.
        </p>
      </div>

      {/* Purpose & Approach */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 space-y-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Why We Built CyberSafe
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every day, young internet users navigate instant UPI transfers, social media interactions, academic exam portals, job applications, and messaging apps. While digital access has multiplied exponentially, practical cyber literacy remains largely unaddressed in everyday education.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            CyberSafe was designed to replace boring, text-heavy PDFs with realistic, interactive learning experiences. Rather than telling users what a phishing attack is in theory, we simulate real WhatsApp, SMS, and Instagram messages so learners can develop natural threat-detection instincts.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Pillar 1</span>
            <h3 className="text-base font-bold text-slate-900">1. Learn</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clear, bite-sized topics explaining modern threats — from AI voice deepfakes to job offer scams — without dense jargon.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Pillar 2</span>
            <h3 className="text-base font-bold text-slate-900">2. Identify</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Interactive message simulator reproducing real-world messaging layouts, helping users spot psychological pressure and deceptive links.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Pillar 3</span>
            <h3 className="text-base font-bold text-slate-900">3. Protect</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Practical tools including client-side password strength analyzers, social privacy audits, and official 1930 emergency reporting protocols.
            </p>
          </div>
        </div>
      </div>

      {/* Real-World Digital Relevance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Built for Modern Digital Habits
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our curriculum focuses on the exact digital channels students interact with every day:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Admit Card & ID Privacy:</strong> Protecting exam roll numbers and personal documents from public stories.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">The UPI Golden Rule:</strong> Remembering that receiving payments never requires entering your UPI PIN.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Remote Work Traps:</strong> Recognizing that legitimate internships never demand upfront registration deposits.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Evidence Gathering:</strong> Preserving unedited digital proof to report cyber harassment to trusted counselors.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Privacy-First & Verified Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every feature is built adhering to strict user privacy standards:
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-semibold text-slate-900">Client-Side Password Security</p>
                <p className="text-xs text-slate-500">Evaluated 100% inside your browser session — test passwords are never transmitted or logged.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-semibold text-slate-900">Verified Emergency Directives</p>
                <p className="text-xs text-slate-500">All emergency resources link directly to verified Government of India portals (1930 / cybercrime.gov.in).</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-semibold text-slate-900">Confidential Research Surveys</p>
                <p className="text-xs text-slate-500">Anonymous pre/post assessments help track digital empowerment without collecting personal contact data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Background Note (Quiet academic mention as requested) */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
        <p>
          <strong className="text-slate-700">Project Background:</strong> CyberSafe was developed as part of a Community Engagement Project (CEP) focused on digital literacy and student safety. The project aims to bridge the gap between classroom theory and real-world online protection for youth.
        </p>
      </div>

      {/* Final Callout */}
      <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 text-center space-y-4 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
        <h3 className="text-2xl font-extrabold text-slate-900">
          Ready to explore?
        </h3>
        <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
          Learn to spot deceptive tactics and test your instincts in our interactive simulators.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/quiz"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.008] active:scale-[0.99]"
          >
            Take Cyber Quiz
          </Link>
          <Link
            to="/spot-the-scam"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 transition-colors"
          >
            Try Spot The Scam
          </Link>
        </div>
      </div>

    </div>
  );
};
