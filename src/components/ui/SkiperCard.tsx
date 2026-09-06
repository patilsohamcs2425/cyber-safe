import React from 'react';
import { motion } from 'framer-motion';

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
    default: 'bg-white border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.05)]',
    subtle: 'bg-slate-50/80 border-slate-200/60 shadow-none',
    featured: 'bg-white border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.05)] ring-1 ring-blue-500/10',
    alert: 'bg-red-50/40 border-red-200/80 shadow-[0_2px_12px_-2px_rgba(239,68,68,0.06)]'
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={interactive ? { y: -2, transition: { duration: 0.2 } } : undefined}
      whileTap={interactive ? { scale: 0.99 } : undefined}
      className={`
        relative rounded-2xl border p-5 sm:p-6 transition-colors duration-200
        ${variantStyles[variant]}
        ${interactive ? 'cursor-pointer hover:border-slate-300 hover:shadow-[0_12px_28px_-4px_rgba(15,23,42,0.07)]' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
