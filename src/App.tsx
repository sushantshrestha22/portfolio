import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/home/page";
import { AppSidebar } from "./common/app-sidebar";
import Contact from "./pages/contact/page";
import About from "./pages/about/page";
import Experience from "./pages/experience/page";

const App = () => {
  return (
    <ThemeProvider>
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
