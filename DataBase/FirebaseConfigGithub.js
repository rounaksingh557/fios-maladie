/**
 * @author Rounak Singh
 * @license MIT
 */

// Firebase upgrade from V8 to V9 guide: https://firebase.google.com/docs/web/modular-upgrade
// Firebase V9 with React guide: https://travis.media/how-to-use-firebase-with-react/
// Using FireStore in V9: https://firebase.google.com/docs/firestore/quickstart#web-version-9_2
// Using NoSql Realtime Database in V9: https://firebase.google.com/docs/database/web/start
// Date and time using firebase: https://cloud.google.com/firestore/docs/manage-data/add-data#server_timestamp

// Modules Import
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

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
export const firestore = getFirestore(app);

// Database provider
export const database = getDatabase(app);

// Authentication provider
export const authentication = getAuth();

// Google Auth provider
export const provider = new GoogleAuthProvider();
