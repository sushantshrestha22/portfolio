import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptLine, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "React",
      icon: <FaReact className="h-16 w-16" />,
    },
    {
      id: 2,
      name: "Next.js",
      icon: <TbBrandNextjs className="h-16 w-16" />,
    },
    {
      id: 3,
      name: "TailwindCSS",
      icon: <RiTailwindCssFill className="h-16 w-16" />,
    },
    {
      id: 4,
      name: "Shadcn",
      icon: <SiShadcnui className="h-16 w-16" />,
    },
    {
      id: 5,
      name: "Github",
      icon: <FaGithub className="h-16 w-16" />,
    },
    {
      id: 6,
      name: "Figma",
      icon: <FaFigma className="h-16 w-16" />,
    },
    {
      id: 7,
      name: "Javascript",
      icon: <RiJavascriptLine className="h-16 w-16" />,
    },
    {
      id: 8,
      name: "Postman",
      icon: <SiPostman className="h-16 w-16" />,
    },
    {
      id: 9,
      name: "Material-UI",
      icon: <SiMui className="h-16 w-16" />,
    },
    {
      id: 10,
      name: "Bootstrap",
      icon: <FaBootstrap className="h-16 w-16" />,
    },
    {
      id: 11,
      name: "Java",
      icon: <FaJava className="h-16 w-16" />,
    },
    {
      id: 12,
      name: "Spring Boot",
      icon: <SiSpringboot className="h-16 w-16" />,
    },
  ];

  return (
    <div className="flex flex-col gap-10 lg:px-20 px-10 min-h-[50vh] items-center justify-center">
      <div className="w-full text-center text-xl font-bold underline decoration-accent decoration-4 decoration-dotted pt-10">
        Skills
      </div>
      <div className="w-full">
        <div className="grid grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-2 bg-black bg-opacity-10 justify-center rounded flex-col py-4"
            >
              {skill.icon}
              <div className="font-semibold text-accent">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
