import { useState } from "react";
import type { ExperienceType } from "@/utils/types/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { typo } from "@/constant/typography";
import { RiUserStarFill } from "react-icons/ri";

const Experience = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");
  // Sample data for experience items

  const data: ExperienceType[] = [
    {
      company: "HubIT Training and Solutions",
      date: "Sep 2024 - Nov 2024",
      description:
        "I am currently pursuing my Bachelor's degree in Computer Science and Information Technology from Tribhuwan University. I have taken courses in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Web Development. I have also completed several projects in these areas. I am currently working on a project that involves building a web application using React.js,Next.js and others.I am excited to continue learning and growing as a software developer. I am currently pursuing my Bachelor's degree in Computer Science and Information Technology from Tribhuwan University. I have taken courses in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Web Development. I have also completed several projects in these areas. I am currently working on a project that involves building a web application using React.js,Next.js and others.I am excited to continue learning and growing as a software developer. I have taken courses in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Web Development. I have also completed several projects in these areas. I am currently working on a project that involves building a web application using React.js,Next.js and others.I am excited to continue learning and growing as a software developer.",
    },
    {
      company: "HubIT Training and Solutions",
      date: "Nov 2024 - Present",
      description:
        "I am currently pursuing my Bachelor's degree in Computer Science and Information Technology from Tribhuwan University. I have taken courses in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Web Development. I have also completed several projects in these areas. I am currently working on a project that involves building a web application using React.js,Next.js and others.I am excited to continue learning and growing as a software developer. I am currently pursuing my Bachelor's degree in Computer Science and Information Technology from Tribhuwan University. I have taken courses in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Web Development. I have also completed several projects in these areas. I am currently working on a project that involves building a web application using React.js,Next.js and others.I am excited to continue learning and growing as a software developer. I have taken courses in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Web Development. I have also completed several projects in these areas. I am currently working on a project that involves building a web application using React.js,Next.js and others.I am excited to continue learning and growing as a software developer.",
    },
  ];

  return (
    <div>
      <main className="p-4 h-full ">
        <section className=" col-span-2 rounded-xs  ">
          <Accordion
            type="single"
            collapsible
            className=" flex flex-col gap-3"
            value={openItem ?? undefined}
            onValueChange={(value) => setOpenItem(value)}
          >
            {data.map((item, index) => {
              const isOpen = openItem === `item-${index}`;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`border border-secondary rounded-xs ${
                    isOpen ? "mt-10" : ""
                  } `}
                >
                  <AccordionTrigger className="flex justify-between items-center p-4 relative cursor-pointer">
                    <section
                      className={`flex items-start gap-2 ${
                        isOpen ? "absolute -top-6 flex-col" : ""
                      } `}
                    >
                      <span
                        className={`flex items-center gap-2 rounded-xs p-4 bg-secondary-foreground text-secondary`}
                      >
                        <RiUserStarFill className={`h-6 w-6 text-primary`} />
                      </span>
                      <div className="flex flex-col">
                        <h4 className={`${typo.display} text-secondary`}>
                          {item.company}
                        </h4>
                        <span className={`${typo.small}`}>
                          {item.date}
                        </span>
                      </div>
                    </section>
                  </AccordionTrigger>
                  <AccordionContent className={`px-4 py-2 ${isOpen ? "mt-18" : ""}`}>
                    <p className={`${typo.body} text-primary-foreground`}>
                      {item.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>
      </main>
    </div>
  );
};

export default Experience;
