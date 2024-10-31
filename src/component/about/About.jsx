import React from 'react'
import Image from "../../assets/image/Image3.png";



const About = () => {
  return (
    // bg-gradient-to-br from-black to-[#0F172A]
    <div className=" text-white  grid grid-cols-2 px-20">
    <div className="flex justify-center items-center  box-border  ">
      <img src={Image} alt="image" className='opacity-75' />
    </div>
    <div className=" w-full flex flex-col  justify-evenly ">
        <div className="flex flex-col items-start ">
            <div className="uppercase text-3xl font-semibold">About me</div>
            <div className="flex items-center justify-start gap-3 w-48">
                <div className="h-[2px] w-[50%] bg-white"></div>
                <div className="uppercase text-sky-500 text-sm font-semibold ">who am i</div>
            </div>
        </div>
        <div className="text-justify"> I am a passionate frontend developer with experience in building responsive and interactive web applications using modern technologies like React, Tailwind CSS, and JavaScript. I enjoy creating user-friendly interfaces and bringing designs to life with clean and efficient code. My expertise includes developing responsive web applications, implementing modern JavaScript frameworks like React, styling with Tailwind CSS and other CSS frameworks, ensuring cross-browser compatibility and performance optimization, and collaborating with designers and backend developers. I am always eager to learn new technologies and improve my skills to deliver the best possible user experience.</div>
      
    </div>
  </div>
  )
}

export default About