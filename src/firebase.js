// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHrSa1uxOtgmmlLpQkgkpkTzMmfU3x6Bs",
  authDomain: "internet-store-d7a86.firebaseapp.com",
  projectId: "internet-store-d7a86",
  storageBucket: "internet-store-d7a86.firebasestorage.com",
  messagingSenderId: "74356785591",
  appId: "1:74356785591:web:ce88ba2e7f795668496832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);