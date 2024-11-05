// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD28SjFFOk_Azyoe1Ycb0tXs28rQ8dTZG8",
  authDomain: "expense-tracker-ba114.firebaseapp.com",
  databaseURL:
    "https://expense-tracker-ba114-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "expense-tracker-ba114",
  storageBucket: "expense-tracker-ba114.firebasestorage.app",
  messagingSenderId: "25943544813",
  appId: "1:25943544813:web:db4cd6f12ee6f3b66a0de4",
  measurementId: "G-7RNRZFFRQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
