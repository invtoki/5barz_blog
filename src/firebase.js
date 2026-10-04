import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
export const db = getDatabase(app);
