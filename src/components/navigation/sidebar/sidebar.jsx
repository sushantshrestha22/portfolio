"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import QrScan from "@/components/pages/common/qr";
import { Button } from "@/components/ui/button";
import { AlignJustify, ChevronDown, ChevronUp } from "lucide-react";
import {
  Home,
  Info,
  BookOpen,
  User,
  Download,
  Image,
  FileText,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideMenu = ({ programsData,qrImage }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const items = [
    {
      title: "Home",
      url: "/home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      title: "About Us",
      url: "#",
      icon: <Info className="h-4 w-4" />,
      dropdown: [
        {
          title: "About Tilottama",
          url: "/aboutTilottama",
          icon: <Info className="h-4 w-4" />,
        },
        {
          title: "Advisory Committee",
          url: "/advisoryCommittee",
          icon: <User className="h-4 w-4" />,
        },
        {
          title: "Student Council",
          url: "/studentCouncil",
          icon: <User className="h-4 w-4" />,
        },
        {
          title: "Alumini",
          url: "/alumini",
          icon: <User className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Programs",
      url: "#",
      icon: <BookOpen className="h-4 w-4" />,
      dropdown: programsData?.map((program) => {
        return {
          title: program.title,
          url: `/programs/${program.id}`,
          icon: <BookOpen className="h-4 w-4" />,
        };
      }),
    },
    {
      title: "Admission & Scholarship",
      url: "#",
      icon: <BookOpen className="h-4 w-4" />,
      dropdown: [
        {
          title: "Admission Desk",
          url: "/admission/admissionDesk",
          icon: <BookOpen className="h-4 w-4" />,
        },
        {
          title: "Scholarship",
          url: "/admission/scholarship",
          icon: <BookOpen className="h-4 w-4" />,
        },
        {
          title: "Rules & Regulation",
          url: "/admission/rules&regulation",
          icon: <BookOpen className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Research",
      url: "#",
      icon: <BookOpen className="h-4 w-4" />,
      dropdown: [
        {
          title: "RESEARCH COMMITTEE",
          url: "/research/researchCommittee",
          icon: <BookOpen className="h-4 w-4" />,
        },
        {
          title: "Research Management Cell",
          url: "/research/researchManagement",
          icon: <BookOpen className="h-4 w-4" />,
        },
        {
          title: "Head of RMC",
          url: "#",
          icon: <BookOpen className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Downloads",
      url: "/downloads",
      icon: <Download className="h-4 w-4" />,
    },
    {
      title: "Gallery",
      url: "/gallery",
      icon: <Image className="h-4 w-4" />,
    },
    {
      title: "Journal",
      url: "https://www.nepjol.info/index.php/jtilottama",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Contact Us",
      url: "/contactUs",
      icon: <Phone className="h-4 w-4" />,
    },
  ];

  return (
    <div className="md:hidden flex gap-10 items-center">
      <div className="bg-background rounded-full h-10 w-10 flex items-center justify-center">
        <QrScan qrImage={qrImage}/>
      </div>
      <Sheet>
        <SheetTrigger>
          <Button variant="outline" className="flex items-center gap-2 px-2">
            <AlignJustify className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-background p-4">
          <SheetHeader>
            <SheetTitle>Tilottama College</SheetTitle>
            <SheetDescription className="text-primary">
              {items.map((item, index) => {
                const isActive =
                  pathname.toLowerCase() === item.url.toLowerCase() ||
                  (item.dropdown &&
                    item.dropdown.some(
                      (subItem) =>
                        pathname.toLowerCase() === subItem.url.toLowerCase()
                    ));

                return (
                  <div key={index} className="mb-2">
                    <Link href={item.url}>
                      <div
                        className={`flex items-center gap-2 cursor-pointer p-2 ${
                          isActive
                            ? "bg-accent text-primary-foreground"
                            : "text-primary hover:bg-accent hover:text-primary-foreground"
                        } rounded-md`}
                        onClick={() => toggleDropdown(index)}
                      >
                        <div className="flex items-center justify-center p-2 rounded-full border-foreground h-8 w-8">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-medium w-full h-full `}>
                            {item.title}
                          </div>
                        </div>
                        {item.dropdown && (
                          <div>
                            {openDropdown === index ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </div>
                        )}
                      </div>
                    </Link>
                    {item.dropdown && openDropdown === index && (
                      <div className="ml-6 mt-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.url}>
                            <div className="flex items-center gap-2 mt-2 p-2 hover:bg-accent hover:text-primary-foreground rounded-md">
                              <div className="flex items-center justify-center p-2 rounded-full border-foreground h-8 w-8">
                                {subItem.icon}
                              </div>
                              <div>
                                <div className="text-sm font-medium">
                                  {subItem.title}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideMenu;
