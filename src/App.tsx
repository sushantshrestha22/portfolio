import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/home/page";
import { AppSidebar } from "./common/app-sidebar";
// import Education from "./pages/education/page";
// import Projects from "./pages/projects/page";
// import Skills from "./pages/skills/page";
import Contact from "./pages/contact/page";
import About from "./pages/about/page";

import Experience from "./pages/experience/page";

const App = () => {
  return (
    <ThemeProvider>
      {/* Custom Cursor Effects */}

      {/* <div className="w-full h-screen fixed top-0 left-0 pointer-events-none overflow-hidden">
        <DarkVeil hueShift={0} speed={2} scanlineIntensity={0} />
      </div> */}
      <section className="fixed right-0 max-sm:top-0  sm:bottom-0 h-screen  z-50 p-2 flex items-end max-sm:h-auto max-sm:w-full max-sm:justify-end">
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
