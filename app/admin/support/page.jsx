"use client";
import React, { useEffect, useState } from "react";
import { getSupports } from "../../../firebase/support";
const page = () => {
  const [supportMembers, setSupportMembers] = useState([]);
  useEffect(() => {
    getSupports().then((resp) => setSupportMembers(resp));
  }, []);
  return (
    <div>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default page;
