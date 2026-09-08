export interface RealScamCase {
  id: string;
  title: string;
  category: 'Digital Arrest' | 'Courier & Customs' | 'Job & Task' | 'Banking & UPI' | 'AI & Deepfake' | 'Investments';
  location: string;
  reportedTime: string;
  financialImpact: string;
  severity: 'Critical' | 'High' | 'Warning';
  badge: string;
  summary: string;
  howItUnfolded: string[];
  keyRedFlag: string;
  policeAdvisory: string;
  sourceAuthority: string;
}

export const REAL_SCAM_CASES: RealScamCase[] = [
  {
    id: 'case-digital-arrest-delhi',
    title: 'Digital Arrest: Fake CBI Officer & Supreme Court Video Call',
    category: 'Digital Arrest',
    location: 'New Delhi & NCR',
    reportedTime: 'Recent • Nationwide Surge',
    financialImpact: '₹2.1 Crore extorted',
    severity: 'Critical',
    badge: 'MHA National Alert',
    summary: 'A 68-year-old retired civil servant was kept in 48-hour "virtual custody" over Skype by fraudsters impersonating CBI officers with forged arrest warrants, forcing transfer of savings for "verification".',
    howItUnfolded: [
      'Victim received an automated call claiming an arrest warrant was issued under his Aadhaar for narcotics smuggling.',
      'Call transferred to a video link showing scammers in police uniforms seated in front of fake "CBI Headquarters" insignia.',
      'Showed forged Supreme Court stamp and threatened immediate jail unless money was transferred to an "RBI safe holding account".',
      'The victim liquidated mutual funds and fixed deposits before realizing no police agency arrests people over video calls.'
    ],
    keyRedFlag: 'Indian police, CBI, ED, and courts NEVER conduct trials, interrogations, or arrests via WhatsApp/Skype video calls.',
    policeAdvisory: 'Immediately disconnect. There is no concept of "Digital Arrest" under Indian law. Dial 1930 without panic.',
    sourceAuthority: 'Indian Cyber Crime Coordination Centre (I4C) & Delhi Police'
  },
  {
    id: 'case-fedex-customs-mumbai',
    title: 'FedEx / Airport Customs Narcotics Parcel Scam',
    category: 'Courier & Customs',
    location: 'Mumbai & Bengaluru',
    reportedTime: 'Active Ring • High Frequency',
    financialImpact: '₹68 Lakhs siphoned',
    severity: 'Critical',
    badge: 'Active Threat Vector',
    summary: 'A 32-year-old IT professional received an IVR call stating a parcel bound for Taiwan containing 140g MDMA and 5 fake passports was seized under his PAN card at Mumbai International Airport.',
    howItUnfolded: [
      'Caller claimed to be a FedEx executive stating international customs flagged illegal drugs in a parcel bearing the victim’s name.',
      'Immediately patched to a fake "Cyber Crime DCP" on Telegram who flashed a counterfeit police ID badge.',
      'Victim was ordered not to contact family ("National Security Act confidentiality") and demanded a "security deposit" to clear his name.',
      'Victim made three RTGS transfers before attempting to check with actual airport customs.'
    ],
    keyRedFlag: 'Legitimate courier companies and Customs authorities never demand funds via private bank accounts to clear contraband.',
    policeAdvisory: 'Couriers like FedEx or DHL do not verify criminal cases. Contact your local police station directly.',
    sourceAuthority: 'Maharashtra Cyber Cell & Customs Advisory'
  },
  {
    id: 'case-telegram-task-bengaluru',
    title: 'Telegram Part-Time "Google Rating & YouTube Like" Task Trap',
    category: 'Job & Task',
    location: 'Bengaluru, Karnataka',
    reportedTime: 'Reported This Week',
    financialImpact: '₹14.5 Lakhs lost',
    severity: 'High',
    badge: 'Targeting Youth & Homemakers',
    summary: 'A college graduate was lured via WhatsApp with promises of ₹150 per Google Hotel review, then dragged into a VIP crypto trading group requiring upfront deposits.',
    howItUnfolded: [
      'Scammer reached out on WhatsApp offering work-from-home tasks: like 3 YouTube videos for instant ₹300 credited via UPI.',
      'After building trust with initial ₹1,200 small payouts, added to a Telegram channel showing fabricated dashboard balances of ₹10 Lakhs.',
      'Victim assigned "Prepaid Merchant Orders" requiring personal deposits of ₹5,000, ₹50,000, and eventually ₹3 Lakhs to "unlock earnings".',
      'When trying to withdraw, fraudsters demanded an additional 30% "GST processing charge" and froze the account.'
    ],
    keyRedFlag: 'No genuine employer or agency asks you to pay money or purchase crypto tasks to receive salary payouts.',
    policeAdvisory: 'Stop communicating the moment a task requires you to deposit money. Report fraudulent UPI IDs to 1930.',
    sourceAuthority: 'CID Cyber Crime Division, Karnataka'
  },
  {
    id: 'case-electricity-apk-pune',
    title: 'Electricity Bill Disconnection Panic SMS & Malicious APK',
    category: 'Banking & UPI',
    location: 'Pune & Ahmedabad',
    reportedTime: 'Daily Reports',
    financialImpact: '₹3.4 Lakhs wiped in 12 mins',
    severity: 'Critical',
    badge: 'Automated Banking Malware',
    summary: 'Victim received an urgent evening SMS stating power supply would be cut at 9:30 PM due to an unpaid bill, directing them to install an APK file that siphoned bank OTPs.',
    howItUnfolded: [
      'SMS text: "Dear consumer, your electricity power will be disconnected tonight at 9:30 PM by electricity officer. Call 987XXXXXXX immediately."',
      'Caller instructed the anxious homeowner to download a quick update app (`Mahavitaran_Update.apk`) from a WhatsApp link.',
      'The APK was a remote access trojan (RAT) that granted full background access to screen and SMS OTPs.',
      'Scammer asked victim to pay ₹10 for bill update; while typing credentials, background malware intercepted banking OTPs and emptied accounts.'
    ],
    keyRedFlag: 'State electricity boards never send disconnection SMS from personal 10-digit mobile numbers or ask you to install APK files.',
    policeAdvisory: 'Never install `.apk` files received over WhatsApp or SMS. Pay electricity bills only via official utility apps or portals.',
    sourceAuthority: 'State Discom Alerts & CERT-In'
  },
  {
    id: 'case-ai-deepfake-voice-hyderabad',
    title: 'AI Deepfake Voice Clone: Urgent Bail & Accident Scam',
    category: 'AI & Deepfake',
    location: 'Hyderabad & Chennai',
    reportedTime: 'Emerging High-Tech Threat',
    financialImpact: '₹3.2 Lakhs extorted',
    severity: 'High',
    badge: 'AI Voice Cloning Alert',
    summary: 'Parents received a panicked phone call sounding identically like their son studying in the UK, crying that he was arrested after a fatal car accident and needed urgent bail money.',
    howItUnfolded: [
      'The mother answered a call from an unknown international code; the voice was an exact replica of her son’s speech cadence and pitch.',
      'The "son" was sobbing uncontrollably, pleading: "Mom, please save me! The police have me, talk to the inspector!"',
      'A man claiming to be an overseas lawyer took the phone, giving a 15-minute deadline to wire legal fees to avoid court remand.',
      'The mother frantically transferred ₹3.2 Lakhs via money transfer before the actual son called home an hour later from his dorm.'
    ],
    keyRedFlag: 'Fraudsters use 5-10 second audio snippets from public Instagram reels or YouTube videos to train generative AI voice models.',
    policeAdvisory: 'Always verify through a pre-arranged "family safe word" or call the child directly on their regular number before sending money.',
    sourceAuthority: 'Telangana Cyber Security Bureau (TGCSB)'
  },
  {
    id: 'case-aeps-fingerprint-jaipur',
    title: 'Aadhaar AEPS Biometric Cloning via Registry Scans',
    category: 'Banking & UPI',
    location: 'Jaipur & Bihar',
    reportedTime: 'Nationwide Vulnerability',
    financialImpact: '₹40,000 withdrawn per victim',
    severity: 'High',
    badge: 'Zero OTP Exploit',
    summary: 'Victims discovered unauthorized cash debits from local micro-ATMs without ever swiping their debit card, entering a PIN, or receiving a banking OTP.',
    howItUnfolded: [
      'Cyber gangs scraped publicly available land sale deeds and property registration documents from state land revenue portals.',
      'Extracted high-resolution scans of thumb impressions left on official sale deeds.',
      'Re-created silicone thumb molds using 3D printers and photopolymer plates.',
      'Used cloned prints on Aadhaar-Enabled Payment System (AEPS) merchant biometric scanners to withdraw maximum daily limits.'
    ],
    keyRedFlag: 'AEPS transactions do not send standard OTPs; biometric authentication is treated as proof of identity.',
    policeAdvisory: 'Lock your Aadhaar biometrics immediately on the UIDAI portal or mAadhaar app. Unlock only when physically visiting a bank.',
    sourceAuthority: 'UIDAI & Rajasthan Police Cyber Cell'
  },
  {
    id: 'case-fake-ipo-whatsapp-kolkata',
    title: 'Fake Institutional Stock & SME IPO WhatsApp Group',
    category: 'Investments',
    location: 'Kolkata & Indore',
    reportedTime: 'Active Financial Syndicate',
    financialImpact: '₹1.8 Crore swindled',
    severity: 'Critical',
    badge: 'Investment Fraud Ring',
    summary: 'A seasoned investor was added to a "SEBI VIP Institutional Club" promising guaranteed 300% allocation in high-demand SME IPOs through a counterfeit trading app.',
    howItUnfolded: [
      'Victim added to a WhatsApp group featuring fake foreign financial analysts sharing high-accuracy stock tips.',
      'Directed to download an unlisted trading app mimicking institutional broker software with live tickers.',
      'Victim deposited funds into multiple "corporate clearing accounts" and saw paper profits surge to ₹6 Crore.',
      'When requesting withdrawal, administrators demanded 20% upfront capital gains tax; upon refusal, the victim was removed from the group.'
    ],
    keyRedFlag: 'Legitimate SEBI-registered brokers never operate institutional IPO allotments via WhatsApp groups or personal current accounts.',
    policeAdvisory: 'Verify SEBI registration numbers on sebi.gov.in. Never transfer trading funds to individual or random current accounts.',
    sourceAuthority: 'Securities and Exchange Board of India (SEBI) & Kolkata Police'
  },
  {
    id: 'case-reward-points-sms-lucknow',
    title: 'Credit Card Reward Points Expiry Phishing Portal',
    category: 'Banking & UPI',
    location: 'Pan-India',
    reportedTime: 'High Daily Volume',
    financialImpact: '₹95,000 credit limit drained',
    severity: 'Warning',
    badge: 'Bulk SMS Campaign',
    summary: 'A teacher received an SMS warning that 9,450 SBI Card reward points worth ₹4,725 would expire at midnight, directing to a lookalike portal that stole card details.',
    howItUnfolded: [
      'SMS header mimicked banking alerts: "SBI Alert: Your 9,450 points worth Rs.4,725 expire today. Redeem cash directly to account: bit.ly/sbi-points-cash".',
      'Website replicated the exact design, colors, and login modal of the bank’s official reward page.',
      'Prompted victim to enter card number, CVV, and date of birth to "verify beneficiary".',
      'Triggered an international e-commerce transaction; victim typed the OTP thinking it was confirmation for receiving reward cash.'
    ],
    keyRedFlag: 'Banks never convert reward points to cash via shortened bit.ly links or ask for CVV and OTP to credit rewards.',
    policeAdvisory: 'Access rewards only by logging into official netbanking or the bank’s mobile app. Block card instantly if CVV is compromised.',
    sourceAuthority: 'State Bank of India & CERT-In Advisory'
  }
];

export const SCAM_CATEGORIES = [
  'All Cases',
  'Digital Arrest',
  'Courier & Customs',
  'Job & Task',
  'Banking & UPI',
  'AI & Deepfake',
  'Investments'
] as const;
