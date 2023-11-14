"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <motion.section
      className="max-w-[55rem] text-slate-800 
    scroll-mt-[21rem] text-center"
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SectionHeading>My skills</SectionHeading>
      <ul
        className="flex flex-wrap justify-center gap-2 text-lg
      text-slate-800"
      >
        {skillsData.map((skill, index) => (
          <li
            className="bg-white bg-opacity-80 border shadow-sm shadow-blue-100 
            shadow-opacity-10 rounded-xl px-5 py-3 hover:scale-110 transition"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
