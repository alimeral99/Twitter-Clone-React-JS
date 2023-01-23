// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmjfYSTtojVGJb_Bd4KrbwY3QMabdkja8",
  authDomain: "twitter-clone-f8cdb.firebaseapp.com",
  projectId: "twitter-clone-f8cdb",
  storageBucket: "twitter-clone-f8cdb.appspot.com",
  messagingSenderId: "444334799304",
  appId: "1:444334799304:web:64434bcd83429dc5bd28fd",
  measurementId: "G-N5PN545ZTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
