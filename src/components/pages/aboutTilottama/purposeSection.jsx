import React from "react";
import { PiTagChevronFill } from "react-icons/pi";
import mission from "@/assests/image/mission.png";
import Image from "next/image";
import { BsBookmarkFill } from "react-icons/bs";
import { IoBookmarkSharp } from "react-icons/io5";
import { AiOutlineAim } from "react-icons/ai";
import { RiBookmarkFill } from "react-icons/ri";
import { GiEyeTarget } from "react-icons/gi";
import { Minus } from "lucide-react";
const PurposeSection = ({ mission, vision }) => {
  return (
    <div className="p-10">
      <div className="flex items-center justify-center flex-col gap-2 w-full py-6">
        <h1 className="text-xl lg:text-2xl font-bold">
          Our Purpose and Aspirations
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex max-lg:flex-col lg:items-center min-h-[30vh] bg-white rounded-lg shadow-md p-5">
          <div className="lg:w-[30%] h-full relative ">
            <RiBookmarkFill className="max-sm:h-[20vh] max-lg:h-[30vh] h-full w-full text-muted" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-primary-foreground -mt-4">
              <AiOutlineAim className="lg:h-10 lg:w-10 h-8 w-8 text-primary-foreground" />
              Mission
            </div>
          </div>
          <div className=" lg:w-[70%] min-h-[25vh] p-5 text-medium max-sm:text-sm max-lg:text-xs text-justify flex">
            <span>
              <Minus className="text-accent rotate-90" />
            </span>
            {mission}
          </div>
        </div>
        <div className="flex max-lg:flex-col lg:items-center md:min-h-[30vh] bg-white rounded-lg shadow-md p-5">
          <div className="lg:w-[30%] h-full relative ">
            <RiBookmarkFill className="max-sm:h-[20vh] max-lg:h-[30vh] h-full w-full text-muted" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-primary-foreground -mt-4">
              <GiEyeTarget className="h-10 w-10 text-primary-foreground" />
              Vission
            </div>
          </div>
          <div className=" lg:w-[70%] min-h-[25vh] p-5 text-medium max-sm:text-sm max-lg:text-xs text-justify flex">
              <span>
                <Minus className="text-accent rotate-90" />
              </span>
              {vision}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;
