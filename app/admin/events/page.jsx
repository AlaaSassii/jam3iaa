"use client";
import AdminNavbar from "../../../components/AdminNavbar";
import AdminSidebar from "../../../components/AdminSidebar";
import ModalCreateEvent from "../../../components/ModalCreateEvent";
import { useCreateEvent } from "../../../hooks/Store/useCreateEvent";
import React, { useEffect } from "react";
import InfoCard from "../../../components/InfoCard";
import { deleteEvent, getEvents } from "../../../firebase/event";
import { useAdminPassword } from "../../../hooks/Store/useAdminPassword";
const page = () => {
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
    deleteEvent: deleteEventF,
    addEvents,
    handleEditInput,
    changeStatus,
    changeId,
    events,
    getEvent,
  } = useCreateEvent((state) => ({
    getInputs: state.getInputs,
    openModal: state.openModal,
    deleteEvent: state.deleteEvent,
    handleEditInput: state.handleEditInput,
    changeStatus: state.changeStatus,
    changeId: state.changeId,
    events: state.events,
    addEvents: state.addEvents,
    getEvent: state.getEvent,
  }));

  const deleteEventFunction = (id) => {
    deleteEvent(id)
      .then((res) => deleteEventF(id))
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
    getEvents()
      .then((data) => {
        getEvent(data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!passwordStored) return null;

  return (
    <div className=''>
      <AdminSidebar />
      <AdminNavbar title={"Events"} />
      <div className='md:pl-[218px] pt-2'>
        <ModalCreateEvent />
        <div className='flex flex-wrap gap-3'>
          {events?.map((event) => (
            <InfoCard
              id={event.id}
              image={event.image}
              name={event.name}
              description={event.description}
              date={event.date}
              address={event.address}
              time={event.time}
              getInputs={getInputs}
              changeId={changeId}
              changeStatus={changeStatus}
              handleEditInput={handleEditInput}
              deleteFunction={deleteEventFunction}
              openModal={openModal}
              link={event.link}
              key={event.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
