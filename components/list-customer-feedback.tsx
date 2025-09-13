"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import Title from "./title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { DATA_FEEDBACK } from "@/constants/data";

const ListCustomerFeedback = () => {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Icon
          key={i}
          icon={i < rating ? "lucide:star" : "lucide:star"}
          className={`${i < rating ? "text-yellow-400" : "text-gray-300"} text-sm`}
        />
      ));
  };

  return (
    <div className="p-6 space-y-4">
      <Title title="Apa kata mereka tentang Dapur Buzzer?" />
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="customer-feedback"
        speed={400}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {DATA_FEEDBACK.map((val, key) => (
          <SwiperSlide key={key} className="!pb-2">
            <Card className="cursor-pointer shadow mx-3 transition-all duration-300 h-[200px]">
              <CardBody className="p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={`https://img.heroui.chat/image/avatar?w=48&h=48&u=${val.avatarId}`}
                      className="w-10 h-10 text-small"
                      name={val.name}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {val.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {val.role}, {val.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex">{renderStars(val.rating)}</div>
                  </div>
                  <p className="text-sm text-gray-600">{val.content}</p>
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ListCustomerFeedback;
