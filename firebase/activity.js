import { db } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const activityCollection = collection(db, "activities");


export const getActivity = async () => {
    const data = await getDocs(activityCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
};

export const createActivity = async (name, description, image, date) => {
    const docRef = await addDoc(activityCollection, { name, description, image, date });
    return docRef.id;
}

export const editActivity = async (id, name, description, image, date) => {
    const activityDoc = doc(db, "activities", id);
    const newActivty = { name, description, image, date };
    await updateDoc(activityDoc, newActivty);
};

export const deleteActivity = async (id) => {
    const activityDoc = doc(db, "activities", id);
    await deleteDoc(activityDoc);
};

