import { useState } from "react";
import { createMember } from "../firebase/memeber"; // Check if it's 'member' instead of 'memeber'
import { useCreateMember } from "../hooks/Store/useCreateMember";

const ModalCreateMember = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Added phoneNumber state
  const [email, setEmail] = useState(""); // Added email state

  const { addMember } = useCreateMember((state) => ({
    addMember: state.addMember,
  }));

  const handleClick = () => {
    if (prenom && nom && age && phoneNumber && email) {
      createMember(nom, prenom, age, phoneNumber, email) // Updated function call
        .then((resp) => {
          addMember({ nom, prenom, age, phoneNumber, email }, resp); // Updated function call
          setPrenom("");
          setNom("");
          setAge("");
          setPhoneNumber(""); // Reset phoneNumber state
          setEmail(""); // Reset email state
          console.log({ resp });
        })
        .catch((err) => console.log(err));
    }
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
              onChange={(e) => setPrenom(e.target.value)}
              value={prenom}
            />
            <label htmlFor=''>Nom</label>
            <input
              className='textarea textarea-bordered '
              placeholder='Nom'
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
            <label htmlFor=''>Age</label>
            <input
              type='number'
              placeholder='Age'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            <label htmlFor=''>Phone Number</label> {/* Added label */}
            <input
              type='text'
              placeholder='Phone Number'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
            <label htmlFor=''>Email</label> {/* Added label */}
            <input
              type='email'
              placeholder='Email'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button
              className='btn btn-outline btn-accent w-fit flex '
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalCreateMember;
