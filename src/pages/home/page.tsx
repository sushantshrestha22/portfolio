import { Button } from "@/components/ui/button";
import { typo } from "@/constant/typography";
import Photo from "@/assets/images/photo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className=" grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-[95vh] px-4 sm:px-8 lg:px-10">
      <section className="w-full max-w-xl lg:place-content-center h-auto lg:h-full max-lg:p-4 lg:space-y-4 order-2 lg:order-1 max-lg:border border-secondary space-y-4 rounded-xs">
        <header>
          <h4 className={`${typo.h4}`}>Hi, I'm Sushant Shrestha</h4>
          <h3 className={`${typo.display} text-secondary font-bold`}>
            A Web Developer.
          </h3>
        </header>
        <p className={`${typo.h4} font-normal text-primary-foreground`}>
          I’m a passionate Frontend Developer with expertise in building
          responsive, user-friendly, and visually appealing web applications.
          Skilled in modern frameworks like React and experienced in crafting
          seamless user experiences with clean, efficient code. Currently
          expanding my skills in backend development to grow into a Fullstack
          Developer.
        </p>
        <div className="flex flex-row gap-4">
          <a href="./Resume.pdf" download="Sushant_Shrestha_Resume.pdf">
            <Button className={`${typo.h3} cursor-pointer`}>View Resume</Button>
          </a>
          <Link to="/contact">
            <Button variant="outline" className={`${typo.h3}`}>
              Contact Me
            </Button>
          </Link>
        </div>
      </section>
      <section className="w-full flex justify-center items-end h-full lg:h-[95vh] relative order-1 lg:order-2 max-lg:border-b border-secondary">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent via-accent to-accent blur-3xl rounded-full aspect-square w-[80vw] max-w-[90%] lg:max-w-[90%] animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 " />

        <img
          src={Photo}
          alt="Sushant Shrestha"
          className="h-[40vh] sm:h-[60vh] lg:h-[90vh] z-10 object-contain"
        />
      </section>
    </main>
  );
};

export default Home;
