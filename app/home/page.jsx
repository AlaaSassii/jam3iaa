"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Home from "../../components/Home";
import Welcome from "../../components/Welcome";
import About from "../../components/About";
import Valunteer from "../../components/Valunteer";
import Rejoignez from "../../components/Rejoignez";
import Events from "../../components/Events";
import Activity from "../../components/Activity";
import ModalRejoigne from "../../components/ModalRejoigne";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { useLanguage } from "../../hooks/useLanguage";
import ToasterProvider from "../../providers/ToasterProvider";
import Partenaires from "../../components/Partenaires";
import Whatsapp from "../../components/Whatsapp";
const page = () => {
  const { language, setLanguage } = useLanguage();
  console.log({ language });
  return (
    <>
      <ToasterProvider />
      <Navbar language={language} setLanguage={setLanguage} />
      <Home language={language} />
      <Welcome language={language} />
      <About language={language} />
      <Valunteer language={language} />
      <Rejoignez language={language} />
      <Events language={language} />
      <Activity language={language} />
      <ModalRejoigne language={language} />
      <Partenaires language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <Whatsapp />
    </>
  );
};

export default page;
