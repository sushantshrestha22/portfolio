import type { ExperienceType } from "@/utils/types/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ExternalLink, Folder } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  const experienceData: ExperienceType[] = [
    {
      company: "HubIT Training and Solutions",
      duration: "Aug 2024 - Aug 2025",
      title: "Frontend Developer",
      description: [
        "Developed and maintained responsive web applications using React.js and Next.js, ensuring optimal performance and user experience across various devices.",
        "Collaborated with cross-functional teams including designers, backend developers, and product managers to deliver high-quality software solutions on time.",
        "Implemented state management using Redux and Context API to handle complex application states effectively.",
        "Optimized web applications for maximum speed and scalability, resulting in a 20% improvement in load times.",
        "Participated in code reviews and contributed to the development of best practices and coding standards within the team.",
      ],
      projects: [
        {
          name: "Logistic Ride Sharing App (Sathi) Admin Panel",
          technologies: ["React.js", "Next.js", "CSS"],
          link: "https://play.google.com/store/apps/details?id=com.np.hubit.sathi&hl=en",
        },
        {
          name: "Chamber of Commerce & Industry ERP & Finance Management Software",
          technologies: ["React.js", "Next.js", "tailwind CSS"],
          link: "https://bcci.org.np/",
        },
        {
          name: "Devdaha Medical College Web, Journal & CMS Software",
          technologies: ["React.js", "Next.js", "CSS"],
          link: "https://www.devdahamedicalcollege.edu.np/",
        },
        {
          name: "Tilottama Campus Web & CMS Software",
          technologies: ["React.js", "Next.js", "CSS"],
          link: "",
        },
      ],
    },
    {
      company: "Remote / Various Clients",
      duration: "Aug 2025 - Present",
      title: "Freelance Frontend Developer",
      description: [
        "Delivering tailored web solutions for diverse clients, focusing on responsive design and user-centric interfaces using React.js and TypeScript.",
        "Collaborating closely with clients to understand their requirements and translate them into functional, high-quality web applications.",
        "Utilizing modern frontend technologies and frameworks to build scalable and maintainable codebases.",
        "Ensuring cross-browser compatibility and optimizing applications for performance and accessibility.",
        "Managing project timelines and deliverables effectively to meet client expectations.",
      ],
      projects: [
        {
          name: "Rotaract Club of Central Siyari Club Management System",
          technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
          link: "https://rotaractsiyari.org.np/",
        },
        {
          name: "Nordes Corporate Website and CMS Software",
          technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
          link: "https://nordes.fi/",
        },
        {
          name: "Bato The Road Platform CMS Software",
          technologies: ["React.js", "TypeScript", "Tailwind CSS"],
          link: "https://uat.batotheroad.com/",
        },
      ],
    },
  ];

  const timelineData = experienceData.map((experience, index) => ({
    title: experience.duration,
    content: (
      <div className="space-y-6" key={index}>
        {/* Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                {experience.title}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-neutral-600 dark:text-neutral-400">
                {experience.company}
              </p>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {experience.description.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                <span className="text-xs md:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Grid */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="projects"
            className="border-neutral-200 dark:border-neutral-800"
          >
            <AccordionTrigger className="hover:no-underline py-3">
              <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <Folder className="w-5 h-5 text-primary" />
                Notable Projects ({experience?.projects?.length})
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {experience?.projects?.map((project, projIdx) => (
                  <a
                    key={projIdx}
                    href={project?.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full bg-neutral-50 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:border-primary/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm leading-tight group-hover:text-primary transition-colors">
                            {project.name}
                          </h5>
                          <ExternalLink className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-primary flex-shrink-0 transition-colors" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIdx) => (
                            <Badge
                              key={techIdx}
                              variant="outline"
                              className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),
  }));

  return (
    <main className="min-h-screen bg-background">
      {/* Timeline */}
      <Timeline data={timelineData} />
    </main>
  );
};

export default Experience;
