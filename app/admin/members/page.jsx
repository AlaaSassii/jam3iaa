"use client";
import AdminSidebar from "../../../components/AdminSidebar";
import AdminNavbar from "../../../components/AdminNavbar";
import ModalCreateMember from "../../../components/ModalCreateMember";
import TableMember from "../../../components/TableMember";
import { PrefixPathnameNormalizer } from "next/dist/server/future/normalizers/request/prefix";
import { useAdminPassword } from "../../../hooks/Store/useAdminPassword";
import { useEffect } from "react";

const page = () => {
  const { password, passwordStored, storePassword } = useAdminPassword(
    (state) => ({
      password: state.password,
      passwordStored: state.passwordStored,
      storePassword: state.storePassword,
    })
  );
  useEffect(() => {
    if (!passwordStored) {
      const userPassword = prompt("Admin password");
      if (userPassword === password) {
        storePassword();
      }
    }
  }, []);
  const members = [
    { nom: "rayen", prenom: "benhassen", age: 32 },

    // Add more member objects as needed
  ];
  if (!passwordStored) return <div></div>;
  console.log({ storePassword });
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
