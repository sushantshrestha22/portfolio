import { Button } from "@/components/ui/button";
import { typo } from "@/constant/typography";
import Photo from "@/assets/images/photo.png";

const Home = () => {
  return (
    <main className=" grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-[95vh] px-4 sm:px-8 lg:px-10">
      <section className="w-full max-w-xl lg:place-content-center h-auto lg:h-full max-lg:p-4 lg:space-y-4 order-2 lg:order-1 max-lg:border border-secondary space-y-4 rounded-xs">
        <header>
          <h4 className={`${typo.h4}`}>Hi, I'm Sushant Shrestha</h4>
          <h3 className={`${typo.h1} text-secondary font-bold`}>
            A Software Developer.
          </h3>
        </header>
        <p className={`${typo.h4} text-primary-foreground`}>
          I'm a frontend developer passionate about building modern web
          applications. I focus on clean design, user experience, & continuously
          improving my skills with the latest technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className={`${typo.h5}`}>View Resume</Button>
          <Button variant="outline" className={`${typo.h5}`}>
            Contact Me
          </Button>
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
