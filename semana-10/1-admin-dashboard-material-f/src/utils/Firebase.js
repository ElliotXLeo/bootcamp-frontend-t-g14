// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = () => {
  const config = {
    apiKey: "AIzaSyC1A77D9z0rCUatPrJ8_27XAshRZgscVk4",
    authDomain: "admin-dashboard-eg.firebaseapp.com",
    projectId: "admin-dashboard-eg",
    storageBucket: "admin-dashboard-eg.appspot.com",
    messagingSenderId: "264626093820",
    appId: "1:264626093820:web:294d29a12006b442c8e179",
    measurementId: "G-3PSJVR32J3"
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const analytics = getAnalytics(app);
}