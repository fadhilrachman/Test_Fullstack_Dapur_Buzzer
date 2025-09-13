"use client";
import { MENU_BAR } from "@/constants/menu";
import React from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";

const Menubar = () => {
  return (
    <div className="relative w-full p-4">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={8}
        freeMode={{ enabled: true, momentum: false }}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
          sensitivity: 2,
        }}
        modules={[FreeMode, Mousewheel]}
        className="menubar-swiper"
        aria-label="Category shortcuts"
      >
        {MENU_BAR.map((item, key) => (
          <SwiperSlide key={key} className="!w-[80px]">
            <div className="flex transition-all hover:scale-95 active:scale-95 cursor-pointer flex-col items-center gap-3">
              <button
                className={`
                  w-14 h-14 rounded-2xl
                  flex items-center cursor-pointer justify-center
                  duration-200 border bg-neutral-100 border-neutral-200
                `}
              >
                <Icon icon={item.icon} className="text-xl" />
              </button>
              <span className="text-sm font-medium text-gray-500 text-center leading-tight">
                {item.label}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Menubar;
