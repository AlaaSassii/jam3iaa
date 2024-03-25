import { db } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const financeCollection = collection(db, "charityFinance");

export const getFinancialData = async () => {
    const data = await getDocs(financeCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const addFinancialRecord = async (type, amount, date) => {
    const docRef = await addDoc(financeCollection, { type, amount, date });
    return docRef.id;
};

export const updateFinancialRecord = async (id, type, amount, date) => {
    const financeDoc = doc(db, "charityFinance", id);
    const updatedRecord = { type, amount, date };
    await updateDoc(financeDoc, updatedRecord);
};

export const deleteFinancialRecord = async (id) => {
    const financeDoc = doc(db, "charityFinance", id);
    await deleteDoc(financeDoc);
};
