import React from 'react'

const ActivityCart = ({title,path,disc,adress}) => {
    return (
      <div className="card w-full bg-base-100 shadow-xl cursor-pointer transition hover:-translate-y-2 hover:bg-rose-100">
              <figure><img src={path} alt="Shoes" /></figure>
              <div className="flex flex-col p-3 gap-0">
                  <h2 className="card-title">
                  {title}
                  <div className="badge badge-secondary bg-rose-500 text-white">NEW</div>
                  </h2>
                  <div className='flex justify-center items-center gap-10'>
                      <div className='flex flex-col gap-0'>
                          <div className='flex gap-2 w-[30%] '>
                              <p className='font-semibold text-xs md:text-sm'>Adresse:</p>
                              <p className='text-xs md:text-sm '>{adress}</p>
                          </div>
                          <div className='flex gap-2 w-[30%] '>
                              <p className='font-semibold text-xs md:text-sm'>Adresse:</p>
                              <p className='text-xs md:text-sm '>{adress}</p>
                          </div>
                          <div className='flex gap-2 w-[30%] '>
                              <p className='font-semibold text-xs md:text-sm'>Date:</p>
                              <p className='text-xs md:text-sm '>18/07/2024</p>
                          </div>
                      </div>
                      
                      <p className='text-xs '><div className='font-semibold text-xs md:text-sm'>Description :</div>{disc}</p>
                  </div>
                  
              </div>
      </div>
    )
  }

export default ActivityCart