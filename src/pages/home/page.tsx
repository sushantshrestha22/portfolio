import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { typo } from "@/constant/typography";
import { Code, Briefcase, FolderGit2, Sparkles } from "lucide-react";

const Home = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "2+",
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
      value: "20+",
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
    <main className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Hero Section */}
        <section className="flex flex-col justify-center text-center space-y-6 sm:space-y-8">
          <header className="space-y-3 sm:space-y-4">
            <h3 className={`${typo.h3} text-muted-foreground tracking-wide`}>
              Software Developer
            </h3>

            <SplitText
              text="Hello, I'm Sushant Shrestha!"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
          </header>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Crafting exceptional web experiences with React and modern JavaScript.
            Focused on clean, scalable code and thoughtful UI. Currently growing
            into full-stack development to build end-to-end solutions.
          </p>

          <section className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2">
            <Button className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium">
              View My Work
            </Button>

            <Button 
              variant="outline" 
              className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium"
            >
              Get In Touch
            </Button>
          </section>

          <div className="pt-2">
            <ShinyText
              text="Building real-world products with modern web technologies"
              speed={3}
              className="text-xs sm:text-sm text-muted-foreground text-center"
            />
          </div>
        </section>

        {/* Stats Grid */}
        <section className="w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto ${stat.color}`} />
                  <h3 className="text-2xl sm:text-3xl font-bold">{stat.value}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
