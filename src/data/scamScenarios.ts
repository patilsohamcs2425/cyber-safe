export interface ScamScenario {
  id: string;
  appType: 'whatsapp' | 'sms' | 'instagram' | 'upi';
  senderName: string;
  senderHandleOrNumber: string;
  timestamp: string;
  messageText: string;
  attachment?: {
    type: 'link' | 'qr' | 'payment_card' | 'warning_box';
    title?: string;
    description?: string;
    amount?: string;
    url?: string;
  };
  isScam: boolean;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'Lottery' | 'Copyright' | 'UPI Refund' | 'Scholarship' | 'Job' | 'Delivery' | 'Security';
  redFlags: string[];
  explanation: string;
  studentAdvice: string;
}

export const SCAM_SCENARIOS: ScamScenario[] = [
  {
    id: 'scam-1',
    appType: 'whatsapp',
    senderName: 'KBC Lottery Dept Official',
    senderHandleOrNumber: '+92 301 8871234',
    timestamp: '11:42 AM',
    messageText: '🎉 CONGRATULATIONS! Your WhatsApp number has been selected in KBC All India SIM Card Lucky Draw 2026. You have won Cash Prize of ₹25,00,000! 🏆\n\nTo claim your cheque, contact Mr. Rana Pratap immediately on WhatsApp. Do not delay or prize will be transferred to next student!',
    attachment: {
      type: 'link',
      title: 'KBC-Winner-Claim-Portal-2026.online',
      description: 'Official Claim Form - Click here to register bank account',
      url: 'http://kbc-reward-claim.online/verify'
    },
    isScam: true,
    difficulty: 'Easy',
    category: 'Lottery',
    redFlags: [
      'Unsolicited lottery win for a contest you never registered for',
      'Foreign country code (+92) claiming to be an Indian national broadcaster',
      'Extreme urgency ("Do not delay or prize will be transferred")',
      'Unsecure HTTP link hosted on a non-official .online domain'
    ],
    explanation: 'This is the infamous KBC Lottery WhatsApp scam. Fraudsters send fake audio clips and images to trick victims into paying a "processing fee" or "GST deposit" to release the imaginary ₹25 Lakhs.',
    studentAdvice: 'Block and report the number immediately on WhatsApp. Legitimate lotteries never notify winners via random WhatsApp messages.'
  },
  {
    id: 'scam-2',
    appType: 'instagram',
    senderName: 'Instagram Copyright Helpcenter',
    senderHandleOrNumber: '@ig_copyright_support_help_desk_2026',
    timestamp: '2:15 PM',
    messageText: 'Hello User,\n\nWe have detected a copyright infringement on one of your recent posts. If you think this is a mistake, you must submit an objection feedback within 24 hours. Otherwise, your account will be permanently deactivated.\n\nForm link below:',
    attachment: {
      type: 'link',
      title: 'instagram-appeal-center-review.com/form',
      description: 'Verify Copyright Ownership and Account Credentials',
      url: 'https://instagram-appeal-center-review.com/login'
    },
    isScam: true,
    difficulty: 'Medium',
    category: 'Copyright',
    redFlags: [
      'Sent via Instagram Direct Message (Meta NEVER sends DM warnings to users)',
      'Suspicious unverified handle with multiple underscores and random words',
      'Phishing URL ("instagram-appeal-center-review.com" instead of "instagram.com")',
      'Artificial 24-hour panic deadline to induce quick, thoughtless action'
    ],
    explanation: 'Instagram notifies users of copyright issues solely via the official in-app Notification Center (under Settings → Help → Support Requests), never through informal chat DMs.',
    studentAdvice: 'Do not click the link. If you enter your username and password, attackers will instantly hijack your Instagram profile and lock you out.'
  },
  {
    id: 'scam-3',
    appType: 'upi',
    senderName: 'QuickRefund Support',
    senderHandleOrNumber: 'refund-desk@okaxis',
    timestamp: '4:05 PM',
    messageText: 'Payment Request: You have an approved refund of ₹1,499 from your canceled college fest t-shirt order. Scan and approve with your UPI PIN to credit ₹1,499 to your bank account.',
    attachment: {
      type: 'payment_card',
      title: 'UPI Collect Request',
      description: 'Requester: refund-desk@okaxis | Enter 4-digit or 6-digit PIN to authorize transaction',
      amount: '₹ 1,499.00'
    },
    isScam: true,
    difficulty: 'Easy',
    category: 'UPI Refund',
    redFlags: [
      'Asks you to enter your UPI PIN to RECEIVE money',
      'Received as a Collect Request (which pulls money from you, not gives it)',
      'Random third-party VPA handle claiming to be college fest merchandise team'
    ],
    explanation: 'A UPI PIN is an authorization signature for debiting money. You NEVER enter a PIN to receive funds. Approving this collect request would immediately withdraw ₹1,499 from your account.',
    studentAdvice: 'Decline the collect request on PhonePe/GooglePay and report the VPA handle as fraudulent.'
  },
  {
    id: 'scam-4',
    appType: 'sms',
    senderName: 'GOV-SCHOLAR',
    senderHandleOrNumber: 'VK-SCHOLAR',
    timestamp: '9:30 AM',
    messageText: 'PM Youth Digital Scheme 2026: All 11th & 12th standard students are eligible for a FREE laptop and ₹10,000 monthly stipend. Complete verification with your Aadhaar and bank details before registration closes at 5 PM today at https://pmyouth-free-laptop.in/apply',
    attachment: {
      type: 'link',
      title: 'pmyouth-free-laptop.in/apply',
      description: 'National Student Free Laptop & Stipend Distribution 2026',
      url: 'https://pmyouth-free-laptop.in/apply'
    },
    isScam: true,
    difficulty: 'Medium',
    category: 'Scholarship',
    redFlags: [
      'Non-government domain (".in" rather than the mandated ".gov.in" or ".nic.in")',
      'Artificial countdown urgency ("registration closes at 5 PM today")',
      'Sensational promises of "FREE laptop" meant to entice students',
      'Direct SMS link without any official press release on PIB or school circular'
    ],
    explanation: 'Government schemes in India are officially announced on portals ending in .gov.in or .nic.in and verified via PIB Fact Check. Fake domains steal Aadhaar, family details, and OTPs.',
    studentAdvice: 'Cross-check any scholarship announcement on scholarships.gov.in (National Scholarship Portal) or ask your school computer teacher.'
  },
  {
    id: 'scam-5',
    appType: 'sms',
    senderName: 'Google Security',
    senderHandleOrNumber: 'BW-GOOGLE',
    timestamp: '1:12 PM',
    messageText: 'G-748921 is your Google verification code. Do not share this code with anyone. Google employees will never call or ask for this code.',
    isScam: false,
    difficulty: 'Hard',
    category: 'Security',
    redFlags: [],
    explanation: 'This is a genuine, legitimate two-factor authentication SMS sent by Google when you or someone attempts to log into your account. Notice it clearly reminds you: "Do not share this code with anyone".',
    studentAdvice: 'This SMS is safe and legitimate. However, if you did NOT just try to log in, someone might be attempting to access your account! Check your Google account security page immediately and never share this code.'
  },
  {
    id: 'scam-6',
    appType: 'whatsapp',
    senderName: 'Apex Media HR Recruiter',
    senderHandleOrNumber: '+91 98765 43210',
    timestamp: '5:45 PM',
    messageText: 'Hi! We noticed your profile on student job board. We have a simple part-time online task: Subscribe to 3 YouTube channels and get ₹150 instantly on UPI! Work 1 hour daily and make ₹2,000-₹4,000.\n\nJoin our Telegram task group: t.me/ApexVIPStudents',
    attachment: {
      type: 'link',
      title: 't.me/ApexVIPStudents',
      description: 'Telegram Student VIP Task Group - 4,200 members',
      url: 'https://t.me/ApexVIPStudents'
    },
    isScam: true,
    difficulty: 'Medium',
    category: 'Job',
    redFlags: [
      'Unsolicited job offer with no interview, resume, or qualifications asked',
      'Ridiculously high pay (₹4,000/day) for low-skill tasks like YouTube likes',
      'Redirecting communication to an anonymous Telegram channel',
      'Classic setup for the "prepaid task / investment" scam trap'
    ],
    explanation: 'This is the prevalent Telegram Task Scam. They may initially pay you ₹100 to build trust, then demand ₹2,000 to unlock higher "VIP earning tiers" and disappear with all deposited funds.',
    studentAdvice: 'Block the sender. Legitimate corporate HR departments never hire via WhatsApp messages pushing anonymous Telegram links.'
  },
  {
    id: 'scam-7',
    appType: 'sms',
    senderName: 'IndiaPost Express',
    senderHandleOrNumber: '+91 83291 00219',
    timestamp: '7:20 PM',
    messageText: 'India Post: Your package #IN78291 cannot be delivered due to an incorrect house address number. Please update your address within 12 hours at https://indiapost-package-update.xyz/reschedule or parcel will be returned to sender.',
    attachment: {
      type: 'link',
      title: 'indiapost-package-update.xyz/reschedule',
      description: 'Address Update & Redelivery Fee: ₹5.00',
      url: 'https://indiapost-package-update.xyz/reschedule'
    },
    isScam: true,
    difficulty: 'Easy',
    category: 'Delivery',
    redFlags: [
      'Sent from an ordinary 10-digit private mobile number instead of an official sender ID like "IP-POST"',
      'Fake domain "indiapost-package-update.xyz" instead of official "indiapost.gov.in"',
      'Asking for a trivial "₹5 redelivery fee" designed to capture your debit card details and CVV',
      'Short 12-hour ultimatum to induce panic'
    ],
    explanation: 'Scammers mass-blast these SMS alerts. When victims try to pay the ₹5 fee on the fake webpage, the website silently logs their credit/debit card numbers and attempts an unauthorized transfer.',
    studentAdvice: 'Track your speed post only on the official indiapost.gov.in website using your tracking consignment number.'
  },
  {
    id: 'scam-8',
    appType: 'sms',
    senderName: 'HDFC Bank Alert',
    senderHandleOrNumber: 'VM-HDFCBK',
    timestamp: '10:02 AM',
    messageText: 'Dear Customer, ₹250.00 has been debited from your A/c ending in XX8124 on 06-SEP-26 towards UPI txn to Canteen Food Court (UPI Ref: 489201928412). If not done by you, call 18002583838 or SMS BLOCK to 5676712.',
    isScam: false,
    difficulty: 'Hard',
    category: 'Security',
    redFlags: [],
    explanation: 'This is a genuine, standard bank transaction notification. It comes from a registered bank header (VM-HDFCBK), masks the account number (XX8124), provides official customer care numbers, and does not contain suspicious shortened links.',
    studentAdvice: 'This is a SAFE message. Always review genuine bank alerts to ensure you recognize every transaction charged to your account.'
  },
  {
    id: 'scam-9',
    appType: 'instagram',
    senderName: 'IIT Bombay TechFest Promo',
    senderHandleOrNumber: '@techfest_free_vip_passes',
    timestamp: '6:10 PM',
    messageText: '🎉 Hey Tech Enthusiast! You\'ve been randomly selected to receive a FREE VIP Delegate Pass (worth ₹3,500) for TechFest 2026! 🚀 Click below to claim and enter your Instagram password to connect your pass.',
    attachment: {
      type: 'link',
      title: 'techfest-student-pass-2026.club',
      description: 'Login with Instagram to Claim VIP All-Access Pass',
      url: 'http://techfest-student-pass-2026.club/claim'
    },
    isScam: true,
    difficulty: 'Medium',
    category: 'Scholarship',
    redFlags: [
      'Unverified fan page impersonating a prestigious college technical fest',
      'Asks for your "Instagram password" to claim a ticket (credentials harvesting)',
      'Free VIP pass worth ₹3,500 given to random stranger for zero reason',
      'Non-official URL (.club extension instead of official .org or iitb domain)'
    ],
    explanation: 'College festival impersonation traps are widely used to phish student Instagram credentials. Once stolen, the hacked account is used to DM friends asking for emergency UPI money.',
    studentAdvice: 'Never enter your social media password on third-party event portals. Legitimate events use registered ticketing partners like BookMyShow or their official .org websites.'
  },
  {
    id: 'scam-10',
    appType: 'whatsapp',
    senderName: 'Airtel Support Desk',
    senderHandleOrNumber: '+91 70012 34567',
    timestamp: '8:45 AM',
    messageText: 'URGENT NOTICE: Your 5G SIM card service will be disconnected in 24 hours because biometric KYC is pending. To update KYC from home, dial *401*9823456789# on your phone dialer immediately.',
    attachment: {
      type: 'warning_box',
      title: 'Dial Code: *401*9823456789#',
      description: 'Mandatory Telecom Regulatory Compliance'
    },
    isScam: true,
    difficulty: 'Hard',
    category: 'Security',
    redFlags: [
      'Instructs you to dial a specific code starting with *401*',
      'Threatens SIM deactivation within 24 hours',
      'Sent from an ordinary individual personal WhatsApp number',
      'Telecom operators conduct KYC only at authorized franchise stores or official apps'
    ],
    explanation: 'Dialing *401* followed by a mobile number is the universal USSD code for Call Forwarding! If dialed, all incoming voice calls and OTP voice verification calls are forwarded to the scammer\'s phone, allowing them to breach WhatsApp and bank accounts.',
    studentAdvice: 'Never dial USSD codes provided by unknown callers or messages. Visit an authorized telecom store for any real SIM card queries.'
  }
];
