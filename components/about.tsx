"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center 
        leading-8 text-slate-800 scroll-mt-[18rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3 text-justify">
        I graduated with a B.S./M.S. in{" "}
        <span className="font-medium">Computer Science 💻</span> specializing in
        Machine Learning from{" "}
        <span className="font-medium">Georgia Tech 🐝</span> in{" "}
        <span className="font-medium">December 2021</span>. With a return offer
        from my 2020 internship in hand, I joined an exciting
        sustainable-trucking startup called{" "}
        <span className="font-medium">Convoy Inc</span> full-time in Jan 2022. I
        was entrusted with the delivery of several high-value,{" "}
        <span className="font-medium">🥞 full-stack</span> features from the
        get-go and I built significant, and impactful product features for 2
        years before my team was cut in{" "}
        <a
          href="https://www.geekwire.com/2023/convoy-collapse-read-ceos-memo-detailing-sudden-shutdown-of-seattle-trucking-startup/"
          target="_blank"
          className="underline"
        >
          Convoy's sellout to Flexport in November 2023💀
        </a>
        .
      </p>

      <p className="mb-3 text-justify">
        I am <span className="font-medium">passionate and driven</span> about
        building amazing tech products.{" "}
        <span className="italic font-medium">I love continuous learning</span>{" "}
        and <span className="font-medium">solving challenging problems 🧩</span>
        . I am a{" "}
        <span className="font-medium">motivated, versatile and creative</span>{" "}
        software engineer, and I am looking for a challenging opportunity at a
        company where I can continue to deliver outstanding results while honing
        my skills.
      </p>

      <p className="mb-3 text-justify">
        When I'm not coding, I enjoy graphic design, music, and hiking with my
        dog 🐶 outdoors. I am also dedicated to furthering{" "}
        <span className="font-medium">sustainability 💚</span> and making
        conscious choices that{" "}
        <span className="font-medium">benefit our planet 🌎</span>. I love to
        learn and add on more hobbies to my list: Bharatanatyam (Indian
        classical dance), Carnatic music, Digital Art, Sewing, Crocheting, and
        Painting.
      </p>
    </motion.section>
  );
}
