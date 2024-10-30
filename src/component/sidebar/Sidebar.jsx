import React, { useState } from "react";
import { Dot, CircleDot } from "lucide-react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`group text-white flex justify-end cursor-pointer ${
            activeItem === item.name ? "text-sky-500" : ""
          }`}
          onClick={() => setActiveItem(item.name)}
        >
          <div className={`  group-hover:inline ml-2 ${activeItem === item.name ? "inline text-sky-500" : "hidden"}`}>
            {item.name}
          </div>
          <Dot className={`w-12 ${activeItem === item.name ? "hidden" : "group-hover:hidden"}`} />
          <CircleDot className={`w-12 ${activeItem === item.name ? "inline text-sky-500 " : "hidden group-hover:inline"}`} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;