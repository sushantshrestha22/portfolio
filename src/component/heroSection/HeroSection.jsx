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


const HeroSection = () => {
  return (
    <>
      <div className="relative  bg-gradient-to-br h-[100vh] from-black to-[#0F172A] text-white grid grid-cols-2">
        <div className="absolute top-5 left-16">
          <img src={Logo} alt="Logo" className="w-[75px]" />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 -rotate-90 capitalize text-xl font-semibold border-l-4 border-sky-500 pl-2">
          frontend developer
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-6">
            <div className="uppercase text-4xl font-extrabold">
              Hi, I'm <br />
              Sushant Shrestha
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
        </div>
        <div className="flex  justify-center items-center relative border-s-2 rounded-full">
          <img src={Image} alt="Profile" className="w-[500px]" />
          <div className="absolute top-1/2 right-5 transform -translate-y-1/2">
            <Sidebar />
          </div>
          <SiMui className="absolute top-25 start-10 w-[50px] h-[50px] text-blue-600"/>
          <GrReactjs className="absolute top-10 start-25 w-[50px] h-[50px] text-blue-600"/>
          <FaJsSquare className="absolute bottom-10 end-25 w-[50px] h-[50px] text-yellow-400"/>
        </div>
        <div className="absolute text-[150px] font-extrabold opacity-30 -bottom-10 text-blue-300 animate-fade-in">
          Welcome
        </div>
        <div className="absolute right-20 -bottom-16">
          <img
            src={MainBg}
            alt="MainBg"
            className="w-[250px] h-[150px] object-cover"
          />
        </div>
        
      </div>
    </>
  );
};

export default HeroSection;
