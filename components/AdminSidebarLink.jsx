import Link from "next/link";
import React from "react";

const AdminSidebarLink = ({ title, to, icon: Icon }) => {
  return (
    <Link href={to} className='flex items-center p-3 hover:bg-rose-600 transition rounded '>
      <div className='mr-5'>
        <Icon size={24} />
      </div>
      <div>{title}</div>
    </Link>
  );
};

export default AdminSidebarLink;
