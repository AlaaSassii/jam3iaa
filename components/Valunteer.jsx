"use client";
import React from "react";

import { components } from "../lang";
import { useLanguage } from "../hooks/useLanguage";

const Valunteer = ({ language }) => {
  return (
    <div className='flex flex-col items-center gap-4 my-20'>
      <div className='font-bold text-lg md:text-4xl'>
        {" "}
        {components.Valunteer?.[language].title}{" "}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 mx-5 '>
        <div className='flex flex-col items-center gap-3 cursor-pointer'>
          <img src='avatar/1.jpg' className='w-80 rounded-t-xl' alt='' />
          <div className='flex flex-col items-center gap-0'>
            <div className='font-bold text-xs md:text-lg'>
              M.Monira ben hajeb
            </div>
            <div className='text-xs md:text-lg'>
              {components.Valunteer?.[language].directeur}
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-3 cursor-pointer'>
          <img src='avatar/2.jpg' className='w-80 rounded-t-xl' alt='' />
          <div className='flex flex-col items-center gap-0'>
            <div className='font-bold text-xs md:text-lg'>
              M.Monira ben hajeb
            </div>
            <div className='text-xs md:text-lg'>
              {components.Valunteer?.[language].directeur}
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-3  cursor-pointer'>
          <img src='avatar/3.jpg' className='w-80 rounded-t-xl' alt='' />
          <div className='flex flex-col items-center gap-0'>
            <div className='font-bold text-xs md:text-lg'>
              M.Monira ben hajeb
            </div>
            <div className='text-xs md:text-lg'>
              {components.Valunteer?.[language].directeur}
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-3  cursor-pointer'>
          <img src='avatar/5.jpg' className='w-80 rounded-t-xl' alt='' />
          <div className='flex flex-col items-center gap-0'>
            <div className='font-bold text-xs md:text-lg'>
              M.Monira ben hajeb
            </div>
            <div className='text-xs md:text-lg'>
              {components.Valunteer?.[language].directeur}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valunteer;
