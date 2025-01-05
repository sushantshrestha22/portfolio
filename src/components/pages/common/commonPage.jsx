import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import heroSection from "@/assests/image/heroSection.png";
import Image from "next/image";

const CommonPage = ({ image, mainTitle, title, titleLink }) => {
  return (
    <div>
      <div className="h-[30vh] md:h-[60vh] lg:h-[50vh] w-full relative">
        <div className="h-[30vh] md:h-[60vh] lg:h-[50vh]  w-full">
          {/* <img src={image} alt="error" className="h-full w-full" /> */}
          <Image src={heroSection} alt="error" className="h-full w-full" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Breadcrumb className="w-full">
            <div className="text-xl font-bold text-primary-foreground capitalize text-center">
              {mainTitle}
            </div>
            <BreadcrumbList className="min-w-[300px] flex justify-center">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/home"
                  className="text-lg text-primary-foreground hover:text-accent"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-lg text-primary-foreground " />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={titleLink}
                  className="text-lg text-primary-foreground hover:text-accent"
                >
                  {mainTitle}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default CommonPage;
