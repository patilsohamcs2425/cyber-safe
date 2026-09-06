import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  HelpCircle, 
  Lock, 
  Sparkles,
  ChevronRight, 
  PhoneCall, 
  CheckCheck,
  BookOpen,
  Shield,
  Smartphone,
  Eye
} from 'lucide-react';
import { HeroIllustration, PhishingIllustration } from '../assets/illustrations/CyberIllustrations';
import { SkiperCard } from '../components/ui/SkiperCard';
import { StatCounter } from '../components/ui/StatCounter';
import { SkiperMarquee } from '../components/ui/SkiperMarquee';
import { PhoneSimulator } from '../components/scam/PhoneSimulator';
import { SCAM_SCENARIOS } from '../data/scamScenarios';
import { SCENARIO_DILEMMAS } from '../data/scenarioDilemmas';

export const Home: React.FC = () => {
  const teaserScenario = SCAM_SCENARIOS[0];
  const sampleDilemma = SCENARIO_DILEMMAS[0];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden bg-[#f8fafc]">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Editorial Content */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Digital safety starts with you.</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Stay smarter in the <br />
                <span className="text-blue-600">digital world.</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Learn how to spot scams, protect your accounts, and make safer decisions online with interactive simulations built for modern internet users.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 justify-center lg:justify-start">
              <Link
                to="/learn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-sm shadow-blue-600/20 transition-all hover:scale-[1.01] active:scale-95"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/spot-the-scam"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-base border-2 border-slate-300 hover:border-slate-400 shadow-sm transition-all hover:scale-[1.01] active:scale-95"
              >
                <span>Spot a Scam</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Trust Reassurance Chips */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Free & Open Platform
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-600" /> 100% Privacy-First
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-purple-600" /> Real Phone Simulations
              </span>
            </div>

          </motion.div>

          {/* Right Visual Container with Skiper UI Motion Reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="w-full max-w-md bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.04)] relative">
              <HeroIllustration className="w-full h-auto" />
              
              {/* Floating Verified Pill */}
              <div className="absolute -bottom-3 left-6 sm:-left-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-800">Learn. Identify. Protect.</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2 — SKIPER LIVE ALERT MARQUEE */}
      <section className="w-full">
        <SkiperMarquee />
      </section>

      {/* SECTION 3 — STATEMENT / REALITY CHECK */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200/90 shadow-2xs space-y-8">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-blue-600">
              The Reality of Online Traps
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              "One suspicious message is all it takes."
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every day, fraudsters mass-send deceptive texts and Instagram DMs engineered to exploit curiosity, urgency, or fear. You do not need to be a software engineer to protect yourself — you just need to know the red flags.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <StatCounter
              target={1930}
              label="National Cyber Helpline"
              description="Dial 1930 immediately in India to freeze money transfers within the Golden Hour."
              accentColor="text-red-600"
              icon={<PhoneCall className="w-4 h-4 text-red-500" />}
            />
            <StatCounter
              target={100}
              suffix="%"
              label="The UPI Golden Rule"
              description="A UPI PIN is only used to SEND money. Receiving is completely PIN-free."
              accentColor="text-emerald-600"
              icon={<CheckCheck className="w-4 h-4 text-emerald-500" />}
            />
            <StatCounter
              target={16}
              suffix="+ chars"
              label="Passphrase Length"
              description="Multi-word passphrases take supercomputers billions of years to crack."
              accentColor="text-blue-600"
              icon={<Lock className="w-4 h-4 text-blue-500" />}
            />
          </div>

        </div>
      </section>

      {/* SECTION 4 — ASYMMETRICAL EDITORIAL COMMON THREATS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-blue-600">
              Common Attack Surfaces
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Spot the scams before they reach you.
            </h2>
            <p className="text-sm text-slate-600">
              Cybercriminals rarely hack machines directly; they manipulate people. Here are the primary deceptions students encounter:
            </p>
          </div>
          <Link
            to="/spot-the-scam"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold transition-colors shrink-0"
          >
            <span>Practice on simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Layout: 1 Big Featured Card + 3 Stacked Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Featured Large Card: Phishing & Fake Domains (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold">
                  High Prevalence Threat
                </span>
                <span className="text-xs font-semibold text-slate-400">4 min read</span>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Phishing: Lookalike Links & Spoofed Portals
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Fraudsters create login pages that look 99% identical to Instagram, Google, or official university entrance portals to steal passwords and session tokens.
                </p>
              </div>

              {/* Visual Preview */}
              <div className="p-2 rounded-2xl bg-slate-50 border border-slate-200">
                <PhishingIllustration className="w-full h-auto" />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium">Critical Threat Vector</span>
              <Link
                to="/learn"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Read Full Module</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Distinct Stacked Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Card A: UPI Scams */}
            <Link to="/learn" className="block group">
              <SkiperCard className="hover:border-blue-300">
                <div className="flex items-center justify-between gap-3.5">
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0 border border-emerald-200">
                      UPI
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900">
                        Fake QR Codes & Refund Requests
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        Scammers send QR codes claiming you must scan and type your PIN to receive prize money.
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </SkiperCard>
            </Link>

            {/* Card B: Fake Profiles & Catfishing */}
            <Link to="/learn" className="block group">
              <SkiperCard className="hover:border-purple-300">
                <div className="flex items-center justify-between gap-3.5">
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0 border border-purple-200">
                      🎭
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900">
                        Impersonation & Cloned Profiles
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        Trolls clone a classmate's profile picture and send emergency WhatsApp DMs asking for money.
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </SkiperCard>
            </Link>

            {/* Card C: Fake Internships & Task Scams */}
            <Link to="/learn" className="block group">
              <SkiperCard className="hover:border-amber-300">
                <div className="flex items-center justify-between gap-3.5">
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0 border border-amber-200">
                      💼
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900">
                        Telegram Task & Upfront Fee Traps
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        Promises of ₹3,000/day for liking YouTube videos designed to steal security deposits.
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </SkiperCard>
            </Link>

          </div>

        </div>
      </section>

      {/* SECTION 5 — SPOT THE SCAM SHOWCASE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xs space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-600">
              Hands-On Simulation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Can You Spot The Scam?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tap either <strong>SAFE</strong> or <strong>SCAM</strong> on the smartphone below to test your reflexes:
            </p>
          </div>

          <div className="flex justify-center">
            <PhoneSimulator
              scenario={teaserScenario}
              onAnswer={() => {}}
              compact={true}
            />
          </div>

          <div className="text-center pt-2">
            <Link
              to="/spot-the-scam"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>Play all 10 real-world scenarios →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CURRICULUM TOPICS PREVIEW */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-blue-600">
              Curriculum Topics
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              9 Essential Cyber Defense Skills
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Learn practical rules for password hygiene, 2FA, fake internships, and network safety.
            </p>
          </div>
          <Link
            to="/learn"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold transition-colors shrink-0"
          >
            <span>Explore All 9 Modules</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: 'Phishing & Lookalikes', cat: 'Scam Detection', icon: '🎣', desc: 'Identify fake SMS, spoofed domains, and credential harvesting forms.' },
            { title: 'UPI & Payment Scams', cat: 'Payments', icon: '💳', desc: 'The Golden Rule of UPI PINs and remote screen-sharing software traps.' },
            { title: 'Password Security & 2FA', cat: 'Credentials', icon: '🔑', desc: 'How long passphrases and authenticator apps defeat brute-force bots.' },
            { title: 'Social Media & Footprint', cat: 'Social', icon: '📸', desc: 'Why live geotagging and unblurred exam admit cards endanger privacy.' },
            { title: 'Fake Internships & Tasks', cat: 'Scam Detection', icon: '💼', desc: 'Why genuine companies never charge applicants upfront onboarding fees.' },
            { title: 'Public Wi-Fi Hygiene', cat: 'Network', icon: '📶', desc: 'Man-in-the-middle hazards on open cafe networks and why 5G is safer.' },
          ].map((topic, idx) => (
            <Link to="/learn" key={idx} className="block group">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-[0_10px_25px_-5px_rgba(15,23,42,0.06)] transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{topic.icon}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {topic.cat}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                    {topic.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 7 — REAL-LIFE SCENARIOS PREVIEW */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-600">
              Interactive Decision Game
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              What Would You Do?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Explore realistic dilemmas and see the immediate consequences of each action.
            </p>
          </div>
          <Link
            to="/scenarios"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 text-xs font-bold transition-colors shrink-0"
          >
            <span>Play all 8 dilemmas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold">
              {sampleDilemma.badge}
            </span>
            <span className="text-xs text-slate-400 font-medium">Featured Case</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {sampleDilemma.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
            {sampleDilemma.situation}
          </p>

          <div className="pt-2 flex justify-end">
            <Link
              to="/scenarios"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all hover:scale-[1.01]"
            >
              <span>Make Your Choice in the Game →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — QUIZ & TOOLS CALLOUT */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Quiz Callout Card */}
        <div className="p-8 rounded-3xl bg-blue-600 text-white flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
              12 Questions • 5 Mins
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Think you're cyber smart?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Test your knowledge on UPI security, phishing red flags, and digital well-being. Earn your CyberSafe Defender rank.
            </p>
          </div>
          <div>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-900 font-black text-sm shadow-sm hover:bg-blue-50 transition-all hover:scale-[1.02]"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Take the Cyber Quiz</span>
            </Link>
          </div>
        </div>

        {/* Safety Tools Callout Card */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-6 shadow-2xs">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold">
              100% Client-Side Privacy
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Audit your security habits.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Check your password strength against brute-force dictionaries, or audit your Instagram and Snapchat privacy settings.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/password-safety"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 shadow-sm transition-all hover:scale-[1.02]"
            >
              Password Checker →
            </Link>
            <Link
              to="/social-safety"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 shadow-sm transition-all hover:scale-[1.02]"
            >
              Social Media Audit →
            </Link>
          </div>
        </div>

      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50/80 border border-blue-200/80 text-slate-900 space-y-5 shadow-2xs">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Your next click matters.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Build safer digital habits today. Practice spotting realistic message scams, test your knowledge in the quiz, and protect your accounts.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/learn"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.01]"
            >
              Start Learning →
            </Link>
            <Link
              to="/spot-the-scam"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm border-2 border-slate-300 hover:border-slate-400 transition-all"
            >
              Spot The Scam Simulator
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
