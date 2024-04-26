import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBFhA2eQtDN0IiZLHu_GMqaDndXiuOhUUs",
    authDomain: "joumya-876d6.firebaseapp.com",
    projectId: "joumya-876d6",
    storageBucket: "joumya-876d6.appspot.com",
    messagingSenderId: "129086415616",
    appId: "1:129086415616:web:ff7fbde5586d6bac44c9e5",
    measurementId: "G-BYC8JZJ95Y"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);