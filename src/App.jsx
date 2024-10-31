import "./App.css";
import About from "./component/about/About";
import Education from "./component/education/Education";
import HeroSection from "./component/heroSection/HeroSection";
import Skill from "./component/skills/Skill";

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-black to-[#0F172A]">
        <HeroSection />
        <About />
        <Education />
        <Skill/>
      </div>
    </>
  );
}

export default App;
