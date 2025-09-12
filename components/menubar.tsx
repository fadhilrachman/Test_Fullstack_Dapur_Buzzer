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
              // onClick={() => handleMenuClick(item)}
              className={`
                w-16 h-16 rounded-2xl
                flex items-center cursor-pointer justify-center
                 duration-200 border bg-neutral-100 border-neutral-200
                 
               
              `}
            >
              <Icon icon={item.icon} className="w-8 h-8 text-white" />
            </button>
            <span className="text-sm  font-medium text-gray-500 text-center leading-tight">
              {item.label}
            </span>
          </div>
        ))}
        {/* {MENU_BAR.map((val, key) => (
        <button
          key={key}
          type="button"
          className="group inline-flex flex-col items-center gap-1 rounded-xl px-3 py-3
                           hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                           transition-colors"
        >
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full
                             bg-gradient-to-br from-primary/20 to-primary/10 text-primary
                             group-hover:from-primary/30 group-hover:to-primary/20"
          >
            <Icon icon={val.icon} className="text-[22px]" />
          </span>
          <span className="text-xs md:text-sm font-medium text-gray-700 text-center truncate">
            {val.label}
          </span>
        </button>
      ))} */}
      </nav>
    </div>
  );
};

export default Menubar;
