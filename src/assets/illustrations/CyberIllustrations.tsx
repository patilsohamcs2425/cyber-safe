import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number | string;
}

// 1. HERO MAIN ILLUSTRATION: Modern student using smartphone with floating clean security tags
export const HeroIllustration: React.FC<IllustrationProps> = ({ className = "w-full max-w-md h-auto" }) => (
  <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="heroCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EFF6FF" />
        <stop offset="100%" stopColor="#F8FAFC" />
      </linearGradient>
      <linearGradient id="blueBadge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0F172A" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* Soft ambient decorative background circle */}
    <circle cx="240" cy="190" r="150" fill="#F1F5F9" />
    <circle cx="240" cy="190" r="120" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />

    {/* Central Smartphone Frame */}
    <g transform="translate(180, 70)" filter="url(#softShadow)">
      {/* Device Body */}
      <rect x="0" y="0" width="120" height="230" rx="24" fill="#0F172A" stroke="#334155" strokeWidth="2" />
      <rect x="5" y="10" width="110" height="210" rx="18" fill="#FFFFFF" />
      {/* Dynamic Notch */}
      <rect x="42" y="14" width="36" height="5" rx="2.5" fill="#0F172A" />
      
      {/* Phone Screen App Content: Safety Verified Card */}
      <rect x="14" y="32" width="92" height="42" rx="10" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="1" />
      <circle cx="32" cy="53" r="10" fill="#2563EB" />
      <path d="M28 53 L31 56 L37 50" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="48" y="46" width="48" height="6" rx="3" fill="#1E293B" />
      <rect x="48" y="56" width="32" height="4" rx="2" fill="#64748B" />

      {/* Mock Chat / Decision Cards on Phone Screen */}
      <rect x="14" y="84" width="92" height="54" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="22" y="94" width="60" height="5" rx="2.5" fill="#334155" />
      <rect x="22" y="103" width="76" height="4" rx="2" fill="#94A3B8" />
      <rect x="22" y="111" width="50" height="4" rx="2" fill="#94A3B8" />
      <rect x="22" y="122" width="34" height="9" rx="4.5" fill="#DC2626" />
      <text x="39" y="129" fill="#FFFFFF" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SCAM</text>
      <rect x="60" y="122" width="34" height="9" rx="4.5" fill="#16A34A" />
      <text x="77" y="129" fill="#FFFFFF" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SAFE</text>

      {/* App Tab Bar on Phone */}
      <rect x="14" y="150" width="92" height="58" rx="10" fill="#F0FDF4" stroke="#DCFCE7" strokeWidth="1" />
      <circle cx="60" cy="172" r="12" fill="#16A34A" />
      <path d="M56 172 L59 175 L65 169" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <rect x="28" y="192" width="64" height="5" rx="2.5" fill="#15803D" />
    </g>

    {/* Floating Safety Badge 1: Left */}
    <g transform="translate(60, 110)" filter="url(#softShadow)">
      <rect width="105" height="54" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="28" cy="27" r="14" fill="#EFF6FF" />
      <path d="M28 19 L35 23 V30 C35 34 28 37 28 37 C28 37 21 34 21 30 V23 L28 19 Z" fill="#2563EB" />
      <path d="M26 27 L28 29 L31 25" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <text x="50" y="24" fill="#0F172A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Verified</text>
      <text x="50" y="36" fill="#64748B" fontSize="8" fontFamily="sans-serif">Zero Leakage</text>
    </g>

    {/* Floating Safety Badge 2: Right */}
    <g transform="translate(320, 160)" filter="url(#softShadow)">
      <rect width="115" height="58" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="28" cy="29" r="14" fill="#FEF2F2" />
      <text x="28" y="34" fill="#DC2626" fontSize="13" textAnchor="middle">⚠️</text>
      <text x="48" y="25" fill="#0F172A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Scam Detected</text>
      <text x="48" y="38" fill="#DC2626" fontSize="8" fontWeight="600" fontFamily="sans-serif">Fake SMS blocked</text>
    </g>

    {/* Student Silhouette / Avatar Base */}
    <g transform="translate(200, 270)">
      <ellipse cx="40" cy="45" rx="55" ry="16" fill="#E2E8F0" />
      <circle cx="40" cy="0" r="16" fill="#0F172A" />
      <path d="M20 28 C20 18 28 15 40 15 C52 15 60 18 60 28 L64 45 H16 L20 28 Z" fill="#2563EB" />
    </g>
  </svg>
);

