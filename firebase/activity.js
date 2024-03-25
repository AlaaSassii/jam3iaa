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

export const getActivities = async () => {
    const data = await getDocs(activityCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const createActivity = async (name, description, image, date, address, time) => {
    const docRef = await addDoc(activityCollection, { name, description, image, date, address, time });
    return docRef.id;
};

export const editActivity = async (id, name, description, image, date, address, time) => {
    const activityDoc = doc(db, "activities", id);
    const newActivity = { name, description, image, date, address, time };
    await updateDoc(activityDoc, newActivity);
};

export const deleteActivity = async (id) => {
    const activityDoc = doc(db, "activities", id);
    await deleteDoc(activityDoc);
};
