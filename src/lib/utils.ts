import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Password strength analysis (strictly 100% client side!)
export interface PasswordAnalysis {
  score: number; // 0 to 4
  strengthLabel: 'Very Weak' | 'Weak' | 'Medium' | 'Strong' | 'Very Strong';
  color: string;
  feedback: string[];
  crackTime: string;
  hasLength: boolean;
  hasUpper: boolean;
  hasLower: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
  isCommon: boolean;
}

const COMMON_PASSWORDS = [
  'password', '123456', '12345678', 'qwerty', 'admin', 'welcome', 'login',
  'password123', 'iloveyou', 'student', 'india123', 'cyber123', 'football',
  'monkey', 'letmein', 'trustno1', 'sunshine', 'princess', 'college123'
];

export function analyzePassword(password: string): PasswordAnalysis {
  const hasLength = password.length >= 10;
  const hasMinLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const isCommon = COMMON_PASSWORDS.includes(password.toLowerCase().trim());

  let points = 0;
  const feedback: string[] = [];

  if (password.length === 0) {
    return {
      score: 0,
      strengthLabel: 'Very Weak',
      color: 'text-slate-500',
      feedback: ['Enter a password to test its strength.'],
      crackTime: 'Instant',
      hasLength: false,
      hasUpper: false,
      hasLower: false,
      hasNumber: false,
      hasSpecial: false,
      isCommon: false
    };
  }

  if (isCommon) {
    return {
      score: 1,
      strengthLabel: 'Very Weak',
      color: 'text-red-500',
      feedback: ['🚨 This is one of the most commonly cracked passwords! Hackers test this in milliseconds.'],
      crackTime: '< 0.001 seconds',
      hasLength,
      hasUpper,
      hasLower,
      hasNumber,
      hasSpecial,
      isCommon: true
    };
  }

  if (password.length < 8) {
    feedback.push('Make it at least 8 characters long (12+ is recommended).');
  } else if (password.length >= 14) {
    points += 2;
  } else if (password.length >= 10) {
    points += 1;
  }

  if (!hasUpper) feedback.push('Add uppercase letters (A-Z).');
  else points += 1;

  if (!hasLower) feedback.push('Add lowercase letters (a-z).');
  else points += 1;

  if (!hasNumber) feedback.push('Add numbers (0-9).');
  else points += 1;

  if (!hasSpecial) feedback.push('Add symbols or special characters (!@#$%^&*).');
  else points += 1;

  // Repetitive chars check
  if (/(.)\1\1/.test(password)) {
    points = Math.max(0, points - 1);
    feedback.push('Avoid repeating identical characters in a row.');
  }

  // Calculate score 0 to 4
  let score = 0;
  let strengthLabel: PasswordAnalysis['strengthLabel'] = 'Very Weak';
  let color = 'text-red-500';
  let crackTime = 'A few seconds';

  if (points <= 2 || password.length < 8) {
    score = 1;
    strengthLabel = 'Weak';
    color = 'text-red-400';
    crackTime = 'A few seconds to minutes';
  } else if (points === 3 || points === 4) {
    score = 2;
    strengthLabel = 'Medium';
    color = 'text-amber-400';
    crackTime = 'A few hours to days';
  } else if (points === 5) {
    score = 3;
    strengthLabel = 'Strong';
    color = 'text-cyan-400';
    crackTime = 'Several months to years';
  } else {
    score = 4;
    strengthLabel = 'Very Strong';
    color = 'text-emerald-400';
    crackTime = 'Centuries to millennia';
  }

  if (feedback.length === 0) {
    feedback.push('🛡️ Outstanding password! It satisfies all high-security criteria.');
  }

  return {
    score,
    strengthLabel,
    color,
    feedback,
    crackTime,
    hasLength,
    hasUpper,
    hasLower,
    hasNumber,
    hasSpecial,
    isCommon: false
  };
}

// Generate an easy-to-remember 3-word passphrase
export function generatePassphrase(): string {
  const words = [
    'Solar', 'Falcon', 'Cobalt', 'Rocket', 'Shield', 'Thunder', 'Orbit',
    'Pixel', 'Tiger', 'Vortex', 'Echo', 'Neon', 'Summit', 'Glacier',
    'Breeze', 'Anchor', 'Matrix', 'Comet', 'Titan', 'Cyber', 'Phoenix'
  ];
  const symbols = ['#', '@', '$', '!', '&', '*'];
  const w1 = words[Math.floor(Math.random() * words.length)];
  const w2 = words[Math.floor(Math.random() * words.length)];
  const w3 = words[Math.floor(Math.random() * words.length)];
  const num = Math.floor(Math.random() * 90) + 10;
  const sym = symbols[Math.floor(Math.random() * symbols.length)];

  return `${w1}-${w2}${sym}${w3}${num}`;
}
