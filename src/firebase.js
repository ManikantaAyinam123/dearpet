
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQdFcH1g5yW72nTzTWNYhEKx5lW79pEVw",
  authDomain: "auth-14b35.firebaseapp.com",
  projectId: "auth-14b35",
  storageBucket: "auth-14b35.appspot.com",
  messagingSenderId: "482910693956",
  appId: "1:482910693956:web:71412d63eae744a858ea11"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
 const auth=getAuth();
 const google = new GoogleAuthProvider();
 const github = new GithubAuthProvider();
export{app,auth,google,github};