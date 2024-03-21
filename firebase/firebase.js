import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDuwu_eDUFtdo3gPBRlgol0W64511kbxOk",
    authDomain: "jam3ia-eya.firebaseapp.com",
    projectId: "jam3ia-eya",
    storageBucket: "jam3ia-eya.appspot.com",
    messagingSenderId: "648212172813",
    appId: "1:648212172813:web:da686b3c112967e659c544",
    measurementId: "G-VLCQ13ZQGJ"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);