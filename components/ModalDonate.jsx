"use client";
import { useState } from "react";

import { components } from "../lang";
import { createSupport } from "../firebase/support";

const ModalDonate = ({ language, setLanguage }) => {
  const [formData, setFormData] = useState({
    typeDonate: "donate",
    nom: "",
    prenom: "",
    age: "",
    number: "",
    adresse: "",
    sexe: "",
    email: "",
    montant: "0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const selectChange = (e) => {
    setFormData({ ...formData, typeDonate: e.target.value });
  };
  const selectChangeAmount = (e) => {
    setFormData({ ...formData, montant: e.target.value });
  };
  console.log({ formData });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docId = await createSupport(
        formData.typeDonate,
        formData.nom,
        formData.prenom,
        formData.age,
        formData.number,
        formData.adresse,
        formData.sexe,
        formData.email,
        formData.montant
      );
      console.log("Document added with ID: ", docId);
      setFormData({
        typeDonate: formData.typeDonate,
        nom: "",
        prenom: "",
        age: "",
        number: "",
        adresse: "",
        sexe: "",
        email: "",
        montant: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div>
      <dialog
        id='my_modal_2'
        className={`modal ${language === "ar" ? "text-end" : ""} `}
      >
        <div className='modal-box bg-white'>
          <h3 className='font-bold text-lg'>
            {" "}
            {components.Models?.[language].SponsorAndDonate} !!
          </h3>
          <div className='py-4'>
            <div className='max-w-md mx-auto mt-8'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <select
                    id='typeDnate'
                    name='typeDnate'
                    defaultValue='donate'
                    onChange={selectChange}
                    className='w-full px-3 py-2 border rounded-md '
                    required
                  >
                    <option value='donate' key='Donate'>
                      {components.Models?.[language].Donate}
                    </option>
                    <option value='sponsor' key='Sponsor'>
                      {components.Models?.[language].Sponsor}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor='nom' className='block mb-1'>
                    {components.Models?.[language].nom}
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
                    {components.Models?.[language].prenom}
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
                    {components.Models?.[language].age}
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
                    {components.Models?.[language].number}
                  </label>
                  <input
                    type='number'
                    id='number'
                    name='number'
                    value={formData.number}
                    onChange={handleChange}
                    maxLength={8}
                    minLength={8}
                    className='w-full px-3 py-2 border rounded-md'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='adresse' className='block mb-1'>
                    {components.Models?.[language].adresse}
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
                    {components.Models?.[language].sexe}
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
                  <label htmlFor='amount' className='block mb-1'>
                    {language === "ar" ? "المبلغ" : "montant"}
                  </label>
                  <input
                    id='montant'
                    name='montant'
                    value={formData.montant}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-1'>
                    {components.Models?.[language].email}
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='w-full py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600'
                >
                  {components.Models?.[language].Submit}
                </button>
              </form>
            </div>
          </div>
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <div className='flex justify-center'>
                <button className='btn'>
                  {components.Models?.[language].close}
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalDonate;
