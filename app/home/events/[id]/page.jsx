"use client";
import React, { useEffect, useState } from "react";
import { getEvents } from "../../../../firebase/event";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { useLanguage } from "../../../../hooks/useLanguage";
import Link from "next/link";

const Page = ({ params }) => {
  const { language, setLanguage } = useLanguage();

  const [data, setData] = useState(null);

  useEffect(() => {
    getEvents().then((resp) => {
      const newData = resp?.find((a) => a.id === params.id) || null;
      setData(newData);
    });
  }, [params.id]);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      {data ? (
        <div className='container mx-auto px-4 py-8'>
          <div className='max-w-4xl mx-auto'>
            <img className='w-full mb-4 rounded-lg' src={data.image} alt='' />
            <h2 className='text-2xl font-bold mb-2'>{data.name}</h2>
            <p className='text-gray-700 mb-2'>
              <span className=' font-semibold'>Description:</span>{" "}
              {data.description}
            </p>
            <div className='w-full flex flex-col md:flex-row  justify-center gap-3 mt-3'>
              <p className='text-gray-700 mb-2 p-2 bg-neutral-200 rounded-lg flex gap-3 items-center cursor-pointer '>
                <img src='/eventsSinglepage/date.png' className='w-10' alt='' />
                <div className='font-bold'>Date</div>
                <div>{data.date}</div>
              </p>
              <p className='text-gray-700 mb-2 p-2 bg-neutral-200 rounded-lg flex gap-3 items-center cursor-pointer'>
                <img
                  src='/eventsSinglepage/cloock.png'
                  className='w-10'
                  alt=''
                />
                <div className='font-bold'>Le temps</div>
                <div>{data.time}</div>
              </p>
              <p className='text-gray-700 mb-2 p-2 bg-neutral-200 rounded-lg flex gap-3 items-center cursor-pointer'>
                <img src='/eventsSinglepage/map.png' className='w-10' alt='' />
                <div className='font-bold'>Adresse</div>
                <div>{data.address}</div>
              </p>
            </div>
            <h1 className='inline'>Link: </h1>
            <Link
              href={data?.link || ""}
              target='_blank'
              className="text-blue-500"
            >
              {data.link}
            </Link>
            {/* Add more fields as needed */}
          </div>
        </div>
      ) : (
        <p className='text-center mt-8'>Loading...</p>
      )}
      <Footer language={language} />
    </>
  );
};

export default Page;
