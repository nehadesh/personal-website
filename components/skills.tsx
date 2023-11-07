"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      className="mb-28 max-w-[53rem] text-slate-800 
    scroll-mt-[21rem] text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading>My skills</SectionHeading>
      <ul
        className="flex flex-wrap justify-center gap-2 text-lg
      text-slate-800"
      >
        {skillsData.map((skill, index) => (
          <li
            className="bg-white bg-opacity-80 border shadow-sm shadow-slate-500 
            rounded-xl px-5 py-3 hover:scale-110 transition"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
