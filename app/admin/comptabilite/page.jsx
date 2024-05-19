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
        <Link
          href={""}
          className='text-pink-700 block decoration-inherit underline p-2'
        ></Link>
      </div>
    </>
  );
};

export default page;
