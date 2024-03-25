"use client";
import React, { useEffect } from "react";
import { useCreateActivity } from "../../../hooks/Store/useCreateActivity";
import { getActivities } from "../../../firebase/activity";
import EventsCard from "../../../components/EventsCart";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
const page = () => {
  const {
    activities, // Updated state property name
    getActivities: getActivitiesFunction,
  } = useCreateActivity((state) => ({
    activities: state.activities,
    getActivities: state.getActivities,
  }));
  useEffect(() => {
    getActivities()
      .then((data) => {
        getActivitiesFunction(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div>
        {activities.map((a, i) => (
          <EventsCard
            title={a.name}
            path={a.image}
            adress={a.adress}
            disc={a.description}
            link={`activities/${a.id}`}
            key={i}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default page;
