import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw,
  Lock,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { SocialSafetyIllustration } from '../assets/illustrations/CyberIllustrations';

interface AuditItem {
  id: string;
  title: string;
  description: string;
  category: string;
  recommendation: string;
}

const AUDIT_ITEMS: AuditItem[] = [
  {
    id: 'c1',
    title: 'Private Account Setting',
    description: 'My primary personal social accounts (Instagram, Snapchat) are strictly set to "Private".',
    category: 'Privacy',
    recommendation: 'Switch your profile to Private under Settings → Privacy. Only approved friends should see your stories and posts.'
  },
  {
    id: 'c2',
    title: 'Follower Verification',
    description: 'I personally know and recognize every single follower on my private account in real life.',
    category: 'Identity',
    recommendation: 'Perform a monthly follower audit. Remove unfamiliar profiles, ghost accounts, or accounts with zero mutual friends.'
  },
  {
    id: 'c3',
    title: 'No Live Geotagging',
    description: 'I avoid tagging live locations or checking into venues until AFTER I have left.',
    category: 'Physical Safety',
    recommendation: 'Delayed posting is the safest habit. Never advertise your exact real-time physical coordinates to the public.'
  },
  {
    id: 'c4',
    title: 'Mask School / College Identifiers',
    description: 'My photos and bio do NOT publicly reveal my school name, exam roll number, uniform badges, or daily transit route.',
    category: 'PII Protection',
    recommendation: 'Crop or blur school logos and never post photos of admit cards or bus passes; predators use these to trace student schedules.'
  },
  {
    id: 'c5',
    title: 'Two-Factor Authentication Active',
    description: '2FA is turned on for my Instagram, Google, and WhatsApp accounts.',
    category: 'Security',
    recommendation: 'Enable 2FA immediately under Settings → Security → Two-Factor Authentication. It blocks 99% of automated account takeovers.'
  },
  {
    id: 'c6',
    title: 'Zero Unknown DM Engagement',
    description: 'I never click links or share phone numbers in unsolicited DMs offering free tech passes, gifts, or investment tips.',
    category: 'Scam Defense',
    recommendation: 'Ignore and report unsolicited DMs. Legitimate organizations never send urgent promotions via random personal direct messages.'
  },
  {
    id: 'c7',
    title: 'Hidden Contact Information',
    description: 'My phone number, personal email, and date of birth are completely hidden from public profile bios.',
    category: 'PII Protection',
    recommendation: 'Remove phone numbers and birth years from your bio to stop telemarketing scraping and credential recovery guessing.'
  },
  {
    id: 'c8',
    title: 'Periodic App Permission Reviews',
    description: 'I do not grant camera, microphone, or contact permissions to random quiz and photo-editing apps.',
    category: 'Device Privacy',
    recommendation: 'Open phone Settings → Apps → Permissions and revoke access for non-essential casual apps.'
  }
];

export const SocialSafety: React.FC = () => {
  const { progress, saveSocialAudit } = useProgress();
  
  // Initialize checklist from saved progress if present
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    progress.socialChecklist || {}
  );
  const [isAudited, setIsAudited] = useState(progress.socialScore !== null);

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCalculateScore = async () => {
    const total = AUDIT_ITEMS.length;
    const count = Object.values(checkedItems).filter(Boolean).length;
    const calculatedScore = Math.round((count / total) * 100);

    setIsAudited(true);
    await saveSocialAudit(calculatedScore, checkedItems);

    if (calculatedScore >= 80) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setCheckedItems({});
    setIsAudited(false);
  };

  const currentScore = isAudited
    ? Math.round((Object.values(checkedItems).filter(Boolean).length / AUDIT_ITEMS.length) * 100)
    : 0;

  const uncheckedItems = AUDIT_ITEMS.filter(item => !checkedItems[item.id]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 bg-[#f8fafc]">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-semibold">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Interactive Privacy Audit</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Social Media Privacy & Safety Check
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Audit your digital footprint across Instagram, Snapchat, and WhatsApp to protect yourself against impersonation, catfishing, and identity abuse.
        </p>
      </div>

      {/* Main Grid: Checklist + Score Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Checklist (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Student Privacy Checklist ({Object.values(checkedItems).filter(Boolean).length} / {AUDIT_ITEMS.length} Checked)
            </h3>
            {isAudited && (
              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            )}
          </div>

          <div className="space-y-3">
            {AUDIT_ITEMS.map((item) => {
              const isChecked = Boolean(checkedItems[item.id]);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                    isChecked
                      ? 'bg-emerald-50/60 border-emerald-200 text-slate-900 shadow-sm'
                      : 'bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-600">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={handleCalculateScore}
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.008] active:scale-[0.99]"
            >
              <span>{isAudited ? 'Recalculate & Save Score' : 'Calculate My Social Safety Score'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Score & Custom Recommendations (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 space-y-5 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
            <SocialSafetyIllustration className="w-full h-auto rounded-2xl" />

            {/* Score Card */}
            {isAudited ? (
              <div className="space-y-4 pt-1">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Your Social Safety Index
                  </p>
                  <div className={`text-5xl font-black font-mono tracking-tight ${
                    currentScore >= 80 ? 'text-emerald-600' :
                    currentScore >= 60 ? 'text-blue-600' : 'text-amber-600'
                  }`}>
                    {currentScore}%
                  </div>
                  <p className="text-xs font-medium text-slate-700">
                    {currentScore >= 80 ? '🛡️ Excellent privacy protections in place!' :
                     currentScore >= 60 ? '⚡ Good protection, a few gaps remain' :
                     '⚠️ Vulnerabilities detected — review recommendations below'}
                  </p>
                </div>

                {/* Personalized Action Steps for unchecked items */}
                {uncheckedItems.length > 0 ? (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Priority Security Recommendations ({uncheckedItems.length}):
                    </h4>
                    <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                      {uncheckedItems.map((item) => (
                        <div key={item.id} className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs space-y-1">
                          <p className="font-bold text-amber-900">{item.title}</p>
                          <p className="text-slate-600 leading-relaxed">{item.recommendation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-xs text-emerald-800 font-medium">
                    🎉 Outstanding! All 8 social privacy checkpoints are fully satisfied.
                  </div>
                )}
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center text-xs text-slate-500 space-y-2 leading-relaxed">
                <p>Check the boxes on the left reflecting your active social media habits, then tap "Calculate" to receive your score and tailored recommendations.</p>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
