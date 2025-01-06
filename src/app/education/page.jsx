import React from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      school: "Butwal Multiple Campus ,Tribhuwan University",
      degree:
        "Bachelor of Science in Computer Science and Information Technology",
      graduated: "May 2020 - Present",
      description:
        "I am currently pursuing my Bachelor's degree in Computer Science and Information Technology from Tribhuwan University. I have taken courses in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Web Development. I have also completed several projects in these areas. I am currently working on a project that involves building a web application using React.js,Next.js and others.I am excited to continue learning and growing as a software developer.",
    },
    {
      id: 2,
      school: "HUB I.T Training and Solution",
      degree: "Frontend Development",
      graduated: "2022 - 2023",
      description:
        "I have completed a Frontend Development course at HUB I.T Training and Solution. I have learned HTML, CSS, JavaScript, React.js, Next.js, and other technologies. I have built several projects using these technologies. I have also learned about responsive design, accessibility, and performance optimization. I am excited to continue learning and growing as a frontend developer.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 lg:px-20 px-10 min-h-[50vh] items-center justify-center ">
      <div className="w-full text-center text-xl font-bold underline decoration-accent decoration-4 decoration-dotted pt-10">
        Education
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        {education.map((education) => (
          <div
            key={education.id}
            className="bg-black bg-opacity-10 p-4 rounded-lg flex flex-col gap-2"
          >
            <div className="font-semibold text-accent ">{education.school}</div>
            <div className="font-medium h-[6vh]">{education.degree} ({education.graduated})</div>
            <div className="text-justify">{education.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
