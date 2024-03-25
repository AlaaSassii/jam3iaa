'use client'
import React from 'react'
import ActivityCard from "./ActivityCart";

const Activity = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-20' id='activity'>
        <div className='font-bold text-lg md:text-4xl'>  les trois derniers activités </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10 mx-4 '>

            <ActivityCard title={"Shoes!"} path={"news/1.jpg"} adress={"sousse"} disc={"If a dog chews shoes whose shoes does he choose?"}/>
            <ActivityCard title={"Shoes!"} path={"news/2.jpg"} adress={"sousse"} disc={"If a dog chews shoes whose shoes does he choosesadasd asdasd?"}/>
            <ActivityCard title={"Shoes!"} path={"news/3.jpg"} adress={"sousse"} disc={"If a dog chews shoes whose shoes does he choose?"}/>
            
        

            
           

        </div>
        
    </div>
  )
}

export default Activity