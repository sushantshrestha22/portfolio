import { typo } from "@/constant/typography";
import type { Education } from "@/utils/types/types";
import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";

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
    <main className="grid lg:grid-cols-3 gap-4 p-4 min-h-[95vh]">
      <section className="border border-secondary lg:col-span-2 rounded-xs">
        {data[triggeredIndex] && (
          <section className="flex flex-col gap-4 p-4">
            <section className="flex items-center gap-4">
              <div className="h-20 w-20">
                {" "}
                <RiGraduationCapFill className="h-20 w-20 text-secondary-foreground" />
              </div>
              <div>
                <h3 className={`${typo.h4} text-secondary`}>
                  {data[triggeredIndex].institution}
                </h3>
                <span className={`${typo.h4} text-secondary-foreground`}>
                  {data[triggeredIndex].level}
                </span>
                <p className={`${typo.span} text-secondary`}>
                  {data[triggeredIndex].date}
                </p>
              </div>
            </section>
            <p className={`${typo.h5} text-primary-foreground`}>
              {data[triggeredIndex].description}
            </p>
            <div className="flex items-center gap-2"></div>
          </section>
        )}
      </section>

      <section className="flex flex-col gap-4 justify-between">
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
              <h4 className={`${typo.h4}`}>{item.institution}</h4>
              <p className={`${typo.span}`}>{item.date}</p>
            </section>
          </section>
        ))}
      </section>
    </main>
  );
};

export default Education;
