import React, { useState } from 'react';
import { 
  AlertOctagon, 
  PhoneCall, 
  ExternalLink, 
  Clock, 
  FileText, 
  CheckSquare, 
  Square,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const IfScammed: React.FC = () => {
  const [checkedEvidence, setCheckedEvidence] = useState<Record<string, boolean>>({});

  const toggleEvidence = (key: string) => {
    setCheckedEvidence(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const evidenceItems = [
    { id: 'ev-1', text: 'Screenshots of all WhatsApp, SMS, or Instagram chat conversations' },
    { id: 'ev-2', text: 'Bank Transaction ID / UTR Number / UPI Reference Number (12 digits)' },
    { id: 'ev-3', text: 'Sender phone number, email address, or social media profile handle' },
    { id: 'ev-4', text: 'Exact date and timestamp when the transaction or communication occurred' },
    { id: 'ev-5', text: 'The fake website link / domain address you were directed to' },
    { id: 'ev-6', text: 'Bank account statement or passbook entry showing the debit' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 bg-[#f8fafc]">
      
      {/* Emergency Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-red-50/90 border-2 border-red-200/90 shadow-[0_4px_20px_-4px_rgba(239,68,68,0.12)] space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/90 text-red-700 border border-red-300/80 text-xs font-bold uppercase tracking-wider">
          <AlertOctagon className="w-4 h-4 text-red-600" />
          <span>Immediate Emergency Protocol</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Think You've Been Scammed?
        </h1>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Stay calm and take immediate action. The first <strong className="text-red-700 font-bold">1 to 2 hours ("Golden Hour")</strong> are critical to freezing fraudulent bank transfers before fraudsters can withdraw the cash.
        </p>

        {/* Big Call Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <a
            href="tel:1930"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-base sm:text-lg shadow-md shadow-red-600/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <PhoneCall className="w-5 h-5 animate-pulse" />
            <span>Call 1930 (National Cyber Crime Helpline)</span>
          </a>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-2xs transition-all"
          >
            <span>cybercrime.gov.in (Official Portal)</span>
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </a>
        </div>
      </div>

      {/* 5-Step Action Protocol */}
      <div className="space-y-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              The 5-Step Emergency Sequence
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">Follow these exact steps immediately in order</p>
          </div>
        </div>

        <div className="space-y-3.5">
          
          {/* Step 1 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-mono font-bold text-xs flex items-center justify-center border border-red-200">
                1
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                STOP IMMEDIATELY
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
              Do not transfer more money, do not pay any "unfreeze penalty", and do not enter any OTPs. If the caller is threatening you, disconnect immediately. If you downloaded AnyDesk, RustDesk, or QuickSupport, uninstall it or turn off mobile data right away.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 font-mono font-bold text-xs flex items-center justify-center border border-amber-200">
                2
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                SAVE CRITICAL EVIDENCE
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
              Do NOT delete the chat or message out of embarrassment! Take full screenshots displaying the sender’s phone number, profile handle, transaction timestamps, and payment reference numbers. This evidence is mandatory for police and bank investigations.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-mono font-bold text-xs flex items-center justify-center border border-blue-200">
                3
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                INFORM A TRUSTED ADULT
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
              Scammers thrive on isolating students through fear and shame. Confide in your parents, guardian, class teacher, or school counselor immediately. They will support you emotionally and help coordinate with your bank and authorities.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-mono font-bold text-xs flex items-center justify-center border border-indigo-200">
                4
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                CONTACT YOUR BANK OR UPI SERVICE
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
              Call your bank’s official 24x7 toll-free fraud helpline immediately. Request to freeze the disputed transaction and block your debit card or net banking credentials. Quote the 12-digit UTR/UPI reference ID.
            </p>
          </div>

          {/* Step 5 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center border border-emerald-200">
                5
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                LODGE AN OFFICIAL CYBER CRIME COMPLAINT
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
              File a formal complaint on the official portal: <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">cybercrime.gov.in</a> or dial <strong>1930</strong>. You will receive an official Acknowledgement Number to track your case.
            </p>
          </div>

        </div>
      </div>

      {/* Interactive Evidence Collection Checklist */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Interactive Evidence Checklist
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500">
          Gather these 6 essential items before dialing 1930 or filing your online report:
        </p>

        <div className="space-y-2.5 pt-2">
          {evidenceItems.map((item) => {
            const isChecked = Boolean(checkedEvidence[item.id]);
            return (
              <div
                key={item.id}
                onClick={() => toggleEvidence(item.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 select-none ${
                  isChecked
                    ? 'bg-emerald-50/70 border-emerald-200 text-slate-900'
                    : 'bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400 shrink-0" />
                )}
                <span className="text-xs sm:text-sm leading-snug font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Verified Government Resources Directory */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 space-y-4 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Official Government Security Portals (India)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <p className="font-bold text-blue-700">National Cyber Reporting</p>
            <p className="font-mono text-slate-700">cybercrime.gov.in</p>
            <p className="text-[11px] text-slate-500 pt-1">Official portal under MHA / I4C</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <p className="font-bold text-purple-700">Chakshu Portal</p>
            <p className="font-mono text-slate-700">sancharsaathi.gov.in</p>
            <p className="text-[11px] text-slate-500 pt-1">Report suspected fraud SMS & calls</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <p className="font-bold text-amber-700">CEIR Portal</p>
            <p className="font-mono text-slate-700">ceir.gov.in</p>
            <p className="text-[11px] text-slate-500 pt-1">Block and trace lost or stolen phones</p>
          </div>
        </div>
      </div>

    </div>
  );
};
