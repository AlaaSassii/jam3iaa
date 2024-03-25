import React from 'react'

import Navbar from "../../components/Navbar";
import Home from '../../components/Home';
import Welcome from '../../components/Welcome';
import About from '../../components/About';
import Valunteer from '../../components/Valunteer';
import Rejoignez from '../../components/Rejoignez';
import Events from '../../components/Events';
import Activity from '../../components/Activity';
import ModalRejoigne from '../../components/ModalRejoigne';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';


const page = () => {
    
  return (
    <> 
        <Navbar/>  
        <Home/> 
        <Welcome/>
        <About/>
        <Valunteer/> 
        <Rejoignez/>
        <Events/>
        <Activity/>
        <ModalRejoigne/>
        <Contact/>
        <Footer/>

    </>
  )
}

export default page