// 2. PHISHING ILLUSTRATION: Realistic deceptive email mockup with highlighted suspicious URL
export const PhishingIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-auto" }) => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="320" height="200" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />

    {/* Deceptive Email Container */}
    <g transform="translate(25, 20)">
      <rect width="270" height="160" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
      
      {/* Sender Row */}
      <rect x="15" y="15" width="28" height="28" rx="14" fill="#FEE2E2" />
      <text x="29" y="33" fill="#DC2626" fontSize="13" fontWeight="bold" textAnchor="middle">!</text>
      
      <text x="52" y="27" fill="#0F172A" fontSize="10" fontWeight="bold">Security Support &lt;support@sbi-verify-online.cc&gt;</text>
      <text x="52" y="39" fill="#DC2626" fontSize="8" fontWeight="600">⚠️ External / Spoofed Domain</text>

      <line x1="15" y1="52" x2="255" y2="52" stroke="#F1F5F9" strokeWidth="1" />

      {/* Message Body */}
      <text x="15" y="72" fill="#1E293B" fontSize="10" fontWeight="bold">URGENT: Your student account requires re-KYC</text>
      <rect x="15" y="82" width="220" height="6" rx="3" fill="#E2E8F0" />
      <rect x="15" y="93" width="180" height="6" rx="3" fill="#E2E8F0" />

      {/* Suspicious Action Link Box */}
      <rect x="15" y="112" width="240" height="32" rx="6" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
      <text x="25" y="127" fill="#991B1B" fontSize="9" fontWeight="bold">Phishing Link: sbi-verify-online.cc/login</text>
      <text x="25" y="137" fill="#DC2626" fontSize="8">🚩 Notice: Real bank uses onlinesbi.sbi only</text>
    </g>
  </svg>
);

// 3. UPI PAYMENT FRAUD: Realistic mobile payment screen showing fake QR code & PIN warning
export const PaymentScamIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-auto" }) => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="320" height="200" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />

    {/* Left UPI Request Card */}
    <g transform="translate(20, 20)">
      <rect width="135" height="160" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
      <rect x="12" y="14" width="111" height="26" rx="6" fill="#F0FDF4" />
      <text x="67" y="30" fill="#16A34A" fontSize="10" fontWeight="bold" textAnchor="middle">₹ 1,500 REFUND</text>
      
      {/* Fake QR */}
      <rect x="35" y="48" width="65" height="65" rx="4" fill="#F8FAFC" stroke="#CBD5E1" />
      <rect x="42" y="55" width="20" height="20" fill="#0F172A" />
      <rect x="73" y="55" width="20" height="20" fill="#0F172A" />
      <rect x="42" y="86" width="20" height="20" fill="#0F172A" />

      <rect x="12" y="124" width="111" height="24" rx="6" fill="#DC2626" />
      <text x="67" y="139" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">ENTER UPI PIN TO RECEIVE</text>
    </g>

    {/* Right Golden Rule Card */}
    <g transform="translate(170, 25)">
      <rect width="130" height="150" rx="10" fill="#EFF6FF" stroke="#BFDBFE" />
      <circle cx="30" cy="30" r="14" fill="#DBEAFE" />
      <text x="30" y="35" fill="#1D4ED8" fontSize="13" textAnchor="middle">💡</text>
      
      <text x="50" y="32" fill="#1E3A8A" fontSize="10" fontWeight="bold">THE GOLDEN RULE</text>
      <text x="16" y="65" fill="#1E293B" fontSize="9" fontWeight="600">UPI PIN is ONLY entered to</text>
      <text x="16" y="80" fill="#DC2626" fontSize="10" fontWeight="bold">SEND money!</text>
      
      <text x="16" y="105" fill="#475569" fontSize="8" leading-relaxed>Receiving money requires ZERO action or PIN entry.</text>
      
      <rect x="16" y="125" width="98" height="18" rx="4" fill="#16A34A" />
      <text x="65" y="137" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle">PROTECT YOUR PIN</text>
    </g>
  </svg>
);

