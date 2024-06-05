// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2jHcexA6HnE4YWu5PwBpWg5Uy59wAngQ",
  authDomain: "fir-demo-netflix-gpt0.firebaseapp.com",
  projectId: "fir-demo-netflix-gpt0",
  storageBucket: "fir-demo-netflix-gpt0.appspot.com",
  messagingSenderId: "807056924127",
  appId: "1:807056924127:web:9dab6aaeda23df253ab86a",
  measurementId: "G-5T6BWMH2RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();