import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


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
        <SwiperSlide>
          <img src={"/carouselfeno.jpg"} alt="campaign"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/carouselproduct.jpg"} alt="campaign"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/carouseltech.png"} alt="campaign"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/carouselperwoll.png"} alt="campaign"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
