import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall, Phone, AlertOctagon, X, ExternalLink, ShieldAlert, Copy, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const EmergencyCallButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyNumber = (num: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(num);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={menuRef} className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Emergency Popover Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-red-200/80 overflow-hidden text-slate-900"
            style={{ boxShadow: '0 20px 50px -10px rgba(220, 38, 38, 0.25), 0 0 0 1px rgba(239, 68, 68, 0.15)' }}
            role="dialog"
            aria-label="Emergency Cyber Crime Helpline Options"
          >
            {/* Header banner */}
            <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-4 py-3.5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm animate-pulse">
                  <ShieldAlert className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-none tracking-tight">Cyber Crime Helpline</h3>
                  <p className="text-[11px] text-red-100 mt-0.5 font-medium">Govt. of India 24x7 Emergency</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg bg-black/10 hover:bg-black/20 flex items-center justify-center text-white/90 hover:text-white transition-colors"
                aria-label="Close emergency helpline menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-4 space-y-3">
              {/* Golden Hour Warning */}
              <div className="bg-amber-50/90 border border-amber-200/70 rounded-xl p-2.5 flex items-start gap-2.5">
                <AlertOctagon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-snug">
                  <strong className="font-semibold text-amber-950">Golden Hour Alert:</strong> Report financial scams within <strong>1–2 hours</strong> to freeze bank transfers before money leaves the banking system.
                </p>
              </div>

              {/* Main Primary Call Button: 1930 */}
              <div className="relative group">
                <a
                  href="tel:1930"
                  className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-between shadow-lg shadow-red-600/30 transition-all duration-200"
                  id="emergency-call-1930-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5 text-white animate-bounce" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-red-100 font-medium uppercase tracking-wider">Primary Helpline</div>
                      <div className="text-lg font-black tracking-tight leading-tight">Call 1930</div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-lg text-xs font-semibold">
                    <span>Toll Free</span>
                  </div>
                </a>

                {/* Copy number button for desktop */}
                <button
                  onClick={(e) => copyNumber('1930', e)}
                  title="Copy 1930 to clipboard"
                  className="absolute right-2 -bottom-2.5 bg-white border border-slate-200 text-slate-600 hover:text-slate-900 px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1 shadow-sm hover:border-slate-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-2.5 h-2.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied 1930</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-2.5 h-2.5" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>

              {/* Secondary Call: 112 */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href="tel:112"
                  className="flex-1 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-800 font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-xs border border-slate-200/80 transition-all"
                  id="emergency-call-112-btn"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>Call 112 (All Emergency)</span>
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2.5 px-3 rounded-xl flex items-center gap-1.5 text-xs border border-blue-200/80 transition-colors shrink-0"
                  title="Official Reporting Portal"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3 h-3 text-blue-600" />
                </a>
              </div>

              {/* Emergency Guide Link */}
              <Link
                to="/if-scammed"
                onClick={() => setIsOpen(false)}
                className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-between border border-slate-200/70 transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  View Golden Hour Action Checklist
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Emergency Circular Call Button */}
      <div className="relative flex items-center">
        
        {/* Desktop Tooltip Badge on Hover (when popup closed) */}
        {!isOpen && (
          <div
            className={`hidden sm:flex items-center gap-2 mr-3 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-lg backdrop-blur-md pointer-events-none transition-all duration-200 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>Emergency: Dial 1930</span>
          </div>
        )}

        {/* The Circular Red Call Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label="Emergency Cyber Crime Helpline Button"
          id="floating-emergency-call-btn"
          className={`group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-400/50 ${
            isOpen 
              ? 'bg-slate-800 rotate-90 shadow-lg' 
              : 'bg-gradient-to-tr from-red-600 via-red-500 to-rose-600 hover:scale-105 shadow-[0_8px_25px_rgba(239,68,68,0.5)] hover:shadow-[0_12px_35px_rgba(239,68,68,0.7)]'
          }`}
        >
          {/* Animated radar pulsing rings around circle (only when closed) */}
          {!isOpen && (
            <>
              <span className="absolute -inset-1.5 rounded-full bg-red-500/40 animate-ping pointer-events-none opacity-80" />
              <span className="absolute -inset-1 rounded-full bg-red-400/20 blur-sm pointer-events-none" />
            </>
          )}

          {/* Icon inside circle */}
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative flex items-center justify-center">
              <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform group-hover:scale-110" />
            </div>
          )}

          {/* SOS / 1930 Badge on Circle (when closed) */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 bg-white text-red-600 text-[10px] font-black px-1.5 py-0.2 rounded-full border-2 border-red-500 shadow-sm leading-tight flex items-center gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              1930
            </span>
          )}
        </button>

      </div>
    </div>
  );
};
