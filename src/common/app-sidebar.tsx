import {HatGlasses,  Phone, User } from "lucide-react";

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
      icon: HatGlasses,
    },
    {
      title: "About",
      url: "about",
      icon: User,
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
        className="flex flex-col items-center rounded-full w-12 bg-secondary/5"
      >
        {items.map((item, index) => (
          <a
            href={`#${item.url}`}
            key={index}
            className={`flex flex-col items-center justify-center py-2 w-full `}
          >
            <Tooltip>
              <TooltipTrigger asChild className="w-8 h-8 p-1 rounded-full">
                <item.icon className="w-4 h-4 text-secondary transition-colors duration-300 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent side="right">{item.title}</TooltipContent>
            </Tooltip>
          </a>
        ))}
      </HoverBorderGradient>
    </aside>
  );
}
