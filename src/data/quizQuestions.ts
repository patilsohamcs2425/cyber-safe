export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  category: 'UPI & Payments' | 'Passwords' | 'Social & Privacy' | 'Phishing' | 'Emergency & Laws';
  explanation: string;
  tip: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'When is it required to enter your 4-digit or 6-digit UPI PIN?',
    options: [
      'Only when you are SENDING money or checking your bank balance',
      'Both when sending AND receiving money from friends',
      'Whenever someone scans your personal QR code',
      'To accept cash prizes or lottery winnings into your account'
    ],
    correctIndex: 0,
    category: 'UPI & Payments',
    explanation: 'UPI PIN is strictly an authorization code for sending money out of your account or checking your balance. You NEVER need to enter your PIN to receive money.',
    tip: 'Rule of thumb: Receiving money requires zero input from you!'
  },
  {
    id: 'q2',
    question: 'What is the official National Cyber Crime Helpline number in India for immediate reporting of financial fraud?',
    options: [
      '100',
      '1930',
      '1098',
      '1800'
    ],
    correctIndex: 1,
    category: 'Emergency & Laws',
    explanation: '1930 is the dedicated national cyber financial fraud helpline operated by the Ministry of Home Affairs (earlier 155260). Reporting within the first "golden hour" helps police freeze fraudulent transfers before scammers withdraw the cash.',
    tip: 'Save 1930 to your phone contacts today.'
  },
  {
    id: 'q3',
    question: 'Which of the following creates the most secure, crack-resistant password?',
    options: [
      'Your birth year and pet\'s name (e.g. Bruno@2008)',
      'A 6-letter complex password like "P@$$w!"',
      'A long 4-word passphrase like "Cobalt-Falcon-Orbit-72#"',
      'Your school roll number backwards'
    ],
    correctIndex: 2,
    category: 'Passwords',
    explanation: 'Length beats complexity every time! A long passphrase of 16+ characters combining random unrelated words with numbers and symbols takes supercomputers centuries to crack, while being easy for humans to visualize.',
    tip: 'Think of a short story instead of a single scrambled word.'
  },
  {
    id: 'q4',
    question: 'You receive a text claiming your courier is stuck and asking for a ₹5 update fee via a link. What is the real danger?',
    options: [
      'You will lose ₹5 only',
      'The payment gateway page is fake and will capture your full card number, expiry date, CVV, and OTP',
      'The delivery boy will get angry',
      'Your phone battery will drain faster'
    ],
    correctIndex: 1,
    category: 'Phishing',
    explanation: 'The tiny ₹5 fee is a psychological trap to lower your guard. The fake webpage records your card details and triggers a massive unauthorized transaction using the OTP you type.',
    tip: 'Never click delivery links sent from random 10-digit mobile numbers.'
  },
  {
    id: 'q5',
    question: 'A tech support caller asks you to install "AnyDesk" or "TeamViewer" on your phone to resolve an issue. What does this app do?',
    options: [
      'Cleans viruses from your phone memory',
      'Grants the caller full remote control to see your phone screen and steal OTPs live',
      'Boosts your 5G network speed',
      'Verifies your student ID'
    ],
    correctIndex: 1,
    category: 'UPI & Payments',
    explanation: 'AnyDesk and TeamViewer are remote screen-sharing tools. Installing them allows scammers to watch you receive bank OTPs and control your smartphone remotely.',
    tip: 'Never install remote-sharing tools on instructions from an unknown caller.'
  },
  {
    id: 'q6',
    question: 'Why should 11th & 12th standard students avoid posting photos of their CBSE / State Board Exam Hall Tickets on social media?',
    options: [
      'It violates the photography copyright of the printing press',
      'It displays sensitive PII (Full Name, Date of Birth, Roll Number, Exam Center, School Code) used in identity theft',
      'Instagram automatically deletes study-related pictures',
      'It makes exam questions harder'
    ],
    correctIndex: 1,
    category: 'Social & Privacy',
    explanation: 'Admit cards contain comprehensive Personally Identifiable Information (PII) that criminals use to bypass portal security, reset accounts, or target your parents with emergency ransom scams.',
    tip: 'If sharing exam milestones, blur or black out every single number and personal identifier.'
  },
  {
    id: 'q7',
    question: 'You find an online student internship that promises ₹15,000/month, but asks you to transfer a ₹500 "registration and ID card fee" first. What is your best decision?',
    options: [
      'Pay ₹500 immediately because ₹15,000 is a great return',
      'Reject it and report the listing — legitimate internships NEVER charge students money to work',
      'Ask if you can pay ₹250 now and ₹250 later',
      'Borrow money from a classmate to pay the fee'
    ],
    correctIndex: 1,
    category: 'Phishing',
    explanation: 'No genuine company or university asks an applicant to pay an onboarding fee, laptop deposit, or processing charge. Any upfront fee request is a 100% scam.',
    tip: 'Real jobs pay you; you never pay them!'
  },
  {
    id: 'q8',
    question: 'What is the primary security risk of doing online banking on open, free public Wi-Fi at a railway station or cafe?',
    options: [
      'The Wi-Fi speed will slow down your browser',
      'Attackers on the same network can intercept unencrypted data using Man-In-The-Middle (MITM) tools',
      'Your phone will automatically send spam emails',
      'The cafe owner will receive your bank account statement'
    ],
    correctIndex: 1,
    category: 'Emergency & Laws',
    explanation: 'Public open Wi-Fi lacks network isolation. Anyone on the same network running packet sniffers can attempt session hijacking or spoof fake login pages to steal credentials.',
    tip: 'Always switch to cellular 4G/5G mobile data when performing banking or exam transactions.'
  },
  {
    id: 'q9',
    question: 'What is "Two-Factor Authentication" (2FA) and why is it recommended?',
    options: [
      'Typing your password twice to make sure you didn\'t make a typo',
      'Having two different accounts on Instagram',
      'Requiring a second verification proof (like an authenticator code or biometric) even if someone knows your password',
      'Using both Wi-Fi and mobile data simultaneously'
    ],
    correctIndex: 2,
    category: 'Passwords',
    explanation: '2FA means "Something you know (password) + Something you have (phone/security key)". Even if a data breach exposes your password, the hacker cannot log in without your physical device.',
    tip: 'Enable 2FA on Google, Instagram, WhatsApp, and gaming accounts.'
  },
  {
    id: 'q10',
    question: 'Someone calls claiming your SIM card is blocked and instructs you to dial "*401*98xxxxxxxx#". What will happen if you dial this?',
    options: [
      'Your 5G data will be recharged for free',
      'Unconditional Call Forwarding will be activated, routing all your incoming calls and voice OTPs to the scammer\'s phone',
      'Your smartphone will factory reset',
      'The telecom company customer care will connect'
    ],
    correctIndex: 1,
    category: 'UPI & Payments',
    explanation: '*401* is the universal USSD code for Call Forwarding. Once activated, when banks call you to verify high-value transfers or send voice OTPs, the call goes straight to the criminal.',
    tip: 'Never dial USSD star-hash codes provided by unknown callers.'
  },
  {
    id: 'q11',
    question: 'When submitting a photo of your Aadhaar card for tuition classes or gym registration, what is the safest practice?',
    options: [
      'Provide your original physical Aadhaar card to them permanently',
      'Download and share a "Masked Aadhaar" from UIDAI, where the first 8 digits are hidden and only the last 4 are visible',
      'Post it publicly on Google Drive',
      'Laminate it with gold foil'
    ],
    correctIndex: 1,
    category: 'Social & Privacy',
    explanation: 'UIDAI provides official "Masked Aadhaar" copies. It is legally valid for identity verification while preventing misuse of your full 12-digit Aadhaar number for fraudulent SIM registration or financial fraud.',
    tip: 'Download Masked Aadhaar anytime from the official uidai.gov.in portal.'
  },
  {
    id: 'q12',
    question: 'What is the official Indian portal for reporting cyber crimes, online abuse, and financial fraud?',
    options: [
      'cybercrime.gov.in',
      'police-online-report.org',
      'cyber-safety-india.net',
      'reportcrime.co.in'
    ],
    correctIndex: 0,
    category: 'Emergency & Laws',
    explanation: 'cybercrime.gov.in is the Government of India\'s official National Cyber Crime Reporting Portal operated under the Indian Cyber Crime Coordination Centre (I4C).',
    tip: 'Look for the .gov.in domain to ensure you are on the legitimate government portal.'
  }
];
