import { queryKeys } from "@/utils/constants/constants";
import { fetchData } from "@/utils/query/query";
import Image from "next/image";
import React from "react";
import principal from "@/assests/image/principal.png";
import { TbBorderCornerSquare } from "react-icons/tb";

const MessageSection = async () => {
  const messageData = await fetchData(`api/${queryKeys.messages}`);
  const principalMessage = messageData.filter(
    (data) => data.designation.toLowerCase() === "principal"
  )[0];

  return (
    <div className="lg:min-h-[40vh] lg:p-10 p-5 overflow-hidden bg-white box-border relative ">
      <div className="absolute top-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0.1"
            d="M4 20V5a1 1 0 0 1 1-1h15"
          />
        </svg>
      </div>
      <div className="rotate-180 absolute bottom-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0.1"
            d="M4 20V5a1 1 0 0 1 1-1h15"
          />
        </svg>
      </div>

      {/* <TbBorderCornerSquare className="absolute top-0 left-0 h-40 w-40 border text-black" />
      <TbBorderCornerSquare className="absolute bottom-0 rotate-180 right-0 h-40 w-40 border text-black" /> */}
      <div className="md:max-h-[50vh] max-h-30vh w-full flex max-md:p-10  justify-center">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-2 sm:gap-[10%] md:gap-[5%] lg:gap-0  xl:grid-cols-5 md:p-5">
          <div className="lg:flex h-full lg:justify-center place-items-end relative xl:col-span-2 max-md:hidden">
            <div className="absolute bottom-0 md:left-[15%] lg:left-10 bg-gradient-to-r from-[#5755FF] to-[#FFC876] w-[200px] h-[30vh] z-0 max-lg:hidden"></div>
            <div className="xl:w-[300px]  md:h-[40vh] xl:h-[45vh] z-20 flex justify-end ">
              <img
                src={principalMessage.image}
                alt="principal"
                object="cover"
                className="h-full w-full z-20"
              />
            </div>
          </div>
          <div className="w-full flex gap-2 flex-col md:col-span-2 lg:col-span-1 xl:col-span-3">
            <h1 className="lg:text-2xl text-xl text-primary-background font-bold">
              Message From Principal
            </h1>
            <p className="lg:text-lg text-sm text-accent ">
              "{principalMessage.name}"
            </p>
            <p className="lg:text-xs xl:text-sm text-primary-background max-md:text-justify md:text-xs">
              {principalMessage.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
