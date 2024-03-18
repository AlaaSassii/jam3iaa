import AdminSidebar from "../../../components/AdminSidebar";
import ModalCreateActivity from "../../../components/ModalCreateActivity";
import React from "react";

const page = () => {
  return (
    <div className=''>
      <AdminSidebar />
      <div className='pl-[218px] pt-2'>
        <ModalCreateActivity />
      </div>
    </div>
  );
};

export default page;
