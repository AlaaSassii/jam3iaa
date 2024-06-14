"use client";
import React from "react";
import { GrContact } from "react-icons/gr";

import { components } from "../lang";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = ({ language }) => {
  return (
<<<<<<< HEAD
    <div className="w-full bg-black h-screen home-container" id="home">
      <div
        className="
                text-center
                px-2
                md:px-20
                w-full
                h-screen
                flex
                flex-col
                items-center
                justify-center"
=======
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <HomeContainer1 language={language} />
        </SwiperSlide>
        <SwiperSlide>
          <HomeContainer2 language={language} />
        </SwiperSlide>
        <SwiperSlide>
          <HomeContainer3 language={language} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
const HomeContainer1 = ({ language }) => {
  return (
    <div className='w-full bg-black h-screen home-container1' id='home'>
      <div
        className='
            text-center
            px-2
            md:px-20
            w-full
            h-screen
            flex
            flex-col
            items-center
            justify-center'
      >
        <h1 className=' text-white text-[30px]  md:text-[50px] font-extrabold'>
          {components.HomeC?.[language].Title}
        </h1>
        <p className='text-neutral-300 font-bold mt-2 '>
          {components.HomeC?.[language].secondTitle}
        </p>
        <p className='text-neutral-300 font-bold mt-2'>
          {components.HomeC?.[language].thirdTitle}
        </p>
        <button
          className='p-3 text-sm md:text-base rounded-xl bg-rose-500 text-white mt-4 font-bold cursor-pointer hover:bg-rose-600 flex items-center gap-3'
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
          }}
        >
          {" "}
          <GrContact size={20} />{" "}
          <div>{components.HomeC?.[language].rejoignezNous}</div>
        </button>
      </div>
    </div>
  );
};
const HomeContainer2 = ({ language }) => {
  return (
    <div className='w-full bg-black h-screen home-container2' id='home'>
      <div
        className='
            text-center
            px-2
            md:px-20
            w-full
            h-screen
            flex
            flex-col
            items-center
            justify-center'
>>>>>>> 00c6d56fb70bbcd6ec1a48dba331a3e443b00de2
      >
        <h1 className=" text-white text-[30px]  md:text-[50px] font-extrabold">
          {components.HomeC?.[language].Title}
        </h1>
        <p className="text-neutral-300 font-bold mt-2 ">
          {components.HomeC?.[language].secondTitle}
        </p>
        <p className="text-neutral-300 font-bold mt-2">
          {components.HomeC?.[language].thirdTitle}
        </p>
        <button
          className="p-3 text-sm md:text-base rounded-xl bg-rose-500 text-white mt-4 font-bold cursor-pointer hover:bg-rose-600 flex items-center gap-3"
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
          }}
        >
          {" "}
          <GrContact size={20} />{" "}
          <div>{components.HomeC?.[language].rejoignezNous}</div>
        </button>
      </div>
    </div>
  );
};

const HomeContainer3 = ({ language }) => {
  return (
    <div className='w-full bg-black h-screen home-container3' id='home'>
      <div
        className='
            text-center
            px-2
            md:px-20
            w-full
            h-screen
            flex
            flex-col
            items-center
            justify-center'
      >
        <h1 className=' text-white text-[30px]  md:text-[50px] font-extrabold'>
          {components.HomeC?.[language].Title}
        </h1>
        <p className='text-neutral-300 font-bold mt-2 '>
          {components.HomeC?.[language].secondTitle}
        </p>
        <p className='text-neutral-300 font-bold mt-2'>
          {components.HomeC?.[language].thirdTitle}
        </p>
        <button
          className='p-3 text-sm md:text-base rounded-xl bg-rose-500 text-white mt-4 font-bold cursor-pointer hover:bg-rose-600 flex items-center gap-3'
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
          }}
        >
          {" "}
          <GrContact size={20} />{" "}
          <div>{components.HomeC?.[language].rejoignezNous}</div>
        </button>
      </div>
    </div>
  );
};
export default Home;
