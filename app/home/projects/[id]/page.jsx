"use client";
import React, { useEffect, useState, getActivities } from "react";

import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { components } from "../../../../lang";
import { useLanguage } from "../../../../hooks/useLanguage";
import axios from "axios";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios("/json/projects.json").then((res) =>
      setData(res.data.projects.find((p) => p.id === Number(params.id)))
    );
  }, []);
  
  const { language, setLanguage } = useLanguage();
  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-center text-2xl font-bold mb-5'>
            {data?.title?.[language]}
          </h2>
          <img className='w-full mb-4 rounded-lg' src={data?.image} alt='' />

          <div className=' text-center text-gray-700 my-5 font-semibold '>
            <h1 className='bg-rose-500 rouneded p-2 text-white rounded-lg'>
              {components.project_Single_Page?.[language].description}
            </h1>
          </div>

          {/* <p className='text-center'></p> */}
                {data?.description.map((d) =>
                language === "ar" ? (
                  <p className='text-right pb-2 ' id=''>
                  {d[language]}
                  </p>
                ) : (
                  <p className='text-left pb-2 ' id=''>
                  {d[language]}
                  </p>
                )
                )}
                
                <div className=' text-center text-gray-700 my-5 font-semibold '>
                
                  {data?.activities?.length > 0 ? (
                    <h1 className='bg-rose-500 rouneded p-2 text-white rounded-lg'>
                      {components.project_Single_Page?.[language].activity}
                    </h1>) : ""}
                
                </div>

                <div className='w-full flex flex-col md:flex-col  justify-center gap-3 mt-3 '>
                {/* <div className='flex flex-col'>
                  <div className='font-bold'>
                    Parrainage de veufs et de veuves
                  </div>
                  <div className='p-1 text-xs'>
                    Aide aux familles nécessiteuses pendant le mois sacré
                  </div>
                  </div> */}
            {data?.activities.map((p) => (
              <div className='text-gray-700 p-2 bg-neutral-200 rounded-lg flex items-center cursor-pointer '>
                <div className='flex flex-col w-full'>
                  {language === "fr" ? (
                    <>
                      <div className='font-bold'>{p[language]?.name}</div>
                      <div className='p-1 text-xs'>
                        {p[language]?.description}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='font-bold text-right'>
                        {p[language]?.name}
                      </div>
                      <div className='p-1 text-xs text-right'>
                        {p[language]?.description}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Add more fields as needed */}
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

export default page;
