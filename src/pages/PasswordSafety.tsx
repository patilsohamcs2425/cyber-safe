import React, { useState } from 'react';
import { 
  Lock, 
  Eye, 
  EyeOff, 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Key, 
  RotateCw,
  Copy,
  CheckCheck
} from 'lucide-react';
import { analyzePassword, generatePassphrase } from '../lib/utils';
import { PasswordVaultIllustration } from '../assets/illustrations/CyberIllustrations';

export const PasswordSafety: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  // 100% Client-side analysis only
  const analysis = analyzePassword(password);

  const handleGenerate = () => {
    const generated = generatePassphrase();
    setPassword(generated);
  };

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const strengthBarWidth = `${(analysis.score / 4) * 100}%`;
  const barColors = [
    'bg-red-500',
    'bg-red-500',
    'bg-amber-500',
    'bg-blue-600',
    'bg-emerald-500'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 bg-[#f8fafc]">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
          <Key className="w-3.5 h-3.5" />
          <span>Interactive Security Tool</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Password Strength & Passphrase Studio
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Test your password resilience against real-world credential stuffing and dictionary attacks.
        </p>
        <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>100% Private: Evaluated purely inside your local browser. Nothing is ever sent over the network.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Interactive Tester (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Test a password or passphrase
              </label>
              {password && (
                <span className="text-xs text-slate-400 font-mono">
                  {password.length} characters
                </span>
              )}
            </div>
            
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type a password or generate a secure passphrase..."
                className="w-full px-4 py-3.5 pr-24 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-sm sm:text-base focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100/60 transition-all placeholder:text-slate-400"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                {password && (
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-2 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Dynamic Strength Meter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-500">Calculated Entropy:</span>
              <span className={analysis.score <= 1 ? 'text-red-600' : analysis.score === 2 ? 'text-amber-600' : analysis.score === 3 ? 'text-blue-600' : 'text-emerald-600'}>
                {analysis.strengthLabel}
              </span>
            </div>
            
            <div className="w-full h-3 rounded-full bg-slate-100 p-0.5 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${barColors[analysis.score]}`}
                style={{ width: password ? strengthBarWidth : '0%' }}
              />
            </div>
          </div>

          {/* Crack Time Indicator */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Time required for supercomputer brute-force:
              </p>
              <p className="text-lg sm:text-xl font-black text-slate-900 font-mono mt-0.5">
                {analysis.crackTime}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          {/* Security Criteria Checklist */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Entropy Requirements:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                analysis.hasLength ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200/70 text-slate-500'
              }`}>
                {analysis.hasLength ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5 text-slate-400" />}
                <span className="font-medium">10+ Characters</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                analysis.hasUpper ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200/70 text-slate-500'
              }`}>
                {analysis.hasUpper ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5 text-slate-400" />}
                <span className="font-medium">Uppercase (A-Z)</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                analysis.hasLower ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200/70 text-slate-500'
              }`}>
                {analysis.hasLower ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5 text-slate-400" />}
                <span className="font-medium">Lowercase (a-z)</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                analysis.hasNumber ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200/70 text-slate-500'
              }`}>
                {analysis.hasNumber ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5 text-slate-400" />}
                <span className="font-medium">Numbers (0-9)</span>
              </div>
              <div className={`p-2.5 rounded-xl border flex items-center gap-2 col-span-2 transition-all ${
                analysis.hasSpecial ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200/70 text-slate-500'
              }`}>
                {analysis.hasSpecial ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5 text-slate-400" />}
                <span className="font-medium">Special Characters (!@#$%^&*)</span>
              </div>
            </div>
          </div>

          {/* Feedback Messages */}
          {analysis.feedback.length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
              {analysis.feedback.map((msg, i) => (
                <p key={i} className="text-xs text-amber-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>{msg}</span>
                </p>
              ))}
            </div>
          )}

          {/* Generate Passphrase Button */}
          <div className="pt-2">
            <button
              onClick={handleGenerate}
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.008] active:scale-[0.99]"
            >
              <RotateCw className="w-4 h-4 text-blue-400" />
              <span>Generate a 3-Word Secure Passphrase</span>
            </button>
          </div>

        </div>

        {/* Right: Educational Guide (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 space-y-5 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
            <PasswordVaultIllustration className="w-full h-auto rounded-2xl" />

            <div className="space-y-2 pt-1">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                The "Passphrase" Revolution
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Why force yourself to memorize painful random strings like <code className="text-red-600 bg-red-50 px-1 py-0.5 rounded font-mono text-[11px]">x9#K!pL2</code>?
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 space-y-1.5 text-xs">
              <p className="font-bold text-blue-900">Use 3 unrelated memorable words instead:</p>
              <p className="font-mono text-blue-800 text-sm font-semibold">Mango*Dancing*Rain#42</p>
              <p className="text-[11px] text-slate-500 pt-0.5 leading-normal">
                Easy for your human memory to recall, but takes billions of computer years for automated botnets to guess!
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs text-slate-600 border-t border-slate-100">
              <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">3 Essential Password Habits:</p>
              <div className="flex gap-2.5 items-start">
                <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">1</div>
                <p><strong className="text-slate-900 font-semibold">Never reuse master passwords:</strong> When a gaming forum gets breached, automated credential bots immediately try that exact password on your primary Gmail and Instagram.</p>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">2</div>
                <p><strong className="text-slate-900 font-semibold">Enable 2FA everywhere:</strong> Turn on App-based Two-Factor Authentication (e.g. Google Authenticator) for an unbreakable second layer of protection.</p>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">3</div>
                <p><strong className="text-slate-900 font-semibold">Never share verification codes:</strong> Real support representatives from banks and colleges will NEVER ask you for an OTP or account password over chat.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
