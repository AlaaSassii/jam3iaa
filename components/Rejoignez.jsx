'use client'
import React from 'react'

const Rejoignez = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 rejoindre text-white font-bold py-3  my-20'>
        <div className='w-[80%] text-center text-xs md:text-base'>
            "Rejoignez-nous dans notre quête pour un avenir meilleur. Ensemble, nous pouvons réaliser des changements significatifs et positifs dans notre monde. Que vous souhaitiez contribuer avec vos compétences, votre temps ou vos ressources, chaque contribution est précieuse et nous rapproche un peu plus de nos objectifs communs. Ensemble, faisons une différence et bâtissons un avenir plus lumineux pour les générations à venir."
        </div>
        <button className='bg-rose-600  py-2 px-10 rounded-xl text-xs md:text-base  btn ' onClick={()=>{document.getElementById('my_modal_1').showModal()}}>Rejoignez-nous</button>
        
    </div>
  )
}

export default Rejoignez