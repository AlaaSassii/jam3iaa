'use client'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {

  return (

    
    <div>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2 flex gap-2">À propos <div className='text-rose-500'>Arij</div></h3>
                <p className="text-sm p-2">Arij est une organisation dédiée à aider les personnes dans le besoin. Nous proposons divers services et soutenons pour améliorer la vie des individus et des communautés.</p>
              </div>
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2 text-rose-500">Liens Rapides</h3>
                <ul className="list-none p-0">
                  <li className="mb-2"><a href="#home">Accueil</a></li>
                  <li className="mb-2"><a href="#about">À propos nous</a></li>
                  <li className="mb-2"><a href="#events">événements</a></li>
                  <li className="mb-2"><a href="#activity">activités</a></li>
                  <li className="mb-2"><a href="#contact">Contactez-nous</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-rose-500">Connectez-vous Avec Nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-rose-400 hover:text-rose-600">
                    <FaFacebook size={25}/>
                  </a>
                  <a href="#" className="text-rose-400 hover:text-rose-600">
                    <AiFillInstagram size={25}/>
                  </a>
                  <a href="#" className="text-rose-400 hover:text-rose-600">
                    <FaTwitter size={25}/>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <p>FAQ | <a href="#about" className="text-rose-400 hover:text-rose-600">Politique de Confidentialité</a> | <a href="#" className="text-rose-400 hover:text-rose-600">Conditions d'Utilisation</a></p>
            </div>
          </div>

        </footer>
        <div className="bg-gray-800 text-white py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                <p className="text-sm mb-2 sm:mb-0">Arij Association</p>
                <p className="text-sm">© {new Date().getFullYear()} Rayen ben hassen & Ala sassi</p>
                </div>
            </div>
        </div>

    </div> 
  )
}

export default Footer