import AdminNavbar from "../../../components/AdminNavbar";
import AdminSidebar from "../../../components/AdminSidebar";
import ModalCreateActivity from "../../../components/ModalCreateActivity";
import React from "react";

const page = () => {
  return (
    <div className=''>
      <AdminSidebar />
      <AdminNavbar title={"Activity"}/>
      <div className='md:pl-[218px] pt-2'>
        <ModalCreateActivity />
      </div>
    </div>
  );
};

export default page;
