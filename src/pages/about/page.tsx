import Profile from "../../assets/images/Profile.png";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      skills: ["React Query", "Context API", "Redux", "Zustand"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git/GitHub", "Vite", "REST APIs", "Agile/Scrum"],
    },
  ];

  return (
    <section id="about" className="py-10 relative bg-card">
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
                  I specialize in crafting modern, responsive interfaces using
                  React, Tailwind CSS, and TypeScript. My development approach
                  emphasizes clean architecture, reusable components, and
                  consistent design patterns to deliver maintainable and
                  high-quality solutions.
                </p>
                <p>
                  During my internship at{" "}
                  <span className="text-secondary font-semibold">
                    Hub IT Pvt. Ltd.
                  </span>
                  , I contributed to production-level projects, including a CMS
                  platform, collaborating with cross-functional teams to deliver
                  features used in live environments.
                </p>
                <p>
                  Currently expanding my expertise into backend development with
                  Node.js and databases to become a versatile full-stack
                  developer, focused on building complete, scalable solutions.
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
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg">
                Available for Work
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
                  "Three.js",
                  "GSAP",
                  "Framer Motion",
                  "Axios",
                  "Formik",
                  "Yup",
                  "VS Code",
                  "Postman",
                  "Figma",
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
