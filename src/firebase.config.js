// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIravtmYuJNteqUr0FP7zC6SnSf02svBw",
  authDomain: "oreby2308.firebaseapp.com",
  projectId: "oreby2308",
  storageBucket: "oreby2308.appspot.com",
  messagingSenderId: "78487555401",
  appId: "1:78487555401:web:f5c405ba0f386de28e5e98",
  measurementId: "G-7E5DPL1Z4F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
