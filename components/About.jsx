'use client'
import React from 'react'

import { IoMdCheckmark } from "react-icons/io";

const About = () => {
  return (
    <div className='flex flex-col  items-center gap-10 w-full ' id='about'>
        
        <div className='font-bold text-lg md:text-4xl'>notre histoire</div>

        <div className=' grid grid-cols-1 lg:grid-cols-2  gap-5 mx-[5%]  bg-rose-100 rounded-2xl p-3'>

            <div className=' w-[90%] m-auto'>
                
                <img src="about/group-people-volunteering-foodbank-poor-people.jpg" className='rounded-xl '  alt="" />
            </div>

            <div className=' w-full flex flex-col gap-10'>
                
                <div className='flex flex-col gap-2 w-full'>
                    <div className='font-bold text-lg md:text-2xl ' > Arij association </div>
                    <div className='font-semibold text-sm md:text-lg text-rose-500'>Nous sommes une organisation à but non lucratif</div>
                    <p className='text-xs md:text-lg'>Notre site web de charité incarne la force de la générosité pour créer un impact positif. À travers nos initiatives, nous apportons de l’aide là où elle est nécessaire, </p>
                </div>

                <div className='flex  gap-5 items-center'>
                    <div className='flex flex-col gap-2 '>
                        <div className='font-bold text-lg md:text-2xl '>Notre message</div>
                        <div className='text-xs'>Founedn, notre organisation, incarne l'esprit de la collaboration et de l'innovation. En unissant nos forces et en repoussant les limites, nous œuvrons chaque jour pour faire une différence tangible dans notre communauté et au-delà. </div>
                        
                        <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                            <IoMdCheckmark/>
                            <div>Education</div>
                        </div>
                        <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                            <IoMdCheckmark/>
                            <div>Medical</div>
                        </div>
                        <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                            <IoMdCheckmark/>
                            <div>Amour $ Soin</div>
                        </div>
                        <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                            <IoMdCheckmark/>
                            <div>Eau pure</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <div className='flex flex-col'>
                            <div className='font-bold text-4xl text-rose-500'>2020</div>
                            <div>founded</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='font-bold text-4xl text-rose-500'>1089B</div>
                            <div>Donate</div>
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default About