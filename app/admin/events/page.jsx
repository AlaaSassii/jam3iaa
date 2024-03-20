"use client";
import AdminNavbar from "../../../components/AdminNavbar";
import AdminSidebar from "../../../components/AdminSidebar";
import ModalCreateEvent from "../../../components/ModalCreateEvent";
import { useCreateEvent } from "../../../hooks/Store/useCreateEvent";
import React from "react";
import InfoCard from "../../../components/InfoCard";
const page = () => {
  const {
    getInputs,
    openModal,
    deleteEvent,
    handleEditInput,
    changeStatus,
    changeId,
    events,
  } = useCreateEvent((state) => ({
    getInputs: state.getInputs,
    openModal: state.openModal,
    deleteEvent: state.deleteEvent,
    handleEditInput: state.handleEditInput,
    changeStatus: state.changeStatus,
    changeId: state.changeId,
    events: state.events,
  }));
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
              getInputs={getInputs}
              changeId={changeId}
              changeStatus={changeStatus}
              handleEditInput={handleEditInput}
              deleteFunction={deleteEvent}
              openModal={openModal}
              key={event.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
