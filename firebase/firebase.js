import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3V3p34DObni5d-FkrP5Xx7a97QEbZ-3A",
    authDomain: "jam3ia-images.firebaseapp.com",
    projectId: "jam3ia-images",
    storageBucket: "jam3ia-images.appspot.com",
    messagingSenderId: "620222034890",
    appId: "1:620222034890:web:6b3259723b15ab7d189533",
    measurementId: "G-VJ1WQBN3MR"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);