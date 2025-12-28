import LightRays from "@/components/LightRays";
import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";

import { Button } from "@/components/ui/button";
import { typo } from "@/constant/typography";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center ">
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#fff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20 z-10 relative">
        {/* Hero Section */}
        <section className="flex min-h-[calc(100vh-15rem)] flex-col justify-center text-center space-y-6 sm:space-y-8">
          <header className="space-y-3 sm:space-y-4">
            <h3 className={`${typo.h3} text-muted-foreground tracking-wide`}>
              Software Engineer
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

          <p className="text-sm sm:text-base lg:text-lg text-secondary max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Software Engineer | Frontend Enthusiast | Learning Backend to become
            Fullstack
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-secondary/50 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Crafting exceptional web experiences with React and modern
            JavaScript. Focused on clean, scalable code and thoughtful UI.
            Currently growing into full-stack development to build end-to-end
            solutions.
          </p>

          <section className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2">
            <Button
              variant="secondary"
              className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>

            <Button
              variant="outline"
              className="w-full border sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </section>

          <div className="pt-2">
            <ShinyText
              text="Trusted by 10+ clients"
              speed={3}
              className="text-sm sm:text-lg text-muted-foreground text-center"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
