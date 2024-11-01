import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import Exp from "../../assets/image/Experience.png";

export default function Experience() {
  const experience = [
    {
      title: "JobJourney",
      date: "2023-2024",
      description: "worked as a frontend developer",
    },
    {
      title: "Devdaha Medical College",
      date: "2024-present",
      description: "worked as a frontend developer",
    },
    {
      title: "Learning Java/Springboot",
      date: "present",
      description:
        "Currently enhancing my skills in Java and Spring Boot by working on various projects and exploring advanced concepts.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10 py-10">
        <div className="flex flex-col items-center ">
          <div>
            <div className="uppercase text-3xl text-white font-semibold">
              Experience
            </div>
            <div className="flex items-center justify-start gap-3 w-48">
              <div className="h-[2px] w-[50%] bg-white"></div>
              <div className="uppercase text-sky-500 text-sm font-semibold ">
                involvement
              </div>
            </div>
          </div>
        </div>
        <div className="text-white grid grid-cols-3 pr-52">
          <div className="col-span-2">
            <Timeline position="right">
              {experience.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                  >
                    {item.date}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot
                      variant="filled"
                      style={{
                        backgroundColor:
                          index === experience.length - 1 ? "orange" : "green",
                      }}
                    >
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="h6"
                      component="span"
                      className="text-sky-500"
                    >
                      {item.title}
                    </Typography>
                    <Typography>
                      <span className="w-[65%]">{item.description}</span>
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
          <div className="flex justify-start ">
            <img src={Exp} alt="Experience" className="w-[300px] "/>
          </div>
        </div>
      </div>
    </>
  );
}
