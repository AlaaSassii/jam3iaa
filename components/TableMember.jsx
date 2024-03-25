import { useEffect } from "react";
import { useCreateMember } from "../hooks/Store/useCreateMember";
import { getMembers } from "../firebase/memeber";

const TableMember = () => {
  const { members, getMembers: getMembersState } = useCreateMember((state) => ({
    members: state.members,
    getMembers: state.getMembers,
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
            <th>Nom</th> {/* Updated header */}
            <th>Prenom</th> {/* Updated header */}
            <th>Age</th>
            <th>PhoneNumber</th> {/* Added header for PhoneNumber */}
            <th>Email</th> {/* Added header for Email */}
          </tr>
        </thead>
        <tbody>
          {members?.map((member, index) => (
            <tr className='hover' key={index}>
              <th>{index + 1}</th>
              <td>{member.nom}</td>
              <td>{member.prenom}</td>
              <td>{member.age}</td>
              <td>{member.phoneNumber}</td>{" "}
              {/* Added table cell for PhoneNumber */}
              <td>{member.email}</td> {/* Added table cell for Email */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMember;
