"use client";
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { components } from "../lang";

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

import ModalDonate from "./ModalDonate";
import axios from "axios";

const Navbar = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 722) {
      setIsMenuOpen(false);
    }
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    axios("/json/projects.json").then((res) => setData(res.data.projects));
  }, []);

  return (
    <>
      <ModalDonate language={language} />
      <div className='z-50 '>
        <div className='bg-rose-500 px-2 lg:px-20 text-white py-2 flex justify-between items-center text-xs lg:text-base flex-col lg:flex-row gap-2 '>
          <div className='text-xs'>
            Email : associationarij.contact@gmail.com{" "}
          </div>

          <div className='text-xs'>
            Adresse : Avenue association arij 4060 kalaa kebirasousse{" "}
          </div>

          <div className='text-xs'>RIB : 17503000000265043581 </div>

          <div className='flex gap-2 items-center text-xs'>
            <div>TELL : 54 253 094 |</div>
            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com/associationarij'
                target='_blank'
                className='text-white'
              >
                <FaFacebook size={20} />
              </a>
              <a href='#' className='text-white'>
                <AiFillInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
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
              <Link href='/home#home'>
                {components.Navbar?.[language]?.Accueil}
              </Link>
            </li>
            <li className='cursor-pointer px-2 hover:text-black transition'>
              <Link href='/home#about'>
                {components.Navbar?.[language]?.aProposNous}
              </Link>
            </li>
            <li className='cursor-pointer px-2 hover:text-black transition'>
              <Link href='/home/events'>
                {components.Navbar?.[language].Événements}
              </Link>
            </li>
            <li className='cursor-pointer px-2 hover:text-black transition'>
              <Link href='/home/activities'>
                {components.Navbar?.[language].Activités}
              </Link>
            </li>
            <li className='cursor-pointer px-2 hover:text-black transition'>
              <Link href='/home#contact'>
                {components.Navbar?.[language].contactezNous}
              </Link>
            </li>

            <li className='cursor-pointer px-2 hover:text-black transition'>
              <Link href='/home/comptabilite'>
                {components.Navbar?.[language].comptabilité}
              </Link>
            </li>
            <div className={` projects`}>
              <li className='cursor-pointer px-2 hover:text-black  transition relative '>
                {components.Navbar?.[language].projects}
              </li>

              <ul className='absolute bg-white p-2 rounded projects_liste '>
                {data?.map((p) => (
                  <Link href={`/home/projects/${p.id}`}>
                    <li className='hover:text-rose-500 hover:bg-rose-100 transition rounded p-2 text-center w-40 text-xs'>
                      {p.title?.[language]}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div
              className=' lg:hidden bg-white text-sm  p-2 my-2 rounded-2xl font-semibold cursor-pointer hover:text-rose-500 '
              onClick={() => {
                document.getElementById("my_modal_2").showModal();
              }}
            >
              {components.Navbar?.[language].Donate}
            </div>
            <IoMdClose
              size={30}
              className='lg:hidden absolute top-5 right-5 '
              onClick={toggleMenu}
            />
          </ul>
          <select
            className='fixed right-0 top-[50%] py-2 bg-rose-500 text-white z-30'
            defaultValue={language}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option value='fr'>Fr</option>
            <option value='ar'>Ar</option>
          </select>
          <div
            className='hidden lg:block bg-white text-sm  p-2 my-2 rounded-2xl font-semibold cursor-pointer hover:text-rose-500 '
            onClick={() => {
              document.getElementById("my_modal_2").showModal();
            }}
          >
            {components.Navbar?.[language].Donate}
          </div>

          <IoMenu
            className='lg:hidden text-white mx-2'
            onClick={toggleMenu}
            size={35}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
