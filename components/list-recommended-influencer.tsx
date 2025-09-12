import React from "react";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Icon } from "@iconify/react/dist/iconify.js";

const ListRecommendedInfluencer = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold font-mono">
        Recommended Influencer
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {[, 1, 213, 123].map((val, i) => {
          return (
            <Card
              key={i}
              radius="lg"
              isPressable
              className="relative  cursor-pointer rounded-[28px] bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] "
            >
              <Image
                alt="Profile"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1470&auto=format&fit=crop"
                className="h-full"
              />
              <div className="relative w-full mt-1 ">
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 bg-gradient-to-t from-white via-white/90 to-transparent">
                  <div className="flex items-center gap-2">
                    <h3 className="text-md font-semibold leading-none text-black">
                      Sophie Bennett
                    </h3>
                    <Icon
                      icon={"fluent-mdl2:verified-brand-solid"}
                      className="text-blue-500"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-4 text-black/80">
                      <div className="flex items-center gap-1">
                        <Icon icon={"ant-design:instagram-filled"} />
                        <span className="text-sm">cuy_123</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon icon={"fluent:people-12-filled"} />

                        <span className="text-sm">48</span>
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
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ListRecommendedInfluencer;
