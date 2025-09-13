"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import Title from "./title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type FeedbackItem = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  date: string;
  avatarId: string;
};

const CustomerFeedbackList = () => {
  const feedbackData: FeedbackItem[] = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Marketing Manager",
      company: "PT Maju Bersama",
      content:
        "Dapur Buzzer membantu kami menemukan influencer yang tepat untuk kampanye produk baru kami. Hasilnya sangat memuaskan dengan peningkatan engagement sebesar 45%!",
      rating: 5,
      date: "15 Juni 2023",
      avatarId: "1001",
    },
    {
      id: 2,
      name: "Siti Rahayu",
      role: "Brand Director",
      company: "Indofood",
      content:
        "Platform yang sangat intuitif dan mudah digunakan. Tim support juga sangat responsif dan membantu kami dalam setiap tahap kampanye.",
      rating: 4,
      date: "23 Juli 2023",
      avatarId: "1002",
    },
    {
      id: 3,
      name: "Arief Wijaya",
      role: "Digital Marketing Lead",
      company: "Tokopedia",
      content:
        "Dapur Buzzer memberikan akses ke jaringan KOL yang luas dan beragam. Kami dapat dengan mudah menemukan influencer yang sesuai dengan target pasar kami.",
      rating: 5,
      date: "10 Agustus 2023",
      avatarId: "1003",
    },
    {
      id: 4,
      name: "Dewi Lestari",
      role: "Social Media Specialist",
      company: "Unilever Indonesia",
      content:
        "Analitik yang disediakan sangat detail dan membantu kami mengukur ROI dengan tepat. Sangat direkomendasikan untuk brand yang ingin mengoptimalkan kampanye influencer marketing.",
      rating: 5,
      date: "5 September 2023",
      avatarId: "1004",
    },
  ];

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
        modules={[Pagination]}
        className="customer-feedback"
      >
        {feedbackData.map((feedback) => (
          <SwiperSlide key={feedback.id} className="!pb-2">
            <Card className="cursor-pointer shadow mx-3 transition-all duration-300 h-[200px]">
              <CardBody className="p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={`https://img.heroui.chat/image/avatar?w=48&h=48&u=${feedback.avatarId}`}
                      className="w-10 h-10 text-small"
                      name={feedback.name}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {feedback.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {feedback.role}, {feedback.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex">{renderStars(feedback.rating)}</div>
                  </div>
                  <p className="text-sm text-gray-600">{feedback.content}</p>
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CustomerFeedbackList;
