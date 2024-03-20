import React from 'react'

const AdminOverviewCard = ({icon:Icon,title,number}) => {
  return (
    <div className="bg-white shadow-lg w-[350px] rounded-lg flex flex-col justify-around gap-3 pb-4 relative ">
        <div className='absolute bottom-[78px] ml-2   '><Icon size={50} /></div>
        <div className="p-3 font-bold text-lg text-center cursor-pointer">{title}</div>
        <div className="w-full bg-rose-400 text-right p-3 font-bold text-lg text-white cursor-pointer  ">{number}</div>
    </div>
  )
}

export default AdminOverviewCard