import React from "react";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  DATA_OTHER_INFLUENCER,
  DATA_RECOMMENDED_INFLUENCER,
} from "@/constants/data";
import Title from "./title";
import CardInfluencer from "./card-influencer";

const ListOtherInfluencer = () => {
  return (
    <section className="space-y-4 p-4 ">
      <Title title="Other Influencer" />
      <div className="grid grid-cols-2 gap-3">
        {DATA_OTHER_INFLUENCER.map((val, i) => {
          return (
            <CardInfluencer
              key={i}
              image={val.avatarUrl}
              name={val.name}
              instagram={val.instagram.username}
              instagramFollower={val.followers}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button variant="flat" size="sm" color="primary">
          Lihat Semua Influencer
        </Button>
      </div>
    </section>
  );
};

export default ListOtherInfluencer;
