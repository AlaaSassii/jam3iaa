'use client'

import Link from 'next/link';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { useLanguage } from '../../../hooks/useLanguage';
import { useEffect, useState } from 'react';
import axios from 'axios';

const page = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios("/json/projects.json").then((res) => setData(res.data.projects));
    }, []);

    const { language, setLanguage } = useLanguage();
  return (
    <>
        <Navbar language={language} setLanguage={setLanguage} />

        {language==="fr" ? (
            <h1 className="text-3xl font-semibold text-center mt-12"> Projects</h1>
        ):(<h1 className="text-3xl font-semibold text-center mt-12"> المشاريع </h1>)}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">

            {data?.map((p) => (
                    <Link href={`/home/projects/${p.id}`} key={p.id}>
                      <div className={`${ (language == "ar") && "text-end"} bg-white h-68 rounded-lg overflow-hidden shadow-md dark:bg-gray-950`}>
                            
                            <img src={p.image} alt="Card Image" width={300} height={200} className="w-full h-68  object-cover" />
                            
                            <div className="p-4">

                                <h3 className="text-sm font-semibold mb-2">
                                    {p.title?.[language]}
                                </h3>
                                
                            </div>
                        </div>
                    </Link>
                  ))}

            
      
    </section>

        <Footer language={language} />
    
    </>
  )
}

export default page