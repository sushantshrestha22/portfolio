import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
      <SidebarProvider className="relative">
       
        <div className="w-full absolute top-0 left-0 pointer-events-auto">
          <Outlet />
        </div>
      </SidebarProvider>
    </>
  );
}
