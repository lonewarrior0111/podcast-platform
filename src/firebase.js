// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDgbgamxXFSKlJ9b80m8v5EQofYu6gvTk",
  authDomain: "podcast-platform-c8ae9.firebaseapp.com",
  projectId: "podcast-platform-c8ae9",
  storageBucket: "podcast-platform-c8ae9.appspot.com",
  messagingSenderId: "1089381169894",
  appId: "1:1089381169894:web:01bce1f4aa4a0588435927",
  measurementId: "G-82EV7STTNX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
