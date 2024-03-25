"use client";
import AdminNavbar from "../../../components/AdminNavbar";
import AdminSidebar from "../../../components/AdminSidebar";
import ModalCreateActivity from "../../../components/ModalCreateActivity"; // Updated import
import { useCreateActivity } from "../../../hooks/Store/useCreateActivity"; // Updated import
import React, { useEffect } from "react";
import InfoCard from "../../../components/InfoCard";
import { deleteActivity, getActivities } from "../../../firebase/activity";
import { useAdminPassword } from "../../../hooks/Store/useAdminPassword";

const Page = () => {
  const { password, passwordStored, storePassword } = useAdminPassword(
    (state) => ({
      password: state.password,
      passwordStored: state.passwordStored,
      storePassword: state.storePassword,
    })
  );

  const {
    getInputs,
    openModal,
    deleteActivity: deleteActivityF, // Updated function name
    handleEditInput,
    changeStatus,
    changeId,
    activities, // Updated state property name
    getActivities: getActivitiesFunction,
  } = useCreateActivity((state) => ({
    getInputs: state.getInputs,
    openModal: state.openModal,
    deleteActivity: state.deleteActivity, // Updated function name
    handleEditInput: state.handleEditInput,
    changeStatus: state.changeStatus,
    changeId: state.changeId,
    activities: state.activities,
    getActivities: state.getActivities,
  }));
  const deleteActivityFunction = (id) => {
    deleteActivity(id)
      .then((res) => deleteActivityF(id))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (!passwordStored) {
      const userPassword = prompt("Admin password");
      if (userPassword === password) {
        storePassword();
      }
    }
  }, []);
  useEffect(() => {
    getActivities()
      .then((data) => {
        getActivitiesFunction(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!passwordStored) return null;
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
                time={activity.time} // Updated variable name
                address={activity.address} // Updated variable name
                description={activity.description} // Updated variable name
                date={activity.date} // Updated variable name
                getInputs={getInputs}
                changeId={changeId}
                changeStatus={changeStatus}
                handleEditInput={handleEditInput}
                deleteFunction={deleteActivityFunction} // Updated function name
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