// 4. PASSWORD & AUTHENTICATION: Passphrase vault illustration
export const PasswordVaultIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-auto" }) => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="320" height="200" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />

    {/* Passphrase Card */}
    <g transform="translate(30, 30)">
      <rect width="260" height="140" rx="12" fill="#FFFFFF" stroke="#CBD5E1" />
      
      {/* Weak vs Strong comparison */}
      <rect x="18" y="18" width="224" height="42" rx="8" fill="#FEF2F2" stroke="#FCA5A5" />
      <text x="28" y="35" fill="#991B1B" fontSize="9" fontWeight="bold">Weak: password123 / Student@2024</text>
      <text x="28" y="48" fill="#DC2626" fontSize="8">Cracked in &lt; 0.001 seconds via common wordlists</text>

      <rect x="18" y="70" width="224" height="48" rx="8" fill="#F0FDF4" stroke="#86EFAC" />
      <text x="28" y="88" fill="#166534" fontSize="9" fontWeight="bold">Strong Passphrase: Mango*Dancing*Rain#42</text>
      <text x="28" y="102" fill="#15803D" fontSize="8">Takes billions of years to brute-force crack</text>
    </g>
  </svg>
);

// 5. SOCIAL MEDIA SAFETY: Profile privacy checklist graphic
export const SocialSafetyIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-auto" }) => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="320" height="200" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />

    <g transform="translate(30, 25)">
      <rect width="260" height="150" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
      
      {/* Social Profile Header */}
      <circle cx="35" cy="35" r="16" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
      <path d="M28 44 C28 38 31 36 35 36 C39 36 42 38 42 44 Z" fill="#3B82F6" />
      <circle cx="35" cy="30" r="5" fill="#3B82F6" />

      <text x="60" y="32" fill="#0F172A" fontSize="10" fontWeight="bold">Student Profile Audit</text>
      <text x="60" y="44" fill="#16A34A" fontSize="8" fontWeight="bold">🔒 Account Set to Private</text>

      <line x1="18" y1="58" x2="242" y2="58" stroke="#F1F5F9" />

      {/* Safety Points */}
      <g transform="translate(18, 70)">
        <circle cx="6" cy="6" r="5" fill="#16A34A" />
        <path d="M4 6 L5.5 7.5 L8 4.5" stroke="white" strokeWidth="1" />
        <text x="18" y="9" fill="#334155" fontSize="8.5">No live geotagging while at study location</text>

        <circle cx="6" cy="24" r="5" fill="#16A34A" />
        <path d="M4 24 L5.5 25.5 L8 22.5" stroke="white" strokeWidth="1" />
        <text x="18" y="27" fill="#334155" fontSize="8.5">School exam admit cards masked & hidden</text>

        <circle cx="6" cy="42" r="5" fill="#16A34A" />
        <path d="M4 42 L5.5 43.5 L8 40.5" stroke="white" strokeWidth="1" />
        <text x="18" y="45" fill="#334155" fontSize="8.5">Two-factor authentication enabled</text>
      </g>
    </g>
  </svg>
);

