"use client";

import { components } from "../lang";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = ({ language }) => {
  {
    /*
  console.log({ language });
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
  */
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2wo1y4k", "template_nmg9s5d", form.current, {
        publicKey: "Gq9YmErX_-o0lQmzc",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Reset the form after successful submission
          // Add toast notification for successful email sending
          // You can use a library like react-toastify for this
          // Example:
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          // Add toast notification for failed email sending
          // Example:
          toast.error("Failed to send email!");
        }
      );
  };

  return (
    <div
      className='flex flex-col items-center gap-4 mt-20 bg-rose-100 pb-16'
      id='contact'
    >
      <div className='w-full mb-8 pb-8 bg-white'>
        <h1 className='mb-4 text-center text-3xl font-bold '>
          {language === "ar" ? "الموقع" : "l'emplacement"}
        </h1>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12930.4256683772!2d10.538313!3d35.8831609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8bd158f4f4d3%3A0xf47811755f1a24e5!2zQXNzb2NpYXRpb24gQXJpaiAtINis2YXYudmK2ZHYqSDYo9ix2YrYrA!5e0!3m2!1sen!2stn!4v1717850477429!5m2!1sen!2stn'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
          className='w-[80%] mx-auto h-[600px]'
        ></iframe>
      </div>
      <div className='font-bold text-lg md:text-4xl'>
        {components.contact?.[language].contactnous}
      </div>
      <div className='w-full '>
        <div className='max-w-3xl mx-auto mt-8 flex flex-col md:flex-row  justify-between items-center gap-10  '>
          <div className='w-full p-3 md:pr-8'>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-1'>
                  {components.contact?.[language].email}
                </label>
                <input
                  type='email'
                  name='user_email'
                  className='w-full p-2 rounded'
                />
              </div>
              <div>
                <label htmlFor='title' className='block mb-1'>
                  {components.contact?.[language].titre}
                </label>
                <input
                  type='text'
                  name='user_name'
                  className='w-full p-2 rounded'
                />
              </div>
              <div>
                <label htmlFor='description' className='block mb-1'>
                  {components.contact?.[language].description}
                </label>
                <textarea name='message' className='w-full p-2 rounded' />
              </div>
              <input
                type='submit'
                value={language === "ar" ? "إرسال" : "Envoyer"}
                className='w-full py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
