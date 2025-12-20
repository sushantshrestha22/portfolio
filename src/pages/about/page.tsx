import Profile from "../../assets/images/Profile.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, FolderGit2, Sparkles } from "lucide-react";

const About = () => {
  const coreExpertise = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+"],
    },
    {
      title: "UI/UX Implementation",
      skills: ["Tailwind CSS", "Shadcn UI", "Responsive Design", "CSS3"],
    },
    {
      title: "State Management",
      skills: ["React Query", "Context API"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git/GitHub", "Vite", "REST APIs", "Agile/Scrum"],
    },
  ];
  const stats = [
    {
      icon: Briefcase,
      value: "1+",
      label: "Years Experience",
      color: "text-blue-500",
    },
    {
      icon: Code,
      value: "15+",
      label: "Technologies",
      color: "text-green-500",
    },
    {
      icon: FolderGit2,
      value: "10+",
      label: "Projects Completed",
      color: "text-purple-500",
    },
    {
      icon: Sparkles,
      value: "100%",
      label: "Client Satisfaction",
      color: "text-yellow-500",
    },
  ];
  return (
    <section
      id="about"
      className="py-10 bg-card relative space-y-12 sm:space-y-16 "
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto px-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-secondary/5  border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
          >
            <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
              <stat.icon
                className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto ${stat.color}`}
              />
              <h3 className="text-2xl sm:text-3xl font-bold">{stat.value}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        {/* Header with Stats */}
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              About Me
            </h2>
            <p className="text-secondary/70 text-lg max-w-2xl mx-auto">
              Frontend Developer specialized in building scalable, performant,
              and user-centric web applications
            </p>
          </div>
        </div>
        {/* Left Column - Profile & Bio */}
        <div className="space-y-8 flex flex-col lg:flex-row lg:space-x-16 lg:space-y-0">
          {/* Bio */}
          <Card className="bg-secondary/5 border-secondary/10">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                Professional Journey
              </h3>
              <div className="space-y-4 text-secondary/80 leading-relaxed">
                <p>
                  As a frontend developer, I architect and implement
                  sophisticated user interfaces leveraging React, TypeScript,
                  and modern CSS frameworks. My methodology centers on scalable
                  component architecture, type-safe development practices, and
                  adherence to industry-standard design patterns that ensure
                  long-term maintainability and optimal performance.
                </p>
                <p>
                  I bring proven expertise in delivering production-grade
                  applications, having architected enterprise-level CMS
                  platforms and complex web solutions. My collaborative approach
                  in agile environments, combined with a deep understanding of
                  user experience principles, enables me to transform business
                  requirements into intuitive, high-performing digital
                  experiences.
                </p>
                <p>
                  Currently advancing my technical repertoire through backend
                  technologies including Node.js and database systems,
                  positioning myself as a comprehensive full-stack engineer
                  capable of delivering end-to-end solutions. My commitment to
                  continuous learning ensures I remain at the forefront of web
                  development innovation and best practices.
                </p>
              </div>
            </CardContent>
          </Card>
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-96 sm:w-80 sm:h-[420px] rounded-2xl overflow-hidden border-4 border-secondary/10">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        {/* Right Column - Core Expertise */}
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-semibold">Core Expertise</h3>
            <p className="text-secondary/70">
              Specialized skills and technologies I work with daily
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {coreExpertise.map((area, index) => (
              <Card
                key={index}
                className="bg-secondary/5 border-secondary/10 hover:border-secondary/20 transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-semibold text-lg text-secondary">
                    {area.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1.5 text-xs font-medium "
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Tech Stack */}
          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/10">
            <CardContent className="p-6 space-y-4">
              <h4 className="font-semibold text-lg">Additional Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Router",
                  "Framer Motion",
                  "Axios",
                  "Formik",
                  "Yup",
                  "VS Code",
                  "Postman",
                  "Figma",
                  "Swagger",
                  "Nestjs",
                  "Express.js",
                  "MongoDB",
                ].map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-3 py-1.5 text-xs font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
