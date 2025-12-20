import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "JobJourney",
    description:
      "A job portal with resume builder, job tracking, and application management.",
    tech: ["React", "Tailwind", "REST API"],
    live: "#",
    github: "#",
  },
  {
    title: "Rotaract Central Siyari CMS",
    description:
      "Content management system built during internship for managing events and members.",
    tech: ["React", "Tailwind", "CMS"],
    live: "#",
    github: "#",
  },
  {
    title: "Gym Management System",
    description:
      "System to manage members, payments, and attendance for gyms.",
    tech: ["React", "Redux", "PostgreSQL"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <header className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">Projects</h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            A selection of real-world projects showcasing my frontend skills and
            problem-solving approach.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm text-secondary/75">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/10"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="gap-2">
                    <ExternalLink size={16} /> Live
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github size={16} /> Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;