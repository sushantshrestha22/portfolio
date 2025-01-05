import { queryKeys, studentDesignation } from "@/utils/constants/constants";
import { fetchData } from "@/utils/query/query";
import React from "react";

const MembersSection = async () => {
  const studentData = await fetchData(`api/${queryKeys.studentCouncil}`);
  const memberData = studentData.filter(
    (data) =>
      data.designation.toLowerCase() === studentDesignation.member.toLowerCase()
  );
  return (
    <div className="py-10 px-10">
      <div className="flex items-center justify-center flex-col gap-2 w-full py-6">
        <h1 className="text-xl lg:text-2xl font-bold">Members</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-4">
        {memberData.map((data, index) => {
          return (
            <div key={index} className="w-full">
              <div className=" max-sm:h-48 sm:h-52 md:h-56 lg:h-64 w-full">
                <img
                  src={data.image}
                  alt="member"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center bg-muted text-primary-foreground">
                <div>{data.name}</div>
                <div>
                  {data.program} {data.batch}
                </div>
                <div>Member</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MembersSection;
