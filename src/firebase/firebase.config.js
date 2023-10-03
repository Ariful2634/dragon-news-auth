// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjyN_Zq5yV2-nNDwMVumdizA1Y3HQq-QA",
  authDomain: "dragon-news-auth-f8e23.firebaseapp.com",
  projectId: "dragon-news-auth-f8e23",
  storageBucket: "dragon-news-auth-f8e23.appspot.com",
  messagingSenderId: "1022632975676",
  appId: "1:1022632975676:web:4adce4060bdd0e2040d239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;