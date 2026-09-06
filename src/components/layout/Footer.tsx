import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, PhoneCall, ExternalLink, Lock, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/90 bg-white pt-12 pb-24 md:pb-12 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Emergency Alert Helpline Ribbon */}
        <div className="mb-12 p-5 sm:p-6 rounded-3xl bg-red-50/70 border border-red-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="p-3 rounded-2xl bg-red-100 text-red-600 shrink-0">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-sm sm:text-base">
                Scammed online or lost money right now?
              </p>
              <p className="text-xs text-slate-600">
                Call the National Cyber Crime Helpline immediately within the Golden Hour:
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:1930"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Dial 1930</span>
            </a>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-300 shadow-2xs transition-colors"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-lg font-black text-slate-900 tracking-tight">CyberSafe</span>
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed">
              Modern digital safety awareness platform designed to help internet users recognize deception, secure their accounts, and make informed choices online.
            </p>
            <p className="text-xs font-semibold text-blue-600">
              Learn. Identify. Protect.
            </p>
          </div>

          {/* Education & Curriculum */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 mb-3 tracking-wide">
              Learning & Practice
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/learn" className="hover:text-blue-600 transition-colors">Curriculum Modules</Link></li>
              <li><Link to="/spot-the-scam" className="hover:text-blue-600 transition-colors">Spot The Scam Simulator</Link></li>
              <li><Link to="/quiz" className="hover:text-blue-600 transition-colors">Cyber Knowledge Quiz</Link></li>
              <li><Link to="/scenarios" className="hover:text-blue-600 transition-colors">Decision Dilemmas</Link></li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 mb-3 tracking-wide">
              Interactive Tools
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/password-safety" className="hover:text-blue-600 transition-colors">Password Entropy Analyzer</Link></li>
              <li><Link to="/social-safety" className="hover:text-blue-600 transition-colors">Social Privacy Audit</Link></li>
              <li><Link to="/if-scammed" className="hover:text-blue-600 transition-colors">Emergency Protocol (1930)</Link></li>
              <li><Link to="/dashboard" className="hover:text-blue-600 transition-colors">Student Progress Hub</Link></li>
            </ul>
          </div>

          {/* Research & Platform */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 mb-3 tracking-wide">
              Platform & Study
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About CyberSafe</Link></li>
              <li><Link to="/survey/pre" className="hover:text-blue-600 transition-colors">Pre-Learning Survey</Link></li>
              <li><Link to="/survey/post" className="hover:text-blue-600 transition-colors">Post-Learning Survey</Link></li>
              <li>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>National Cyber Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            An educational digital safety campaign designed for youth cyber defense.
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
