"use client";



const ModalCreateMember = () => {
 

  return (
    <div className='z-0'>
      <button
        className='btn'
        onClick={() => {
          document.getElementById("my_modal_3").showModal();}}
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

            />
            <label htmlFor=''>Nom</label> {/* Updated label */}
            <input
              className='textarea textarea-bordered '
              placeholder='Nom'

            ></input>
            <label htmlFor=''>Age</label>
            <input
              type='number'
              placeholder='Age'
              className='input input-bordered w-[150%] max-w-xs'

            />
            <button
              className='btn btn-outline btn-accent w-fit flex '
              
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
