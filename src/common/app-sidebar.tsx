import {
  Calendar,
  ChevronRight,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import Logo from "@/assets/images/logo.png";
import { typo } from "@/constant/typography";
import type { ItemsType, SocialLink } from "@/utils/types/types";

// import { useQuery } from "@tanstack/react-query";
// import { fetchData } from "@/api/methods";
// import { API_URL } from "@/constant/constant";
// import SidebarSkeleton from "@/common/skeleton/sidebar";

export function AppSidebar() {
  // const pathname = useLocation().pathname;

  const pathname = useLocation().pathname;

  const [openDropdowns, setOpenDropdowns] = React.useState<boolean[]>([]);

  const handleDropdownToggle = (idx: number) => {
    setOpenDropdowns((prev) => {
      const newState = [...prev];
      newState[idx] = !newState[idx];
      return newState;
    });
  };

  //social media links
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sushantshrestha/",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
    {
      name: "Mail",
      url: "mailto:sushant@example.com",
      icon: <IoMdMail className="h-6 w-6" />,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/sushantshrestha",
      icon: <FaFacebook className="h-5 w-5 " />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/9779841234567",
      icon: <IoLogoWhatsapp className="h-6 w-6" />, // Replace with WhatsApp icon if available
    },
  ];

  // Menu items.
  const items: ItemsType[] = [
    {
      title: "Home",
      url: "/home",
      icon: Home,
    },
    {
      title: "Education",
      url: "/education",
      icon: Inbox,
    },
    {
      title: "Experience",
      url: "/experience",
      icon: Calendar,
    },
    {
      title: "Skills",
      url: "/skills",
      icon: Search,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Settings,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: Settings,
    },
  ];

  return (
    <Sidebar className="h-[100vh] py-10 bg-sidebar-primary-foreground">
      <SidebarContent className="sidebar-content">
        <SidebarGroup>
          <SidebarGroupLabel
            className="p-4 flex items-center h-48 
           justify-center sticky top-0 z-20 border-b border-white/10"
          >
            <img
              src={Logo}
              alt="LogoError"
              // className="h-full filter brightness-0 invert "
              className="h-full aspect-square"
            />
          </SidebarGroupLabel>
          <hr className="w-full" />
          <SidebarGroupContent className="flex flex-col gap-2 mt-5 mb-4 ">
            <SidebarMenu>
              {items?.map((item: ItemsType, idx: number) => (
                <SidebarMenuItem key={item.title} className="">
                  {item.dropdown ? (
                    <>
                      <SidebarMenuButton
                        onClick={() => handleDropdownToggle(idx)}
                        className={`${
                          item.dropdown.some((subItem) =>
                            pathname.includes(subItem.url)
                          ) && !openDropdowns[idx]
                            ? "bg-primary text-primary-foreground rounded-sm"
                            : ""
                        } `}
                      >
                        <item.icon className="h-5 w-5 mr-2" />
                        {item.title}
                        {item?.dropdown?.some(
                          (subItem) => subItem.notify && subItem.notify > 0
                        ) && !openDropdowns[idx] ? (
                          <span
                            className="text-secondary bg-accent  rounded-sm w-2 h-2
                              "
                          ></span>
                        ) : (
                          ""
                        )}
                        <ChevronRight
                          className={`h-5 w-5 ml-auto transition-transform ${
                            openDropdowns[idx] ? "rotate-90" : ""
                          }`}
                        />
                      </SidebarMenuButton>
                      {openDropdowns[idx] && (
                        <SidebarMenu className="mt-2 ">
                          {item.dropdown.map((subItem: any) => (
                            <SidebarMenuItem
                              key={subItem.title}
                              className={`ml-6 ${
                                pathname.includes(subItem.url)
                                  ? "bg-secondary text-primary rounded-sm"
                                  : ""
                              }`}
                            >
                              <Link to={subItem.url}>
                                <SidebarMenuButton className="hover:bg-secondary hover:text-primary flex justify-between ">
                                  <span className="flex items-center">
                                    <subItem.icon className="h-5 w-5 mr-2" />
                                    {subItem.title}
                                  </span>
                                  {subItem?.notify && subItem.notify > 0 ? (
                                    <span
                                      className={`text-secondary bg-accent px-1 min-w-4 text-center rounded-sm `}
                                    >
                                      {subItem.notify}
                                    </span>
                                  ) : null}
                                </SidebarMenuButton>
                              </Link>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      )}
                    </>
                  ) : (
                    <Link to={item.url} key={idx}>
                      <SidebarMenuButton
                        className={` hover:bg-primary hover:text-primary-foreground flex justify-center ${
                          typo.h5
                        } 
                        ${
                          pathname.includes(item.url) && idx !== 0
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }
                        ${
                          pathname === item.url && idx === 0
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }
                        `}
                      >
                        <span className="flex items-center gap-2 font-bold justify-start w-[60%]">
                          <span>
                            <item.icon className="h-4 w-4 mr-2" />
                          </span>
                          {item.title}
                        </span>
                        {item?.notify && item.notify > 0 ? (
                          <span
                            className={`text-secondary bg-accent px-1 min-w-4 text-center rounded-sm `}
                          >
                            {item.notify}
                          </span>
                        ) : null}
                      </SidebarMenuButton>
                    </Link>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <hr className="w-full" />
      </SidebarContent>
      <SidebarFooter className="place-items-center">
        <p>© 2082 All rights reserved.</p>
        <div className="flex gap-4 items-center justify-center mt-2">
          {socialLinks.map((link: SocialLink) => (
            <Link
              key={link.name}
              to={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary"
            >
              {link.icon ? (
                <span className="h-5 w-5">{link.icon}</span>
              ) : (
                <span>{link.name}</span>
              )}
            </Link>
          ))}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
