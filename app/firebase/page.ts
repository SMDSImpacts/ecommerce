
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "genial-runway-313023.firebaseapp.com",
  projectId: "genial-runway-313023",
  storageBucket: "genial-runway-313023.appspot.com",
  messagingSenderId: "172876034383",
  appId: process.env.FIREBASE_API_ID,
  measurementId: "G-WNH23S5TYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
