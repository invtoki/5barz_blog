// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCR_WEC5UqxjjfXew2V9KS6wz45Idktts",
  authDomain: "barz-c322e.firebaseapp.com",
  databaseURL: "https://barz-c322e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "barz-c322e",
  storageBucket: "barz-c322e.firebasestorage.app",
  messagingSenderId: "955774685769",
  appId: "1:955774685769:web:cee6a0139beb347689a598",
  measurementId: "G-NK90LYHDPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);