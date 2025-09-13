import { DATA_CLIENTS } from "@/constants/data";
import React from "react";
import Marquee from "react-fast-marquee";
import Title from "./title";
const ListClient = () => {
  return (
    <section className="space-y-4 bg-primary-200 py-6">
      <Title title=" Klien Kami" className="px-6" />

      <Marquee>
        {DATA_CLIENTS.map((val, key) => {
          return (
            <img
              src={val.img}
              className="h-[40px]  mx-3"
              alt={val.alt}
              key={key}
            />
          );
        })}
      </Marquee>
    </section>
  );
};

export default ListClient;
