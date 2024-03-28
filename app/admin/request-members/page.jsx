"use client";
import AdminSidebar from "../../../components/AdminSidebar";
import AdminNavbar from "../../../components/AdminNavbar";
import ModalCreateMember from "../../../components/ModalCreateMember";
import { useState, useEffect } from "react";
import { getPersonData } from "../../../firebase/person";
import TablePerson from "../../../components/TablePerson";
import { useAdminPassword } from "../../../hooks/Store/useAdminPassword";


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





  return (
    <div className=''>
      <AdminSidebar/>
      <AdminNavbar title={"Members"} />
      
      <div className='md:pl-[218px] pt-2'>
        <TablePerson />
      </div>
    </div>
  );
};

export default page;
