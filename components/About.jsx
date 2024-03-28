"use client";
import React from "react";
import { components } from "../lang";

import { IoMdCheckmark } from "react-icons/io";

const About = ({ language }) => {
  return (
    <div className='flex flex-col  items-center gap-10 w-full ' id='about'>
      <div className='font-bold text-lg md:text-4xl'>
        {components.About?.[language].bigTitle}
      </div>

      <div className=' grid grid-cols-1 lg:grid-cols-2   gap-5 mx-[5%]  bg-rose-100 rounded-2xl p-3'>
        <div className=' w-[90%] m-auto'>
          <img
            src='about/group-people-volunteering-foodbank-poor-people.jpg'
            className='rounded-xl '
            alt=''
          />
        </div>

        <div
          className={` w-full flex flex-col gap-10 ${
            language == "ar" ? "text-end" : "text-start"
          }`}
        >
          <div className='flex flex-col gap-2 w-full '>
            <div className='font-bold text-lg md:text-2xl '>
              {" "}
              {components.About?.[language].title}{" "}
            </div>
            <div className='font-semibold text-sm md:text-lg text-rose-500'>
              {components.About?.[language].secondTitle}
            </div>
            <p className='text-xs md:text-lg'>
              {components.About?.[language].paragraphe}{" "}
            </p>
          </div>

          <div className='flex  gap-5 items-center'>
            <div className='flex flex-col gap-2 '>
              <div className='font-bold text-lg md:text-2xl  '>
                {components.About?.[language].title2}
              </div>
              <div className='text-xs'>
                {components.About?.[language].paragraphe2}{" "}
              </div>

              <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                <IoMdCheckmark />
                <div>{components.About?.[language].message1}</div>
              </div>
              <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                <IoMdCheckmark />
                <div>{components.About?.[language].message2}</div>
              </div>
              <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                <IoMdCheckmark />
                <div>{components.About?.[language].message3}</div>
              </div>
              <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                <IoMdCheckmark />
                <div>{components.About?.[language].message4}</div>
              </div>
            </div>
            <div className='flex flex-col gap-4 '>
              <div className='flex flex-col'>
                <div className='font-bold text-4xl text-rose-500'>2020</div>
                <div>{components.About?.[language].foundedTitle}</div>
              </div>
              <div className='flex flex-col'>
                <div className='font-bold text-4xl text-rose-500'>1089B</div>
                <div>{components.About?.[language].doanteTitle}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
