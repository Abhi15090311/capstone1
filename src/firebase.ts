// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // optional

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKGFtMJe3298OjrZhhqBLU9zANImImSo4",
  authDomain: "capstone1-e015e.firebaseapp.com",
  projectId: "capstone1-e015e",
  storageBucket: "capstone1-e015e.firebasestorage.app",
  messagingSenderId: "69206575913",
  appId: "1:69206575913:web:c8111bcde680e6180dc538",
  measurementId: "G-L9JCXSGT5R"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // optional

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
