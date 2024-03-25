"use client";
import React, { useEffect } from "react";
import { getActivities } from "../../../../firebase/activity";

const page = ({ params }) => {
  useEffect(() => {
    getActivities().then((resp) => {
      newData = resp.data.find((a) => a.id === params.id) || null;
      setdata(newData);
    });
  });
  return <div>page</div>;
};

export default page;
