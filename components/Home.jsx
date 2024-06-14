"use client";
import React from "react";
import { GrContact } from "react-icons/gr";

import { components } from "../lang";
import { useLanguage } from "../hooks/useLanguage";

const Home = ({ language }) => {
  return (
    <div className="w-full bg-black h-screen home-container" id="home">
      <div
        className="
                text-center
                px-2
                md:px-20
                w-full
                h-screen
                flex
                flex-col
                items-center
                justify-center"
      >
        <h1 className=" text-white text-[30px]  md:text-[50px] font-extrabold">
          {components.HomeC?.[language].Title}
        </h1>
        <p className="text-neutral-300 font-bold mt-2 ">
          {components.HomeC?.[language].secondTitle}
        </p>
        <p className="text-neutral-300 font-bold mt-2">
          {components.HomeC?.[language].thirdTitle}
        </p>
        <button
          className="p-3 text-sm md:text-base rounded-xl bg-rose-500 text-white mt-4 font-bold cursor-pointer hover:bg-rose-600 flex items-center gap-3"
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
          }}
        >
          {" "}
          <GrContact size={20} />{" "}
          <div>{components.HomeC?.[language].rejoignezNous}</div>
        </button>
      </div>
    </div>
  );
};

export default Home;
