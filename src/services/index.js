// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi7nFw2iFEJZGUDST84KGyPKijTi_q3qU",
  authDomain: "react-camino-ezequiel-38280.firebaseapp.com",
  projectId: "react-camino-ezequiel-38280",
  storageBucket: "react-camino-ezequiel-38280.appspot.com",
  messagingSenderId: "352402163387",
  appId: "1:352402163387:web:8e7259dc50e2add43ccb9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db