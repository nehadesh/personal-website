"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsClipboard2PulseFill,
  BsLinkedin,
} from "react-icons/bs";
import { FaEnvelopeSquare, FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[55rem] 
    text-center sm:mb-0 scroll-mt-[100rem]"
    >
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
              width={300}
              height={100}
              priority
              quality={95}
              className="h-100 w-200 object-cover mr-8 mb-2"
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
              width={200}
              height={125}
              priority
              quality={95}
            />
          </motion.span>
        </div>
        <motion.div
          className="flex flex-col items-start justify-start mt-4 
          ml-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mb-2 mt-4 text-2xl !leading-[1.5] sm:text-4xl">
            <span className="text-2xl text-center text-slate-800">
              hi, my name is
            </span>
          </p>
          <h1 className="text-6xl font-bold text-center mb-4 text-indigo-900">
            Neha.
          </h1>
          <div className="writer mt-2">
<h2 className="writer-text text-3xl text-indigo-900 text-opacity-80 wrap-text">
            {`I am a developer   `}
          </h2>
          </div>
          
        </motion.div>
      </div>
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col items-center justify-center mt-4 mb-8">
          <p className="mb-2 mt-4 !leading-[1.5] text-xl sm:text-2xl">
            <span className="text-xl text-center text-slate-800">
              I'm a{" "}
            </span>
            <span className="text-2xl text-center text-indigo-900 text-opacity-80 font-medium">
              full-stack{" "} 
            </span>
            <span className="text-xl text-center text-slate-800">
             software engineer with{" "}
            </span>
            <span className="text-2xl text-center text-indigo-900 text-opacity-80 font-medium">
              2+ years{" "} 
            </span>
            <span className="text-xl text-center text-slate-800">
            of experience, a{" "}
            </span>
            <span className="text-2xl text-center text-indigo-900 text-opacity-80 font-medium">
              strong technical foundation
            </span>
            <span className="text-xl text-center text-slate-800">
              , and an eye for{" "}
            </span>
            <span className="text-2xl text-center text-indigo-900 text-opacity-80 font-medium">
              great design
            </span>
            <span className="text-xl text-center text-slate-800">
              . I have a passion for problem-solving and building beautiful user experiences that make a difference.{" "}
            </span>
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center 
      justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-slate-700 bg-opacity-80 
          text-slate-100 px-7 py-3 flex
          items-center gap-2 rounded-full
          shadow-xl shadow-blue-100 shadow-opacity-10 outline-none
          focus:scale-110 hover:scale-110 hover:bg-slate-800
          hover:bg-opacity-80 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <FaEnvelopeSquare
            className="group text-[1.35rem] 
          opacity-80 group-hover:animate-bounce transition"
          />{" "}
        </Link>

        <a
          className="group bg-indigo-200 bg-opacity-80 px-7 py-3 flex
          items-center gap-2 rounded-full text-slate-800
          shadow-xl shadow-blue-100 shadow-opacity-10 outline-none
          focus:scale-110 hover:scale-110 hover:bg-indigo-400
          hover:bg-opacity-60 active:scale-105 transition cursor-pointer"
          href="https://drive.google.com/file/d/1_Wu39EU2_V_QodyyL79wnbeqVWbYZZz_/view?usp=sharing"
          target="_blank"
        >
          View CV{" "}
          <BsClipboard2PulseFill className="opacity-80 group-hover:animate-bounce" />
        </a>

        <a
          className="group bg-indigo-200 bg-opacity-80 p-4 flex
          items-center gap-2 rounded-full text-slate-800
          shadow-xl shadow-blue-100 shadow-opacity-10 outline-none
          focus:scale-[1.15] hover:scale-[1.15] hover:bg-indigo-400
          hover:bg-opacity-60 active:scale-105 transition"
          href="https://www.linkedin.com/in/nehadesh/"
          target="_blank"
        >
          <BsLinkedin className="opacity-80 group-hover:animate-bounce" />
        </a>

        <a
          className="text-[1.35rem] group bg-indigo-200 bg-opacity-80 p-4 
          flex items-center gap-2 rounded-full text-slate-800
          shadow-xl shadow-blue-100 shadow-opacity-10 outline-none
          focus:scale-[1.15] hover:scale-[1.15] hover:bg-indigo-400
          hover:bg-opacity-60 active:scale-105 transition"
          href="https://www.github.com/nehadesh"
          target="_blank"
        >
          <FaGithubSquare className="opacity-80 group-hover:animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
