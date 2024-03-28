"use client";
import React, { useEffect, useState } from "react";
import { deletePersonRecord, getPersonData } from "../firebase/person";
import { createMember } from "../firebase/memeber";
import { IoCheckmarkSharp } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

const TablePerson = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getPersonData().then((resp) => {
      setPersons(resp);
    });
  }, []);

  const deletePerson = (id) => {
    deletePersonRecord(id).then((resp) =>
      setPersons((p) => p.filter((person) => person.id !== id))
    );
  };

  const acceptPerson = (id) => {
    const {
      nom,
      prenom,
      age,
      number: phoneNumber,
      email,
    } = persons.find((p) => p.id === id);
    createMember(nom, prenom, age, phoneNumber, email).then((resp) => {
      deletePerson(id);
    });
  };

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Age</th>
            <th>PhoneNumber</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className='hover'>
          {persons.map((member, index) => (
            <tr className='hover' key={index}>
              <th>{index + 1}</th>
              <td>{member.nom}</td>
              <td>{member.prenom}</td>
              <td>{member.age}</td>
              <td>{member.number}</td>
              <td>{member.email}</td>
              <td>
                <div className='flex gap-3'>
                  <CgClose
                    className='text-red-600'
                    onClick={() => deletePerson(member.id)}
                  />
                  <IoCheckmarkSharp
                    className='text-green-500 bold'
                    onClick={() => acceptPerson(member.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePerson;
