"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionDivider({
  image,
  width,
  height,
}: {
  image: string;
  width: number;
  height: number;
}) {
  return (
    <div
      className="flex flex-col justify-center 
    align-center mt-28 mb-4"
    >
      <div
        className="relative translate-y-[-1.5rem]
      translate-x-[-1rem] hover:scale-110
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
            src={`/${image}.png`}
            alt={`${image}`}
            width={width}
            height={height}
            priority
            quality={95}
          />
        </motion.span>
      </div>
    </div>
  );
}
