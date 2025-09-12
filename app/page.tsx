"use client";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Banner from "@/components/banner";
import Menubar from "@/components/menubar";
import ListRecommendedInfluencer from "@/components/list-recommended-influencer";

export default function Home() {
  return (
    <section className="max-w-[440px] shadow space-y-2 mx-auto min-h-screen bg-white  ">
      <Banner />
      <div className="p-4 space-y-8">
        <Menubar />
        <ListRecommendedInfluencer />
      </div>
      <div className="relative bg-gradient-to-b from-primary-700 via-primary-400 to-transparent"></div>
      {/* <div className="">
        <Button color="primary">uhuy</Button>
        <div className="grid grid-cols-3">
          {[, 1, 213, 123].map((val, i) => {
            return (
              <Card
                key={i}
                radius="lg"
                className="relative  rounded-[28px] bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] "
              >
                <Image
                  alt="Profile"
                  // src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1470&auto=format&fit=crop"
                  // src="https://app.dapurbuzzer.co.id/storage/avatar/5ULM7rxxATiRHcYsYADv1mqbqPjD5U0xMLbuRupa.jpeg"
                  src="https://app.dapurbuzzer.co.id/storage/avatar/01gUeGeIXzvGk3P27Wlm3xdqNHf5xxUzmv2xz5Gl.jpeg"
                  removeWrapper
                  className=" h-[200px]"
                />
                <div className="relative w-full mt-1 ">
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 bg-gradient-to-t from-white via-white/60 to-transparent">
                    <div className="flex items-center gap-2">
                      <h3 className="text-md font-semibold leading-none text-black">
                        Sophie Bennett
                      </h3>
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 shadow-[inset_0_-2px_0_rgba(0,0,0,0.15)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-3.5 w-3.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-black/80">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h2a5 5 0 0 1 10 0h2c0-3.866-3.134-7-7-7z" />
                          </svg>
                          <span className="text-sm">312</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm2 0v10h12V6H6zm3 12h6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
                          </svg>
                          <span className="text-sm">48</span>
                        </div>
                      </div>

                      <Button
                        radius="full"
                        variant="solid"
                        className="bg-white text-black shadow-md px-5 h-10 data-[hover=true]:opacity-100"
                      >
                        <span className="mr-1">Follow</span>
                        <span className="text-lg leading-none">+</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div> */}
    </section>
  );
}
