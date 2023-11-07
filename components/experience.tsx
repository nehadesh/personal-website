"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.25);
  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-[18rem] text-slate-800 text-center max-w-[53rem] justify-center"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline className="text-start" lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#eef2ff",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
              date={item.date}
              icon={item.icon}
              iconStyle={{ background: "white", fontSize: "1.5rem" }}
            >
              <h3 className="font-semibold capitalize text-indigo-900">
                {item.title}
              </h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 font-normal text-slate-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
