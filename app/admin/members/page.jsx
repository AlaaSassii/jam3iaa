"use client";
import AdminSidebar from "../../../components/AdminSidebar";
import AdminNavbar from "../../../components/AdminNavbar";
import ModalCreateMember from "../../../components/ModalCreateMember";
import TableMember from "../../../components/TableMember";
import { useCreateMember } from "../../../hooks/Store/useCreateMember";
const page = () => {
  const { members } = useCreateMember((state) => ({
    members: state.members,
  }));
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
