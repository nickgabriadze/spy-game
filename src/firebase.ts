// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDln3dmnC0Vg3NGHnWXSZ7V_-lwHyVCf9c",
  authDomain: "guess-who-is-the-spy.firebaseapp.com",
  projectId: "guess-who-is-the-spy",
  storageBucket: "guess-who-is-the-spy.appspot.com",
  messagingSenderId: "217760298143",
  appId: "1:217760298143:web:1e9ff3281e175817895eaa",
  measurementId: "G-3ESMRR67X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);