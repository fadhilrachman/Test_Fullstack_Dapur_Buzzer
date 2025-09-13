"use client";
import { MENU_BAR } from "@/constants/menu";
import React from "react";
import { Icon } from "@iconify/react";

const Menubar = () => {
  return (
    <div className="relative w-full">
      <nav
        className="w-full md:-bottom-20 gap-x-2 flex overflow-x-scroll scrollbar-hide"
        aria-label="Category shortcuts"
        role="navigation"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {MENU_BAR.map((item, key) => (
          <div
            key={key}
            className="flex transition-all hover:scale-95  active:scale-95 cursor-pointer min-w-[80px]  flex-col items-center gap-3"
          >
            <button
              className={`
                w-14 h-14 rounded-2xl
                flex items-center cursor-pointer justify-center
                 duration-200 border bg-neutral-100 border-neutral-200
              `}
            >
              <Icon icon={item.icon} className="text-xl " />
            </button>
            <span className="text-sm  font-medium text-gray-500 text-center leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Menubar;
