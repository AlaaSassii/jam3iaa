import AdminNavbar from "../../../components/AdminNavbar";
import AdminSidebar from "../../../components/AdminSidebar";
import ModalCreateEvent from "../../../components/ModalCreateActivity";
import React from "react";

const page = () => {
  return (
    <div className=''>
      <AdminSidebar />
      <AdminNavbar title={"Events"}/>
      <div className='md:pl-[218px] pt-2'>
        <ModalCreateEvent />
      </div>
    </div>
  );
};

export default page;
