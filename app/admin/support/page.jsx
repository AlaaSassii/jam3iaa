"use client";
import React, { useEffect, useState } from "react";
import { deleteSupport, getSupports } from "../../../firebase/support";
import AdminSidebar from "../../../components/AdminSidebar";
import AdminNavbar from "../../../components/AdminNavbar";
const page = () => {
  const [supportMembers, setSupportMembers] = useState([]);
  const handleDelete = async (id) => {
    try {
      await deleteSupport(id);
      setSupportMembers(supportMembers.filter((s) => s.id !== id));
      console.log("sadasdasd");
      // Handle member deletion from UI or fetch updated member list
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };
  useEffect(() => {
    getSupports().then((resp) => setSupportMembers(resp));
  }, []);
  return (
    <>
      <AdminSidebar />
      <AdminNavbar title={"donations"} />
      <div className='md:pl-[218px] pt-2 mx-[5px] '>
        <h2>Supports Table</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Type of Donate</th>
              <th>montant</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {supportMembers.map((support) => (
              <tr key={support.id}>
                <td>{support.nom}</td>
                <td>{support.prenom}</td>
                <td>{support.age}</td>
                <td>{support.number}</td>
                <td>{support.adresse}</td>
                <td>{support.sexe}</td>
                <td>{support.email}</td>
                <td>{support.typeDonate}</td>
                <td>{support?.montant}</td>
                <td
                  className='cursor-pointer'
                  onClick={() => handleDelete(support.id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default page;
