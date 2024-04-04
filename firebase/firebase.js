import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdBvtOojeLi6yasRc2mP_TrCYosf8mhpE",
    authDomain: "jam3ia-f2a85.firebaseapp.com",
    projectId: "jam3ia-f2a85",
    storageBucket: "jam3ia-f2a85.appspot.com",
    messagingSenderId: "65927370351",
    appId: "1:65927370351:web:e9a411a7719095cb815f9a"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);