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

const ListOtherInfluencer = () => {
  return (
    <div className="space-y-4">
      <Title title="Other Influencer" />
      <div className="grid grid-cols-2 gap-3">
        {DATA_OTHER_INFLUENCER.map((val, i) => {
          return (
            <Card
              key={i}
              radius="lg"
              // isPressable
              className="relative  cursor-pointer rounded-[28px] flex flex-col  bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] "
            >
              <Image
                alt="Profile"
                src={val.avatarUrl}
                // src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1470&auto=format&fit=crop"
                className="h-full"
              />
              <div className=" px-4 py-4 bg-gradient-to-t from-white via-white/30 to-transparent">
                <div className="flex items-center gap-2">
                  <h3 className="text-md font-semibold leading-none text-black">
                    {val.name}
                  </h3>
                  <Icon
                    icon={"fluent-mdl2:verified-brand-solid"}
                    className="text-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-4 text-neutral-500 text-xs">
                    <div className="flex items-center gap-1">
                      <Icon
                        className="text-sm"
                        icon={"ant-design:instagram-filled"}
                      />
                      <span className="">{val.instagram.username}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon
                        className="text-sm"
                        icon={"fluent:people-12-filled"}
                      />

                      <span className="">48 Fol</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  radius="full"
                  className="w-full mt-2"
                  color="primary"
                  endContent={<Icon icon={"famicons:call"} />}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button variant="flat" size="sm" color="primary">
          Lihat Semua Influencer
        </Button>
      </div>
    </div>
  );
};

export default ListOtherInfluencer;
