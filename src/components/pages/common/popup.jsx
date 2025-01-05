"use client";
import React, { useState, useEffect } from "react";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import contact from "@/assests/image/contact.jpg";
import Image from "next/image";

export default function Popup({ item, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically show the popup after page load

    const timer = setTimeout(() => {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    }, 500); // Optional: delay popup by 500ms or adjust as needed

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    document.body.style.overflow = "auto";
    // onClose();
  };

  if (!isVisible) return null;

  return (
    <>
      <div className=" backdrop-blur-lg w-screen h-[100vh] top-0 fixed z-30 flex justify-center">
        <div className="rounded-xl my-2 flex justify-center items-center">
          <div className="relative bg-slate-300 px-5 py-4 flex flex-col justify-center items-center rounded">
            <AiTwotoneCloseCircle
              onClick={handleClick}
              className="h-[30px] w-[30px] absolute top-[5px] right-[5px] cursor-pointer"
            />
            <img
              className="object-cover w-auto h-[70vh]"
              src={item}
              alt="Popup image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
