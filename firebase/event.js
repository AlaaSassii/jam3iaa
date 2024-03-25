import { db } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const eventCollection = collection(db, "events");

export const getEvents = async () => {
    const data = await getDocs(eventCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const createEvent = async (name, description, image, date, address, time) => {
    const docRef = await addDoc(eventCollection, { name, description, image, date, address, time });
    return docRef.id;
};

export const editEvent = async (id, name, description, image, date, address, time) => {
    const eventDoc = doc(db, "events", id);
    const newEvent = { name, description, image, date, address, time };
    await updateDoc(eventDoc, newEvent);
};

export const deleteEvent = async (id) => {
    const eventDoc = doc(db, "events", id);
    await deleteDoc(eventDoc);
};
