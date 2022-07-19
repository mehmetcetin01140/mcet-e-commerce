import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

export default function App() {
  return (
<div className="carousel">


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
        className="mySwiper"
      >
        
        <SwiperSlide><Image src={"/carouselfeno.jpg"} quality={100} layout="fill"/></SwiperSlide>
        <SwiperSlide><Image src={"/carouselproduct.jpg"} quality={100}  layout="fill"/></SwiperSlide>
        <SwiperSlide><Image src={"/carouseltech.png"} quality={100}  layout="fill"/></SwiperSlide>
        <SwiperSlide><Image src={"/carouselperwoll.png"} quality={100}  layout="fill"/></SwiperSlide>
      
      </Swiper>
      </div>
  );
}
