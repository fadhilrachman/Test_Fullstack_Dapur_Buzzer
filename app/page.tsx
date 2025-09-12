"use client";

import Banner from "@/components/banner";
import Menubar from "@/components/menubar";
import ListRecommendedInfluencer from "@/components/list-recommended-influencer";

export default function Home() {
  return (
    <section className="max-w-[440px] shadow space-y-2 mx-auto min-h-screen bg-white  ">
      <Banner />
      <div className="p-4 space-y-8">
        <Menubar />
        <ListRecommendedInfluencer />
        <div className=""></div>
      </div>
      <div className="relative bg-gradient-to-b from-primary-700 via-primary-400 to-transparent"></div>
    </section>
  );
}
