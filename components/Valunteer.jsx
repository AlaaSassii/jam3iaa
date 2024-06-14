"use client";
import React from "react";

import { components } from "../lang";
import { useLanguage } from "../hooks/useLanguage";

const Valunteer = ({ language }) => {
  return (
    <div className="flex flex-col items-center gap-4 my-20">
      <div className="font-bold text-lg md:text-4xl">
        {" "}
        {components.Valunteer?.[language].bigTitle}{" "}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mx-5 ">
        <div className="flex flex-col items-center gap-3 cursor-pointer">
          <div className="w-72 h-72">
            <img
              src="avatar/11.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-0">
            <div className="font-bold text-xs md:text-lg">
              {components.Valunteer?.[language].title1}
            </div>
            <div className="text-xs md:text-lg">
              {components.Valunteer?.[language].discription1}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 cursor-pointer">
          <div className="w-72 h-72">
            <img
              src="avatar/22.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-0">
            <div className="font-bold text-xs md:text-lg">
              {components.Valunteer?.[language].title2}
            </div>
            <div className="text-xs md:text-lg">
              {components.Valunteer?.[language].discription2}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3  cursor-pointer">
          <div className="w-72 h-72">
            <img
              src="avatar/44.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-0">
            <div className="font-bold text-xs md:text-lg">
              {components.Valunteer?.[language].title4}
            </div>
            <div className="text-xs md:text-lg">
              {components.Valunteer?.[language].discription4}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3  cursor-pointer">
          <div className="w-72 h-72">
            <img
              src="avatar/33.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-0">
            <div className="font-bold text-xs md:text-lg">
              {components.Valunteer?.[language].title3}
            </div>
            <div className="text-xs md:text-lg">
              {components.Valunteer?.[language].discription3}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3  cursor-pointer">
          <div className="w-72 h-72">
            <img
              src="avatar/Capture.PNG"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-0">
            <div className="font-bold text-xs md:text-lg">
              {components.Valunteer?.[language].title5}
            </div>
            <div className="text-xs md:text-lg">
              {components.Valunteer?.[language].discription5}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valunteer;
