import { db } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const contactsCollection = collection(db, "contacts");

export const getContactData = async () => {
    const data = await getDocs(contactsCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const addContact = async (email, title, description) => {
    const docRef = await addDoc(contactsCollection, { email, title, description });
    return docRef.id;
};

export const updateContact = async (id, email, title, description) => {
    const contactDoc = doc(db, "contacts", id);
    const updatedContact = { email, title, description };
    await updateDoc(contactDoc, updatedContact);
};

export const deleteContact = async (id) => {
    const contactDoc = doc(db, "contacts", id);
    await deleteDoc(contactDoc);
};
