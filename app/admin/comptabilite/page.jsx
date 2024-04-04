"use client";
import React, { useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

import { app } from "../../../firebase/firebase";
import Link from "next/link";
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
    <div>
      {data.map((value, index) => (
        <Link
          href={value?.url}
          key={index}
          className='text-pink-700 block decoration-inherit underline p-2'
        >
          {value?.name}
        </Link>
      ))}
    </div>
  );
};

export default page;
