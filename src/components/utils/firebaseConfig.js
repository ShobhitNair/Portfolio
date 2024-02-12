// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg39VIZlUa-HRVP8uBEhmIt-NlaWSiDKQ",
  authDomain: "portfolio-964d6.firebaseapp.com",
  projectId: "portfolio-964d6",
  storageBucket: "portfolio-964d6.appspot.com",
  messagingSenderId: "509446663790",
  appId: "1:509446663790:web:4f5f57b43fbb922beb007f",
  measurementId: "G-S04H6L5MNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);