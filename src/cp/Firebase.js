// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1w27OY6DwUEeaytTk5qCNrLWNDiATdHM",
  authDomain: "fir-netflix-gpt0.firebaseapp.com",
  projectId: "fir-netflix-gpt0",
  storageBucket: "fir-netflix-gpt0.appspot.com",
  messagingSenderId: "710142278397",
  appId: "1:710142278397:web:818345280d22d9a38d9c94",
  measurementId: "G-B9PVLBL984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);