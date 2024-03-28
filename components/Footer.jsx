"use client";
import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";
import { components } from "../lang";

const Footer = ({ language }) => {
  if (language === "ar")
    return (
      <div>
        <footer className='bg-gray-800 text-white py-8'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div
              className={`flex flex-col md:flex-row-reverse
          justify-between `}
            >
              <div className='mb-4 md:mb-0'>
                <h3 className='text-lg font-semibold mb-2 flex gap-2 flex-row-reverse'>
                  <span>{components.footer?.[language].apropos}</span>
                  <span className='text-rose-500'>
                    {components.footer?.[language].Arij}
                  </span>
                </h3>
                <p className='text-sm p-2'>
                  {components.footer?.[language].footerParagraph}
                </p>
              </div>
              <div className='mb-4 md:mb-0'>
                <h3 className='text-lg font-semibold mb-2 text-rose-500'>
                  {components.footer?.[language].liensRapide}
                </h3>
                <ul className='list-none p-0'>
                  <li className='mb-2'>
                    <a href='#home'>{components.Navbar?.[language]?.Accueil}</a>
                  </li>
                  <li className='mb-2'>
                    <a href='#about'>
                      {components?.Navbar?.[language]?.aProposNous}
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#events'>
                      {components.Navbar?.[language].Événementso}
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#activity'>
                      {components.Navbar?.[language].Activités}
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#contact'>
                      {components.Navbar?.[language].contactezNous}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2 text-rose-500'>
                  {components.footer?.[language]?.Connectez}
                </h3>
                <div className='flex space-x-4'>
                  <a href='#' className='text-rose-400 hover:text-rose-600'>
                    <FaFacebook size={25} />
                  </a>
                  <a href='#' className='text-rose-400 hover:text-rose-600'>
                    <AiFillInstagram size={25} />
                  </a>
                  <a href='#' className='text-rose-400 hover:text-rose-600'>
                    <FaTwitter size={25} />
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-4 text-sm'>
              <p>
                {components.footer?.[language]?.FAQ} |{" "}
                <a href='#about' className='text-rose-400 hover:text-rose-600'>
                  {
                    components.footer?.[language]?.[
                      "Politique de Confidentialité"
                    ]
                  }
                </a>{" "}
                |{" "}
                <a href='#' className='text-rose-400 hover:text-rose-600'>
                  {components.footer?.[language]?.["Conditions d'Utilisation"]}
                </a>
              </p>
            </div>
          </div>
        </footer>
        <div className='bg-gray-800 text-white py-4'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center justify-center sm:flex-row-reverse sm:justify-between'>
              <p className='text-sm mb-2 sm:mb-0'>
                {" "}
                {components.footer?.[language]?.["Arij Association"]}
              </p>
              <p className='text-sm'>
                © {new Date().getFullYear()} Rayen ben hassen & Ala sassi
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div>
      <footer className='bg-gray-800 text-white py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div
            className={`flex flex-col md:flex-row
            justify-between `}
          >
            <div className='mb-4 md:mb-0'>
              <h3 className='text-lg font-semibold mb-2 flex gap-2'>
                {components.footer?.[language].apropos}{" "}
                <div className='text-rose-500'>
                  {components.footer?.[language].Arij}
                </div>
              </h3>
              <p className='text-sm p-2'>
                {components.footer?.[language].footerParagraph}
              </p>
            </div>
            <div className='mb-4 md:mb-0'>
              <h3 className='text-lg font-semibold mb-2 text-rose-500'>
                {components.footer?.[language].liensRapide}
              </h3>
              <ul className='list-none p-0'>
                <li className='mb-2'>
                  <a href='#home'>{components.Navbar?.[language]?.Accueil}</a>
                </li>
                <li className='mb-2'>
                  <a href='#about'>
                    {components?.Navbar?.[language]?.aProposNous}
                  </a>
                </li>
                <li className='mb-2'>
                  <a href='#events'>
                    {components.Navbar?.[language].Événementso}
                  </a>
                </li>
                <li className='mb-2'>
                  <a href='#activity'>
                    {components.Navbar?.[language].Activités}
                  </a>
                </li>
                <li className='mb-2'>
                  <a href='#contact'>
                    {components.Navbar?.[language].contactezNous}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2 text-rose-500'>
                {components.footer?.[language]?.Connectez}
              </h3>
              <div className='flex space-x-4'>
                <a href='#' className='text-rose-400 hover:text-rose-600'>
                  <FaFacebook size={25} />
                </a>
                <a href='#' className='text-rose-400 hover:text-rose-600'>
                  <AiFillInstagram size={25} />
                </a>
                <a href='#' className='text-rose-400 hover:text-rose-600'>
                  <FaTwitter size={25} />
                </a>
              </div>
            </div>
          </div>
          <div className='mt-4 text-sm'>
            <p>
              {components.footer?.[language]?.FAQ} |{" "}
              <a href='#about' className='text-rose-400 hover:text-rose-600'>
                {
                  components.footer?.[language]?.[
                    "Politique de Confidentialité"
                  ]
                }
              </a>{" "}
              |{" "}
              <a href='#' className='text-rose-400 hover:text-rose-600'>
                {components.footer?.[language]?.["Conditions d'Utilisation"]}
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div className='bg-gray-800 text-white py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-between'>
            <p className='text-sm mb-2 sm:mb-0'>
              {" "}
              {components.footer?.[language]?.["Arij Association"]}
            </p>
            <p className='text-sm'>
              © {new Date().getFullYear()} Rayen ben hassen & Ala sassi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
