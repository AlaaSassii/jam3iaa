import { db } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const memberCollection = collection(db, "members");

export const getMembers = async () => {
    const data = await getDocs(memberCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const createMember = async (nom, prenom, age, phoneNumber, email) => {
    const docRef = await addDoc(memberCollection, { nom, prenom, age, phoneNumber, email });
    return docRef.id;
};

export const editMember = async (id, nom, prenom, age, phoneNumber, email) => {
    const memberDoc = doc(db, "members", id);
    const updatedData = { nom, prenom, age, phoneNumber, email };
    await updateDoc(memberDoc, updatedData);
};

export const deleteMember = async (id) => {
    const memberDoc = doc(db, "members", id);
    await deleteDoc(memberDoc);
};
