import { queryKeys } from "@/utils/constants/constants";
import { fetchData } from "@/utils/query/query";
import CourseSectionImage from "@/assests/image/CourseSection.png";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CourseSection = async () => {
  const programsData = await fetchData(`api/${queryKeys.programs}`);
  return (
    <>
      <div className="px-10 py-5 ">
        <div className="flex items-center justify-center flex-col gap-2 w-full py-4">
          <h1 className="text-xl lg:text-2xl font-bold">Course Offered</h1>
          <p> "Empowering Minds, Shaping Futures"</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
          {programsData.map((item) => {
            return (
              <div className="relative shadow-lg shadow-indigo-500/40 " key={item.id}>
                <div className="absolute top-1/2 flex flex-col gap-4 transform -translate-y-1/2 ps-5 md:ps-10 ">
                  <h1 className="font-bold">{item.title}</h1>
                  <p className="max-sm:w-[150px] sm:w-[250px] md:w-[150px] lg:w-[240px] xl:w-[300px] text-sm text-justify h-[9vh] md:h-[14vh] xl:h-[16vh] overflow-hidden xl:leading-6 max-sm:text-xs">
                    {item.description}
                  </p>
                  <div>
                    <Link href={`/programs/${item.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-accent text-primary-foreground"
                      >
                        View More
                      </Button>
                    </Link>
                  </div>
                </div>
                <Image
                  src={CourseSectionImage}
                  alt="error"
                  className="xl:h-[50vh]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CourseSection;