// 6. CYBERBULLYING SUPPORT ILLUSTRATION
export const CyberbullyingIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-auto" }) => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="320" height="200" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
    <g transform="translate(40, 25)">
      <rect width="240" height="150" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
      <circle cx="120" cy="45" r="22" fill="#EFF6FF" />
      <path d="M120 30 L132 38 V52 C132 62 120 68 120 68 C120 68 108 62 108 52 V38 L120 30 Z" fill="#2563EB" />
      
      <text x="120" y="90" fill="#0F172A" fontSize="11" fontWeight="bold" textAnchor="middle">You Are Never Alone</text>
      <text x="120" y="105" fill="#64748B" fontSize="8.5" textAnchor="middle">1. Take evidence screenshots</text>
      <text x="120" y="118" fill="#64748B" fontSize="8.5" textAnchor="middle">2. Block the offending handle</text>
      <text x="120" y="131" fill="#64748B" fontSize="8.5" textAnchor="middle">3. Talk to a trusted teacher or parent</text>
    </g>
  </svg>
);

// 7. FAKE SCHOLARSHIP / INTERNSHIP ALERT ILLUSTRATION
export const ScholarshipScamIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-auto" }) => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="320" height="200" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
    <g transform="translate(30, 25)">
      <rect width="260" height="150" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
      
      <rect x="20" y="20" width="100" height="110" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
      <text x="30" y="40" fill="#0F172A" fontSize="8" fontWeight="bold">OFFER LETTER</text>
      <rect x="30" y="50" width="80" height="4" rx="2" fill="#CBD5E1" />
      <rect x="30" y="58" width="65" height="4" rx="2" fill="#CBD5E1" />
      <rect x="30" y="80" width="80" height="18" rx="3" fill="#FEE2E2" stroke="#DC2626" />
      <text x="70" y="92" fill="#DC2626" fontSize="6.5" fontWeight="bold" textAnchor="middle">DEMANDS ₹500 FEE</text>

      <g transform="translate(135, 30)">
        <text x="0" y="15" fill="#DC2626" fontSize="10" fontWeight="bold">🚩 SCAM SIGNAL</text>
        <text x="0" y="32" fill="#334155" fontSize="8" fontWeight="600">Real internships pay YOU.</text>
        <text x="0" y="44" fill="#334155" fontSize="8">You NEVER pay them to work.</text>
        <text x="0" y="66" fill="#64748B" fontSize="7.5">Avoid Telegram task groups &amp;</text>
        <text x="0" y="76" fill="#64748B" fontSize="7.5">unregistered recruiters.</text>
      </g>
    </g>
  </svg>
);

// 8. PUBLIC WI-FI SAFETY
export const PublicWifiIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-auto" }) => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="320" height="200" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
    <g transform="translate(40, 30)">
      <rect width="240" height="140" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
      <circle cx="60" cy="70" r="30" fill="#F1F5F9" />
      <text x="60" y="75" fontSize="20" textAnchor="middle">📶</text>
      
      <g transform="translate(110, 35)">
        <text x="0" y="15" fill="#0F172A" fontSize="10" fontWeight="bold">Public Wi-Fi Hygiene</text>
        <text x="0" y="35" fill="#DC2626" fontSize="8" fontWeight="600">✕ No mobile banking</text>
        <text x="0" y="48" fill="#DC2626" fontSize="8" fontWeight="600">✕ No entering OTPs</text>
        <text x="0" y="61" fill="#16A34A" fontSize="8" fontWeight="600">✓ Use cellular 5G instead</text>
      </g>
    </g>
  </svg>
);

// 9. IDENTITY / CATFISHING
export const IdentityIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-auto" }) => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="320" height="200" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
    <g transform="translate(40, 25)">
      <rect width="240" height="150" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
      <circle cx="120" cy="50" r="24" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
      <text x="120" y="56" fontSize="18" textAnchor="middle">🎭</text>
      
      <text x="120" y="95" fill="#0F172A" fontSize="10" fontWeight="bold" textAnchor="middle">Beware of Impersonation</text>
      <text x="120" y="112" fill="#64748B" fontSize="8.5" textAnchor="middle">If a friend asks for money urgently on DM,</text>
      <text x="120" y="125" fill="#1D4ED8" fontSize="8.5" fontWeight="bold" textAnchor="middle">Always make a 20-second voice call to verify!</text>
    </g>
  </svg>
);
