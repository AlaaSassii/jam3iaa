"use client";

import { useCreateMember } from "../hooks/Store/useCreateMember";

const ModalCreateMember = () => {
  const {
    addMember,
    inputs,
    clearInputs,
    getInputs,
    status,
    id,
    updateMember,
    changeStatus,
    events,
  } = useCreateMember((state) => ({
    addMember: state.addMember,
    inputs: state.inputs,
    clearInputs: state.clearInputs,
    getInputs: state.getInputs,
    status: state.status,
    id: state.id,
    updateMember: state.updateMember,
    changeStatus: state.changeStatus,
    events: state.events,
  }));

  const handleClick = () => {
    if (status === "create") {
      if (inputs.nom && inputs.prenom && inputs.age) {
        addMember(inputs);
        clearInputs();
      } else {
        alert("false");
      }
    }
    // } else if (status === "edit") {
    //   updateEvent({ ...inputs }, id);
    //   console.log(events);
    // }
  };
  return (
    <div className='z-0'>
      <button
        className='btn'
        onClick={() => {
          document.getElementById("my_modal_3").showModal();
        }}
      >
        Create Member
      </button>
      <dialog id='my_modal_3' className='modal bg-white'>
        <div className='modal-box'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-lg'>Add New Member</h3>
            <p className='py-4'>Press ESC key or click on ✕ button to close</p>
            <label htmlFor=''>Prenom</label>
            <input
              type='text'
              placeholder='Prenom'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => getInputs("prenom", e.target.value)}
              value={inputs.prenom}
            />
            <label htmlFor=''>Nom</label> {/* Updated label */}
            <input
              className='textarea textarea-bordered '
              placeholder='Nom'
              onChange={(e) => getInputs("nom", e.target.value)}
              value={inputs.nom}
            ></input>
            <label htmlFor=''>Age</label>
            <input
              type='number'
              placeholder='Age'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => getInputs("age", e.target.value)}
              value={inputs.age}
            />
            <button
              className='btn btn-outline btn-accent w-fit flex '
              onClick={handleClick}
            >
              Submit
              {/* {status === "create" ? "Submit" : "Edit"} */}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalCreateMember;
