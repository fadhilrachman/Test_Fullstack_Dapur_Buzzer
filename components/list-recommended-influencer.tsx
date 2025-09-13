import React from "react";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { DATA_RECOMMENDED_INFLUENCER } from "@/constants/data";
import Title from "./title";
import CardInfluencer from "./card-influencer";

const ListRecommendedInfluencer = () => {
  return (
    <div className="space-y-3">
      <Title title=" Recommended Influencer" />

      <div className="grid grid-cols-2 gap-3">
        {DATA_RECOMMENDED_INFLUENCER.slice(0, 2).map((val, i) => {
          return (
            <CardInfluencer
              key={i}
              image={val.avatarUrl}
              name={val.name}
              instagram={val.instagram.handle}
              instagramFollower={val.followers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListRecommendedInfluencer;
