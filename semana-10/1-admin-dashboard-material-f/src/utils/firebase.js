// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
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
  initializeApp(config);
};

export const firebaseRegisterUser = (email, password) => {
  createUserWithEmailAndPassword(getAuth(), email, password)
    .then((credentials) => {
      console.log(credentials);
    })
};

export const firebaseLogIn = async (credentials) => {
  const { email, password } = credentials;

  try {
    const auth = getAuth();
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const firebaseReadCollection = async (collectionName) => {
  let list = [];
  const query = collection(getFirestore(), collectionName);
  const response = await getDocs(query);
  response.forEach((document) => {
    let element = document.data();
    // element.id = document.id;
    list.push(element);
  });
  return list;
};