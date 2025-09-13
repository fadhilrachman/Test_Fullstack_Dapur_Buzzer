import React from "react";
import Title from "./title";
import { DATA_PACKAGE } from "@/constants/data";
import { Card, CardBody } from "@heroui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@heroui/button";
import { formatRupiah } from "@/lib/helper";

const ListDataPackage = () => {
  return (
    <section className="p-4 space-y-4">
      <Title
        title="Package Micro Influencer"
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
      {DATA_PACKAGE.map((val, key) => {
        return (
          <Card
            key={key}
            className="relative  cursor-pointer  flex flex-col  bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] "
          >
            <CardBody>
              <div className="flex gap-3">
                <img
                  src={val.image}
                  alt={val.title}
                  className="rounded-xl max-w-[100px] max-h-[100px]"
                />
                <div className="text-xs space-y-2">
                  <h3 className="font-semibold text-[16px]">{val.title}</h3>
                  <div className="flex text-gray-500 items-center space-x-1">
                    <Icon icon={"entypo:price-tag"} />
                    <p className="">{formatRupiah(val.price)} </p>
                  </div>
                  <Button
                    size="sm"
                    radius="full"
                    className="h-[28px] text-[12px]"
                    color="primary"
                  >
                    View Detail
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </section>
  );
};

export default ListDataPackage;
