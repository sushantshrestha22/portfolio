import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

import { AppSidebar } from "@/common/app-sidebar";

export default function Layout() {
  return (
    <>
      <SidebarProvider className="">
        <AppSidebar />
        <main className="min-w-0 flex-1 bg-primary text-primary-foreground px-2">
          <div className="flex">
            <SidebarTrigger className="hover:bg-primary-foreground hover:text-primary" />
            {/* <div>hello world</div> */}
          </div>
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
