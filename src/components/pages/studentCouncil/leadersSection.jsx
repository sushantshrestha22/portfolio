import { queryKeys, studentDesignation } from "@/utils/constants/constants";
import { fetchData } from "@/utils/query/query";
import React from "react";

const LeadersSection = async () => {
  const studentData = await fetchData(`api/${queryKeys.studentCouncil}`);

  const presidentData = studentData.filter(
    (data) =>
      data.designation.toLowerCase() ===
      studentDesignation.president.toLowerCase()
  )[0];
  const vicePresidentData = studentData.filter(
    (data) =>
      data.designation.toLowerCase() === studentDesignation.vice.toLowerCase()
  )[0];
  const secretaryData = studentData.filter(
    (data) =>
      data.designation.toLowerCase() ===
      studentDesignation.secretary.toLowerCase()
  )[0];
  const treasurerData = studentData.filter(
    (data) =>
      data.designation.toLowerCase() ===
      studentDesignation.treasurer.toLowerCase()
  )[0];
  const jointSecretaryData = studentData.filter(
    (data) =>
      data.designation.toLowerCase() === studentDesignation.joint.toLowerCase()
  )[0];

  return (
    <div className="py-10 px-5">
      <div className="flex items-center justify-center flex-col gap-2 w-full py-6">
        <h1 className="text-xl lg:text-2xl font-bold">Leaders</h1>
      </div>
      <div className="grid grid-cols-5 gap-2 md:h-[55vh] lg:h-[50vh] relative place-items-center text-primary-foreground max-md:hidden ">
        <div className=" z-20">
          <div className="bg-background p-2">
            <img
              src={jointSecretaryData.image}
              alt="contact"
              className="lg:h-40 w-40"
            />
          </div>
          <div className="text-sm  w-full flex flex-col items-center">
            <div className="font-bold">{jointSecretaryData.name}</div>
            <div>
              {jointSecretaryData.program} {jointSecretaryData.batch}
            </div>
            <div>Jt.Secretrary</div>
          </div>
        </div>
        <div className=" z-20 ">
          <div className="bg-background p-2">
            <img
              src={vicePresidentData.image}
              alt="contact"
              className="md:h-40 md:w-40 lg:h-44 lg:w-44"
            />
          </div>
          <div className="text-sm  w-full flex flex-col items-center">
            <div className="font-bold">{vicePresidentData.name}</div>
            <div>
              {vicePresidentData.program} {vicePresidentData.batch}
            </div>
            <div>Vice-President</div>
          </div>
        </div>
        <div className=" z-20 lg:-mt-6 xl:-mt-0">
          <div className="bg-background p-2">
            <img
              src={presidentData.image}
              alt="contact"
              className="md:h-48 lg:h-52 w-48"
            />
          </div>
          <div className="text-sm  w-full flex flex-col items-center">
            <div className="font-bold">{presidentData.name}</div>
            <div>
              {presidentData.program} {presidentData.batch}
            </div>
            <div>President</div>
          </div>
        </div>
        <div className=" z-20 ">
          <div className="bg-background p-2">
            <img
              src={secretaryData.image}
              alt="contact"
              className="md:h-40 md:w-40 lg:h-44 lg:w-44"
            />
          </div>
          <div className="text-sm  w-full flex flex-col items-center">
            <div className="font-bold">{secretaryData.name}</div>
            <div>
              {secretaryData.program} {secretaryData.batch}
            </div>
            <div>Secretary</div>
          </div>
        </div>
        <div className=" z-20 ">
          <div className="bg-background p-2">
            <img
              src={treasurerData.image}
              alt="contact"
              className="lg:h-40 w-40"
            />
          </div>
          <div className="text-sm  w-full flex flex-col items-center">
            <div className="font-bold">{treasurerData.name}</div>
            <div>
              {treasurerData.program} {treasurerData.batch}
            </div>
            <div>Treasurer</div>
          </div>
        </div>
        <div className="bg-muted w-full md:h-[25vh] lg:h-[20vh] col-span-5 absolute bottom-0"></div>
      </div>
      <div className="text-primary-foreground flex flex-col gap-4 md:hidden">
        <div className="flex justify-center relative">
          <div className=" z-20 lg:-mt-6 xl:-mt-0">
            <div className="bg-background p-2">
              <img
                src={presidentData.image}
                alt="contact"
                className="md:h-48 lg:h-52 w-48"
              />
            </div>
            <div className="text-sm  w-full flex flex-col items-center">
              <div className="font-bold">{presidentData.name}</div>
              <div>
                {presidentData.program} {presidentData.batch}
              </div>
              <div>President</div>
            </div>
          </div>
          <div className="bg-muted w-full h-[10vh] md:h-[25vh] lg:h-[20vh] col-span-5 absolute bottom-0"></div>
        </div>
        <div className="flex justify-center gap-4 relative">
          <div className=" z-20 ">
            <div className="bg-background p-2">
              <img
                src={vicePresidentData.image}
                alt="contact"
                className="h-40 w-40"
              />
            </div>
            <div className="text-sm  w-full flex flex-col items-center">
              <div className="font-bold">{vicePresidentData.name}</div>
              <div>
                {vicePresidentData.program} {vicePresidentData.batch}
              </div>
              <div>Vice-President</div>
            </div>
          </div>
          <div className=" z-20 ">
            <div className="bg-background p-2">
              <img
                src={treasurerData.image}
                alt="contact"
                className="h-40 w-40"
              />
            </div>
            <div className="text-sm  w-full flex flex-col items-center">
              <div className="font-bold">{treasurerData.name}</div>
              <div>
                {treasurerData.program} {treasurerData.batch}
              </div>
              <div>Treasurer</div>
            </div>
          </div>
          <div className="bg-muted w-full h-[10vh] md:h-[25vh] lg:h-[20vh] col-span-5 absolute bottom-0"></div>
        </div>
        <div className="flex justify-center gap-4 relative">
          <div className=" z-20 ">
            <div className="bg-background p-2">
              <img
                src={secretaryData.image}
                alt="contact"
                className="h-40 w-40"
              />
            </div>
            <div className="text-sm  w-full flex flex-col items-center">
              <div className="font-bold">{secretaryData.name}</div>
              <div>
                {secretaryData.program} {secretaryData.batch}
              </div>
              <div>Secretary</div>
            </div>
          </div>
          <div className=" z-20">
            <div className="bg-background p-2">
              <img
                src={jointSecretaryData.image}
                alt="contact"
                className="h-40 w-40"
              />
            </div>
            <div className="text-sm  w-full flex flex-col items-center">
              <div className="font-bold">{jointSecretaryData.name}</div>
              <div>
                {jointSecretaryData.program} {jointSecretaryData.batch}
              </div>
              <div>Jt.Secretrary</div>
            </div>
          </div>
          <div className="bg-muted w-full h-[10vh] md:h-[25vh] lg:h-[20vh] col-span-5 absolute bottom-0"></div>
        </div>
      </div>
    </div>
  );
};

export default LeadersSection;
