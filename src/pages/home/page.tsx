import { Button } from "@/components/ui/button";
import { typo } from "@/constant/typography";
import Photo from "@/assets/images/photo.png";

const Home = () => {
  return (
    <main className="grid grid-cols-2 place-items-center h-[100%] px-10 ">
      <section className=" place-content-center h-full space-y-4">
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
        <div className="flex gap-4">
          <Button className={`${typo.h5}`}>View Resume</Button>
          <Button variant="outline" className={`${typo.h5}`}>
            Contact Me
          </Button>
        </div>
      </section>
      <section className="flex justify-center items-end h-full  relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent blur-xl rounded-full aspect-square w-[90%] animate-pulse  top-3/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <img src={Photo} alt="Sushant Shrestha" className="h-[90vh] z-10" />
      </section>
    </main>
  );
};

export default Home;
