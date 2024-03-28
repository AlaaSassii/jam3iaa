"use client";
import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCart";

import { components } from "../lang";
import { useLanguage } from "../hooks/useLanguage";
import { getActivities } from "../firebase/activity";

const Activity = ({ language }) => {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    getActivities().then((resp) => setActivity(resp.reverse().slice(0, 3)));
  });
  return (
    <div className='flex flex-col items-center gap-4 my-20' id='activity'>
      <div className='font-bold text-lg md:text-4xl'>
        {" "}
        {components.Activity?.[language].title}{" "}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10 mx-4 '>
        {activity.map((e, i) => (
          <ActivityCard
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
        {activity.length === 0
          ? language === "ar"
            ? "للا توجد أنشطة بعد"
            : "Il n'y a pas encore d'activités.."
          : null}
      </div>
    </div>
  );
};

export default Activity;
