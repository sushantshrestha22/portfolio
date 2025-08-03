import { typo } from "@/constant/typography";
import HubitUsersite from "@/assets/images/hubit-usersite.png";
import Raccs from "@/assets/images/raccs-cms.png";
import TilottamaAdmin from "@/assets/images/ttc-admin.png";
import TilottamaUser from "@/assets/images/ttc-usersite.png";
import Transport from "@/assets/images/tms-admin.png";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Project } from "@/utils/types/types";

const Projects = () => {
  const data: Project[] = [
    {
      name: "Hubit Usersite",
      image: HubitUsersite,
      url: "/projects/hubit-usersite",
      description:
        "A user site for Hubit, showcasing various features and functionalities.",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Shadcn UI"],
    },
    {
      name: "RACCS CMS",
      image: Raccs,
      url: "/projects/raccs-cms",
      description:
        "A content management system for RACCS, built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Shadcn UI"],
    },
    {
      name: "Tilottama Admin",
      image: TilottamaAdmin,
      url: "/projects/tilottama-admin",
      description:
        "An admin dashboard for Tilottama, providing management features.",
      tags: ["React", "Tailwind CSS", "Shadcn UI"],
    },
    {
      name: "Tilottama User Site",
      image: TilottamaUser,
      url: "/projects/tilottama-usersite",
      description:
        "A user-facing site for Tilottama, showcasing various functionalities.",
      tags: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      name: "Transport Management System",
      image: Transport,
      url: "/projects/transport-management-system",
      description:
        "A transport management system for efficient logistics and transportation.",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Shadcn UI"],
    },
  ];
  return (
    <main className={` grid grid-cols-3 gap-4 p-4`}>
      {data.map((project, index) => (
        <section key={index} className={`group border border-secondary p-4`}>
          <div className="relative ">
            <img src={project.image} alt={project.name} className=" " />
            <Link
              to={project.url}
              className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            >
              <Button className="bg-accent text-secondary-foreground">
                View Project
              </Button>
            </Link>
            <div className="absolute inset-0 group-hover:bg-black group-hover:opacity-50 transition-all duration-500 ease-in-out"></div>
          </div>
          <h2 className={`${typo.h4}`}>{project.name}</h2>
          <p className={`${typo.span}`}>{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-secondary text-primary px-2 py-1 rounded-xs text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      ))}
      {/* <section className={` border border-secondary p-4`}>
        <div className="relative group">
          <img src={HubitUsersite} alt="Hubit Usersite" className=" " />
          <Link
            to="/projects/hubit-usersite"
            className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          >
            <Button className="bg-accent text-secondary-foreground">
              View Project
            </Button>
          </Link>
          <div className="absolute inset-0 group-hover:bg-black group-hover:opacity-50 transition-all duration-500 ease-in-out"></div>
        </div>
        <h2 className={`${typo.h4}`}>Hubit Usersite</h2>
      </section> */}
    </main>
  );
};

export default Projects;
