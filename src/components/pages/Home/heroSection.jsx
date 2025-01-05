import React from "react";
import Image from "next/image";
import College from "@/assests/image/College.png";
import { fetchData } from "@/utils/query/query";
import { queryKeys } from "@/utils/constants/constants";
import { CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = async () => {
  const noticeData = await fetchData(`api/${queryKeys.notices}`);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 sm:p-10 md:px-16 md:py-10 md:max-h-[80vh]  ">
        <div className="col-span-2 max-md:mb-5 md:mb-0 ">
          <Image
            src={College}
            alt="error"
            className="md:h-[70vh] w-full object-cover"
          />
          <div className="absolute top-[40%] xs:top-[50%] sm:top-[60%] md:hidden max-sm:left-6 sm:left-1/2 transform sm:-translate-x-1/2  sm:text-center -translate-y-1/2 bg-white bg-opacity-50 px-5 py-5 flex flex-col gap-2 max-sm:w-1/2 rounded-md shadow-md">
            <div className="text-base font-medium">
              "Empowering Minds, Shaping Futures"
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="bg-accent text-primary-foreground"
            >
              Read More
            </Button>
          </div>
        </div>
        <div className="max-sm:p-5">
          <div className="bg-white text-primary-foreground p-5 rounded-md shadow-md w-full ">
            <h1 className="text-xl font-bold text-primary flex gap-2 items-center">
              <CircleAlert />{" "}
              <span className="underline decoration-accent decoration-2">
                Notices
              </span>
            </h1>
            <div className="text-lg text-gray-500 flex flex-col gap-2">
              {noticeData?.slice(0, 5).map((notice) => {
                return (
                  <div className="md:h-[9vh]" key={notice.id}>
                    <div className="mt-4 flex p-2 gap-2">
                      <div className="w-[20%] max-md:text-base">
                        {new Date(notice.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="w-[80%] max-md:text-base">
                        {notice.title}
                      </div>
                    </div>
                    <hr className="text-black " />
                  </div>
                );
              })}
            </div>
            <Button variant="ghost" size="sm" className="mt-8 bg-accent text-primary-foreground">
              <Link
                href="/notices"
              >
                Read More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
