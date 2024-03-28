"use client";
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { components } from "../lang";
import { useLanguage } from "../hooks/useLanguage";
const Navbar = () => {

  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 722) {
      setIsMenuOpen(false);
    }
  }, []);
  return (
    <div className=''>
      <div className='flex justify-between lg:justify-around  items-center bg-gray-800 z-100000'>
        <img
          src={"/images/logo.png"}
          width={80}
          height={50}
          alt='logo'
          className='p-1 mx-2'
        />

        <ul
          className={` flex-col bg-neutral-800 p-10 gap-5 top-0 text-sm lg:text-base w-full lg:w-auto lg:flex-row lg:bg-transparent lg:p-2 lg:gap-0 lg:relative flex justify-center items-center text-rose-600 lg:text-rose-600 font-semibold fixed ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <li className='cursor-pointer px-2 hover:text-black transition'>
            <a href='http://localhost:3000/home#home'>
              {components.Navbar?.[language].Accueil}
            </a>
          </li>
          <li className='cursor-pointer px-2 hover:text-black transition'>
            <a href='http://localhost:3000/home#about'>
              {components.Navbar?.[language].aProposNous}
            </a>
          </li>
          <li className='cursor-pointer px-2 hover:text-black transition'>
            <a href='http://localhost:3000/home/events'>
              {components.Navbar?.[language].Événements}
            </a>
          </li>
          <li className='cursor-pointer px-2 hover:text-black transition'>
            <a href='http://localhost:3000/home/activities'>
              {components.Navbar?.[language].Activités}
            </a>
          </li>
          <li className='cursor-pointer px-2 hover:text-black transition'>
            <a href='http://localhost:3000/home#contact'>
              {components.Navbar?.[language].contactezNous}
            </a>
          </li>
          <IoMdClose
            size={30}
            className='lg:hidden absolute top-5 right-5 '
            onClick={toggleMenu}
          />
        </ul>
        <select
          defaultValue={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            console.log({ language: e.target.value });
          }}
        >
          <option value='fr'>Francais</option>
          <option value='ar'>العربية</option>
        </select>
        <div
          className='hidden lg:block bg-white text-sm  p-2 my-2 rounded-2xl font-semibold cursor-pointer hover:text-rose-500 '
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
          }}
        >
          {components.Navbar?.[language].contactezNous}
        </div>

        <IoMenu
          className='lg:hidden text-white mx-2'
          onClick={toggleMenu}
          size={35}
        />
      </div>
    </div>
  );
};

export default Navbar;
