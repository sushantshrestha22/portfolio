import { typo } from "@/constant/typography";
import type { EducationType } from "@/utils/types/types";
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
  const data: EducationType[] = [
    {
      date: "May 2020- Present",
      institution: "Butwal Multiple Campus, Tribhuwan University",
      level:
        "Bachelor of Science in Computer Science and Information Technology",
      description:
        "I am pursuing a Bachelor of Science in Computer Science and Information Technology (BSc. CSIT) at Butwal Multiple Campus, where I am gaining in-depth knowledge of programming, software development, database systems, networking, and modern web technologies. This academic journey has not only strengthened my technical expertise but also enhanced my problem-solving abilities, teamwork, and research skills, preparing me to grow as a competent software developer.",
    },

    {
      date: "May 2023",
      institution: "HUB I.T Training and Solution",
      level: "Web Development",
      description:
        "I completed a Web Development training from Hub IT Training and Solution, where I gained practical knowledge of modern web technologies, including HTML, CSS, JavaScript, and React. This training enhanced my ability to build responsive, user-friendly websites and strengthened my foundation in frontend development, which I continue to expand as I move toward becoming a fullstack developer.",
    },

    {
      date: "May 2018 - Apr 2020",
      institution: "Scholars Home",
      level: "+2 Science",
      description:
        "I pursued my Higher Secondary Education from Scholars Home College, specializing in the Science faculty with Mathematics. This stage of my academic journey helped me strengthen my analytical and problem-solving skills while gaining deeper knowledge of scientific principles. It also nurtured my interest in computing and technology, motivating me to further explore computer science and software development in higher studies.",
    },
    {
      date: "upto 2018",
      institution: "New Horizon English Boarding Higher Secondary School",
      level: "SEE",
      description:
        "I completed my Secondary Education (SEE) from New Horizon English Boarding Higher Secondary School, where I gained a solid academic foundation with a focus on science, mathematics, and computer studies. My school years not only strengthened my logical thinking and problem-solving abilities but also shaped my discipline, teamwork, and leadership skills through active participation in both academics and extracurricular activities. This stage of my education played a key role in sparking my interest in technology and laid the groundwork for my journey toward computer science and software development.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4 min-h-[95vh] p-2 box-border ">
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
