"use client";

import Banner from "@/components/banner";
import Menubar from "@/components/menubar";
import ListRecommendedInfluencer from "@/components/list-recommended-influencer";
import Help from "@/components/help";
import ListOtherInfluencer from "@/components/list-other-influencer";
import Clients from "@/components/clients";
import CustomerFeedbackList from "@/components/customer-feedback";
import BottomBar from "@/components/bottom-bar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <section className="max-w-[440px] pb-12  relative shadow  mx-auto min-h-screen bg-white  ">
      <Banner />
      <div className="p-4 space-y-8">
        <Menubar />
        <ListRecommendedInfluencer />
      </div>
      <Help />
      <div className="p-4 space-y-8">
        <ListOtherInfluencer />
      </div>{" "}
      <Clients />
      <CustomerFeedbackList />
      <Footer />
      <BottomBar />
      <div className="relative bg-gradient-to-b from-primary-700 via-primary-400 to-transparent"></div>
    </section>
  );
}
