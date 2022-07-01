/**
 * @author Rounak Singh
 * @license MIT
 */

// Firebase upgrade from V8 to V9 guide: https://firebase.google.com/docs/web/modular-upgrade
// Firebase V9 with React guide: https://travis.media/how-to-use-firebase-with-react/

// Modules Import
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

/**
 * @description Stores Firebase access key.
 */
const FirebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxxxxxxxxx",
};

// Initializing the Firebase app.
const app = initializeApp(FirebaseConfig);

// Firestore provider
export const db = getFirestore(app);

// Authentication provider
export const auth = getAuth();

// Google Auth provider
export const provider = new GoogleAuthProvider();
