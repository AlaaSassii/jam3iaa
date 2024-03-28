"use client";
import React from "react";
import { components } from "../lang";
import { useLanguage } from "../hooks/useLanguage";

const Rejoignez = ({ language }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 rejoindre text-white font-bold py-3  my-20'>
      <div className='w-[80%] text-center text-xs md:text-base'>
        {components.Rejoignez?.[language].paragraphe}
      </div>
      <button
        className='bg-rose-600  py-2 px-10 rounded-xl text-xs md:text-base  btn '
        onClick={() => {
          document.getElementById("my_modal_1").showModal();
        }}
      >
        {components.Rejoignez?.[language]?.rejoignezNous}
      </button>
    </div>
  );
};

export default Rejoignez;
