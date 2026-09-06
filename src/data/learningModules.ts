export interface LearningModule {
  id: string;
  slug: string;
  title: string;
  category: 'Scam Detection' | 'Payments' | 'Credentials' | 'Social' | 'Privacy' | 'Network';
  tagline: string;
  readTime: string;
  badgeText: string;
  summary: string;
  fullExplanation: string[];
  redFlags: string[];
  staySafeRules: string[];
  realLifeCase: {
    studentName: string;
    scenario: string;
    whatHappened: string;
    lesson: string;
  };
  miniChallenge: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: 'mod-1',
    slug: 'phishing',
    title: 'Phishing Attacks & Fake Links',
    category: 'Scam Detection',
    tagline: 'Don\'t take the bait: Spot fake links, deceptive emails & spoofed websites.',
    readTime: '4 min read',
    badgeText: 'Essential Defense',
    summary: 'Phishing is a social engineering attack where fraudsters pose as trusted institutions (banks, colleges, Instagram, Netflix) to trick you into revealing passwords, credit cards, or personal secrets.',
    fullExplanation: [
      'Phishing relies on human emotions: urgency, fear, greed, or curiosity. Attackers send links that lead to websites that look 99% identical to the real ones.',
      'Smishing (SMS Phishing) arrives as urgent text alerts like "Your bank account is blocked, update PAN now" with a tiny shortened URL.',
      'Spear Phishing is tailored directly to you: they know your school name, your class, or your friends, making the message appear completely authentic.',
      'Always inspect the exact address in the browser bar. For example, "instagram-verify-security.com" is NOT "instagram.com".'
    ],
    redFlags: [
      'Extreme urgency ("Account suspended in 2 hours", "Act now or lose your scholarship")',
      'Mismatched domain names (e.g. sbi-secure-portal.xyz instead of onlinesbi.sbi)',
      'Generic greetings ("Dear Customer" or "Dear Student" instead of your actual name)',
      'Unsolicited attachments (.apk, .zip, .exe, or .scr files sent over message)',
      'Requests to verify confidential credentials like passwords or UPI PINs'
    ],
    staySafeRules: [
      'Never tap links sent via SMS, WhatsApp, or Instagram DMs claiming account issues.',
      'Open the official app directly from your phone\'s home screen or type the official URL yourself.',
      'Hover over or long-press links to preview the true destination URL before opening.',
      'Enable Multi-Factor Authentication (MFA) on all accounts so a stolen password alone is useless.'
    ],
    realLifeCase: {
      studentName: 'Aarav, Class 12',
      scenario: 'Received an SMS saying his college entrance admit card was withheld due to missing documents, with a link to "edu-nta-portal.cc".',
      whatHappened: 'He entered his roll number and email password on the page. Within minutes, his Google account was breached and used to spam contacts.',
      lesson: 'Admit cards are hosted only on official government domains (.gov.in / .nic.in). Always verify through the official website directly.'
    },
    miniChallenge: {
      question: 'You receive a text: "ALERT: Your Instagram account has copyright violations! Verify here within 24 hours or your account will be permanently deleted: bit.ly/ig-verify-99". What is the safest response?',
      options: [
        'Click the link quickly to see which photo caused the copyright issue',
        'Ignore the link and check "Account Status" directly inside the official Instagram App settings',
        'Reply to the text asking for proof of the copyright infringement',
        'Forward the link to your class group to ask if anyone else got it'
      ],
      correctIndex: 1,
      explanation: 'Instagram never sends copyright warnings via SMS or random bit.ly links. Official notices appear directly inside the app under Settings → Help → Support Requests.'
    }
  },
  {
    id: 'mod-2',
    slug: 'upi-payment-scams',
    title: 'UPI & Payment Gateway Frauds',
    category: 'Payments',
    tagline: 'The Golden Rule: You NEVER enter your UPI PIN to receive money.',
    readTime: '5 min read',
    badgeText: 'High Priority',
    summary: 'India’s UPI ecosystem is fast and convenient, but cybercriminals manipulate students through fake QR codes, "request money" traps, OLX buyer tricks, and remote screen-sharing applications.',
    fullExplanation: [
      'A UPI PIN is like your ATM PIN — it authorizes money to LEAVE your bank account. It is NEVER required to credit money into your account.',
      'Scammers listing items on OLX or student second-hand book marketplaces send a QR code saying "Scan this to receive your advance payment". Scanning and entering your PIN immediately deducts money from your account!',
      'Fake Customer Care: Scammers post fake helpline numbers on Google Maps for Swiggy, Zomato, Amazon, or banks. When you call, they ask you to install AnyDesk or TeamViewer.',
      'Screen Sharing trap: Installing remote access apps allows the criminal to view your screen in real time, capturing your OTP and bank notifications.'
    ],
    redFlags: [
      'Anyone asking you to scan a QR code or enter your UPI PIN to "receive a cash prize or refund"',
      'Receiving a UPI "Collect Request" notification from an unknown VPA asking for approval',
      'A caller asking you to download apps like AnyDesk, QuickSupport, RustDesk, or TeamViewer',
      'Offers to pay you 3x the price for an old textbook or gadget without even bargaining'
    ],
    staySafeRules: [
      'Memorize this forever: UPI PIN is ONLY entered to SEND money or check your balance.',
      'Never download any remote-control app on the instructions of a phone caller.',
      'Reject unknown UPI collect requests on PhonePe, Google Pay, or Paytm immediately.',
      'If scammed, call 1930 (National Cyber Crime Helpline) within the golden hour to freeze the transfer.'
    ],
    realLifeCase: {
      studentName: 'Riya, Class 11',
      scenario: 'Sold her old ICSE reference books for ₹800 on an online classifieds board. The buyer sent a QR code on WhatsApp with the caption "Scan to receive ₹800".',
      whatHappened: 'She scanned it and typed her UPI PIN. Instead of receiving ₹800, ₹800 was immediately debited from her savings account.',
      lesson: 'Receiving money on UPI requires zero action from the receiver — only sharing your mobile number or UPI ID (VPA). Never scan a QR code to get paid.'
    },
    miniChallenge: {
      question: 'Someone calls claiming your bank KYC is expired and asks you to install "QuickSupport" from Play Store so they can guide you. What should you do?',
      options: [
        'Install it because it is an official app on the Google Play Store',
        'Refuse immediately, hang up, and block the caller — QuickSupport allows them to view your screen and steal OTPs',
        'Install it, but turn off Wi-Fi after installation',
        'Give them your mother\'s phone number instead'
      ],
      correctIndex: 1,
      explanation: 'QuickSupport and AnyDesk are legitimate remote control tools used by scammers to see your screen live. Banks never ask customers to install screen-sharing software.'
    }
  },
  {
    id: 'mod-3',
    slug: 'password-safety',
    title: 'Password Security & Multi-Factor Auth',
    category: 'Credentials',
    tagline: 'Turn your passwords into uncrackable digital vaults with passphrases and 2FA.',
    readTime: '3 min read',
    badgeText: 'Fundamental',
    summary: 'A strong password is your first line of defense. Weak, reused passwords across school portals, gaming accounts, and social media allow hackers to compromise all your accounts in one single breach.',
    fullExplanation: [
      'Credential Stuffing: When an insecure website leaks your email and password, hackers use automated bots to test that exact same password on Instagram, Discord, Gmail, and Steam.',
      'Length beats complexity: A long passphrase like "Mango-Dancing-Rain#42" is vastly stronger and far easier to remember than "P@$$w0rd!".',
      'Multi-Factor Authentication (MFA/2FA) adds a second lock. Even if an attacker guesses your password, they cannot enter without the authenticator code on your phone.',
      'Never store passwords in notes apps, screenshots, or chat messages to yourself.'
    ],
    redFlags: [
      'Using your birth year, school name, pet name, or phone number in your password',
      'Reusing the exact same password for your primary email as other random websites',
      'Ignoring "Data Breach Alert" warnings from your browser or Google Security Checkup',
      'Leaving accounts logged in on cyber cafes or school library computers'
    ],
    staySafeRules: [
      'Use passphrases of 12+ characters made of 3 to 4 random words plus numbers and symbols.',
      'Never reuse passwords across critical accounts (Email, Bank, Social Media).',
      'Enable 2-Step Verification on Google, Instagram, WhatsApp, and Discord.',
      'Use a reputable password manager or browser-integrated vault to generate unique keys.'
    ],
    realLifeCase: {
      studentName: 'Kabir, Class 12',
      scenario: 'Used the password "Kabir@2007" for a free anime streaming website and his primary Gmail account.',
      whatHappened: 'The streaming site was hacked. The attacker used Kabir\'s leaked password to log into his Gmail and reset his Instagram and Epic Games credentials.',
      lesson: 'Never recycle passwords. Use distinct passwords for entertainment sites and primary email accounts.'
    },
    miniChallenge: {
      question: 'Which of the following passwords would take the longest time for a hacker\'s supercomputer to crack via brute force?',
      options: [
        'Rohan12345',
        'P@ssw0rd!',
        'Blue-Falcon-Orbit#98',
        'qwertyUIOP@2024'
      ],
      correctIndex: 2,
      explanation: 'Length is the most powerful factor against brute-force attacks. "Blue-Falcon-Orbit#98" has 20 characters with high entropy, taking centuries to crack, while common variations like "P@ssw0rd!" exist in dictionary attack wordlists.'
    }
  },
  {
    id: 'mod-4',
    slug: 'social-media-safety',
    title: 'Social Media & Digital Footprint',
    category: 'Social',
    tagline: 'What you post online stays forever. Guard your private life from strangers.',
    readTime: '4 min read',
    badgeText: 'Student Essential',
    summary: 'Social media platforms like Instagram, Snapchat, and Discord are vibrant spaces for friends, but public profiles and careless oversharing expose students to stalkers, impersonators, and identity theft.',
    fullExplanation: [
      'Digital Footprint: Every photo, comment, story, and geotag creates a permanent digital trail that college admission officers, future employers, and potential bad actors can find.',
      'Geotagging risks: Posting stories while still at a cafe, coaching institute, or school grounds reveals your exact physical routine in real time.',
      'School uniforms & ID cards: Photos showing your school badge, roll number, bus route, or home address give strangers enough data to impersonate school authorities or family friends.',
      'Unknown follower requests: Stalkers create fake aesthetic profiles with stolen photos to follow private accounts and monitor daily stories.'
    ],
    redFlags: [
      'Accounts requesting to follow you with zero mutual friends, low posts, and high followings',
      'People asking for your WhatsApp number or Snapchat shortly after meeting in an online game or comment section',
      'Quizzes and sticker templates on stories asking for "Your mother\'s maiden name", "First pet", or "Birth city" (these are common security recovery questions!)',
      'Direct messages offering free gift cards or crypto investments'
    ],
    staySafeRules: [
      'Keep your personal social media accounts set to "Private".',
      'Regularly audit your follower list and remove people you do not personally know in real life.',
      'Never post photos displaying your school ID card, exam hall ticket, passport, or home address.',
      'Delay posting vacation photos or hangout check-ins until after you have left the venue.'
    ],
    realLifeCase: {
      studentName: 'Sneha, Class 11',
      scenario: 'Posted a photo celebrating her exam results holding her CBSE Board Admit Card with roll number, school code, and date of birth clearly visible.',
      whatHappened: 'A troll downloaded the photo and attempted to change her portal credentials and harass her on other platforms using her DOB and parent details.',
      lesson: 'Admit cards and certificates contain sensitive PII (Personally Identifiable Information). Blur or crop sensitive numbers before posting.'
    },
    miniChallenge: {
      question: 'You are hanging out at a popular cafe with school friends on a Saturday. What is the safest social media habit?',
      options: [
        'Tag the live location immediately and tag every friend\'s handle with your current table number',
        'Take photos and post them later after you have returned home safely',
        'Add the cafe location and mention your school name in the caption',
        'Broadcast a live video telling everyone how long you will be sitting there'
      ],
      correctIndex: 1,
      explanation: 'Posting after you leave prevents real-time physical tracking and protects the privacy and physical security of both you and your friends.'
    }
  },
  {
    id: 'mod-5',
    slug: 'privacy-protection',
    title: 'Personal Privacy & Data Protection',
    category: 'Privacy',
    tagline: 'Your personal data is your currency. Protect your phone number, Aadhaar & school info.',
    readTime: '4 min read',
    badgeText: 'Data Rights',
    summary: 'Personally Identifiable Information (PII) like your Aadhaar number, phone number, date of birth, and home address can be used to open fraudulent accounts, take out micro-loans, or launch targeted scams.',
    fullExplanation: [
      'Data Brokers and Leaks: Random discount forms at shopping malls, sketchy mobile apps, and unverified quiz websites collect your phone number and sell it to telemarketing and scam syndicates.',
      'App Permissions: A calculator or flashlight app does not need access to your Contacts, Microphone, Camera, or Storage. Always check permissions before tapping "Allow".',
      'Aadhaar Masking: Whenever submitting an Aadhaar copy for coaching or school activities, use a "Masked Aadhaar" (downloadable from UIDAI) where only the last 4 digits are visible.',
      'Two-SIM hygiene: Consider using a secondary email and number for public signups, reserving your private number strictly for banking and family.'
    ],
    redFlags: [
      'Apps demanding permission to read SMS and Contacts when their functionality does not need them',
      'Websites demanding full Aadhaar or PAN card uploads for casual contests or giveaways',
      'Unknown calls asking you to confirm your date of birth or father\'s name',
      'Shopping kiosks demanding your mobile number before generating a cash billing slip (you are legally not required to provide it!)'
    ],
    staySafeRules: [
      'Audit your phone permissions: Settings → Privacy → Permission Manager.',
      'Use Masked Aadhaar instead of regular Aadhaar copies whenever possible.',
      'Never share photos of debit cards, cheques, or government IDs over unencrypted chats.',
      'Read app review sections before installing new trending games or editing apps.'
    ],
    realLifeCase: {
      studentName: 'Dev, Class 12',
      scenario: 'Downloaded a free photo editing app that requested permission to access his Contacts, Phone State, and SMS messages.',
      whatHappened: 'The app uploaded his contacts to an offshore server. Weeks later, all his family members received automated scam messages referencing Dev\'s name.',
      lesson: 'Never grant SMS or Contacts permissions to casual utilities and photo editing tools.'
    },
    miniChallenge: {
      question: 'A cashier at a clothing store insists they cannot print your bill unless you tell them your 10-digit mobile number. What is the correct awareness response?',
      options: [
        'Give them your phone number and OTP',
        'Politely state that under consumer guidelines, sharing a mobile number is optional for generating a retail cash receipt',
        'Shout at the cashier and leave your clothes behind',
        'Give your friend\'s number instead'
      ],
      correctIndex: 1,
      explanation: 'Retailers cannot compel customers to provide phone numbers for cash billing. Giving numbers leads to spam databases and promotional tracking.'
    }
  },
  {
    id: 'mod-6',
    slug: 'fake-profiles-identity',
    title: 'Fake Profiles & Online Impersonation',
    category: 'Social',
    tagline: 'Spot catfishing, deepfake audio, and scammers posing as your teachers or friends.',
    readTime: '4 min read',
    badgeText: 'Awareness',
    summary: 'With AI tools and photo scraping, anyone can create an identical clone of your social profile or pretend to be your school friend or teacher in emergency distress.',
    fullExplanation: [
      'Account Cloning: An attacker copies your friend\'s profile picture, bio, and name, creates a new account (e.g., adding an extra underscore), and messages you saying: "Hey, my old account was locked, can you send me ₹500 via UPI urgently?"',
      'Catfishing: Developing a fake romantic or friendly relationship online over months using stolen model photographs to eventually extort money, gifts, or private photos.',
      'Deepfake Voice Scams: AI voice synthesis can replicate someone\'s voice with just a 10-second audio clip from an Instagram reel. Scammers call parents pretending to be their child in trouble.',
      'Verification test: Whenever someone asks for money or favors, always call them on their known phone number or speak face-to-face.'
    ],
    redFlags: [
      'A "friend" reaching out from a new account asking for money, gift cards, or login codes',
      'Someone refusing to join a live video call or making excuses like "my camera is broken"',
      'Accounts with recently created timestamps and sudden follower spikes',
      'Panic and urgency in messages ("I am stuck at the police station/hospital, don\'t tell my parents, send money now")'
    ],
    staySafeRules: [
      'Never send money based on a direct message, even if the profile picture looks like someone you know.',
      'Verify through an alternate channel: call their verified phone number directly.',
      'Reverse image search profile photos if an account looks suspicious.',
      'Establish a secret family "safe word" with parents to verify real emergencies.'
    ],
    realLifeCase: {
      studentName: 'Tanya, Class 11',
      scenario: 'Received an Instagram DM from an account named "@ananya_sharma__" (her best friend\'s name) saying she was stranded without bus fare and needed ₹400 on UPI.',
      whatHappened: 'Tanya called Ananya directly on voice call. Ananya was at home studying and had no idea about the fake account.',
      lesson: 'Always verify through a voice or video call before transferring money or acting on urgent requests.'
    },
    miniChallenge: {
      question: 'Your classmate\'s account sends you an urgent DM: "Bro my Paytm is stuck, please transfer ₹1,000 to this UPI ID, I will repay you tomorrow at school". What should you do first?',
      options: [
        'Send the ₹1,000 right away because they are your classmate',
        'Ask them to send their password first',
        'Call your classmate on their regular mobile phone number to confirm if they actually sent that message',
        'Send ₹500 just to be safe'
      ],
      correctIndex: 2,
      explanation: 'Account takeover and cloned accounts are common. A quick voice call on their established number takes 30 seconds and protects you from imposter fraud.'
    }
  },
  {
    id: 'mod-7',
    slug: 'cyberbullying',
    title: 'Cyberbullying, Trolling & Digital Well-being',
    category: 'Social',
    tagline: 'Stand against online harassment. Know your legal protections and support channels.',
    readTime: '4 min read',
    badgeText: 'Support & Care',
    summary: 'Cyberbullying includes sending cruel messages, creating hate pages, spreading unauthorized memes, doxxing, or excluding peers in group chats. It is harmful and in many cases illegal under Indian cyber law.',
    fullExplanation: [
      'Cyberbullying can happen on WhatsApp groups, Instagram comments, Discord servers, or anonymous message apps like NGL.',
      'Doxxing: Publishing someone\'s private information (phone number, home address, school records) online with malicious intent to encourage harassment.',
      'The Bystander Effect: Liking or forwarding hurtful memes or humiliating photos makes you complicit in the harassment. Don\'t be a silent bystander.',
      'Legal Protection: Under the Information Technology Act, 2000 (Section 66C, 66E, 67) and IPC/BNS, online harassment, non-consensual image sharing, and cyberstalking are punishable offenses.'
    ],
    redFlags: [
      'Creation of anonymous confession pages or roasting accounts targeting classmates',
      'Pressuring peers to share intimate photos or webcam footage',
      'Persistent trolling, hate comments, or threatening direct messages',
      'Blackmail: threatening to release altered photos or chats if demands are not met'
    ],
    staySafeRules: [
      'Do not retaliate or engage in arguments with trolls; it fuels their behavior.',
      'Take clear screenshots as evidence (including timestamps, handles, and URLs) before blocking.',
      'Block and report the offending accounts using the platform\'s reporting tools.',
      'Speak to a trusted adult immediately: your school counselor, parent, or favorite teacher.'
    ],
    realLifeCase: {
      studentName: 'Kunal, Class 11',
      scenario: 'Someone created an anonymous Instagram "meme page" posting derogatory rumors and edited photos about students in his grade.',
      whatHappened: 'Students documented screenshots and reported the page collectively while informing the school grievance cell. The account was taken down and disciplinary action was taken.',
      lesson: 'Document evidence immediately. Anonymous pages leave IP and device logs that cyber authorities and schools can track.'
    },
    miniChallenge: {
      question: 'If someone in a class group chat starts circulating an altered embarrassing photo of a classmate, what is the best ethical action?',
      options: [
        'Forward it to your tuition friends because you didn\'t make it',
        'Do not forward or react; support your classmate privately, ask the sender to delete it, and notify a teacher or school counselor if harassment continues',
        'Reply with laughing emojis so people don\'t make fun of you',
        'Leave the group silently and pretend you never saw it'
      ],
      correctIndex: 1,
      explanation: 'Forwarding defamatory or altered photos contributes to cyber harassment. Refusing to amplify and speaking up or informing counselors stops the abuse cycle.'
    }
  },
  {
    id: 'mod-8',
    slug: 'internship-scholarship-scams',
    title: 'Fake Internships & Scholarship Scams',
    category: 'Scam Detection',
    tagline: 'High school & college students are prime targets for fake job and scholarship traps.',
    readTime: '5 min read',
    badgeText: 'Student Alert',
    summary: 'As students look for internships, part-time work, and college scholarships, scammers advertise fake remote data entry jobs, YouTube like/subscribe tasks, and fake government scholarship portals.',
    fullExplanation: [
      'The "Registration Fee" Scam: A legitimate company will NEVER ask you to pay a "registration fee", "training charge", or "laptop security deposit" before starting an internship.',
      'Telegram Task Scams: Scammers pay you ₹150 for liking 3 YouTube videos, building false trust. Then, they ask you to deposit ₹3,000 for "Prepaid VIP tasks" with promised 50% returns, after which they vanish with your money.',
      'Fake Government Scholarship Portals: Fraudulent lookalike sites mimic the National Scholarship Portal (NSP) or state schemes, asking for your bank credentials and Aadhaar OTP to "disburse funds".',
      'Free Certifications trap: Unregistered entities promising guaranteed Google or NASA certificates for a ₹499 processing fee.'
    ],
    redFlags: [
      'Any internship asking for an upfront fee for "processing, kit, or uniform"',
      'Job offers delivered directly via Telegram, WhatsApp, or random Instagram DMs',
      'Unrealistically high pay (e.g., "Earn ₹3,000 daily for 1 hour of typing on phone")',
      'Official correspondence originating from free email domains like @gmail.com or @outlook.com instead of corporate domains'
    ],
    staySafeRules: [
      'Remember: Real internships pay you; you NEVER pay them.',
      'Verify internships through official platforms like Internshala, LinkedIn, or college placement cells.',
      'For government scholarships, access only official portals ending in ".gov.in" or ".nic.in".',
      'Never join unsolicited Telegram groups promising guaranteed investment or task earnings.'
    ],
    realLifeCase: {
      studentName: 'Meera, Class 12',
      scenario: 'Applied for a "Content Review Internship" advertised on Instagram. The recruiter congratulated her and asked for a ₹1,200 "document verification and ID card fee".',
      whatHappened: 'She paid the ₹1,200 via UPI. The recruiter blocked her number immediately and deleted the chat.',
      lesson: 'No genuine company charges an applicant for documentation or onboarding. Any upfront fee request is a 100% scam.'
    },
    miniChallenge: {
      question: 'You see a message on Telegram: "Work From Home student opportunity! Earn ₹2,500/day by reviewing hotel ratings on Google Maps. Pay ₹500 refundable security deposit to unlock task link." What is this?',
      options: [
        'A great way to earn pocket money during school holidays',
        'A classic task scam designed to steal your ₹500 and push you into larger deposits',
        'A verified Google partnership program',
        'A school-approved extracurricular project'
      ],
      correctIndex: 1,
      explanation: 'Task scams trick victims with small deposits. Legitimate corporations never conduct recruitment over anonymous Telegram channels with upfront fees.'
    }
  },
  {
    id: 'mod-9',
    slug: 'public-wifi-safety',
    title: 'Public Wi-Fi & Device Security',
    category: 'Network',
    tagline: 'Free Wi-Fi at cafes, railway stations & malls comes with invisible digital hazards.',
    readTime: '3 min read',
    badgeText: 'Network Guard',
    summary: 'Public Wi-Fi hotspots are often unencrypted. Cybercriminals can set up fake clone hotspots ("Evil Twins") to intercept passwords, session cookies, and private browsing data.',
    fullExplanation: [
      'Man-In-The-Middle (MITM) Attacks: On an open Wi-Fi network, an attacker on the same network can position themselves between your smartphone and the router, monitoring your unencrypted traffic.',
      'Evil Twin Hotspots: A hacker sits in a cafe and creates a Wi-Fi hotspot named "Cafe_Free_Wifi" without a password. When you connect, all your web requests pass through their laptop.',
      'HTTPS vs HTTP: Look for the padlock symbol in your browser. HTTPS encrypts data between you and the site, preventing eavesdroppers from reading plain text.',
      'Bluetooth & AirDrop vulnerability: Leaving Bluetooth and AirDrop set to "Everyone" allows strangers in metro trains or malls to send unsolicited malicious files or links.'
    ],
    redFlags: [
      'Wi-Fi networks without a password prompt in public spaces claiming to be official',
      'SSL/Certificate warning warnings popping up on your browser when opening search engines',
      'Sudden pop-ups asking to install an "urgent update" to access the Wi-Fi network',
      'Unprompted file-sharing or pairing requests arriving on your smartphone'
    ],
    staySafeRules: [
      'Never perform online banking, UPI transactions, or sensitive password logins on public Wi-Fi.',
      'Use mobile 4G/5G data instead of unknown free Wi-Fi for important activities.',
      'Turn off "Auto-Connect to open Wi-Fi networks" in your phone settings.',
      'Keep Bluetooth and AirDrop set to "Contacts Only" or turned off when in crowded public places.'
    ],
    realLifeCase: {
      studentName: 'Prateek, Class 12',
      scenario: 'Connected to an open Wi-Fi at a railway station called "Station_Free_HighSpeed" and logged into his gaming account without HTTPS.',
      whatHappened: 'His account credentials were intercepted by a network sniffer tool run by someone on the same public network.',
      lesson: 'Never enter passwords or confidential details on open, unauthenticated public Wi-Fi networks.'
    },
    miniChallenge: {
      question: 'You are at a cafe and need to check your bank account balance and pay an entrance exam fee. You notice "Cafe_Free_5G" Wi-Fi is available. What should you do?',
      options: [
        'Connect to the free Wi-Fi because 5G is always safe',
        'Turn off Wi-Fi and use your smartphone\'s own cellular mobile data (4G/5G) for the financial transaction',
        'Connect to the Wi-Fi, but use incognito mode',
        'Ask another customer to pay it for you'
      ],
      correctIndex: 1,
      explanation: 'Incognito mode does NOT protect against network eavesdropping on open Wi-Fi. Using your own cellular data connection is vastly more secure for banking and exams.'
    }
  }
];
