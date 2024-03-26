import React, { useEffect, useState } from "react";
import { useCreateActivity } from "../hooks/Store/useCreateActivity";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { createActivity, editActivity } from "../firebase/activity";

const ModalCreateActivity = () => {
  const {
    addActivity,
    closeModal,
    inputs,
    clearInputs,
    getInputs,
    status,
    id,
    updateActivity,
    changeStatus,
    activities,
  } = useCreateActivity((state) => ({
    addActivity: state.addActivity,
    modalOpen: state.modalOpen,
    openModal: state.openModal,
    closeModal: state.closeModal,
    inputs: state.inputs,
    clearInputs: state.clearInputs,
    getInputs: state.getInputs,
    status: state.status,
    id: state.id,
    updateActivity: state.updateActivity,
    changeStatus: state.changeStatus,
    activities: state.activities,
  }));
  const [loading, setLoading] = useState(false);

  const uploadFile = (imageUpload) => {
    if (imageUpload == null) return;
    setLoading(true);
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setLoading(false);
          getInputs("image", url);
        });
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        setLoading(false);
      });
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      uploadFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    if (status === "create") {
      if (inputs.name && inputs.description && inputs.date && inputs.image) {
        setLoading(true);
        createActivity(
          inputs.name,
          inputs.description,
          inputs.image,
          inputs.date,
          inputs.address,
          inputs.time
        )
          .then((id) => {
            addActivity(inputs, id);
            clearInputs();
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            console.error(err);
          });
      } else {
        alert("Please fill in all required fields.");
      }
    } else {
      setLoading(true);
      editActivity(
        id,
        inputs.name,
        inputs.description,
        inputs.image,
        inputs.date,
        inputs.address,
        inputs.time
      )
        .then((res) => {
          updateActivity({ ...inputs }, id);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  return (
    <div className='z-0'>
      <button
        className='btn'
        onClick={() => {
          document.getElementById("my_modal_3").showModal();
          clearInputs();
          changeStatus("create");
        }}
      >
        Create Activity
      </button>
      <dialog id='my_modal_3' className='modal bg-white'>
        <div className='modal-box'>
          <form method='dialog'>
            <button
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              onClick={closeModal}
            >
              ✕
            </button>
          </form>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-lg'>Add New Activity</h3>
            <p className='py-4'>Press ESC key or click on ✕ button to close</p>
            <label htmlFor=''>Activity Name</label>
            <input
              type='text'
              placeholder='Activity Name'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => getInputs("name", e.target.value)}
              value={inputs.name}
            />
            <label htmlFor=''>Activity Description</label>
            <textarea
              className='textarea textarea-bordered w-full'
              placeholder='Activity Description'
              onChange={(e) => getInputs("description", e.target.value)}
              value={inputs.description}
            ></textarea>
            <label htmlFor=''>Add Image</label>
            <input
              type='file'
              className='file-input file-input-bordered w-full max-w-xs'
              onChange={handleFileChange}
              value=''
              disabled={loading}
            />
            <label htmlFor=''>Date</label>
            <input
              type='date'
              placeholder='Date'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => getInputs("date", e.target.value)}
              value={inputs.date}
            />
            <label htmlFor=''>Address</label>
            <input
              type='text'
              placeholder='Address'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => getInputs("address", e.target.value)}
              value={inputs.address}
            />
            <label htmlFor=''>Time</label>
            <input
              type='text'
              placeholder='Time'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => getInputs("time", e.target.value)}
              value={inputs.time}
            />
            <button
              className='btn btn-outline btn-accent w-fit flex '
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner loading-sm'></span>
              ) : status === "create" ? (
                "Submit"
              ) : (
                "Edit"
              )}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalCreateActivity;
