// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1nXV4Pefd133uXEOe_44xwI_qWlTY7gk",
  authDomain: "nomacal-6edae.firebaseapp.com",
  projectId: "nomacal-6edae",
  storageBucket: "nomacal-6edae.firebasestorage.app",
  messagingSenderId: "408847828307",
  appId: "1:408847828307:web:d3d9aca1ec5c6a54634da6",
  measurementId: "G-KCJ5TS3VZ9"
};


// Initialize Firebase only once
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);