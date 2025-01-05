import { queryKeys } from "@/utils/constants/constants";
import { fetchData } from "@/utils/query/query";
import React from "react";

const ServiceSection = async () => {
  const facilitiesData = await fetchData(`api/${queryKeys.facilities}`);
  return (
    <>
      <div className="py-5 ">
        <div className="flex items-center justify-center flex-col gap-2 w-full py-12">
          <h1 className="text-xl lg:text-2xl font-bold">Our Services</h1>
          <p> "Empowering Minds, Shaping Futures"</p>
        </div>
        {
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 px-10  place-items-center">
            {facilitiesData?.map((facility) => {
              return (
                <div className="bg-white rounded-lg   shadow-lg shadow-indigo-500/40  w-full flex items-center justify-center" key={facility.id}>
                  <div
                    className="flex gap-4 flex-col justify-center items-center h-[200px] w-[250px] "
                  >
                    <div>
                      <img
                        src={facility?.icon}
                        alt="error"
                        className="h-10 w-10 object-cover"
                      />
                    </div>
                    <div className="text-base font-semibold">{facility.title}</div>
                    <div className="text-xs text-center w-">
                      {facility.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        }
      </div>
    </>
  );
};

export default ServiceSection;
