"use client"
import React, { useContext } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import useSidebarStore from "../hooks/Store/useSidebarStore";


const AdminNavbar = ({title}) => {

    const sideBar = useSidebarStore();

    
  return (
    <div className=' md:ml-52 py-2 px-6 bg-white flex justify-between items-center shadow-md shadow-black/5 sticky top-0 left-0 z-10 '>
      <div className='flex justify-center items-center cursor-pointer '>
        <div
          
          className='md:hidden hover:scale-105 transition '
        >
          <IoMenuSharp size={26} onClick={()=>{sideBar.isOpen ? sideBar.onClose():sideBar.onOpen()}} />
        </div>
        <div className='ml-10 font-bold'>{title}</div>
      </div>

      <div className='flex justify-center items-center gap-3 mr-0 cursor-pointer hover:bg-neutral-200 transition p-2 rounded'>
        <FaUserCircle size={26} />
        <div className='font-bold'>Admin</div>
        <IoMdArrowDropdown size={20} />
      </div>
    </div>
  )
}

export default AdminNavbar