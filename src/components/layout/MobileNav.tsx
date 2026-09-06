import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, AlertTriangle, HelpCircle, User, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const MobileNav: React.FC = () => {
  const { currentUser } = useAuth();

  const tabs = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Learn', path: '/learn', icon: BookOpen },
    { name: 'Spot Scam', path: '/spot-the-scam', icon: AlertTriangle, highlight: true },
    { name: 'Quiz', path: '/quiz', icon: HelpCircle },
    { name: currentUser ? 'Dashboard' : 'Sign In', path: currentUser ? '/dashboard' : '/login', icon: currentUser ? ShieldCheck : User },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-1.5 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) => `
                flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 relative min-w-[56px]
                ${isActive 
                  ? 'text-blue-600 font-bold' 
                  : 'text-slate-500 hover:text-slate-900'}
              `}
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1.5 rounded-xl transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : ''}`}>
                    <Icon className={`w-5 h-5 ${tab.highlight && !isActive ? 'text-blue-600' : ''}`} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-tight mt-0.5">
                    {tab.name}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 w-4 h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
