import React from "react";
import devdaha from "@/assets/image/devdaha.png";
import tilottama from "@/assets/image/tilottama.png";
import eventManagementSystem from "@/assets/image/eventManagementSystem.png";
import devdahaAdmin from "@/assets/image/devdahaAdmin.png";
import tilottamaAdmin from "@/assets/image/tilottamaAdmin.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Devdaha Medical College",
      type: "Userside",
      techStack: [ "Next.js", "TailwindCSS", "TanStack", , "Shadcn"],
      image: devdaha,
      github: "https://github.com/sushantshrestha22/devdahaUsersite.git",
      demo: "https://devdahamedicalcollege.edu.np/",
    },
    {
      id: 2,
      name: "Devdaha Medical College",
      type: "Admin Panel",
      image: devdahaAdmin,
      description: "This is a project description",
      techStack: ["React", "TailwindCSS", "TanStack", , "Shadcn"],
      github: "",
      demo: "",
    },
    {
      id: 3,
      name: "Tilottama College",
      type: "Userside",
      image: tilottama,
      description: "This is a project description",
      techStack: [ "Next.js", "TailwindCSS", "TanStack", , "Shadcn"],
      github: "https://github.com",
      demo: "https://frontttc.hubit.com.np/",
    },
    {
      id: 4,
      name: "Tilottama College",
      type: "Admin Panel",
      image: tilottamaAdmin,
      description: "This is a project description",
      techStack: ["React", "TailwindCSS", "TanStack", "Shadcn"],
      github: "",
      demo: "",
    },
    {
      id: 5,
      name: "Event Management System",
      type: "",
      image: eventManagementSystem,
      description: "This is a project description",
      techStack: ["React", "TailwindCSS", "TanStack", "Shadcn"],
      github: "",
      demo: "",
    },
  ];

  return (
    <div className="lg:px-20 px-10">
      <div className="w-full text-center text-xl font-bold underline decoration-accent decoration-4 decoration-dotted py-10">
        Projects
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col  text-sm">
            <div className="w-full">
              <Image src={project.image} alt={project.name} className="w-72 h-48" />
            </div>
            <div className="font-semibold text-accent mt-2">
              {project.name}{" "}
              <span className={`text-sm ${project.type ? "" : "hidden"}`}>
                ({project.type})
              </span>
            </div>
            
            <div className="flex gap-2">
              {project.techStack.map((tech) => (
                <Button
                  variant="link"
                  key={tech}
                    className="underline"
                >
                  {tech}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className={`text-accent ${project.demo ? "" : "hidden"}`}
              >
                <Link href={project.github}> Github</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`text-accent ${project.demo ? "" : "hidden"}`}
              >
                <Link href={project.demo}>Demo</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
