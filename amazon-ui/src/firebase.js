// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIwnHYPM_lTbiTVfr1opM2LMmLCNPB8uM",
    authDomain: "clonen-nz.firebaseapp.com",
    projectId: "clonen-nz",
    storageBucket: "clonen-nz.appspot.com",
    messagingSenderId: "445577032982",
    appId: "1:445577032982:web:4cd37553c1e0402add8c37",
    measurementId: "G-EMN36HE2KP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore();
const auth = getAuth();
export { auth };
export default db;
