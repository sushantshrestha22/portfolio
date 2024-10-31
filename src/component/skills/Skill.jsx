import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";

import { SiMui,SiFigma, SiMysql, SiSpring } from "react-icons/si";

const skills = [
  {
    title: "JavaScript",
    Icon: FaJsSquare,
  },
  {
    title: "React",
    Icon: GrReactjs,
  },
  {
    title: "HTML5",
    Icon: IoLogoHtml5,
  },
  {
    title: "CSS3",
    Icon: IoLogoCss3,
  },
  {
    title: "Tailwind CSS",
    Icon: RiTailwindCssFill,
  },
  {
    title: "Material UI",
    Icon: SiMui,
  },
  {
    title: "Java",
    Icon: FaJava,
  },
  {
    title: "Spring Boot",
    Icon: SiSpring,
  },
  {
    title: "MySQL",
    Icon: SiMysql,
  },
  {
    title:"Figma",
    Icon:SiFigma,
  }
];

const Skill = () => {
  return (
    <>
      <div
        className="flex flex-col gap-10 px-6 py-20 mt-10
      "
      >
        <div className="flex flex-col items-center ">
          <div>
            <div className="uppercase text-3xl text-white font-semibold">
              Skills
            </div>
            <div className="flex items-center justify-start gap-3 w-48">
              <div className="h-[2px] w-[50%] bg-white"></div>
              <div className="uppercase text-sky-500 text-sm font-semibold ">
                what i do
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-4 w-[75%] justify-center items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex transition-all group translate hover:scale-105 hover:border-2 border-sky-500  flex-col items-center justify-center bg-gray-700 bg-opacity-20 rounded-lg p-4"
              >
                <skill.Icon className="text-6xl text-sky-800 group-hover:text-sky-500" />
                <div className="text-white text-lg font-semibold">
                  {skill.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
