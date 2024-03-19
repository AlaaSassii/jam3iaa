"use client";

import { IoCloseSharp } from "react-icons/io5";
import AdminSidebarLink from "./AdminSidebarLink";

import React, {  useState } from "react";
import { MdEvent } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";

const AdminSidebar = () => {

  const [openMenu , setOpenMenu] = useState(true);
  console.log(openMenu);

  return (
    <div
      className={`fixed  z-30 transition-transform duration-500 ease-in-out 
       `}
    >
      <div className={`bg-black fixed p-50 text-white h-full w-[208px] flex flex-col items-center justify-center
           ${openMenu ? '' : 'hidden'}`}
      >
        <div
          className='absolute  text-white top-2 right-2 cursor-pointer hover:scale-105 transition  md:hidden'
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <IoCloseSharp size={32} />
        </div>
        <img
          src={'/images/logo.png'}
          width={80}
          height={90}
          alt='logo'
          className='pt-5 pb-5'
        />

        <div className='flex flex-col h-screen overflow-y-auto'>
          <AdminSidebarLink title='Events' to='/' icon={MdEvent} />
          <AdminSidebarLink title='Activity' to='/' icon={RxActivityLog} />
          <AdminSidebarLink title='Members' to='/' icon={FaUsers} />
          
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
