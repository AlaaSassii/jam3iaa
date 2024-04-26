"use client";
import React from "react";

import { components } from "../lang";

const Welcome = ({ language }) => {
  return (
    <div className='w-full my-20 z-0'>
      <div className='flex flex-col items-center gap-4'>
        <div className='font-bold text-lg md:text-4xl'>
          {components.Welcome?.[language]?.title}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 text-center gap-4 md:gap-5 mx-2'>
          <div className='flex flex-col items-center gap-3 p-4  bg-neutral-100 rounded-lg cursor-pointer shadow-xl transition hover:-translate-y-2 hover:bg-neutral-200 relative z-1'>
            <img className='w-20 md:w-32' src='icons/hands.png' alt='' />
            <div className='font-semibold'>
              {components.Welcome?.[language].titleCart1}
            </div>
          </div>

          <div className='flex flex-col items-center gap-3 p-4 bg-neutral-100 rounded-lg cursor-pointer shadow-xl transition hover:-translate-y-2 hover:bg-neutral-200 relative z-1'>
            <img className='w-20 md:w-32' src='icons/heart.png' alt='' />
            <div className='font-semibold'>
              {components.Welcome?.[language].titleCart2}
            </div>
          </div>

          <div className='flex flex-col items-center gap-3 p-4 bg-neutral-100 rounded-lg cursor-pointer shadow-xl transition hover:-translate-y-2 hover:bg-neutral-200 relative z-1'>
            <img src='icons/receive.png' width={120} alt='' />
            <div className='font-semibold'>
              {components.Welcome?.[language].titleCart3}
            </div>
          </div>

          <div className='flex flex-col items-center gap-3 p-4 bg-rose-500 rounded-lg cursor-pointer shadow-xl transition hover:-translate-y-2 hover:bg-neutral-200 relative z-1'>
            <img src='icons/scholarship.png' width={120} alt='' />
            <div className='font-semibold'>
              {components.Welcome?.[language].titleCart4}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
