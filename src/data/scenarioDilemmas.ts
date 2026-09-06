export interface ScenarioDilemma {
  id: string;
  title: string;
  badge: string;
  situation: string;
  options: {
    text: string;
    isBest: boolean;
    consequence: string;
    explanation: string;
  }[];
  keyTakeaway: string;
}

export const SCENARIO_DILEMMAS: ScenarioDilemma[] = [
  {
    id: 'sc-1',
    title: 'The "Urgent Hospital Help" DM from a Best Friend',
    badge: 'Impersonation Dilemma',
    situation: 'It is 10:30 PM on a Friday. You get an Instagram DM from an account with your close friend\'s photo and username (with one subtle extra dot). The message says: "Bro, I am at the emergency clinic with my mom and my UPI daily limit is exhausted. Please send ₹1,500 to this doctor UPI ID right now, I swear I\'ll return it by 9 AM tomorrow!"',
    options: [
      {
        text: 'Send the ₹1,500 immediately because emergencies cannot wait and it is your best friend.',
        isBest: false,
        consequence: '❌ You lost ₹1,500. It was an impersonator who cloned your friend\'s profile photos 20 minutes ago.',
        explanation: 'Scammers deliberately use medical emergencies and nighttime hours to cause emotional panic so you don\'t stop to think.'
      },
      {
        text: 'Call your friend directly on their normal cellular phone number or WhatsApp audio call.',
        isBest: true,
        consequence: '✅ You called your friend. They picked up from their bedroom, completely fine and unaware of the fake DM.',
        explanation: 'A 20-second voice call will instantly expose 100% of cloned account impersonation scams.'
      },
      {
        text: 'Ask the DM account to send their password to prove it is really them.',
        isBest: false,
        consequence: '⚠️ Unproductive. The scammer will make an excuse and keep pressuring you with emotional manipulation.',
        explanation: 'Do not negotiate or chat with suspected impersonators.'
      },
      {
        text: 'Forward the message to your school WhatsApp group to ask classmates to pool money.',
        isBest: false,
        consequence: '❌ You exposed more students to the fraud and caused unnecessary panic for your friend\'s family.',
        explanation: 'Never forward unverified emergency requests into group chats.'
      }
    ],
    keyTakeaway: 'In any emergency financial request on social media, ALWAYS verify via a phone call or face-to-face first.'
  },
  {
    id: 'sc-2',
    title: 'The "Free Valorant / BGMI Skin" Download on Discord',
    badge: 'Malware & Gaming Dilemma',
    situation: 'A user in a popular student gaming Discord server posts: "Hey guys, leaked beta exploit! Get unlimited weapon skins and 2000 UC/VP for free. Download this config patch: skin_unlocker_v2.exe (password: 123)". Several random bot accounts reply saying: "Works 100% thanks!"',
    options: [
      {
        text: 'Download and run the file, but disable your antivirus temporarily as instructed in the readme.',
        isBest: false,
        consequence: '❌ Your PC was infected with an InfoStealer Trojan (RedLine/Vidar). All browser passwords, Discord tokens, and saved cookies were exfiltrated.',
        explanation: 'Telling users to disable antivirus is the #1 signature of malware distribution.'
      },
      {
        text: 'Ignore the file and report the message to server moderators.',
        isBest: true,
        consequence: '✅ Your machine stayed clean, and server mods banned the bot account before younger members could get infected.',
        explanation: 'Game skins are stored on central game servers; local .exe files can never grant free server-side items without being malware.'
      },
      {
        text: 'Upload the .exe to VirusTotal to inspect it, but click it anyway if only 2 engines flag it.',
        isBest: false,
        consequence: '⚠️ High risk. Zero-day obfuscated malware often evades generic heuristic engines initially.',
        explanation: 'Never execute suspicious executable files from strangers.'
      },
      {
        text: 'Send the link to your younger brother to test on his laptop first.',
        isBest: false,
        consequence: '❌ His laptop is now compromised on your home Wi-Fi network.',
        explanation: 'Never use family members as guinea pigs for untrusted software!'
      }
    ],
    keyTakeaway: 'There is no such thing as free server-side game currency via random .exe downloads. They are infostealer malware.'
  },
  {
    id: 'sc-3',
    title: 'The "AirDrop from Unknown" on the Metro / School Bus',
    badge: 'Wireless & Harassment Dilemma',
    situation: 'While commuting on the public metro train, your iPhone suddenly pops up an AirDrop / Quick Share prompt: "Unknown iPhone would like to share a photo: IMG_0921.jpg (Accept / Decline)". You don\'t know anyone sitting nearby.',
    options: [
      {
        text: 'Accept it out of curiosity to see what funny meme or photo someone sent.',
        isBest: false,
        consequence: '❌ You received an explicit non-consensual image (Cyber-flashing) or malicious payload designed to exploit iOS preview bugs.',
        explanation: 'Cyber-flashing is an invasive harassment technique practiced by trolls in crowded public transit.'
      },
      {
        text: 'Decline the transfer and switch your AirDrop / Quick Share settings to "Contacts Only" or "Receiving Off".',
        isBest: true,
        consequence: '✅ Your phone is shielded from unsolicited transfers and nearby device tracking.',
        explanation: 'Keeping wireless sharing restricted to contacts prevents harassment and tracking in public.'
      },
      {
        text: 'Accept it, and AirDrop back an angry photo to retaliate.',
        isBest: false,
        consequence: '⚠️ Escalates the situation and reveals your device name and presence to an unknown stranger.',
        explanation: 'Never engage or antagonize strangers in public spaces.'
      },
      {
        text: 'Turn off your phone completely and throw away your SIM card.',
        isBest: false,
        consequence: '⚠️ Unnecessary extreme overreaction.',
        explanation: 'Simply setting AirDrop to Contacts Only is 100% effective.'
      }
    ],
    keyTakeaway: 'Always keep public wireless discovery (AirDrop, QuickShare, Bluetooth) set to Contacts Only.'
  },
  {
    id: 'sc-4',
    title: 'The "College Coaching Fee Discount" via Google Pay QR',
    badge: 'UPI Golden Rule Dilemma',
    situation: 'You contacted an independent online JEE/NEET tutor you found on social media. They say: "I am offering you a 50% discount scholarship. To activate the cashback voucher of ₹3,000, scan this QR code and type your 6-digit UPI PIN to claim the ₹3,000 credit."',
    options: [
      {
        text: 'Scan the QR and enter your PIN since they promised it will credit ₹3,000 cashback.',
        isBest: false,
        consequence: '❌ ₹3,000 was debited from your account instantly. The tutor blocked your number.',
        explanation: 'Entering your UPI PIN ALWAYS debits your account. It can never credit money.'
      },
      {
        text: 'Refuse to enter your PIN, stating that UPI PIN is only for sending money, and report the tutor.',
        isBest: true,
        consequence: '✅ You protected your money! The scammer realized you know the Golden Rule and gave up.',
        explanation: 'Knowledge is armor: the moment a fraudster realizes you know how UPI works, their scheme collapses.'
      },
      {
        text: 'Enter a wrong PIN 3 times to test if their machine works.',
        isBest: false,
        consequence: '⚠️ Your UPI app will temporarily freeze for 24 hours for security.',
        explanation: 'Do not interact with fraudulent QR prompts.'
      },
      {
        text: 'Ask them to send the QR to your dad\'s phone instead.',
        isBest: false,
        consequence: '❌ Putting your parents at risk of falling for the same scam.',
        explanation: 'Protect your family by educating them on the UPI Golden Rule.'
      }
    ],
    keyTakeaway: 'Remember the golden rule: UPI PIN is ONLY entered to SEND money or check balance.'
  },
  {
    id: 'sc-5',
    title: 'The "Leaked Board Exam Question Paper" on Telegram',
    badge: 'Academic Fraud Dilemma',
    situation: 'Two days before your 12th Board Chemistry exam, a classmate sends you an invitation to a Telegram channel titled "CBSE/STATE BOARD REAL LEAKED PAPERS 2026 - 100% REAL". The channel admin says: "Send ₹2,000 on UPI to get the PDF paper with solutions. Only 50 slots left!"',
    options: [
      {
        text: 'Pay ₹2,000 immediately to secure high marks without studying.',
        isBest: false,
        consequence: '❌ You were sent last year\'s sample question paper with a fake watermark, lost ₹2,000, and wasted crucial revision time.',
        explanation: 'Leaked paper scams prey on student exam anxiety every year. All such channels are fraudulent syndicates.'
      },
      {
        text: 'Ignore the channel, do not pay, focus on your textbook revision, and warn your classmate.',
        isBest: true,
        consequence: '✅ You saved money, studied real concepts, and aced your exam through legitimate hard work.',
        explanation: 'Board examination logistics are heavily encrypted and guarded; online Telegram groups sell recycled old papers.'
      },
      {
        text: 'Share the Telegram link with all your school section groups.',
        isBest: false,
        consequence: '❌ You assisted scammers in defrauding stressed classmates and could face disciplinary action for spreading rumors.',
        explanation: 'Promoting exam leak scams can lead to severe school and board penalties.'
      },
      {
        text: 'Ask the admin to send half the questions first as a free demo.',
        isBest: false,
        consequence: '⚠️ They will send generic textbook questions to trick you into transferring the money.',
        explanation: 'Engagement encourages further manipulation.'
      }
    ],
    keyTakeaway: 'Never pay for "leaked" exam papers online. They are 100% scams that exploit pre-exam anxiety.'
  },
  {
    id: 'sc-6',
    title: 'The "Accidental Google Review Job" Offer',
    badge: 'Task Scam Dilemma',
    situation: 'You receive a WhatsApp message from a recruiter offering a part-time job: "Review 3 restaurants on Google Maps for ₹150". You try it and they actually send ₹150 to your UPI! Then they invite you to a VIP group: "Deposit ₹2,000 into our investment pool to unlock today\'s ₹5,000 task payout."',
    options: [
      {
        text: 'Deposit the ₹2,000 because they already proved their honesty by paying you the ₹150.',
        isBest: false,
        consequence: '❌ Once you deposited ₹2,000, they demanded ₹10,000 to "release your funds", then locked your account and stole everything.',
        explanation: 'The initial ₹150 is "bait money" (pre-planned loss) to hook you into depositing larger amounts.'
      },
      {
        text: 'Recognize this as the classic "Bait and Switch" Task Scam, stop interacting immediately, and block the group.',
        isBest: true,
        consequence: '✅ You walked away safe without losing thousands of rupees like thousands of other student victims.',
        explanation: 'Recognizing the task scam model early saves students from devastating financial loss.'
      },
      {
        text: 'Deposit ₹1,000 and ask for a 50% discount on the task.',
        isBest: false,
        consequence: '❌ You still lose ₹1,000 to cyber criminals.',
        explanation: 'Any deposit into an untrusted crypto/task pool is permanently gone.'
      },
      {
        text: 'Invite your friends to the group to share the profit.',
        isBest: false,
        consequence: '❌ Your friends lose their savings and trust in you.',
        explanation: 'Do not be an unwitting recruiter for financial cyber syndicates.'
      }
    ],
    keyTakeaway: 'The small initial payment in online task jobs is bait. Never deposit money to unlock job tasks.'
  },
  {
    id: 'sc-7',
    title: 'The "Cyber Cafe / Public Library Computer" Session',
    badge: 'Cyber Hygiene Dilemma',
    situation: 'You went to a local cyber cafe to print your college application form. You logged into your personal Gmail, Google Drive, and Canva account on the shared computer. You finished printing and the shopkeeper tells you your time is up.',
    options: [
      {
        text: 'Just close the browser tabs, leave your chair, and walk out.',
        isBest: false,
        consequence: '❌ The next student sitting at the machine opened Chrome and had full access to your email, personal documents, and saved cards!',
        explanation: 'Closing tabs does not end your active web sessions or erase cookies and history.'
      },
      {
        text: 'Log out of every account, clear browser cache & cookies (or use Incognito mode from the start), and delete downloaded files from the Downloads folder.',
        isBest: true,
        consequence: '✅ The machine is left completely clean with no traces of your personal identity or passwords.',
        explanation: 'Proper session hygiene prevents session hijacking and unauthorized data access on shared terminals.'
      },
      {
        text: 'Turn off the computer monitor and walk away.',
        isBest: false,
        consequence: '❌ The computer is still running and accounts remain logged in.',
        explanation: 'The monitor is only a display; turning it off changes nothing inside the system.'
      },
      {
        text: 'Ask the cyber cafe operator to remember your password for next time.',
        isBest: false,
        consequence: '❌ Never share your master password with store operators or third parties.',
        explanation: 'Passwords are confidential personal keys.'
      }
    ],
    keyTakeaway: 'Always use Incognito mode on public computers, log out explicitly, and delete downloaded files.'
  },
  {
    id: 'sc-8',
    title: 'The "Anonymous Bullying Message" on NGL / Secret App',
    badge: 'Mental Well-being Dilemma',
    situation: 'A link you posted to an anonymous Q&A box (like NGL or Tellonym) receives a cruel message threatening to spread rumors about you at school unless you send a private photo or money.',
    options: [
      {
        text: 'Keep it a secret, panic in silence, and consider complying with their demand so nobody finds out.',
        isBest: false,
        consequence: '❌ Compliance leads to continuous blackmail. Bullies and extortionists never stop after one payment.',
        explanation: 'Giving into extortion gives the attacker more leverage and guarantees ongoing harassment.'
      },
      {
        text: 'Take clear screenshots of the message with timestamps, delete the anonymous app, and talk immediately to a trusted parent, school counselor, or teacher.',
        isBest: true,
        consequence: '✅ Trusted adults provided emotional support and contacted school authorities. The school identified the device IP and put a stop to it.',
        explanation: 'Breaking the silence with trusted adults disarms blackmailers and brings institutional protection.'
      },
      {
        text: 'Post an angry public story cursing at the anonymous sender.',
        isBest: false,
        consequence: '⚠️ Gives the troll the exact attention and drama they were seeking.',
        explanation: 'Trolls thrive on public emotional reactions.'
      },
      {
        text: 'Forward the message to your friends and ask who sent it.',
        isBest: false,
        consequence: '⚠️ Creates campus paranoia without identifying the culprit.',
        explanation: 'Work with counselors and authorities instead of vigilante hunting.'
      }
    ],
    keyTakeaway: 'Never suffer in silence. Document evidence and speak to a parent or counselor immediately.'
  }
];
