import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Shield, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const { getUserRank } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userRank = getUserRank();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Spot the Scam', path: '/spot-the-scam', highlight: true },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Scenarios', path: '/scenarios' },
    { name: 'Password Tool', path: '/password-safety' },
    { name: 'Social Audit', path: '/social-safety' },
    { name: 'Emergency', path: '/if-scammed', alert: true },
  ];

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                CyberSafe
              </span>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                Learn. Identify. Protect.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  } ${link.alert ? 'text-red-600 hover:text-red-700 hover:bg-red-50/70 font-bold' : ''}`}
                >
                  {link.name}
                  {link.highlight && (
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User Profile / Auth Action */}
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-2.5">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 py-1.5 px-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all text-xs"
                >
                  {currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt="Avatar" className="w-6 h-6 rounded-full" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      {currentUser.displayName?.charAt(0) || 'U'}
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-semibold text-slate-900 max-w-[110px] truncate leading-tight">
                      {currentUser.displayName || 'Student'}
                    </p>
                    <p className="text-[10px] text-blue-600 font-medium leading-tight">
                      {userRank.rank.split(' ')[0]}
                    </p>
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  title="Sign Out"
                  className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-slate-100 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20 transition-all hover:scale-[1.02]"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            {currentUser && (
              <Link
                to="/dashboard"
                className="p-2 rounded-xl bg-slate-100 text-blue-600"
              >
                <User className="w-5 h-5" />
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === link.path
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <Link
              to="/survey/pre"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2 rounded-lg text-xs text-slate-600 hover:text-slate-900"
            >
              📋 Pre-Learning Survey
            </Link>
            <Link
              to="/survey/post"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2 rounded-lg text-xs text-slate-600 hover:text-slate-900"
            >
              🎯 Post-Learning Survey
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2 rounded-lg text-xs text-slate-600 hover:text-slate-900"
            >
              ℹ️ About Platform
            </Link>
          </div>

          <div className="pt-3">
            {currentUser ? (
              <button
                onClick={() => {
                setMobileMenuOpen(false);
                handleLogout();
              }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-50 text-red-600 font-semibold text-xs border border-red-200"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center text-xs font-semibold rounded-xl bg-slate-100 text-slate-800 border border-slate-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center text-xs font-bold rounded-xl bg-blue-600 text-white shadow-sm"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
