import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const number = "21652931041";

  const whatsappURL = "https://api.whatsapp.com/send/?phone=" + number;
  return (
    <div className='fixed bottom-8 right-8 w-[60px] h-[60px] flex justify-center items-center text-white bg-gradient-to-tr  from-green-400 to-green-500 rounded-full p-2 z-50 cursor-pointer shadow-green-300  shadow-sm'>
      <a href={whatsappURL} target='_blank' rel='noopener noreferrer'>
        <FaWhatsapp className='text-4xl' />
      </a>
    </div>
  );
};

export default Whatsapp;
