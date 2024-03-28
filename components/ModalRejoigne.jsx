"use client";
import { useState } from "react";
import { addPersonRecord } from "../firebase/person";
const ModalRejoigne = ({ language }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    number: "",
    adresse: "",
    sexe: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the Firebase function to add person record
    try {
      const docId = await addPersonRecord(
        formData.nom,
        formData.prenom,
        formData.age,
        formData.number,
        formData.adresse,
        formData.sexe,
        formData.email
      );
      console.log("Document added with ID: ", docId);
      // Reset form data to initial state
      setFormData({
        nom: "",
        prenom: "",
        age: "",
        number: "",
        adresse: "",
        sexe: "",
        email: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div>
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box bg-white'>
          <h3 className='font-bold text-lg'>Rejoignez-nous !!</h3>
          <div className='py-4'>
            <div className='max-w-md mx-auto mt-8'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label htmlFor='nom' className='block mb-1'>
                    Nom
                  </label>
                  <input
                    type='text'
                    id='nom'
                    name='nom'
                    value={formData.nom}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                  />
                </div>
                <div>
                  <label htmlFor='prenom' className='block mb-1'>
                    Prénom
                  </label>
                  <input
                    type='text'
                    id='prenom'
                    name='prenom'
                    value={formData.prenom}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                  />
                </div>
                <div>
                  <label htmlFor='age' className='block mb-1'>
                    Age
                  </label>
                  <input
                    type='text'
                    id='age'
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                  />
                </div>
                <div>
                  <label htmlFor='number' className='block mb-1'>
                    Number
                  </label>
                  <input
                    type='text'
                    id='number'
                    name='number'
                    value={formData.number}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                  />
                </div>
                <div>
                  <label htmlFor='adresse' className='block mb-1'>
                    Adresse
                  </label>
                  <input
                    type='text'
                    id='adresse'
                    name='adresse'
                    value={formData.adresse}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                  />
                </div>
                <div>
                  <label htmlFor='sexe' className='block mb-1'>
                    Sexe
                  </label>
                  <select
                    id='sexe'
                    name='sexe'
                    value={formData.sexe}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                    defaultValue=''
                  >
                    <option value=''>Select</option>
                    <option value='homme'>Homme</option>
                    <option value='femme'>Femme</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='email' className='block mb-1'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <div className='flex justify-center'>
                <button className='btn'>Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalRejoigne;
