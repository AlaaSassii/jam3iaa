"use client";

const TableMember = ({ members }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>nom</th>
            <th>prenom</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {members?.map((member, index) => (
            <tr className='hover' key={index}>
              <th>{index + 1}</th>
              <td>{member.nom}</td>
              <td>{member.prenom}</td>
              <td>{member.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMember;
