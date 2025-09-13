import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Title from "./title";

const Help = () => {
  return (
    <div className="w-full bg-primary-200 max-w-md p-6 space-y-4  ">
      <Title title="Butuh bantuan?" />

      {/* <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-slate-800">
          Butuh bantuan?
        </h2>
        <p className="text-slate-500 text-sm">
          Kami siap membantu Anda dengan pertanyaan apapun
        </p>
      </div> */}

      <div className="space-y-3">
        <Button
          className="w-full group transition-all duration-200"
          variant="flat"
          color="primary"
          startContent={
            <Icon
              icon="lucide:message-circle-question"
              className="text-lg group-hover:scale-110 transition-transform duration-200"
            />
          }
        >
          Tanya tentang Dapur Buzzer
        </Button>

        <Button
          className="w-full transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          color="primary"
          startContent={<Icon icon="lucide:users" className="text-lg" />}
        >
          Gabung bersama Kami
        </Button>
      </div>
    </div>
  );
};

export default Help;
