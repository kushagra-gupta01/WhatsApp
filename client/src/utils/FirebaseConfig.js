// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHnSHarbu05z6mBXxH326JIGhUNVq2s1Y",
  authDomain: "whatsapp-clone-dc5ba.firebaseapp.com",
  projectId: "whatsapp-clone-dc5ba",
  storageBucket: "whatsapp-clone-dc5ba.appspot.com",
  messagingSenderId: "489937810092",
  appId: "1:489937810092:web:e1824b4d75378eb7df6509",
  measurementId: "G-XZXZ632PFE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)

