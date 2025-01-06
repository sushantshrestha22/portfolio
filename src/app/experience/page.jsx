import { Button } from "@/components/ui/button";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  const experience = [
    {
      id: 1,
      company: "HUB I.T Training and Solution",
      position: "Intern",
      duration: "2023 - 2024",
      description:
        "Gained hands-on experience in web and software development, working on projects using React/Next.js. Collaborated with the team to understand the software development lifecycle, version control with Git, and agile methodologies.",
    },
    {
      id: 2,
      company: "HUB I.T Training and Solution",
      position: "Frontend Developer",
      duration: "2024 - present",
      description:
        "Working as a Frontend Developer, focusing on responsive design, accessibility, and performance optimization using React.js, TailwindCSS, Shadcn, github and Next.js.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 lg:px-20 px-10 min-h-[50vh] items-center justify-center">
      <div className="w-full text-center text-xl font-bold underline decoration-accent decoration-4 decoration-dotted pt-10">
        Experience
      </div>
      <div className="w-full">
        <Accordion type="single" collapsible className=" w-full">
          {experience.map((experience) => (
            <AccordionItem
              value={experience.id}
              className=""
              key={experience.id}
            >
              <AccordionTrigger className="">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-accent">
                    {experience.id}
                  </Button>
                  <div className="font-semibold text-accent">
                    {experience.company}
                  </div>
                </div>
                <div className="font-medium">
                  {experience.position} ({experience.duration})
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-justify">{experience.description}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Experience;
