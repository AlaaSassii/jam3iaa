"use client";
import { useState } from "react";
import { addContact } from "../firebase/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
    try {
      // Call the Firebase function to add the contact
      await addContact(formData.email, formData.title, formData.description);
      console.log("Contact added successfully!");
      // Optionally, you can clear the form after submission
      setFormData({
        title: "",
        description: "",
        email: "",
      });
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <div
      className='flex flex-col items-center gap-4 mt-20 bg-rose-100 p-2'
      id='contact'
    >
      <div className='font-bold text-lg md:text-4xl'> Contactz-nous </div>
      <div className='w-full '>
        <div className='max-w-3xl mx-auto mt-8 flex flex-col md:flex-row  justify-between items-center gap-10  '>
          <div className='w-full p-3 md:pr-8'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-1'>
                  Your Email
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
              <div>
                <label htmlFor='title' className='block mb-1'>
                  Title
                </label>
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border rounded-md'
                />
              </div>
              <div>
                <label htmlFor='description' className='block mb-1'>
                  Description
                </label>
                <textarea
                  id='description'
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  rows='4'
                  className='w-full px-3 py-2 border rounded-md'
                />
              </div>
              <button
                type='submit'
                className='w-full py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
