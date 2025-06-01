import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcppSd2IXzkrxcdRuJ6MdpZFWEEE93ngw",
  authDomain: "netflixgpt-f3ea6.firebaseapp.com",
  projectId: "netflixgpt-f3ea6",
  storageBucket: "netflixgpt-f3ea6.firebasestorage.app",
  messagingSenderId: "142010779905",
  appId: "1:142010779905:web:b98549509f6364856d7300",
  measurementId: "G-V2LP4PWC6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();