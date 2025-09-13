"use client";
import { DATA_BANNER } from "@/constants/data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        speed={400}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="banner bg-transparent"
        onSlideChange={(val) => {
          console.log({ val });
        }}
      >
        {DATA_BANNER.map((val, key) => {
          return (
            <SwiperSlide key={key} className="!bg-transparent ">
              <div className="rounded-b-[48px] scale-x-[1.02] overflow-hidden">
                <img
                  src={val}
                  alt=""
                  className="block w-full  h-auto scale-[1.06] transform-gpu select-none pointer-events-none"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
