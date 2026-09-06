import React from 'react';

interface SkiperMarqueeProps {
  items?: string[];
  className?: string;
}

const DEFAULT_ALERTS = [
  "⚡ Golden Rule: You NEVER enter your UPI PIN to receive money or refunds",
  "🛡️ Emergency: Dial 1930 within the 1-2 hour Golden Hour if defrauded",
  "⚠️ Job Scams: Legitimate companies never demand upfront security deposits",
  "🔒 Password Tip: A memorable 3-word passphrase beats complex short passwords",
  "📱 Privacy Habit: Never geotag or check-in until after leaving the location",
  "🎯 Red Flag: Instagram and banks will NEVER send official notices via personal DMs"
];

export const SkiperMarquee: React.FC<SkiperMarqueeProps> = ({
  items = DEFAULT_ALERTS,
  className = ""
}) => {
  return (
    <div className={`w-full overflow-hidden bg-blue-50/90 text-slate-800 py-3 border-y border-blue-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] backdrop-blur-md ${className}`}>
      <div className="animate-marquee flex items-center gap-10">
        {/* Render twice for seamless infinite loop */}
        {[...items, ...items].map((alert, idx) => (
          <div key={idx} className="flex items-center gap-6 whitespace-nowrap text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
            <span className="inline-flex items-center gap-1.5">{alert}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 opacity-60"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
