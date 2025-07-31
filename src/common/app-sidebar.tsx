import {
  Calendar,
  ChevronRight,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

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

// import { useQuery } from "@tanstack/react-query";
// import { fetchData } from "@/api/methods";
// import { API_URL } from "@/constant/constant";
// import SidebarSkeleton from "@/common/skeleton/sidebar";

interface ItemsType {
  title: string;
  url: string;
  icon: React.ComponentType<any>;
  dropdown?: {
    title: string;
    url: string;
    icon: React.ComponentType<any>;
    notify?: number;
  }[];
  notify?: number;
}

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

  // Fetching data for drivers, companies, issues, general settings, and deliveries.
  // const { data: driverData, isLoading: driverLoading } = useQuery({
  //   queryKey: ["driver-sidebar"],
  //   queryFn: async () => {
  //     const response = await fetchData("/api/users?role=driver&status=pending");
  //     return response;
  //   },
  // });
  // const { data: companyData, isLoading: companyLoading } = useQuery({
  //   queryKey: ["company-sidebar"],
  //   queryFn: async () => {
  //     const response = await fetchData(
  //       "/api/users?role=company&status=pending"
  //     );
  //     return response;
  //   },
  // });

  // const { data: driverIssueData, isLoading: driverIssueLoading } = useQuery({
  //   queryKey: ["driver-issue-sidebar"],
  //   queryFn: async () => {
  //     const response = await fetchData(
  //       "/api/issues?status=pending&role=driver"
  //     );
  //     return response;
  //   },
  // });
  // const { data: companyIssueData, isLoading: companyIssueLoading } = useQuery({
  //   queryKey: ["company-issue-sidebar"],
  //   queryFn: async () => {
  //     const response = await fetchData(
  //       "/api/issues?status=pending&role=company"
  //     );
  //     return response;
  //   },
  // });

  // const { data: generalData, isLoading: generalLoading } = useQuery({
  //   queryKey: ["general"],
  //   queryFn: async () => {
  //     const response = await fetchData("/api/settings/general");
  //     return response?.data;
  //   },
  // });

  // const { data: deliveriesData, isLoading: deliveriesLoading } = useQuery({
  //   queryKey: ["requests-sidebar"],
  //   queryFn: async () => {
  //     const response = await fetchData("/api/requests?status=pending");
  //     return response;
  //   },
  // });

  // Menu items.
  const items: ItemsType[] = [
    {
      title: "Home",
      url: "/home",
      icon: Home,
    },
    {
      title: "Education",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Experience",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Skills",
      url: "#",
      icon: Search,
    },
    {
      title: "Projects",
      url: "#",
      icon: Settings,
    },
    {
      title: "Contact",
      url: "#",
      icon: Settings,
    },
  ];

  // if (
  //   driverLoading ||
  //   companyLoading ||
  //   driverIssueLoading ||
  //   companyIssueLoading ||
  //   generalLoading ||
  //   deliveriesLoading
  // ) {
  //   return <SidebarSkeleton />;
  // }

  return (
    <Sidebar className="h-[100vh]">
      <SidebarContent className="sidebar-content">
        <SidebarGroup>
          <SidebarGroupLabel
            className="p-4  flex items-center h-28 
           justify-center sticky top-0 z-20 border-b border-white/10"
          >
            <img
              src={Logo}
              alt="LogoError"
              // className="h-full filter brightness-0 invert "
              className="h-full"
            />
          </SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-2 hello">
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
                        className={` hover:bg-primary hover:text-primary-foreground flex justify-between
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
                        <span className="flex items-center gap-2">
                          <item.icon className="h-4 w-4 mr-2" />
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
          <SidebarFooter>copyright 2082</SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
