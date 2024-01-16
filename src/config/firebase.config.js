// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJA-vrbW7ff43yBkSFmEfqM6Wgw79rdYo",
  authDomain: "user-email-pass-auth-7dff1.firebaseapp.com",
  projectId: "user-email-pass-auth-7dff1",
  storageBucket: "user-email-pass-auth-7dff1.appspot.com",
  messagingSenderId: "230633912562",
  appId: "1:230633912562:web:097e9731c1a1240145386b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
