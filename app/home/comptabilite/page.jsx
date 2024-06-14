"use client";
import React, { useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

import { app } from "../../../firebase/firebase";
import Link from "next/link";
import AdminSidebar from "../../../components/AdminSidebar";
import AdminNavbar from "../../../components/AdminNavbar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useLanguage } from "../../../hooks/useLanguage";
const page = () => {
  const [data, setData] = React.useState([]);
  const { language, setLanguage } = useLanguage();
  useEffect(() => {
    const storage = getStorage(app) || null;
    const listRef = ref(storage, "pdf/");

    listAll(listRef)
      .then((listResult) => {
        return Promise.all(
          listResult.items.map((itemRef) => {
            return getDownloadURL(itemRef).then((url) => {
              return { name: itemRef.name, url };
            });
          })
        );
      })
      .then((urls) => {
        console.log("Download URLs:", urls);
        setData(urls);
      })
      .catch((error) => {
        console.error("Error listing files:", error);
      });
  }, []);
  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className=' pt-2'>
        <h1>2023</h1>
        <div className='flex flex-col md:flex-row gap-4 '>
          <Link
            href={"/comtabilite/2023(1).PNG"}
            target='_blank'
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2023(1).PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={"/comtabilite/2023(2).PNG"}
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2023(2).PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={"/comtabilite/2023(3).PNG"}
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2023(3).PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={"/comtabilite/2023(4).PNG"}
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2023(4).PNG' alt='' />
          </Link>
        </div>
        <h1 className='text-4xl'>2022</h1>
        <div className='flex flex-col md:flex-row gap-4 '>
          <Link
            href={
              "https://drive.google.com/file/d/1rI3nF1sVe_MNLJXDmFv_9-ncV_EtuNWK/view"
            }
            target='_blank'
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/jam3ia1.PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1tlTyO7_bl4zei6109cxGW5MePYf0dPin/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/jam3ia4.PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1RZmYvEoDFAvjlDJXMo4P8S6wEQI2D3wJ/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2022(3).PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1uJlaJM_H1MpN6KfgVuij2_sssCJCrU40/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2022(4).PNG' alt='' />
          </Link>
        </div>
        <h1 className='text-4xl'>2021</h1>

        <div className='flex flex-col md:flex-row gap-4'>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1RZmYvEoDFAvjlDJXMo4P8S6wEQI2D3wJ/view"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2021(1).PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1RZmYvEoDFAvjlDJXMo4P8S6wEQI2D3wJ/view"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/jam3ia3.PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={
              "https://mail.google.com/mail/u/0/#inbox/FMfcgzGxTPBXvBdrDDHGHHxxPRgqqxvW?projector=1"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/jam3ia2.PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1RZmYvEoDFAvjlDJXMo4P8S6wEQI2D3wJ/view"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2021(2).PNG' alt='' />
          </Link>
        </div>
        <h1 className='text-4xl'>2020</h1>
        <div className='flex flex-col md:flex-row gap-4'>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1NMLn7yfiE072L8b41AqSlYDKA38ssnuF/view"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2020.PNG' alt='' />
          </Link>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/10sNl5GkNaTsp1_NoNe5EBrFa5F_hyuxw/view"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2020(2).PNG' alt='' />
          </Link>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1f6Zz-8qqSBoB8lT_FQ8UWzCrLOy8shbb/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2020(3).PNG' alt='' />
          </Link>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1jHYp1y7vToHKvMDDnBgWGAzAuF_Ti-mg/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2020(4).PNG' alt='' />
          </Link>
        </div>
        <h1 className='text-4xl'>2019</h1>
        <div className='flex flex-col md:flex-row gap-4'>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/10IMyGVcP5ghKeLNHoxFVIWGVhBiZ7fDF/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2019(1).PNG' alt='' />
          </Link>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1uGyf2GZeu7wdywz0Ow4cR0JD5kgtzTUK/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2019(2).PNG' alt='' />
          </Link>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1bm7zpluaDp1Cgz5vbI4PykqtRnxeqXtw/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2019(3).PNG' alt='' />
          </Link>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1m1pnOjdF8Z1D6LmMWg0eXIq9bSC0FIsr/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2019(4).PNG' alt='' />
          </Link>
        </div>
        <h1 className='text-4xl'>2018</h1>
        <div className='flex flex-col md:flex-row gap-4'>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/192QrWo6rbj6hXI-tteKAEgzZ532veEPc/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2018(2).PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1wl9gRkNXBQn7wDrNgXWW07d354d7n1AY/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2018(1).PNG' alt='' />
          </Link>

          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1b5ndqzsiMkkD-s_v4CvjhgHgjgHqoRSX/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2018(3).PNG' alt='' />
          </Link>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1yvQp69dc8O-gVnZc5dpRjtX3mZ7UOP7z/view?usp=sharing"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/2018(4).PNG' alt='' />
          </Link>
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

export default page;
