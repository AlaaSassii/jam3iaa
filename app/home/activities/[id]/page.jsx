"use client";
import React, { useEffect, useState } from "react";
import { getActivities } from "../../../../firebase/activity";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

const page = ({ params }) => {


  const [data, setData] = useState(null);

  useEffect(() => {
    getActivities().then((resp) => {
      const newData = resp?.find((a) => a.id === params.id) || null;
      setData(newData);
      console.log(newData);
    });
  }, [params.id]); 




  return (
    <>
      <Navbar />
      {data ? (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <img className="w-full mb-4 rounded-lg" src={data.image} alt="" />
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <p className="text-gray-700 mb-2"><span className=" font-semibold">Description:</span> {data.description}</p>
            <div className="w-full flex flex-col md:flex-row  justify-center gap-3 mt-3">

              <p className="text-gray-700 mb-2 p-2 bg-neutral-200 rounded-lg flex gap-3 items-center cursor-pointer ">
                <img src="/eventsSinglepage/date.png" className="w-10" alt="" />
                <div className="font-bold">Date</div>
                <div>{data.date}</div>
              </p>
              <p className="text-gray-700 mb-2 p-2 bg-neutral-200 rounded-lg flex gap-3 items-center cursor-pointer">
                <img src="/eventsSinglepage/cloock.png" className="w-10" alt="" />
                <div className="font-bold">Le temps</div>
                <div>{data.time}</div>
              </p>
              <p className="text-gray-700 mb-2 p-2 bg-neutral-200 rounded-lg flex gap-3 items-center cursor-pointer">
                <img src="/eventsSinglepage/map.png" className="w-10" alt="" />
                <div className="font-bold">Adresse</div>
                <div>{data.address}</div>
              </p>
            </div>
            
            {/* Add more fields as needed */}
          </div>
        </div>
      ) : (
        <p className="text-center mt-8">Loading...</p>
      )}
      <Footer />
    </>
  );
};

export default page;
