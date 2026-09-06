import React from 'react';

interface SkiperCardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'subtle' | 'featured' | 'alert';
}

export const SkiperCard: React.FC<SkiperCardProps> = ({
  children,
  className = '',
  interactive = true,
  onClick,
  variant = 'default'
}) => {
  const variantStyles = {
    default: 'bg-white border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.06)]',
    subtle: 'bg-slate-50/80 border-slate-200/60 shadow-none',
    featured: 'bg-white border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-blue-500/10',
    alert: 'bg-red-50/40 border-red-200/80 shadow-[0_2px_12px_-2px_rgba(239,68,68,0.08)]'
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-2xl border p-5 sm:p-6 transition-all duration-300 ease-out
        ${variantStyles[variant]}
        ${interactive ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(15,23,42,0.08)] hover:border-slate-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
