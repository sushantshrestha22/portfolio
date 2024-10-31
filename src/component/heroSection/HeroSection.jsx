import React from "react";
import Image from "../../assets/image/Image.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Sidebar from "../sidebar/Sidebar";
import Logo from "../../assets/image/Logo.png";
import MainBg from "../../assets/image/MainBg.png";
import { FaJsSquare } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiMui } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const HeroSection = () => {
  return (
    <>
      {/* bg-gradient-to-br from-black to-[#0F172A] */}
      <div className="relative h-[90vh] flex items-end text-white">
        <div className="absolute top-5 left-16">
          <img src={Logo} alt="Logo" className="w-[75px]" />
        </div>
        <div className="absolute top-[25%] left-[15%] text-[60px] font-extrabold opacity-30  text-blue-300 animate-fade-in">
          Welcome
        </div>
        <div className="absolute top-1/2 transform -rotate-90 capitalize text-xl font-semibold border-l-4 border-sky-500 pl-2">
          web developer
        </div>

        <div className="grid grid-cols-2  ">
          <div className="flex flex-col items-start justify-center gap-6 ps-[30%]">
            <div className="uppercase text-4xl font-extrabold">
              Hi, I'm <br />
              Sushant Shrestha
            </div>
            <div>
              Frontend Developer focused on building responsive, user-friendly
              interfaces with React. Passionate about clean code and seamless
              user experiences.
            </div>
            <Stack spacing={2} direction="row">
              <Button variant="contained" color="info">
                Download CV
              </Button>
              <Button variant="contained" color="info">
                Contact Me
              </Button>
            </Stack>
          </div>
          <div className="flex justify-center items-center relative  rounded-full">
            <img src={Image} alt="Profile" className="w-[500px] opacity-75" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
