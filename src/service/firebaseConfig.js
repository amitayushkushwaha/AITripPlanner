// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optionals
const firebaseConfig = {
  apiKey: "AIzaSyBWRsfcIGz2MW7rUaApo6lPDufLUbuP3-g",
  authDomain: "aitripplanner-3eea5.firebaseapp.com",
  projectId: "aitripplanner-3eea5",
  storageBucket: "aitripplanner-3eea5.appspot.com",
  messagingSenderId: "715912919515",
  appId: "1:715912919515:web:45999bda2793f9806f4ffe",
  measurementId: "G-2DCDY4MCNR"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);