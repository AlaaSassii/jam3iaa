"use client";
import AdminSidebar from "../../../components/AdminSidebar";
import AdminNavbar from "../../../components/AdminNavbar";
import ModalCreateMember from "../../../components/ModalCreateMember";
import TableMember from "../../../components/TableMember";
import { PrefixPathnameNormalizer } from "next/dist/server/future/normalizers/request/prefix";

const page = () => {

  const members = [
    { nom: "rayen", prenom: "benhassen", age: 32 },
    
    // Add more member objects as needed
  ];

  return (
    <div className=''>
      <AdminSidebar />
      <AdminNavbar title={"Members"} />

      <div className='md:pl-[218px] pt-2'>
        <ModalCreateMember />
        <TableMember members={members} />
      </div>
    </div>
  );
};

export default page;
