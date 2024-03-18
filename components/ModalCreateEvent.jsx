"use client";
import React from "react";

const ModalCreateEvent = () => {
  return (
    <div className='z-0'>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className='btn'
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Create Activity
      </button>
      <dialog id='my_modal_3' className='modal bg-white'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-lg'>Add New Event</h3>
            <p className='py-4'>Press ESC key or click on ✕ button to close</p>
            <label htmlFor=''>Event Name</label>
            <input
              type='text'
              placeholder='Activity Name'
              className='input input-bordered w-[150%] max-w-xs'
            />
            <label htmlFor=''>Event Name</label>
            <textarea
              className='textarea textarea-bordered w-full'
              placeholder='Activity Description'
            ></textarea>
            <label htmlFor=''>Add Image</label>

            <input
              type='file'
              className='file-input file-input-bordered w-full max-w-xs'
            />
            <label htmlFor=''>Date</label>
            <input
              type='text'
              placeholder='Date'
              className='input input-bordered w-[150%] max-w-xs'
            />
            <button className='btn btn-outline btn-accent w-fit flex '>
              Accent
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalCreateEvent;
