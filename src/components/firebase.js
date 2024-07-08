// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8pYh_CH84EvelRteRoHyZzI9tq5HlQRA",
  authDomain: "travelz-46cb6.firebaseapp.com",
  projectId: "travelz-46cb6",
  storageBucket: "travelz-46cb6.appspot.com",
  messagingSenderId: "111988778071",
  appId: "1:111988778071:web:f9113420b76d362bfeef12",
  measurementId: "G-YH6B16DRYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);