import { typo } from "@/constant/typography";
import type { Education } from "@/utils/types/types";
import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Education = () => {
  const [triggeredIndex, setTriggeredIndex] = React.useState<number>(0);
  const data: Education[] = [
    {
      date: "May 2020- Present",
      institution: "Butwal Multiple Campus, Tribhuwan University",
      level:
        "Bachelor of Science in Computer Science and Information Technology",
      description:
        "I am currently pursuing my Bachelor's degree in Computer Science and Information Technology from Tribhuwan University. I have taken courses in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Web Development. I have also completed several projects in these areas. I am currently working on a project that involves building a web application using React.js,Next.js and others.I am excited to continue learning and growing as a software developer. I am currently pursuing my Bachelor's degree in Computer Science and Information Technology from Tribhuwan University. I have taken courses in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Web Development. I have also completed several projects in these areas. I am currently working on a project that involves building a web application using React.js,Next.js and others.I am excited to continue learning and growing as a software developer.",
    },

    {
      date: "May 2020- Present",
      institution: "HUB I.T Training and Solution",
      level: "Web Development",
      description: "Graduated with honors, focusing on STEM subjects.",
    },
    {
      date: "May 2020- Present",
      institution: "Scholars Home",
      level: "+2 Science",
      description: "Graduated with honors, focusing on STEM subjects.",
    },
    {
      date: "May 2020- Present",
      institution: "New Horizon English Boarding Higher Secondary School",
      level: "SLC",
      description: "Graduated with honors, focusing on STEM subjects.",
    },
  ];

  return (
    <main className="grid lg:grid-cols-3 gap-4 min-h-[95vh] py-2 box-border ">
      <section className="border border-secondary lg:col-span-2 rounded-xs h-full max-sm:hidden">
        {data[triggeredIndex] && (
          <section className="flex flex-col gap-4 p-4">
            <section className="flex items-center gap-4">
              <div className="h-20 w-20">
                {" "}
                <RiGraduationCapFill className="h-20 w-20 text-secondary-foreground" />
              </div>
              <div>
                <h3 className={`${typo.display} text-secondary`}>
                  {data[triggeredIndex].institution}
                </h3>
                <span className={`${typo.h3} text-secondary-foreground`}>
                  {data[triggeredIndex].level}
                </span>
                <p className={`${typo.small} text-secondary`}>
                  {data[triggeredIndex].date}
                </p>
              </div>
            </section>
            <p className={`${typo.body} text-primary-foreground`}>
              {data[triggeredIndex].description}
            </p>
            <div className="flex items-center gap-2"></div>
          </section>
        )}
      </section>

      <section className="flex flex-col gap-4 justify-between max-sm:hidden">
        {data.map((item, index) => (
          <section
            className={`flex items-center gap-4 bg-accent p-4 ${
              index === triggeredIndex
                ? "bg-secondary-foreground text-primary"
                : ""
            } cursor-pointer min-h-[20vh] rounded-xs`}
            key={index}
            onClick={() => {
              setTriggeredIndex(index);
            }}
          >
            <div>
              {" "}
              <RiGraduationCapFill
                className={`h-8 w-8 ${
                  index === triggeredIndex
                    ? "text-primary"
                    : "text-secondary-foreground"
                }`}
              />
            </div>
            <section>
              <h4 className={`${typo.h4} font-semibold`}>{item.institution}</h4>
              <p className={`${typo.small}`}>{item.date}</p>
            </section>
          </section>
        ))}
      </section>
      <section>
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4 sm:hidden"
          // value={openItem ?? undefined}
          // onValueChange={(value) => setOpenItem(value)}
        >
          {data.map((item, index) => {
            // const isOpen = openItem === `item-${index}`;
            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border border-secondary rounded-xs
               
                 `}
              >
                <AccordionTrigger className="flex justify-between items-center p-4 relative cursor-pointer">
                  <section className={`flex items-start gap-2 `}>
                    <span className="py-2">
                      <RiGraduationCapFill className="h-6 w-6 text-secondary-foreground" />
                    </span>
                    <div className="flex flex-col">
                      <h4 className={`${typo.h2} text-secondary`}>
                        {item.level}
                      </h4>
                      <span className={`${typo.small}`}>{item.date}</span>
                    </div>
                  </section>
                </AccordionTrigger>
                <AccordionContent className={`px-4 py-2 `}>
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
  );
};

export default Education;
