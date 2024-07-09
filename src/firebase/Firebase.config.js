// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ApsSb3zg7Ku2VdTygJrlst2MqCYCwpU",
  authDomain: "simple-firebase-bf0e1.firebaseapp.com",
  projectId: "simple-firebase-bf0e1",
  storageBucket: "simple-firebase-bf0e1.appspot.com",
  messagingSenderId: "611674430341",
  appId: "1:611674430341:web:4205e1c92e8735341702ec"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const auth = getAuth(App);

export default auth;