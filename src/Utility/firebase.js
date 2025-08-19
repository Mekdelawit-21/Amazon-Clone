// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHvT_Vj_3VdOaMxyVv-hjMKxVPKrXWnwc",
  authDomain: "clone-dae23.firebaseapp.com",
  projectId: "clone-dae23",
  storageBucket: "clone-dae23.firebasestorage.app",
  messagingSenderId: "94492738605",
  appId: "1:94492738605:web:3f4cacd40ed3ee235964a4",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)  
export const db = app.firestore()
