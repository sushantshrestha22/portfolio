"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const Navbar = ({ qrImage }) => {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Education",
      link: "/education",
    },
    {
      title: "Experience",
      link: "/experience",
    },
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div>
      <nav className="flex justify-between items-center h-16 px-10 lg:px-20 bg-primary shadow-md w-full max-md:hidden">
        <div className="flex gap-3 lg:gap-2 text-primary-foreground ">
          {menuItems.map((item, index) => {
            return (
              <div key={index}>
                {item.dropdown ? (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger
                      className={`font-medium px-2 text-xs lg:text-sm lg:me-2  underline-offset-4 decoration-accent decoration-2 hover:underline hover:text-accent  h-full ${
                        item.dropdown.some(
                          (subItem) =>
                            pathname.toLowerCase() ===
                            subItem.link.toLowerCase()
                        )
                          ? "text-accent"
                          : "text-primary-foreground"
                      }`}
                    >
                      {item.title}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.dropdown.map((subItem, index) => {
                        return (
                          <div key={index}>
                            <DropdownMenuItem>
                              <Link href={subItem.link} className="w-full">
                                <DropdownMenuLabel>
                                  {subItem.title}
                                </DropdownMenuLabel>
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="link"
                    size="sm"
                    className={`lg:text-sm hover:underline decoration-2  ${
                      pathname.toLowerCase().split("/")[1] ===
                      item.link.toLowerCase().split("/")[1]
                        ? "text-accent"
                        : ""
                    } `}
                  >
                    <Link href={item.link} className="w-full">
                      {item.title}
                    </Link>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
