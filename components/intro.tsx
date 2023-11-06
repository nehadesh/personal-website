"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/neha_deshpande_resized.png"
              alt="Neha Deshpande"
              width={200}
              height={100}
              priority
              quality={95}
              className="h-200 w-200 object-cover rounded-full border-[0.35rem]
             border-indigo-300 shadow-xl mr-8 mb-2"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0"
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
              src="/astronaut_coding_big.png"
              alt="Astronaut Coding"
              width={150}
              height={150}
              priority
              quality={95}
            />
          </motion.span>
        </div>
        <motion.div
          className="flex flex-col items-start justify-start mt-4 
          ml-8 pl-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mb-2 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <span className="text-xl font-mono text-center text-slate-300">
              Hi, my name is
            </span>
          </p>
          <h1 className="text-5xl font-sans font-bold text-center mb-4 text-indigo-100">
            Neha.
          </h1>
        </motion.div>
      </div>
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col items-center justify-center mt-4">
          <h2 className="line-1 anim-typewriter mt-4 text-3xl font-sans text-indigo-300">
            {`I am a Developer  `}
          </h2>
          <p className="mb-2 mt-4 !leading-[1.5] text-xl sm:text-2xl">
            <span className="text-xl font-sans text-center text-slate-300">
              I'm a full-stack software engineer with{" "}
            </span>
            <span className="text-2xl font-sans text-center text-indigo-200 font-medium">
              2+ years of experience
            </span>
            <span className="text-xl font-sans text-center text-slate-300">
              , a{" "}
            </span>
            <span className="text-2xl font-sans text-center text-indigo-200 font-medium">
              strong technical foundation
            </span>
            <span className="text-xl font-sans text-center text-slate-300">
              , and an{" "}
            </span>
            <span className="text-2xl font-sans text-center text-indigo-200 font-medium">
              eye for design
            </span>
            <span className="text-xl font-sans text-center text-slate-300">
              . I have a passion for problem-solving and building beautiful user
              experiences that{" "}
            </span>
            <span className="text-2xl font-sans text-center text-indigo-200 font-medium">
              make a difference.
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
