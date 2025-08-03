import Photo from "@/assets/images/photo.png";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiSwagger } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";
import type { Skill } from "@/utils/types/types";
import { typo } from "@/constant/typography";

const data: Skill[] = [
  {
    name: "React",
    icon: <FaReact className="h-6 w-6" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="h-6 w-6" />,
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="h-6 w-6" />,
  },
  {
    name: "NextJS",
    icon: <RiNextjsFill className="h-6 w-6" />,
  },
  {
    name: "Swagger",
    icon: <SiSwagger className="h-6 w-6" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="h-6 w-6" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="h-6 w-6" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="h-6 w-6" />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript className="h-6 w-6" />,
  },
  {
    name: "Shadcn UI",
    icon: <SiShadcnui className="h-6 w-6" />,
  },
];

const items = data.map((skill, index) => (
  <div
    key={index}
    className="flex flex-col aspect-square w-[75%] justify-center items-center gap-2 p-2 bg-secondary rounded-lg shadow-md hover:bg-secondary/80 transition-colors"
  >
    <span className={`${typo.h1}`}>{skill.icon}</span>
    <span className={`${typo.h5}`}>{skill.name}</span>
  </div>
));
const reverseItems = data.reverse().map((skill, index) => (
  <div
    key={index}
    className="flex flex-col aspect-square w-[75%] justify-center items-center gap-2 p-2 bg-secondary rounded-lg shadow-md hover:bg-secondary/80 transition-colors"
  >
    <span className={`${typo.h1}`}>{skill.icon}</span>
    <span className={`${typo.h5}`}>{skill.name}</span>
  </div>
));
const Skills = () => {
  return (
    <div className="grid grid-cols-2 place-items-center px-10 h-[95vh] overflow-hidden">
      <section className="flex justify-center items-end relative h-full ">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent via-accent to-accent blur-3xl rounded-full aspect-square w-[90%] animate-pulse top-3/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <img src={Photo} alt="Sushant Shrestha" className="h-[90vh] z-10" />
      </section>
      <section className="flex  justify-center items-center">
        <div className="relative h-[95vh] w-48 overflow-hidden">
          <div className="animate-marquee-vertical grid grid-cols-1 gap-2">
            {items}
            {items}
          </div>
        </div>
        <div className="relative h-[95vh] w-48 overflow-hidden">
          <div className="animate-marquee-vertical grid grid-cols-1 gap-2">
            {reverseItems}
            {reverseItems}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
