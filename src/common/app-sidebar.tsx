import { HatGlasses, Phone, User, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import type { ItemsType } from "@/utils/types/types";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
      title: "Experience",
      url: "experience",
      icon: Sparkles,
    },
    {
      title: "Contact",
      url: "contact",
      icon: Phone,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="div"
        className={`flex flex-col items-center rounded-full  bg-card/50 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          isOpen ? "py-2 px-1" : "p-0"
        }`}
      >
        {/* Toggle Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" rounded-full flex items-center bg-secondary text-primary justify-center transition-all duration-300 group p-2 border border-secondary/20"
            >
              {isOpen ? (
                <X className="w-4 h-4  text-primary  group-hover:rotate-90 transition-all duration-300" />
              ) : (
                <Menu className="w-4 h-4  text-primary  group-hover:scale-110 transition-all duration-300 " />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-medium">
            {isOpen ? "Close Menu" : "Open Menu"}
          </TooltipContent>
        </Tooltip>

        {/* Navigation Items with Animation */}
        <div
          className={`flex flex-col items-center gap-1 overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"
          }`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-300 ease-in-out"
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                transform: isOpen ? "translateY(0)" : "translateY(-10px)",
              }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => {
                      scrollToSection(item.url);
                      setIsOpen(false);
                    }}
                    className="p-2 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <item.icon className="w-5 h-5 text-foreground/70  group-hover:scale-110 transition-all duration-300" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" className="font-medium">
                  {item.title}
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
      </HoverBorderGradient>
    </aside>
  );
}
