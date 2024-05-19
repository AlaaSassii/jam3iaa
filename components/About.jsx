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

      <div className='mx-[5%]  bg-rose-100 rounded-2xl p-3'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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

            
          </div>
        </div>

        <div className="p-2 md:p-5 mt-3">
          <div className='flex flex-col md:flex-row   gap-5 items-center justify-around'>

            <div className='flex flex-col gap-2 '>
              <div className='font-bold text-lg md:text-2xl  '>
                {components.About?.[language].title2}
              </div>
              
              <ul className="text-xs md:text-sm ml-5 circle-list gap-2" >
                <li>{components.About?.[language].message1}</li>
                <li>{components.About?.[language].message2}</li>
                <li>{components.About?.[language].message3}</li>
                <li>{components.About?.[language].message4}</li>
                <li>{components.About?.[language].message5}</li>
                <li>{components.About?.[language].message6}</li>
                <li>{components.About?.[language].message7}</li>
                <li>{components.About?.[language].message8}</li>
                <li>{components.About?.[language].message9}</li>
                <li>{components.About?.[language].message10}</li>
                <li>{components.About?.[language].message11}</li>
                <li>{components.About?.[language].message12}</li>
                <li>{components.About?.[language].message13}</li>
                <li>{components.About?.[language].message14}</li>
                <li>{components.About?.[language].message15}</li>
                <li>{components.About?.[language].message16}</li>
                <li>{components.About?.[language].message17}</li>
                <li>{components.About?.[language].message18}</li>
                
              </ul>

              
            </div>

            <div className='flex flex-col gap-4 '>
              <div className='flex flex-col'>
                <div className='font-bold text-4xl text-rose-500'>2018</div>
                <div>{components.About?.[language].foundedTitle}</div>
              </div>
              <div className='flex flex-col'>
                <div className='font-bold text-4xl text-rose-500'>1089B</div>
                <div>{components.About?.[language].donateTitle}</div>
              </div>
            </div>

          </div>
        </div>
        
      </div>


    </div>
  );
};

export default About;
