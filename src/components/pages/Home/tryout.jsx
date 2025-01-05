"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tryout = ({ exploreData }) => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "yellow",
          borderRadius: "50px",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "yellow",
          borderRadius: "50px",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="flex items-center justify-center flex-col gap-2 w-full py-6">
        <h1 className="text-xl lg:text-2xl font-bold">Student Testimonial</h1>
      </div>
      <div className="pb-10 px-4 ">
        <Slider
          {...settings}
          className="gap-4 w-[95%] mx-auto"
        >
          {exploreData.map((program) => {
            return (
              <div key={program.id} className="p-2 ">
                <div className="flex flex-col justify-center h-full">
                  <div className="w-full h-[40vh]">
                    <img
                      src={program.image}
                      alt="error"
                      className="h-[40vh] w-full object-cover"
                    />
                  </div>
                  <div className="w-full bg-blue-800 text-primary-foreground bg-opacity-70  flex justify-center items-center relative max-sm:bottom-[15%] md:bottom-[19%] py-4">
                    {program.title}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Tryout;
