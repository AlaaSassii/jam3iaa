"use client";
import React, { useEffect, useState } from "react";
import { useCreateEvent } from "../../../hooks/Store/useCreateEvent";
import { getEvents } from "../../../firebase/event";
import EventsCard from "../../../components/EventsCart";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useLanguage } from "../../../hooks/useLanguage";

const Page = () => {
  const { language, setLanguage } = useLanguage();
  const { events, getEvent } = useCreateEvent((state) => ({
    events: state.events,
    getEvent: state.getEvent,
  }));

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    getEvents()
      .then((data) => {
        getEvent(data);
        setFilteredEvents(data); // Initialize filteredEvents with all events
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Filter events based on searchQuery, title, address, and description
    const filtered = events.filter((event) => {
      const eventName = event.name ? event.name.toLowerCase() : ""; // Check if event name exists
      const eventAddress = event.address ? event.address.toLowerCase() : ""; // Check if event address exists
      const eventDescription = event.description
        ? event.description.toLowerCase()
        : ""; // Check if event description exists
      const eventDate = event.date ? event.date.toString() : ""; // Convert date to string and check if it exists

      return (
        eventName.includes(searchQuery.toLowerCase()) || // Check if event name includes search query
        eventAddress.includes(searchQuery.toLowerCase()) || // Check if event address includes search query
        eventDescription.includes(searchQuery.toLowerCase()) || // Check if event description includes search query
        eventDate.includes(searchQuery.toLowerCase()) // Check if event date includes search query
      );
    });
    setFilteredEvents(filtered);
  }, [searchQuery, events]);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className='flex flex-col justify-center items-center gap-5 mt-20'>
        <div>
          <label className='input input-bordered flex items-center gap-2'>
            <input
              type='text'
              className='grow'
              placeholder='Search'
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
          </label>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4  z-1'>
          {filteredEvents.map((e, i) => (
            <EventsCard
              title={e.name}
              path={e.image}
              address={e.address}
              disc={e.description}
              link={`events/${e.id}`}
              key={i}
            />
          ))}
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

export default Page;
