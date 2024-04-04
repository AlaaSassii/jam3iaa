import { db } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const supportCollection = collection(db, "support");

export const getSupports = async () => {
    const data = await getDocs(supportCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const createSupport = async (typeDonate, nom, prenom, age, number, adresse, sexe, email) => {
    const docRef = await addDoc(supportCollection, { typeDonate, nom, prenom, age, number, adresse, sexe, email });
    return docRef.id;
};

export const editSupport = async (typeDonate, nom, prenom, age, number, adresse, sexe, email) => {
    const supportDoc = doc(db, "support", id);
    const newSupport = { typeDonate, nom, prenom, age, number, adresse, sexe, email };
    await updateDoc(supportDoc, newSupport);
};

export const deleteSupport = async (id) => {
    const supportDoc = doc(db, "support", id);
    await deleteDoc(supportDoc);
};
