import React, { useEffect } from "react";
import { useCreateEvent } from "../hooks/Store/useCreateEvent";
const InfoCard = ({
  id,
  image,
  name,
  description,
  date,
  getInputs,
  openModal,
  deleteFunction,
  handleEditInput,
  changeStatus,
  changeId,
  address,
  time,
  link,
}) => {
  const handleEditClick = () => {
    handleEditInput({ image, name, description, date, address, time, link });
    document.getElementById("my_modal_3").showModal();
    changeStatus("edit");
    changeId(id);
  };
  const handleDeleteClick = () => {
    deleteFunction(id);
  };
  return (
    <div className='card w-96 bg-base-100 shadow-xl min-h-[400px]'>
      <img src={image} alt='image' className='h-[200px] object-cover' />
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <p>{address}</p>
        <p>{date}</p>
        <p>{time}</p>
        <a href={link} target='_blank'>
          {link}
        </a>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={handleEditClick}>
            Edit
          </button>
          <button className='btn btn-primary' onClick={handleDeleteClick}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
