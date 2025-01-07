import React from "react";
import Photo from "@/assets/image/Photo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-[80vh]  lg:px-20 px-10 text-white flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <div className="flex flex-col gap-6 py-6">
          <div className="text-4xl font-extrabold">Welcome !!!</div>
          <div>
            <div className="text-2xl font-bold">
              Hi, I'm <strong>Sushant Shrestha</strong>
            </div>
            <div className="text-2xl font-bold">
              a <strong className="text-accent">Frontend Developer</strong>.
            </div>
          </div>
          <div className="text-justify text-lg leading-relaxed">
            I am a dedicated frontend developer with a strong passion for
            building web applications using modern technologies. With a keen eye
            for design and a commitment to delivering high-quality user
            experiences, I continuously strive to enhance my skills and stay
            updated with the latest industry trends.
          </div>
          <div className="flex gap-4">
            <a href="./Resume.pdf" download="Sushant Shrestha Resume">
              <Button variant="ghost" size="lg">
                Download CV
              </Button>
            </a>
            {/* <Link href="/contact">
              <Button variant="ghost" size="lg">
                Contact Me
              </Button>
            </Link> */}
          </div>
        </div>
        <div className="flex justify-center items-center w-full max-md:hidden">
          <div className="rounded-full overflow-hidden border-accent shadow-md shadow-accent pt-6 transition-all duration-1000 ease-in-out shadow:animate-pulse">
            <Image
              src={Photo}
              alt="Sushant Shrestha"
              className="w-full h-auto brightness-75 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
