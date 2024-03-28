"use client";
import React, { useEffect, useState } from "react";
import { useCreateActivity } from "../../../hooks/Store/useCreateActivity";
import { getActivities } from "../../../firebase/activity";
import EventsCard from "../../../components/EventsCart";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useLanguage } from "../../../hooks/useLanguage";

const Page = () => {
  const { language, setLanguage } = useLanguage();

  const { activities, getActivities: getActivitiesFunction } =
    useCreateActivity((state) => ({
      activities: state.activities,
      getActivities: state.getActivities,
    }));

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    getActivities()
      .then((data) => {
        getActivitiesFunction(data);
        setFilteredActivities(data); // Initialize filteredActivities with all activities
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Filter activities based on searchQuery, title, address, and description
    const filtered = activities.filter((activity) => {
      const activityName = activity.name ? activity.name.toLowerCase() : "";
      const activityAddress = activity.address
        ? activity.address.toLowerCase()
        : "";
      const activityDescription = activity.description
        ? activity.description.toLowerCase()
        : "";

      return (
        activityName.includes(searchQuery.toLowerCase()) ||
        activityAddress.includes(searchQuery.toLowerCase()) ||
        activityDescription.includes(searchQuery.toLowerCase())
      );
    });
    setFilteredActivities(filtered);
  }, [searchQuery, activities]);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className='h-screen'>
        <div className='flex flex-col justify-center items-center mt-20'>
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
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 mt-5'>
          {filteredActivities.map((activity, i) => (
            <EventsCard
              title={activity.name}
              path={activity.image}
              address={activity.address}
              disc={activity.description}
              link={`activities/${activity.id}`}
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
