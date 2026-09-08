import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  type User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, isFirebaseConfigured } from '../lib/firebase';

export interface AppUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
}

interface AuthContextType {
  currentUser: AppUser | null;
  loading: boolean;
  isFirebaseActive: boolean;
  signup: (email: string, pass: string, name: string) => Promise<void>;
  login: (email: string, pass: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  authError: string | null;
  clearAuthError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const clearAuthError = () => setAuthError(null);

  // Translate Firebase errors into clean, friendly student messages
  const mapFirebaseError = (error: any): string => {
    const code = error?.code || '';
    switch (code) {
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found':
        return 'Incorrect email or password. Please verify your credentials.';
      case 'auth/email-already-in-use':
        return 'An account with this email already exists. Try signing in.';
      case 'auth/weak-password':
        return 'Password is too weak. Please use at least 6 characters.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/popup-closed-by-user':
        return 'Google Sign-In was closed before completing. Please try again.';
      case 'auth/popup-blocked':
        return 'Sign-in popup was blocked by your browser. Please allow popups for this site.';
      case 'auth/cancelled-popup-request':
        return 'Sign-in popup process was cancelled.';
      case 'auth/network-request-failed':
        return 'Unable to reach the server. Please check your internet connection.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please wait a few minutes before trying again.';
      case 'auth/operation-not-allowed':
        return 'This sign-in provider is not enabled in Firebase Console. Please enable it under Authentication -> Sign-in method.';
      case 'auth/unauthorized-domain':
        return 'This domain is not authorized for Google Sign-In. Add this domain to Firebase Console -> Authentication -> Settings -> Authorized Domains.';
      default:
        return error?.message || 'An unexpected error occurred. Please try again.';
    }
  };

  useEffect(() => {
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (fbUser: FirebaseUser | null) => {
        if (fbUser) {
          setCurrentUser({
            uid: fbUser.uid,
            email: fbUser.email,
            displayName: fbUser.displayName || 'Cyber Defender',
            photoURL: fbUser.photoURL
          });
        } else {
          setCurrentUser(null);
        }
        setLoading(false);
      });
      return unsubscribe;
    } else {
      setLoading(false);
    }
  }, []);

  const signup = async (email: string, pass: string, name: string) => {
    setAuthError(null);
    if (!auth) throw new Error('Firebase Auth is not initialized. Check your .env credentials.');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(userCredential.user, { displayName: name });
      
      if (db) {
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          name,
          email,
          createdAt: serverTimestamp(),
          role: 'student'
        }, { merge: true });
      }

      setCurrentUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: name
      });
    } catch (err: any) {
      const msg = mapFirebaseError(err);
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const login = async (email: string, pass: string) => {
    setAuthError(null);
    if (!auth) throw new Error('Firebase Auth is not initialized. Check your .env credentials.');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      setCurrentUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName || 'Cyber Defender',
        photoURL: userCredential.user.photoURL
      });
    } catch (err: any) {
      const msg = mapFirebaseError(err);
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const loginWithGoogle = async () => {
    setAuthError(null);
    if (!auth) throw new Error('Firebase Auth is not initialized. Check your .env credentials.');
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const userCredential = await signInWithPopup(auth, provider);
      
      if (db) {
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          name: userCredential.user.displayName || 'Google Student',
          email: userCredential.user.email,
          photoURL: userCredential.user.photoURL,
          lastLoginAt: serverTimestamp(),
          role: 'student'
        }, { merge: true });
      }

      setCurrentUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName || 'Cyber Defender',
        photoURL: userCredential.user.photoURL
      });
    } catch (err: any) {
      const msg = mapFirebaseError(err);
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const logout = async () => {
    if (auth) {
      await firebaseSignOut(auth);
    }
    setCurrentUser(null);
  };

  const resetPassword = async (email: string) => {
    setAuthError(null);
    if (!auth) throw new Error('Firebase Auth is not initialized. Check your .env credentials.');
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err: any) {
      const msg = mapFirebaseError(err);
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        isFirebaseActive: isFirebaseConfigured,
        signup,
        login,
        loginWithGoogle,
        logout,
        resetPassword,
        authError,
        clearAuthError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
