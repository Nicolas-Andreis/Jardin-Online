import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1d0pkpMq7AEyTRQrtlOwlZtADcKXqBqQ",
    authDomain: "jardin-online.firebaseapp.com",
    projectId: "jardin-online",
    storageBucket: "jardin-online.appspot.com",
    messagingSenderId: "550348750685",
    appId: "1:550348750685:web:2a1a6430d01928025f72b4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);