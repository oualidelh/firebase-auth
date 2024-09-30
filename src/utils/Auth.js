// Import the Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ6J-tei_7W3rTu3rNryUFXvp83n4B1XI",
  authDomain: "fir-auth-38d0a.firebaseapp.com",
  projectId: "fir-auth-38d0a",
  storageBucket: "fir-auth-38d0a.appspot.com",
  messagingSenderId: "77558463494",
  appId: "1:77558463494:web:addb755726f37492419787",
  measurementId: "G-387JZ7Y5SG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

// Export these services for use in other parts of your app
export { functions, auth, db };
