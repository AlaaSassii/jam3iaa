"use client";
import { useState } from "react";
import { addFinancialRecord } from "../firebase/charityFinance"; // Assuming this is where your financial record creation function is defined
import { useCreateFinancialRecord } from "../hooks/Store/useCreateFinancialRecord"; // Assuming this is a custom hook for managing financial record state

const ModalCharityFinance = () => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const { addFinancialRecordFunction } = useCreateFinancialRecord((state) => ({
    addFinancialRecord: state.addFinancialRecord,
  }));

  const handleClick = () => {
    if (type && amount && date) {
      addFinancialRecord(type, amount, date)
        .then((resp) => {
          setType("");
          setAmount("");
          setDate("");
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
          document.getElementById("my_modal_finance").showModal();
        }}
      >
        Add Financial Record
      </button>
      <dialog id='my_modal_finance' className='modal bg-white'>
        <div className='modal-box'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-lg'>Add Financial Record</h3>
            <p className='py-4'>Press ESC key or click on ✕ button to close</p>
            <label htmlFor=''>Type</label>
            <input
              type='text'
              placeholder='Type'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
            <label htmlFor=''>Amount</label>
            <input
              type='number'
              placeholder='Amount'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
            <label htmlFor=''>Date</label>
            <input
              type='date'
              placeholder='Date'
              className='input input-bordered w-[150%] max-w-xs'
              onChange={(e) => setDate(e.target.value)}
              value={date}
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

export default ModalCharityFinance;
