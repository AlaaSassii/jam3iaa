"use client";
import React, { useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

import { app } from "../../../firebase/firebase";
import Link from "next/link";
import AdminSidebar from "../../../components/AdminSidebar";
import AdminNavbar from "../../../components/AdminNavbar";
const page = () => {
  const [data, setData] = React.useState([]);
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
      <AdminSidebar />
      <AdminNavbar title={"comptabilite"} />
      <div className='md:pl-[218px] pt-2'>
        <div className='flex gap-4'>
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
            <img src='/comtabilite/jam3ia3.PNG' alt='' />
          </Link>
          <Link
            target='_blank'
            href={
              "https://drive.google.com/file/d/1tlTyO7_bl4zei6109cxGW5MePYf0dPin/view"
            }
            className='text-pink-700 block decoration-inherit underline p-2'
          >
            <img src='/comtabilite/jam3ia4.PNG' alt='' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
