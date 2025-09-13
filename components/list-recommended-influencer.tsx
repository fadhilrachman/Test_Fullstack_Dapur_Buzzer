"use client";
import React from "react";
import { DATA_RECOMMENDED_INFLUENCER } from "@/constants/data";
import Title from "./title";
import CardInfluencer from "./card-influencer";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const ListRecommendedInfluencer = () => {
  return (
    <section className="space-y-3 p-4">
      <Title
        title=" Recommended Influencer"
        endContent={
          <Button
            isIconOnly
            variant="flat"
            startContent={
              <Icon
                icon={"iconamoon:arrow-up-1-duotone"}
                className="rotate-45 text-primary text-lg"
              />
            }
          ></Button>
        }
      />

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={12}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.25,
          momentumVelocityRatio: 0.3,
          minimumVelocity: 0.05,
        }}
        touchRatio={3}
        resistanceRatio={0.2}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
          sensitivity: 0.9,
        }}
        scrollbar={{
          draggable: true,
          hide: false,
          enabled: true,
          dragSize: 90,
        }}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="recommended-swiper pr-4 -mr-4 pb-2"
      >
        {DATA_RECOMMENDED_INFLUENCER.map((val, i) => (
          <SwiperSlide key={i} className="!w-[220px] pb-5">
            <CardInfluencer
              image={val.avatarUrl}
              name={val.name}
              instagram={val.instagram.handle}
              instagramFollower={val.followers}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ListRecommendedInfluencer;
