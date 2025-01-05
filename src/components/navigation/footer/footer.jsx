"use client";
import { Button } from "@/components/ui/button";
import { queryKeys } from "@/utils/constants/constants";
import { fetchData } from "@/utils/query/query";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/image/Logo.png";
import Image from "next/image";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { FaBackward, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  // General Data
  const getGeneral = async () => {
    const response = await fetchData(`api/${queryKeys.generalInformation}`);
    console.log(response);
    return response;
  };

  const { data: generalData } = useQuery({
    queryKey: [queryKeys.generalInformation],
    queryFn: () => getGeneral(),
  });

  const getProgramData = async () => {
    const response = await fetchData(`api/${queryKeys.programs}`);
    return response;
  };
  const { data: programsData } = useQuery({
    queryKey: [`${queryKeys.programs}`],
    queryFn: () => getProgramData(),
  });

  const GeneralData = [
    {
      title: "Contact",
      data: `${generalData?.contact}`,
      icon: <Phone />,
    },
    {
      title: "Email",
      data: `${generalData?.email}`,
      icon: <Mail />,
    },
    {
      title: "Address",
      data: `${generalData?.address}`,
      icon: <MapPin />,
    },
  ];

  const FooterLink = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "About Us",
      link: "/aboutTilottama",
    },
    {
      title: "Research",
      link: "/research/researchCommittee", // Add the link
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    
    {
      title: "Programs",
      link: `/programs/${programsData?.id}`,
    },

    {
      title: "Admission & Scholarship",
      link: "/admission/admissionDesk",
    },

    {
      title: "Notice",
      link: "/notices",
    },
    {
      title: "Journal",
      link: "https://www.nepjol.info/index.php/jtilottama",
    },
    {
      title: "News & Events",
      link: "/news",
    },
    {
      title: "Downloads",
      link: "/downloads",
    },
    {
      title: "+2 Programs",
      link: "https://tilottama.edu.np/",
    },
    {
      title: "Contact Us",
      link: "/contactUs",
    },
  ];

  const SocialMedia = [
    {
      link: "#",
      icon: <FaFacebookF />,
    },
    {
      link: "#",
      icon: <IoLogoInstagram />,
    },
    {
      link: "#",
      icon: <FaXTwitter />,
    },
    {
      link: "#",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <div className="box-border md:max-h-[60vh] bg-primary text-primary-foreground max-sm:px-5 max-sm:py-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 md:gap-5 md:px-16 md:py-5 px-5">
      <div className="flex flex-col items-center gap-4 bg-primary text-primary-foreground md:row-span-2 max-h-[35vh] pt-5">
        <Image
          src={Logo}
          alt="error"
          className="sm:h-20  text-primary-foreground sm:w-40 md:w-60 "
        />
        <div className="flex flex-col gap-2 md:hidden">
          "Discover, Learn, Achieve – Your Future Starts Here"
          <Link href="/admissionForm">
            <Button variant="ghost" size="lg">
              Apply Now
            </Button>
          </Link>
        </div>
        <div className="max-md:hidden text-justify max-md:text-[10px] text-xs">
          Tilottama Campus was established in 1996 as the first private college
          in Rupandehi by a team of dedicated, experienced and enterprising
          academicians to cater for the growing demands of parents and students
          in the higher education by providing quality education and
          guaranteeing top class graduates.
        </div>
      </div>
      <div className="mt-4 flex max-sm:block  lg:block">
        <div className="flex sm:justify-around  max-sm:justify-between">
          <div className="flex flex-col sm:hidden lg:flex gap-2">
            <div className="text-md font-semibold">Quick Links</div>
            <div className="flex flex-col gap-2">
              {FooterLink.splice(0, 6).map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="flex text-sm items-center"
                >
                  <ChevronRight className="h-4 w-4" /> {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:flex">
            <div className="text-md font-semibold capitalize">
              additional quick links
            </div>
            <div className="flex flex-col gap-2">
              {FooterLink.splice(0, 12).map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="flex text-sm items-center"
                >
                  <ChevronRight className="h-4 w-4" /> {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-col gap-6  md:items-center md:justify-center">
        {GeneralData.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-start w-48"
          >
            <div className="flex items-center justify-center p-1 border-2 rounded-full border-accent bg-background text-accent h-8 w-8">
              {item.icon}
            </div>
            <div>
              <div className="text-sm">{item.title}</div>
              <div className="text-sm">{item.data}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 my-2 md:justify-start col-span-3 ">
        {SocialMedia.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="flex gap-4 bg-background text-primary rounded-full p-2 h-8 w-8"
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <div className="block place-items-center w-full text-center col-span-3 text-sm">
        <Link href="https://hubit.com.np/">
          Designed & developed by <span className="text-accent">HUB I.T</span>
        </Link>
      </div>
      <div className="col-span-3 flex flex-col gap-2 items-center justify-center">
        <div className="text-xs w-full text-center">
          <hr className="pb-2" />© Copyright 2023 Tilottama Campus, Rupandehi
          All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
