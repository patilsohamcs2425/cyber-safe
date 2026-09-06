export interface SurveyQuestion {
  id: string;
  question: string;
  type: 'single' | 'scale' | 'yes_no';
  options?: string[];
  category: string;
}

export const PRE_SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 'pre-1',
    question: 'How would you rate your current overall confidence in identifying online scams?',
    type: 'scale',
    category: 'General Confidence'
  },
  {
    id: 'pre-2',
    question: 'Do you know when you are required to enter your UPI PIN on payment apps?',
    type: 'single',
    options: [
      'Only when sending money or checking balance',
      'Both when sending and receiving money',
      'Whenever prompted by a QR code',
      'I am not sure'
    ],
    category: 'UPI Awareness'
  },
  {
    id: 'pre-3',
    question: 'Do you currently use Two-Factor Authentication (2FA) on your social media and email accounts?',
    type: 'yes_no',
    options: ['Yes, on most accounts', 'Only on one account', 'No, never set it up', 'I don\'t know what 2FA is'],
    category: 'Account Security'
  },
  {
    id: 'pre-4',
    question: 'Do you reuse the same password or slight variations across multiple websites?',
    type: 'single',
    options: [
      'Yes, I use the same password everywhere',
      'I use 2 or 3 common variations',
      'No, I use unique passwords for important accounts',
      'I use a password manager'
    ],
    category: 'Password Hygiene'
  },
  {
    id: 'pre-5',
    question: 'If you or a friend were defrauded of ₹5,000 online today, do you know the official government helpline number to call?',
    type: 'yes_no',
    options: ['Yes, I know the exact number', 'No, I have no idea', 'I would only report to my local police station'],
    category: 'Emergency Response'
  },
  {
    id: 'pre-6',
    question: 'Have you ever received an unsolicited WhatsApp/SMS message offering a part-time job or cash prize?',
    type: 'single',
    options: [
      'Yes, multiple times every month',
      'Yes, once or twice',
      'No, never received one'
    ],
    category: 'Threat Exposure'
  }
];

export const POST_SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 'post-1',
    question: 'After exploring CyberSafe Community, how would you rate your confidence in spotting online scams now?',
    type: 'scale',
    category: 'Learning Impact'
  },
  {
    id: 'post-2',
    question: 'Do you now remember the Golden Rule of UPI transactions?',
    type: 'single',
    options: [
      'Yes: UPI PIN is ONLY entered to SEND money, never to receive',
      'No, still confused',
      'I need more practice'
    ],
    category: 'UPI Knowledge Retention'
  },
  {
    id: 'post-3',
    question: 'Will you enable Two-Factor Authentication (2FA) on your Google and Instagram accounts after today?',
    type: 'yes_no',
    options: ['Yes, doing it right away', 'Already enabled it', 'Maybe later', 'No'],
    category: 'Behavioral Change'
  },
  {
    id: 'post-4',
    question: 'What is the official National Cyber Crime Reporting helpline number in India?',
    type: 'single',
    options: ['1930', '100', '1098', '112'],
    category: 'Knowledge Verification'
  },
  {
    id: 'post-5',
    question: 'Did the Spot-The-Scam mobile simulator help you recognize real-world red flags?',
    type: 'single',
    options: [
      'Extremely helpful — feels like real WhatsApp & Instagram messages',
      'Moderately helpful',
      'Neutral / No difference'
    ],
    category: 'Platform Effectiveness'
  },
  {
    id: 'post-6',
    question: 'Would you recommend CyberSafe Community to your school/college classmates?',
    type: 'single',
    options: [
      'Absolutely yes — every student needs this awareness',
      'Yes, to some friends',
      'No'
    ],
    category: 'Community Engagement'
  }
];
