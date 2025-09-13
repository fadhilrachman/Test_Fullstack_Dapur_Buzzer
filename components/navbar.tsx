import React from "react";
import { Input } from "@heroui/input";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@heroui/button";

const Navbar = () => {
  return (
    <div className="flex rounded-b-xl bg-white h-[56px] items-center px-3 w-full space-x-6 sticky top-0 z-50">
      <Input
        placeholder="Card Influencer"
        className=" "
        variant="flat"
        // size="sm"
        startContent={<Icon icon={"lucide:search"} />}
      />
      <Button
        isIconOnly
        variant="flat"
        startContent={<Icon icon={"hugeicons:menu-11"} className="text-lg" />}
      ></Button>
    </div>
  );
};

export default Navbar;
