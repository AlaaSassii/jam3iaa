'use client'
import React from 'react'
import { GrContact } from "react-icons/gr";

const Home = () => {
  return (
    <div className='w-full bg-black h-screen home-container'id='home' >
        <div  className='
                text-center
                px-2
                md:px-20
                w-full
                h-screen
                flex
                flex-col
                items-center
                justify-center'>
            <h1 className=' text-white text-[30px]  md:text-[50px] font-extrabold'>Ensemble, nous pouvons faire une différence</h1>
            <p className='text-neutral-300 font-bold '>Dans chaque épreuve se cache une opportunité de croissance. Avec persévérance, chaque défi devient un pas de plus vers le succès.</p>
            <p className='text-neutral-300 font-bold '>Créons Ensemble Un Avenir Meilleur</p>
            <button className='p-3 text-sm md:text-base rounded-xl bg-rose-500 text-white mt-4 font-bold cursor-pointer hover:bg-rose-600 flex items-center gap-3' onClick={()=>{document.getElementById('my_modal_1').showModal()}}> <GrContact size={20}/> <div>Rejoignez-nous</div></button>
        </div>
        

    </div>
  )
}

export default Home