"use client";
import React, { useEffect, useState } from "react";
import { getEvents } from "../../../../firebase/event";

const page = ({ params }) => {
  const [data, setdata] = useState();
  useEffect(() => {
    getEvents().then((resp) => {
      //  newData=   { name, description, image, date, address, time }
      newData = resp.data.find((a) => a.id === params.id) || null;
      setdata(newData);
    });
  });
  return <div>page</div>;
};

export default page;
