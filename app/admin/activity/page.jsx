"use client";
import AdminNavbar from "../../../components/AdminNavbar";
import AdminSidebar from "../../../components/AdminSidebar";
import ModalCreateActivity from "../../../components/ModalCreateActivity"; // Updated import
import { useCreateActivity } from "../../../hooks/Store/useCreateActivity"; // Updated import
import React from "react";
import InfoCard from "../../../components/InfoCard";

const Page = () => {
  // Renamed function to start with a capital letter
  const {
    getInputs,
    openModal,
    deleteActivity, // Updated function name
    handleEditInput,
    changeStatus,
    changeId,
    activities, // Updated state property name
  } = useCreateActivity((state) => ({
    getInputs: state.getInputs,
    openModal: state.openModal,
    deleteActivity: state.deleteActivity, // Updated function name
    handleEditInput: state.handleEditInput,
    changeStatus: state.changeStatus,
    changeId: state.changeId,
    activities: state.activities, // Updated state property name
  }));

  return (
    <div className=''>
      <AdminSidebar />
      <AdminNavbar title={"Activities"} /> // Updated title
      <div className='md:pl-[218px] pt-2'>
        <ModalCreateActivity />
        <div className='flex flex-wrap gap-3'>
          {activities?.map(
            (
              activity // Updated variable name
            ) => (
              <InfoCard
                id={activity.id} // Updated variable name
                image={activity.image} // Updated variable name
                name={activity.name} // Updated variable name
                description={activity.description} // Updated variable name
                date={activity.date} // Updated variable name
                getInputs={getInputs}
                changeId={changeId}
                changeStatus={changeStatus}
                handleEditInput={handleEditInput}
                deleteFunction={deleteActivity} // Updated function name
                openModal={openModal}
                key={activity.id} // Updated variable name
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Page; // Updated export name
