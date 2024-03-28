"use client";
import React from "react";
import EventsCard from "./EventsCart";

import { components } from "../lang";
import { useLanguage } from "../hooks/useLanguage";

const Events = ({ language }) => {
  return (
    <div className='flex flex-col items-center gap-4 my-20' id='events'>
      <div className='font-bold text-lg md:text-4xl'>
        {" "}
        {components.Events?.[language].title}{" "}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10 mx-4 '>
        <EventsCard
          title={"Shoes!"}
          path={"news/1.jpg"}
          adress={"sousse"}
          disc={"If a dog chews shoes whose shoes does he choose?"}
        />
        <EventsCard
          title={"Shoes!"}
          path={"news/2.jpg"}
          adress={"sousse"}
          disc={"If a dog chews shoes whose shoes does he choosesadasd asdasd?"}
        />
        <EventsCard
          title={"Shoes!"}
          path={"news/3.jpg"}
          adress={"sousse"}
          disc={"If a dog chews shoes whose shoes does he choose?"}
        />
      </div>
    </div>
  );
};

export default Events;
