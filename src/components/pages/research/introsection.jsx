
import React from "react";

const IntroSection = ({
  mainTitle,
  name,
  designation,
  image,
  message,
}) => {
 
  return (
    <div>
      <div className="bg-white">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-10 py-10 "> */}
        <div className="flex max-md:flex-col gap-10 px-10 py-10 ">
          <div className="">
            <div className="max-w-80 h-80 relative overflow-hidden ">
              <div className="w-full h-full relative ">
                <img
                  src={image}
                  className="max-md:w-80 min-w-80 h-80 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 h-[10vh] w-full absolute bottom-0 bg-white">
                <div className="col-span-3 bg-muted">
                  <div className="flex flex-col items-start justify-center h-full px-4">
                    <div className="text-primary-foreground text-sm font-bold uppercase">
                      {mainTitle}
                    </div>
                    <div className="text-primary-foreground text-sm font-meduim">
                      {name}
                    </div>
                    <div className="text-primary-foreground text-sm font-meduim">
                      {designation}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 bg-muted -skew-y-[35deg] -mt-7 lg:-mt-7 md:-mt-6"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative p-10 gap-2 w-full">
            <div className="absolute top-0 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="96"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.1"
                  d="M4 20V5a1 1 0 0 1 1-1h15"
                />
              </svg>
            </div>
            <div className="rotate-180 absolute bottom-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="96"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.1"
                  d="M4 20V5a1 1 0 0 1 1-1h15"
                />
              </svg>
            </div>
            <div className="text-lg font-bold">Message From {mainTitle}</div>
            <div className="text-accent">"{name}"</div>
            <div className="text-justify">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
