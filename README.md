# 🛡️ CyberSafe
### *Learn. Identify. Protect.*

A modern, production-grade cyber-safety education and interactive scam defense platform designed for youth and learners of all backgrounds. Built with a human-first, light-mode visual design system, rich micro-interactions, Skiper UI-inspired components, and Firebase backend integration.

---

## 🎨 Visual Identity & Design System
- **Light-First Aesthetics**: Warm off-white backgrounds (`#f8fafc`), crisp white cards with soft shadows, charcoal typography (`#0f172a`), and purposeful blue, purple, emerald, and amber accents.
- **Skiper UI Motion**: Continuous live awareness marquee alert ticker, tactile hover lift physics (`SkiperCard`), smooth route transitions, and responsive feedback drawers.
- **Varied Editorial Layouts**: Replaced repetitive 4-card grids with asymmetrical featured spotlights, side-stacked cards, realistic WhatsApp / SMS / Instagram / UPI smartphone simulators, and clean whitespace.
- **Human & Realistic Imagery**: Authentic editorial vector illustrations showing students and everyday people safely interacting with digital tools (no hooded hackers, green terminal code, or sci-fi clichés).
- **Mobile-First Experience**: Fully optimized for mobile screens (320px–430px) with touch-friendly navigation, quick-tap buttons, and zero horizontal overflow, while gracefully expanding to multi-column desktop layouts (1024px–1920px).

---

## 🚀 Application Modules & Features

| Feature | Route | Description |
| :--- | :--- | :--- |
| **Home** | `/` | Editorial hero, Skiper live alert ticker, reality check statement, asymmetrical threats spotlight, phone simulator spotlight, dilemma preview, quiz & safety check callouts, and final CTA. |
| **Learn Cyber Safety** | `/learn` | 9 complete educational modules (Phishing, UPI scams, Passwords, Social Media, PII, Impersonation, Cyberbullying, Fake Internships, Public Wi-Fi) with real cases, red flags, stay-safe rules, and interactive checkpoints. |
| **Spot The Scam** | `/spot-the-scam` | Realistic smartphone simulator rendering authentic WhatsApp, SMS, Instagram DM, and UPI collect interfaces. Test your reflexes with instant explanations, streak tracking, and celebration modal. |
| **Cyber Quiz** | `/quiz` | Curated multiple-choice questions, animated option selection, question-by-question progress, and celebration scorecard. |
| **Password Studio** | `/password-safety` | 100% client-side password entropy checker, brute-force crack time estimator, and memorable 3-word passphrase generator. |
| **Social Safety Audit** | `/social-safety` | Interactive 8-point privacy checklist with real-time score calculation and tailored recommendations. |
| **What Would You Do?** | `/scenarios` | Interactive branching dilemma cases with real-world digital consequences and key takeaways. |
| **Emergency Help** | `/if-scammed` | High-visibility emergency banner with direct dialer to National Helpline (`1930`), `cybercrime.gov.in`, 5-step action protocol, and interactive evidence checklist. |
| **Research Surveys** | `/survey/pre`, `/survey/post` | Digital safety awareness assessments to evaluate pre- vs post-learning knowledge retention. |
| **Student Dashboard** | `/dashboard` | Clean student hub with Safety Ranks, badge showcase, quiz history log, and survey progress. |
| **Authentication** | `/login`, `/signup`, `/forgot-password` | Official Google Sign-In (`GoogleAuthProvider` + `signInWithPopup`) and Email/Password authentication synced to Cloud Firestore. |
| **About** | `/about` | Mission, 3 Core Pillars (Learn, Identify, Protect), digital hygiene best practices, and quiet project credits. |

---

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite 6
- **Styling**: Tailwind CSS 3.4, Vanilla CSS design tokens, custom Skiper marquee & spring physics
- **Icons & Motion**: Lucide React, Framer Motion, Canvas Confetti
- **Backend & Database**: Firebase Authentication (Google Sign-In + Email/Password), Cloud Firestore (Firebase SDK v11)
- **Local Dev Server**: Vite fast HMR on `http://localhost:5173/`

---

## ⚡ Running Locally

### 1. Start Development Server
```bash
npm run dev
```

The application is served at `http://localhost:5173/`.

### 2. Run Production Build Verification
```bash
npm run build
```
Compiles TypeScript (`tsc`) and outputs the optimized Vite bundle in `dist/`.

---

## 🔒 Security & Privacy Architecture
- **Client-Side Testing**: The Password Strength tool runs entirely within the client's local browser memory. Test passwords are never logged, stored, or transmitted over any network socket.
- **Official Helplines**: All emergency telephone lines link to the verified Indian Cyber Crime Helpline (`1930`) and official portal (`cybercrime.gov.in`).
