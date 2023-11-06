"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center 
        leading-8 sm:mb-40 text-slate-800"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3 text-justify">
        I graduated with a 🎓 B.S./M.S. in{" "}
        <span className="font-medium">Computer Science 💻</span> (specializing
        in Machine Learning) from{" "}
        <span className="font-medium">Georgia Tech 🐝</span>. I then moved to{" "}
        <span className="font-medium">Seattle</span> to join an exciting
        sustainable-trucking startup called{" "}
        <span className="font-medium">Convoy</span> as a Software Engineer. I
        loved my job. I delivered several high-value,{" "}
        <span className="font-medium">🥞 full-stack</span> features in my time
        there before{" "}
        <a
          href="https://www.geekwire.com/2023/convoy-collapse-read-ceos-memo-detailing-sudden-shutdown-of-seattle-trucking-startup/"
          target="_blank"
          className="underline"
        >
          Convoy's unfortunate demise 💀
        </a>
        . My passion for programming and creating amazing products is still very
        much <span className="font-medium">alive 🔥</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        solving <span className="font-medium">challenging problems 🧩</span>. I
        am a{" "}
        <span className="font-medium">motivated, driven, and versatile</span>{" "}
        software engineer, and I am looking for new opportunities where I can
        use my skills.
      </p>

      <p className="text-justify">
        <span className="italic">When I'm not coding</span>, I enjoy 🎨 graphic
        design, music 🎵, and hiking with my dog 🐶 outdoors. I am also
        passionate about <span className="font-medium">sustainability 💚</span>.
        I'm dedicated to making conscious choices that{" "}
        <span className="font-medium">benefit our planet 🌎</span>. I love to
        learn and add on more hobbies to my list: Bharatanatyam (Indian
        classical dance), Carnatic music, Digital Art, Sewing, Crocheting,
        Painting, Reading.
      </p>
    </motion.section>
  );
}
