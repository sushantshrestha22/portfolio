"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = ({testimonialData}) => {

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "black" ,color:"yellow",borderRadius:"50px"}}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "black" ,color:"yellow",borderRadius:"50px"}}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="" >
      <div className="flex items-center justify-center flex-col gap-2 w-full py-6">
        <h1 className="text-xl lg:text-2xl font-bold">Student Testimonial</h1>
      </div>
      <div className="pb-10 px-4 ">
        <Slider {...settings} className="md:ps-12 lg:ps-16 xl:ps-20 py-5 md:w-[95%]  ">
          {testimonialData?.slice(0, 5).map((testimonial) => {
            return (
              <div key={testimonial.id} className="p-2 ">
                <div className="bg-white text-primary-background p-5 rounded-lg flex flex-col gap-4  sm:overflow-hidden">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt="error"
                        className="w-10 h-10 object-cover"
                      />
                    </div>
                    <div>
                      <p className="capitalize ">{testimonial.name}</p>
                      <p className="text-xs">{testimonial.designation}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-justify text-sm  line-clamp-6 overflow-hidden  leading-4 ">
                      {testimonial.testimonial}
                    </p>
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

export default TestimonialSection;
