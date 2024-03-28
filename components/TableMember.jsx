"use client";
import { useEffect, useState } from "react";
import { useCreateMember } from "../hooks/Store/useCreateMember";
import { createMember, getMembers, delleteMember } from "../firebase/memeber";

const TableMember = ({ persons }) => {
  const handleDelete = async (id) => {
    try {
      await deleteMember(id);
      delleteMember(id);
      // Handle member deletion from UI or fetch updated member list
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  const { members, getMembersState, deleteMember } = useCreateMember(
    (state) => ({
      members: state.members,
      getMembersState: state.getMembers,
      deleteMember: state.deleteMember,
    })
  );

  useEffect(() => {
    getMembers().then((res) => {
      getMembersState(res);
      console.log({ res });
    });
  }, [getMembers]);

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Noms</th>
            <th>Prenom</th>
            <th>Age</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members?.map((member, index) => (
            <tr className='hover' key={index}>
              <th>{index + 1}</th>
              <td>{member.nom}</td>
              <td>{member.prenom}</td>
              <td>{member.age}</td>
              <td>{member.phoneNumber}</td> <td>{member.email}</td>
              <td>
                {/* Add delete button */}
                <button onClick={() => handleDelete(member.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMember;
