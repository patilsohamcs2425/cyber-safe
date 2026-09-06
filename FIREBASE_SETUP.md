# 🔥 Firebase Setup Guide: CyberSafe Community

This beginner-friendly guide walks you through connecting your **CyberSafe Community** application to Google Firebase in less than 5 minutes.

---

## Quick Note: Dual-Engine Architecture 🚀
> **Good news:** CyberSafe Community includes an automatic **Offline Demo Engine**. You can run and test all features (Sign In, Spot The Scam, Quizzes, Progress, and Surveys) immediately even before setting up Firebase!
>
> When you are ready to persist data to the cloud for project submission, follow the steps below.

---

## Step 1: Open Firebase Console
1. Open your web browser and go to [https://console.firebase.google.com/](https://console.firebase.google.com/).
2. Sign in with your Google account.

---

## Step 2: Create a New Firebase Project
1. Click **"Add project"** (or **"Create a project"**).
2. Name your project (e.g., `cybersafe-community-cep`).
3. (Optional) Google Analytics: You can leave it enabled or disable it for this academic project.
4. Click **"Create project"** and wait a few seconds until your project is ready.

---

## Step 3: Register a Web App
1. In the project dashboard overview, click the **Web icon** (`</>`) to add an app.
2. Enter an App nickname, for example: `cybersafe-web`.
3. Do not check "Firebase Hosting" for now.
4. Click **"Register app"**.

---

## Step 4: Copy Your Firebase Configuration
Firebase will display a code snippet containing `firebaseConfig`. Look for the following 6 keys:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "cybersafe-community-cep.firebaseapp.com",
  projectId: "cybersafe-community-cep",
  storageBucket: "cybersafe-community-cep.firebasestorage.app",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:..."
};
```

Keep this window open or copy these values.

---

## Step 5: Create Your `.env` File
In the root directory of the project (`d:\CYBHEER WEBSITE`), create a file named:
`.env`

*(You can also copy `.env.example` and rename it to `.env`)*

---

## Step 6: Paste Your Configuration Values
Add your copied values to `.env`:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=cybersafe-community-cep.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=cybersafe-community-cep
VITE_FIREBASE_STORAGE_BUCKET=cybersafe-community-cep.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:...
```

Save the `.env` file.

---

## Step 7: Enable Authentication
1. In the Firebase Console left sidebar, click **Build** → **Authentication**.
2. Click **"Get started"**.
3. Under the **"Sign-in method"** tab, select **Email/Password**.
4. Enable the first toggle: **"Email/Password"**.
5. Leave "Email link (passwordless sign-in)" disabled.
6. Click **Save**.

---

## Step 8: Create Cloud Firestore Database
1. In the left sidebar, click **Build** → **Firestore Database**.
2. Click **"Create database"**.
3. Choose a location closest to your users (e.g., `asia-south1 (Mumbai)` or default).
4. For security rules, choose **"Start in test mode"** for development (or production rules below).
5. Click **Create**.

---

## Step 9: Configure Firestore Security Rules
Go to **Firestore Database** → **Rules** tab, paste the following rules, and click **Publish**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // User progress and profile: only the owner can read/write
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Quiz results collection: logged-in students can create and read their results
    match /quizResults/{resultId} {
      allow create: if request.auth != null;
      allow read: if request.auth != null && request.auth.uid == resource.data.userId;
    }

    // Survey responses: can be created by authenticated students
    match /surveyResponses/{responseId} {
      allow create: if request.auth != null;
      allow read: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

---

## Step 10: Authorized Domains
If testing locally: `localhost` is authorized by default.
When deploying to Vercel or Netlify, add your deployment domain to:
**Firebase Console** → **Authentication** → **Settings** → **Authorized domains** → **Add domain**.

---

## Step 11: Run the Application
Open your terminal in the project directory:

```bash
# Start local development server
npm run dev
```

Visit the local URL shown in your terminal (typically `http://localhost:5173/`).

---

## Step 12: Verify the Complete Flow
1. Open the website on your browser or mobile phone.
2. Click **Sign In** → **Create New Account**.
3. Register with your student email and password.
4. Go to **Spot The Scam** and answer scenarios.
5. Take the **Cyber Quiz**.
6. Visit **Dashboard** (`/dashboard`) and confirm that your quiz score, rank, and badges are saved!
7. Check your Firebase Console under **Authentication** and **Firestore Database** to see your live data.
