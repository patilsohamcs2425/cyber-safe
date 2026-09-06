import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, PhoneCall, ExternalLink, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-12 pb-24 md:pb-12 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Emergency Alert Helpline Ribbon */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-white border border-red-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-red-100 text-red-600 shrink-0">
              <PhoneCall className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-sm sm:text-base">
                Scammed online or lost money right now?
              </p>
              <p className="text-xs text-slate-500">
                Call the Government National Cyber Crime Helpline immediately:
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:1930"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-sm transition-all hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" />
              Dial 1930
            </a>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300 transition-colors"
            >
              cybercrime.gov.in
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-lg font-black text-slate-900 tracking-tight">CyberSafe</span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              Interactive cyber safety awareness and scam defense platform designed to help young internet users navigate the digital world safely.
            </p>
            <p className="text-xs font-semibold text-blue-600">
              Learn. Identify. Protect.
            </p>
          </div>

          {/* Security Practice */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Safety Practice
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/spot-the-scam" className="hover:text-blue-600 transition-colors">Spot The Scam Simulator</Link></li>
              <li><Link to="/quiz" className="hover:text-blue-600 transition-colors">Cyber Knowledge Quiz</Link></li>
              <li><Link to="/scenarios" className="hover:text-blue-600 transition-colors">Dilemma Scenarios</Link></li>
              <li><Link to="/if-scammed" className="hover:text-blue-600 transition-colors">Emergency Protocol (1930)</Link></li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/spot-the-scam" className="hover:text-blue-600 transition-colors">Spot The Scam Simulator</Link></li>
              <li><Link to="/quiz" className="hover:text-blue-600 transition-colors">Cyber Knowledge Quiz</Link></li>
              <li><Link to="/password-safety" className="hover:text-blue-600 transition-colors">Password Strength Checker</Link></li>
              <li><Link to="/social-safety" className="hover:text-blue-600 transition-colors">Social Media Privacy Audit</Link></li>
              <li><Link to="/scenarios" className="hover:text-blue-600 transition-colors">What Would You Do? Dilemmas</Link></li>
            </ul>
          </div>

          {/* Research & Platform */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Platform & Surveys
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About the Project</Link></li>
              <li><Link to="/survey/pre" className="hover:text-blue-600 transition-colors">Pre-Learning Survey</Link></li>
              <li><Link to="/survey/post" className="hover:text-blue-600 transition-colors">Post-Learning Survey</Link></li>
              <li><Link to="/if-scammed" className="hover:text-blue-600 transition-colors">Emergency Protocol</Link></li>
              <li><Link to="/dashboard" className="hover:text-blue-600 transition-colors">Student Dashboard</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Developed as an educational Community Engagement Project (CEP) for youth digital safety awareness.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-slate-500">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              100% Privacy-First Architecture
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
