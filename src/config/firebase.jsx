// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWeJWwp9IeBI3f78X4jMbj-1bobLzRYR0",
  authDomain: "learnfirebase13122024.firebaseapp.com",
  projectId: "learnfirebase13122024",
  storageBucket: "learnfirebase13122024.firebasestorage.app",
  messagingSenderId: "264743328878",
  appId: "1:264743328878:web:c2f42acc74fbbef5e19a7f",
  measurementId: "G-YMV6ER2HDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics }