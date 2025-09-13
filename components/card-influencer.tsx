import React from "react";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  image: string;
  name: string;
  instagram: string;
  instagramFollower: number;
}
function formatFollower(num: number) {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}
const CardInfluencer = (props: Props) => {
  return (
    <Card
      radius="lg"
      // isPressable
      className="relative  cursor-pointer rounded-[28px] flex flex-col  bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] "
    >
      <Image
        alt="Profile"
        src={props.image}
        // src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1470&auto=format&fit=crop"
        className="h-full"
      />
      <div className=" p-[12px]  sm:p-4 bg-gradient-to-t from-white via-white/30 to-transparent">
        <div className="flex items-center justify-start gap-2">
          <h3 className="text-sm  truncate   font-semibold  text-black">
            {props.name}
          </h3>
          <Icon
            icon={"fluent-mdl2:verified-brand-solid"}
            className="text-blue-500 text-sm"
          />
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex gap-1 flex-col text-neutral-500 text-xs">
            <div className="flex items-center gap-1">
              <Icon className="text-sm" icon={"ant-design:instagram-filled"} />
              <span className="">{props.instagram}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon className="text-sm" icon={"fluent:people-12-filled"} />

              <span className="">
                {formatFollower(props.instagramFollower)} Follower
              </span>
            </div>
          </div>
        </div>
        <Button
          size="sm"
          radius="full"
          className="w-full mt-2 h-[28px] "
          color="primary"
          endContent={<Icon icon={"famicons:call"} />}
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
};

export default CardInfluencer;
