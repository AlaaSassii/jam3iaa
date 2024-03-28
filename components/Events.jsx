"use client";
import React, { useEffect, useState } from "react";
import EventsCard from "./EventsCart";

import { components } from "../lang";
import { useLanguage } from "../hooks/useLanguage";
import { getEvents } from "../firebase/event";

const Events = ({ language }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((resp) => setEvents(resp.reverse().slice(0, 3)));
  }, []);
  return (
    <div className='flex flex-col items-center gap-4 my-20' id='events'>
      <div className='font-bold text-lg md:text-4xl'>
        {" "}
        {components.Events?.[language].title}{" "}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10 mx-4 '>
        {events.map((e, i) => (
          <EventsCard
            title={e.name}
            path={e?.image}
            adress={e?.address}
            disc={e?.description}
            key={i}
          />
        ))}
      </div>
      <div className='font-bold text-lg md:text-2xl text-center '>
        {" "}
        {events.length === 0
          ? language === "ar"
            ? "لا توجد أحداث بعد"
            : "Il n'y a pas encore d'événements.."
          : null}
      </div>
    </div>
  );
};

export default Events;
