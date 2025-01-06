import Contact from "./contact/page";
import Education from "./education/page";
import Experience from "./experience/page";
import Home from "./home/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

const First = () => {
  return (
    <div className="">
      <Home />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
};
export default First;
