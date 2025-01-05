import { Button } from "@/components/ui/button";
import { queryKeys } from "@/utils/constants/constants";
import { fetchData } from "@/utils/query/query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = async () => {
  const aboutData = await fetchData(`api/${queryKeys.aboutCollege}`);
  return (
    <>
      <div className="relative  md:bg-white md:px-12 md:grid md:grid-cols-3 lg:grid-cols-9 md:gap-5 lg:gap-10 md:items-center max-sm:py-4 text-foreground">
        <div className="absolute sm:top-[20%] sm:px-10 md:px-5 md:top-4 md:relative md:col-span-2 lg:col-span-5 top-4 flex items-center justify-center max-sm:h-[40vh] md:h-[80vh] lg:h-[60vh]  max-sm:px-5">
          <div className=" max-md:bg-white max-md:bg-opacity-50 p-2 flex flex-col gap-2 rounded-md max-sm:shadow-md ">
            <div className="font-bold text-xl">About Tilottama College</div>
            <div className="font-medium md:block hidden">"Empowering Minds, Shaping Futures"</div>
            <div className="max-sm:h-[20vh]  md:h-[20vh]  md:justify-around  text-justify w-full overflow-hidden">
              {aboutData.description}
            </div>
            <div>
              <Button variant="ghost" size="lg">
                <Link href="/aboutTilottama">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <img src={aboutData.image} alt="error" className="w-full max-sm:h-[40vh] md:h-[50vh] md:rounded-tl-[100px] lg:rounded-tl-[200px] md:shadow-2xl" />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
