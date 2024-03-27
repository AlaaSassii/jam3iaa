'use client'
import React from 'react'



const Welcome = () => {
  return (
    <div className='w-full my-20'>
        <div className='flex flex-col items-center gap-4'>
            <div className='font-bold text-lg md:text-4xl'>bienvenue à la charité au bon cœur</div>

            <div className='grid grid-cols-2 md:grid-cols-4 text-center gap-4 md:gap-5 mx-2'>

                <div className='flex flex-col items-center gap-3 p-4  bg-neutral-100 rounded-lg cursor-pointer shadow-xl transition hover:-translate-y-2 hover:bg-neutral-200'>
                    <img className='w-20 md:w-32' src="icons/hands.png"  alt="" />
                    <div className='font-semibold'>accueillir un bénévole</div>
                </div>

                <div className='flex flex-col items-center gap-3 p-4 bg-neutral-100 rounded-lg cursor-pointer shadow-xl transition hover:-translate-y-2 hover:bg-neutral-200'>
                    <img className='w-20 md:w-32' src="icons/heart.png" alt="" />
                    <div className='font-semibold'>Entretien de la Terre</div>
                </div>

                <div className='flex flex-col items-center gap-3 p-4 bg-neutral-100 rounded-lg cursor-pointer shadow-xl transition hover:-translate-y-2 hover:bg-neutral-200'>
                    <img src="icons/receive.png" width={120} alt="" />
                    <div className='font-semibold'>Faire une don</div>
                </div>

                <div className='flex flex-col items-center gap-3 p-4 bg-rose-500 rounded-lg cursor-pointer shadow-xl transition hover:-translate-y-2 hover:bg-neutral-200'>
                    <img src="icons/scholarship.png" width={120} alt="" />
                    <div className='font-semibold'>programme de bourses</div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Welcome