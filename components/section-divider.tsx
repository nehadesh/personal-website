"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionDivider() {
  return (
    <div
      className="flex flex-col justify-center 
    align-center mt-24 mb-8"
    >
      <motion.div
        className="bg-gray-400 h-20 w-1 
    rounded-full hidden sm:block bg-opacity-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
      <div
        className="relative translate-y-[-1.5rem]
      translate-x-[-1rem] hover:rotate-12 hover:scale-110
      transition"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          <Image
            src="/hanging-astronaut.png"
            alt="Astronaut Hanging"
            width={100}
            height={100}
            priority
            quality={95}
          />
        </motion.span>
      </div>
    </div>
  );
}
