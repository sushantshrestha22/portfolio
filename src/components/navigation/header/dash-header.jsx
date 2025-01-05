import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
const DashHeader = () => {
  return (
    <>
      <div className="max-md:hidden h-[8vh]  flex justify-end">
        <div className="relative flex justify-around items-center h-[8vh] w-[70%] bg-background text-primary-foreground">
          <div className="w-[10%] h-[8vh] absolute bg-primary skew-x-[30deg] -left-5"></div>

          <div className="text-base z-10">
          "Crafting Digital Experiences, One Pixel at a Time"
          </div>
          <div className="flex justify-between gap-4 z-10">
            <Link href="#">
              <FaFacebookF className="w-4 h-4" />
            </Link>
            <Link href="#">
              <FaWhatsapp className="w-4 h-4" />
            </Link>
            <Link href="#">
              <FaLinkedinIn className="w-4 h-4" />
            </Link>
            <Link href="#">
              <IoMailOutline className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashHeader;
