import { useEffect, useState } from "react";
import { useCreateMember } from "../hooks/Store/useCreateMember";
import { createMember, getMembers } from "../firebase/memeber";

const TableMember = ({ persons }) => {
  const { members, getMembersState } = useCreateMember((state) => ({
    members: state.members,
    getMembersState: state.getMembers,
  }));
  useEffect(() => {
    getMembers().then((res) => {
      getMembersState(res);
      console.log({ res });
    });
  }, []);

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
        <tbody>
          {members?.map((member, index) => (
            <tr className='hover' key={index}>
              <th>{index + 1}</th>
              <td>{member.nom}</td>
              <td>{member.prenom}</td>
              <td>{member.age}</td>
              <td>{member.phoneNumber}</td> <td>{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMember;
