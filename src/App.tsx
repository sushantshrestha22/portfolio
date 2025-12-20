import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/home/page";
import { AppSidebar } from "./common/app-sidebar";
import Contact from "./pages/contact/page";
import About from "./pages/about/page";
import Experience from "./pages/experience/page";
import { useState, useEffect } from "react";
import TextType from "./components/TextType";
import LetterGlitch from "./components/LetterGlitch";

const App = () => {
  const [showGreeting, setShowGreeting] = useState(true);
  const [showTextType, setShowTextType] = useState(true);
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    // Show TextType for 6 seconds, then show LetterGlitch
    const textTimer = setTimeout(() => {
      setShowTextType(false);
      setShowGlitch(true);
    }, 7500);

    // Hide entire greeting after 9 seconds total
    const greetingTimer = setTimeout(() => {
      setShowGreeting(false);
    }, 10000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(greetingTimer);
    };
  }, []);

  return (
    <ThemeProvider>
      {showGreeting && (
        <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
          {showTextType && (
            <div className="animate-in fade-in duration-700 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:duration-700">
              <TextType
                text={["Hello !", "Namaste!", "Welcome to my Portfolio! "]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
              />
            </div>
          )}

          {showGlitch && (
            <div className="absolute inset-0 flex items-center justify-center animate-in fade-in duration-700 slide-in-from-bottom-4">
              <LetterGlitch
                glitchSpeed={50}
                centerVignette={true}
                outerVignette={false}
                smooth={true}
              />
            </div>
          )}
        </div>
      )}
      <section className="fixed right-0 top-0   h-screen  z-50 p-2 flex items-start max-sm:h-auto max-sm:w-full max-sm:justify-end">
        <AppSidebar />
      </section>
      <div className="w-full z-10 relative h-screen ">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default App;
