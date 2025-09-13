import { BOTTOM_BAR } from "@/constants/menu";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const BottomBar = () => {
  return (
    <div
      className="      fixed bottom-0 left-1/2 -translate-x-1/2 
      w-full max-w-[440px] h-[60px]
     bg-white  shadow z-20"
    >
      <div className="grid grid-cols-4 w-full h-full  place-items-center text-gray-500 ">
        {BOTTOM_BAR.map((val, key) => {
          return (
            <div
              key={key}
              className={`flex items-center relative w-full h-full justify-center flex-col cursor-pointer ${key == 0 && "text-primary "}`}
            >
              {key == 0 && (
                <div className="absolute z-50 bg-primary top-0 h-[5px] rounded-b-4xl w-full"></div>
              )}

              {key == 0 && (
                <div className="absolute bg-gradient-to-b from-primary-200 to-transparent top-0 h-[30px] w-full"></div>
              )}
              <Icon icon={val.icon} className=" md:text-lg z-50" />
              <p className="text-xs">{val.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
