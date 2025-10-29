// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnCmR3xmjE4ZB-q7ID_il4K6OyWKT4wAw",
  authDomain: "email-password-auth1-49e1b.firebaseapp.com",
  projectId: "email-password-auth1-49e1b",
  storageBucket: "email-password-auth1-49e1b.firebasestorage.app",
  messagingSenderId: "789234706257",
  appId: "1:789234706257:web:39012a8e69505c911c9570",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
