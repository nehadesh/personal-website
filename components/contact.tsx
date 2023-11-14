"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { FaEnvelopeSquare, FaPaperPlane, FaRegCopy } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import Link from "next/link";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-60 sm:mb-80 w-[min(100%,38rem)] flex flex-col text-center justify-center align-center scroll-mt-[18rem]"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-slate-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:neha.n.deshpande@gmail.com">
          neha.n.deshpande@gmail.com
        </a>
        .
      </p>
      <p className="text-slate-700">I look forward to hearing from you!</p>
      <button
          onClick={() => navigator.clipboard.writeText("neha.n.deshpande@gmail.com")}
          className="group bg-slate-700 bg-opacity-80 
          text-slate-100 px-7 py-3 mt-8 flex max-w-[15rem]
          items-center gap-2 rounded-full text-center self-center
          justify-center shadow-xl shadow-blue-100 shadow-opacity-10 outline-none
          focus:scale-110 hover:scale-110 hover:bg-slate-800
          hover:bg-opacity-80 active:scale-105 transition"
        >
          Copy email{" "}
          <FaRegCopy
            className="group text-[1.35rem] 
          opacity-80 group-hover:animate-bounce transition"
          />{" "}
        </button>


      {/* <form
        className="mt-10 flex flex-col text-slate-800"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 rounded-lg border border-black/10 p-4"
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          placeholder="Your message"
          name="message"
          className="h-52 p-4 my-3 rounded-lg border border-black/10"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-slate-900 text-white 
        rounded-full outline-none transition-all flex items-center justify-center
        gap-2 hover:scale-110 focus:scale-110 active:scale-105 hover:bg-slate-950"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
           group-hover:translate-x-1 group-hover:-translate-y-1"
          />{" "}
        </button>
      </form> */}
    </motion.section>
  );
}
