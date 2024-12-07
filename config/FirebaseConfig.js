// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import {EXPO_PUBLIC_API_KEY} from "@env";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPDEecifLU9ItolgZabfAey6En-ZorZ4o",
  authDomain: "ai-travel-planner-3bb4a.firebaseapp.com",
  projectId: "ai-travel-planner-3bb4a",
  storageBucket: "ai-travel-planner-3bb4a.firebasestorage.app",
  messagingSenderId: "1022497793710",
  appId: "1:1022497793710:web:72e438ffbef8a27194ef3f",
  measurementId: "G-HPFFVBQM5C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);