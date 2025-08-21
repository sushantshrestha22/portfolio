import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

import { AppSidebar } from "@/common/app-sidebar";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export default function Layout() {
  const { setTheme } = useTheme();
  return (
    <>
      <SidebarProvider className="">
        <AppSidebar />

        <main className="min-w-0 flex-1 bg-primary text-primary-foreground px-2">
          <div className="flex  bg-transparent ">
            <SidebarTrigger className="hover:bg-primary-foreground hover:text-primary" />
            <div className="w-full">
              <Outlet />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <div>hello world</div> */}
          </div>
          {/* <div className=" min-h-[95vh] bg-primary">
          </div> */}
        </main>
      </SidebarProvider>
    </>
  );
}
