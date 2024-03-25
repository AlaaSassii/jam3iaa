'use client'
import React, { useState , useEffect} from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(()=>{
        if(window.innerWidth < 722){
            setIsMenuOpen(false)
        }},[])

    

    return (
        <div className=''>
            <div className="flex justify-between md:justify-around  items-center bg-rose-200">
                <img
                src={'/images/logo.png'}
                width={80}
                height={50}
                alt='logo'
                className='p-1'
                />
                
                <ul className={`absolute flex-col bg-neutral-800 p-10 gap-5 top-0 w-full md:w-auto md:flex-row md:bg-transparent md:p-2 md:gap-0 md:relative flex justify-center items-center text-rose-600 md:text-rose-600 font-semibold ${isMenuOpen ? '' : 'hidden '}`}>
                    <li className="cursor-pointer px-2 hover:text-black transition"><a href="#home">Accueil</a></li>
                    <li className="cursor-pointer px-2 hover:text-black transition"><a href="#about">À propos nous</a></li>
                    <li className="cursor-pointer px-2 hover:text-black transition"><a href="#events">événements</a></li>
                    <li className="cursor-pointer px-2 hover:text-black transition"><a href="#activity">activités</a></li>
                    <li className="cursor-pointer px-2 hover:text-black transition"><a href="#contact">Contactez-nous</a></li>
                    <IoMdClose size={30} className="md:hidden absolute top-5 right-5 " onClick={toggleMenu}/>
                </ul>
                <div className="hidden md:block bg-white  p-3 my-2 rounded-2xl font-semibold cursor-pointer hover:text-rose-500 " onClick={()=>{document.getElementById('my_modal_1').showModal()}}>Contactez nous</div>
                <IoMenu className="md:hidden text-black mx-2" onClick={toggleMenu} size={35}/>
            </div>
        </div>
    );
}

export default Navbar;
