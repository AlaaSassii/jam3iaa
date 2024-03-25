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

<<<<<<< HEAD
export const editEvent = async (id, name, description, image, date, address, time) => {
=======
export const editEvent = async (id, name, description, image, date) => {
>>>>>>> 9eb0c98f7e78f7a81f743f2f2f0c31859b9d8eee
    const eventDoc = doc(db, "events", id);
    const newEvent = { name, description, image, date, address, time };
    await updateDoc(eventDoc, newEvent);
};

export const deleteEvent = async (id) => {
    const eventDoc = doc(db, "events", id);
    await deleteDoc(eventDoc);
};
