import "./App.css";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Education from "./component/education/Education";
import Experience from "./component/experience/Expericence";
import Footer from "./component/footer/Footer";
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
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
