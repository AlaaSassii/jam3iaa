"use client";
import { MdDashboard } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { TbTableOptions } from "react-icons/tb";
import { MdInventory } from "react-icons/md";
import { GiRobotGrab } from "react-icons/gi";
import { IoReceipt } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import AdminSidebarLink from "./AdminSidebarLink";

const AdminSidebar = () => {
  return (
    <div
      className={`fixed  z-30 transition-transform duration-500 ease-in-out 
       `}
    >
      <div className='bg-black fixed p-50 text-white h-full w-[208px] flex flex-col items-center justify-center    '>
        <div
          className='absolute  text-white top-2 right-2 cursor-pointer hover:scale-105 transition  md:hidden'
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <IoCloseSharp size={32} />
        </div>
        <img
          src={
            "data:image/jpeg;base64,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"
          }
          width={120}
          height={150}
          alt='logo'
          className='pt-5 pb-5'
        />

        <div className='flex flex-col h-screen overflow-y-auto'>
          <AdminSidebarLink title='Dashboard' to='/' icon={MdDashboard} />
          <AdminSidebarLink title='approvals' to='/' icon={FaCheckCircle} />
          <AdminSidebarLink title='Warehouses' to='/' icon={FaHouseChimney} />
          <AdminSidebarLink title='Groups' to='groups' icon={MdGroups} />
          <AdminSidebarLink title='Sites' to='sites' icon={TbTableOptions} />
          <AdminSidebarLink title='Inventory' to='/' icon={MdInventory} />
          <AdminSidebarLink title='Machinery' to='/' icon={GiRobotGrab} />
          <AdminSidebarLink title='Receipts' to='receipts' icon={IoReceipt} />
          <AdminSidebarLink title='Sales' to='/' icon={AiFillDollarCircle} />
          <AdminSidebarLink title='Staffs' to='staffs' icon={FaUserGroup} />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
