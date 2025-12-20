import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/home/page";
import { AppSidebar } from "./common/app-sidebar";
import DarkVeil from "./components/DarkVeil";
// import Education from "./pages/education/page";
// import Projects from "./pages/projects/page";
// import Skills from "./pages/skills/page";
// import Contact from "./pages/contact/page";
import About from "./pages/about/page";
import { Construction } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";

const App = () => {
  return (
    <ThemeProvider>
      <div className="w-full h-screen fixed top-0 left-0 pointer-events-none overflow-hidden">
        <DarkVeil hueShift={0} speed={2} scanlineIntensity={0} />
      </div>
      <section className="fixed left-10 top-0 h-screen w-20 border-border flex-col flex items-start justify-center pt-8 z-50 max-sm:hidden ">
        <AppSidebar />
      </section>
      <div className="w-full z-10 relative h-screen">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        
        {/* Under Development Section */}
        <section className="min-h-screen flex items-center justify-center py-20 px-4">
          <Card className="max-w-2xl mx-auto bg-card border-border">
            <CardContent className="p-8 sm:p-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <Construction className="w-16 h-16 sm:w-20 sm:h-20 text-primary animate-bounce" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Portfolio Under Development
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                  I'm currently crafting something special. Additional sections including Projects, Skills, Experience, and Contact will be available soon.
                </p>
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Coming Soon
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* <section id="project">
          <Projects />
        </section> */}
        {/* <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="education">
          <Education />
        </section> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
