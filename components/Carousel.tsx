"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <Swiper spaceBetween={20} slidesPerView={1} autoplay={{ delay: 2500 }}>
        <SwiperSlide><img src="/pictures/slide1.jpg" className="rounded" /></SwiperSlide>
        <SwiperSlide><img src="/pictures/slide2.jpg" className="rounded" /></SwiperSlide>
        <SwiperSlide><img src="/pictures/slide3.jpeg" className="rounded" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
