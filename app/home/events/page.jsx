"use client";
import React, { useEffect } from "react";
import { useCreateEvent } from "../../../hooks/Store/useCreateEvent";
import { getEvents } from "../../../firebase/event";
import EventsCard from "../../../components/EventsCart";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
const page = () => {
  const { events, getEvent } = useCreateEvent((state) => ({
    events: state.events,
    getEvent: state.getEvent,
  }));
  useEffect(() => {
    getEvents()
      .then((data) => {
        getEvent(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />

      <div>
        {events?.map((e, i) => (
          <EventsCard
            title={e.name}
            path={e.image}
            adress={e.adress}
            disc={e.description}
            link={`events/${e.id}`}
            key={i}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default page;
