"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { recsData } from "@/lib/data";
import { useState } from "react";
import clsx from "clsx";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Recommendations() {
  const { ref } = useSectionInView("Recs", 0.5);

  const [isShown, setIsShown] = useState(recsData.map((_rec) => false));

  return (
    <motion.section
      className="mb-28 text-center sm:mb-0 text-slate-800 max-w-[80rem] scroll-mt-[18rem]"
      id="recs"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SectionHeading>Recommendations</SectionHeading>
      <div className="flex flex-row flex-wrap align-center justify-center gap-4">
        {recsData.map((rec, index) => (
          <div
            key={index}
            className={clsx(
              "bg-[#eef2ff] bg-opacity-80 border shadow-lg shadow-blue-100 shadow-opacity-10 rounded-xl px-5 py-3 max-h-[35rem] max-w-[30rem]",
              { "max-h-max h-auto max-w-[40rem]": isShown[index] }
            )}
          >
            <div className="flex justify-start gap-3 mt-2">
              <a href={rec.linkedIn} target="_blank">
                <Image
                  src={`/${rec.imageName}`}
                  alt={rec.author}
                  width={75}
                  height={75}
                  priority
                  quality={95}
                  className="max-h-25 max-w-50 object-cover rounded-full border-[0.2rem]
                border-indigo-900 border-opacity-40 shadow-md hover:scale-105 
                hover:shadow-indigo-800 transition"
                />
              </a>

              <div className="text-left mt-2">
                <p className="text-xl text-indigo-800 font-semibold text-slate-800">
                  {rec.author}
                </p>
                <p className="text-sm font-normal text-slate-800">
                  {rec.title}
                </p>
                <p className="text-sm font-normal text-slate-600">
                  {rec.relation}
                </p>
              </div>
            </div>

            <p className="mt-4 text-md text-start text-slate-800">
              {/* <FaQuoteLeft className="inline text-indigo-900 mr-2 mb-1" /> */}
              {rec.paragraphs[0]}
            </p>
            {isShown[index] &&
              rec.paragraphs.slice(1).map((paragraph, idx) => (
                <>
                  <p
                    key={idx}
                    className="mt-1 text-start text-md text-slate-800"
                  >
                    {paragraph}
                  </p>
                </>
              ))}
            {rec.paragraphs.length > 1 && !isShown[index] && (
              <div
                className={clsx(
                  "flex mt-4 underline background-indigo-800 text-left cursor-pointer mb-4",
                  { "text-opacity-0": isShown[index] }
                )}
                onClick={() =>
                  setIsShown((prev) => prev.map((_, i) => i === index))
                }
              >
                <p className="mt-4 text-sm text-start text-slate-800">
                  Read more...
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
