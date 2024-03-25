import { db } from "./firebase"; // Assuming you have Firebase setup properly

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

// Assuming you have a collection named "persons" in your Firestore database
const personsCollection = collection(db, "persons");

export const getPersonData = async () => {
    const data = await getDocs(personsCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const addPersonRecord = async (nom, prenom, age, number, adresse, sexe, email) => {
    const docRef = await addDoc(personsCollection, { nom, prenom, age, number, adresse, sexe, email });
    return docRef.id;
};

export const updatePersonRecord = async (id, nom, prenom, age, number, adresse, sexe, email) => {
    const personDoc = doc(db, "persons", id);
    const updatedRecord = { nom, prenom, age, number, adresse, sexe, email };
    await updateDoc(personDoc, updatedRecord);
};

export const deletePersonRecord = async (id) => {
    const personDoc = doc(db, "persons", id);
    await deleteDoc(personDoc);
};
