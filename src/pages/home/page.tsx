import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import { typo } from "@/constant/typography";

const Home = () => {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 h-screen px-4 text-center">
      <header>
        <h3 className={`${typo.h3} text-secondary font-medium tracking-wide`}>
          Software Developer
        </h3>
        <SplitText
          text="Hello, I'm Sushant Shrestha!"
          className={` ${typo.display} text-secondary font-bold tracking-wide w-2xl`}
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </header>
      <p className={`${typo.h4} text-secondary/75 max-w-3xl mx-auto`}>
        Crafting exceptional web experiences with React and modern JavaScript.
        Specializing in clean, scalable code and pixel-perfect designs. Evolving
        into full-stack development to build end-to-end solutions.
      </p>
      <section className="flex flex-row justify-center gap-4">
        <Button className={`${typo.h3} cursor-pointer`}>View My Work</Button>
        <Button variant="outline" className={`${typo.h3}`}>
          Get In Touch
        </Button>
      </section>
      <ShinyText
        text="Trusted by 10+ clients"
        disabled={false}
        speed={3}
        className={`custom-class ${typo.h3} text-center`}
      />
    </main>
  );
};

export default Home;
