import {
  Calendar,
  Code,
  FolderGit2,
  GraduationCap,
  Home,
  Phone,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import type { ItemsType } from "@/utils/types/types";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function AppSidebar() {
  const items: ItemsType[] = [
    {
      title: "Home",
      url: "home",
      icon: Home,
    },
    {
      title: "Education",
      url: "education",
      icon: GraduationCap,
    },
    {
      title: "Experience",
      url: "experience",
      icon: Calendar,
    },
    {
      title: "Skills",
      url: "skills",
      icon: Code,
    },
    {
      title: "Projects",
      url: "projects",
      icon: FolderGit2,
    },
    {
      title: "Contact",
      url: "contact",
      icon: Phone,
    },
  ];

  return (
    <aside>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="flex flex-col items-center rounded-full w-12"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center py-2 w-full `}
          >
            <Tooltip>
              <TooltipTrigger asChild className="w-10 h-10 p-1 rounded-full">
                <item.icon className=" w-4 h-4 text-secondary hover:text-primary hover:bg-secondary  transition-colors duration-300 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent side="right">{item.title}</TooltipContent>
            </Tooltip>
          </div>
        ))}
      </HoverBorderGradient>
    </aside>
  );
}
