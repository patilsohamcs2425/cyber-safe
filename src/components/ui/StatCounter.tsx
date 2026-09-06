import React, { useEffect, useState } from 'react';

interface StatCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  icon?: React.ReactNode;
  accentColor?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  target,
  duration = 1400,
  prefix = '',
  suffix = '',
  label,
  description,
  icon,
  accentColor = 'text-blue-600'
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.05)] hover:border-slate-300 transition-all group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        {icon && <div className="text-slate-400 group-hover:text-slate-600 transition-colors">{icon}</div>}
      </div>
      <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${accentColor} my-1.5 font-mono`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-xs text-slate-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
