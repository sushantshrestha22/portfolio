import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashHeader from "./dash-header";
import Link from "next/link";
import SideMenu from "../sidebar/sidebar";
import logo from "@/assets/image/Logo.png";
import Image from "next/image";

const Subheader = () => {
  const Data = [
    {
      title: "Contact",
      data: `+977-9840967031`,
      icon: <Phone className="h-4 w-4" />,
    },
    {
      title: "Email",
      data: `newasushant.ns16@gmail.com`,
      icon: <Mail className="h-4 w-4" />,
    },
    {
      title: "Address",
      data: `Butwal-11,Rupandehi`,
      icon: <MapPin className="h-4 w-4" />,
    },
  ];

  return (
    <>
      <div className="relative flex flex-col bg-white w-full">
        <DashHeader />
        <div className="flex items-center justify-between gap-10 max-sm:px-5 sm:px-10 md:px-20">
          <div className="flex gap-10 items-center  pr-10 ">
            <Image src={logo} alt="error" className="h-20 w-48 sm:h-24 " />
          </div>
          <div className="max-lg:hidden flex gap-4 items-center min-w-[450px] text-primary ">
            {Data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex items-center justify-center p-2 border-2 rounded-full border-primary h-8 w-8">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-medium">{item.title}</div>
                  <div className="text-xs">{item.data}</div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/contact">
            <Button variant="ghost" size="lg" className=" ">
              Contact Me
            </Button>
          </Link>
          {/* <SideMenu programsData={programData} qrImage={generalData.logo} /> */}
        </div>
      </div>
    </>
  );
};

export default Subheader;
