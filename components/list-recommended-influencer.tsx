import React from "react";
import { DATA_RECOMMENDED_INFLUENCER } from "@/constants/data";
import Title from "./title";
import CardInfluencer from "./card-influencer";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

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
    </section>
  );
};

export default ListRecommendedInfluencer;
