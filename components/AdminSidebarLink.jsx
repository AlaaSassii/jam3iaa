import Link from "next/link";
import React from "react";

const AdminSidebarLink = ({ title, to, icon: Icon }) => {
  return (
    <Link href={to} className='flex items-center p-5 hover:bg-gray-200 rounded'>
      <div className='mr-5'>
        <Icon size={24} />
      </div>
      <div>{title}</div>
    </Link>
  );
};

export default AdminSidebarLink;
