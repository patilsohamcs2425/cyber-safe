import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { Navbar } from './components/layout/Navbar';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { ProtectedRoute } from './components/layout/ProtectedRoute';

// Pages
import { Home } from './pages/Home';
import { SpotTheScam } from './pages/SpotTheScam';
import { CyberQuiz } from './pages/CyberQuiz';
import { PasswordSafety } from './pages/PasswordSafety';
import { SocialSafety } from './pages/SocialSafety';
import { Scenarios } from './pages/Scenarios';
import { IfScammed } from './pages/IfScammed';
import { PreSurvey } from './pages/PreSurvey';
import { PostSurvey } from './pages/PostSurvey';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';

// Scroll to top on every route transition
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProgressProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            
            {/* Subtle light ambient glow */}
            <div className="fixed top-0 right-1/4 w-96 h-96 bg-blue-50/70 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="fixed bottom-1/3 left-1/4 w-96 h-96 bg-indigo-50/60 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* Desktop Navbar */}
            <Navbar />

            {/* Main Application Routes Viewport */}
            <main className="flex-grow pb-16 md:pb-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Navigate to="/spot-the-scam" replace />} />
                <Route path="/spot-the-scam" element={<SpotTheScam />} />
                <Route path="/quiz" element={<CyberQuiz />} />
                <Route path="/password-safety" element={<PasswordSafety />} />
                <Route path="/social-safety" element={<SocialSafety />} />
                <Route path="/scenarios" element={<Scenarios />} />
                <Route path="/if-scammed" element={<IfScammed />} />
                <Route path="/survey/pre" element={<PreSurvey />} />
                <Route path="/survey/post" element={<PostSurvey />} />
                
                {/* Protected Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* Catch-all redirect */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Global Footer */}
            <Footer />

            {/* Mobile Bottom Navigation Bar */}
            <MobileNav />

          </div>
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
