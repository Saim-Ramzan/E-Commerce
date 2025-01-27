// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBELnp222_hrYiGsTtaG8i0-7yvI6WhNP0",
  authDomain: "mr-electroice-6b98b.firebaseapp.com",
  projectId: "mr-electroice-6b98b",
  storageBucket: "mr-electroice-6b98b.firebasestorage.app",
  messagingSenderId: "363912331899",
  appId: "1:363912331899:web:c0be3e730aeb3937d258de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
export const db = getFirestore(app);
