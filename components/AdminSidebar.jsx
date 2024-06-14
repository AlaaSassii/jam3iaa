"use client";

import { IoCloseSharp, IoPersonAddSharp } from "react-icons/io5";
import AdminSidebarLink from "./AdminSidebarLink";

import React, { useState } from "react";
import { MdEvent } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { FaCalculator, FaDonate, FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import useSidebarStore from "../hooks/Store/useSidebarStore";

const AdminSidebar = () => {
  const sideBar = useSidebarStore();

  return (
    <div
      className={`fixed  z-30 transition-transform duration-500 ease-in-out 
       `}
    >
      <div
        className={`bg-black fixed p-50 text-white h-full w-[208px] flex flex-col items-center justify-center
           ${sideBar.isOpen ? "" : "hidden"}`}
      >
        <div
          className='absolute  text-white top-2 right-2 cursor-pointer hover:scale-105 transition  md:hidden'
          onClick={sideBar.onClose}
        >
          <IoCloseSharp size={32} />
        </div>
        <img
          src={"/images/logo.png"}
          width={80}
          height={90}
          alt='logo'
          className='pt-5 pb-5'
        />

        <div className='flex flex-col  h-screen overflow-y-auto w-full'>
          <AdminSidebarLink
            title='Overview'
            to='/admin/overview'
            icon={MdDashboard}
          />
          <AdminSidebarLink
            title='Projets en cours'
            to='/admin/events'
            icon={MdEvent}
          />
          <AdminSidebarLink
            title='Activity'
            to='/admin/activity'
            icon={RxActivityLog}
          />
          <AdminSidebarLink
            title='Members'
            to='/admin/members'
            icon={FaUsers}
          />
          <AdminSidebarLink
            title='Accept Members'
            to='/admin/request-members'
            icon={IoPersonAddSharp}
          />
          <AdminSidebarLink
            title='comptabilité'
            to='/admin/comptabilite'
            icon={FaCalculator}
          />
          <AdminSidebarLink
            title='donations'
            to='/admin/support'
            icon={FaDonate}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
