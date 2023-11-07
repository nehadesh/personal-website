"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { recsData } from "@/lib/data";
import { useState } from "react";
import clsx from "clsx";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

export default function Recommendations() {
  const { ref } = useSectionInView("Recs", 0.5);

  const [isShown, setIsShown] = useState(recsData.map((_rec) => false));

  return (
    <section
      className="mb-28 text-center sm:mb-0 text-slate-800 max-w-[53rem] scroll-mt-[18rem]"
      id="recs"
      ref={ref}
    >
      <SectionHeading>Recommendations</SectionHeading>
      <div className="flex flex-row flex-wrap align-center justify-center gap-4">
        {recsData.map((rec, index) => (
          <div
            key={index}
            className={clsx(
              "bg-[#eef2ff] bg-opacity-80 border shadow-sm shadow-slate-500 rounded-xl px-5 py-3 hover:scale-110 transition max-h-[35rem] max-w-[25rem] cursor-pointer",
              { "max-h-max, max-w-[30rem] overflow-auto": isShown[index] }
            )}
            onClick={() =>
              setIsShown((prev) => prev.map((_, i) => i === index))
            }
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
                <p className="text-lg text-indigo-800 font-semibold text-slate-800">
                  {rec.author}
                </p>
                <p className="text-sm font-normal text-slate-800">
                  {rec.title}
                </p>
                <p className="text-xs font-normal text-slate-600">
                  {rec.relation}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-start text-slate-800">
              <FaQuoteLeft className="inline text-xl text-indigo-900 mr-2 mb-2" />
              {rec.paragraphs[0]}
              {isShown.length == 1 && (
                <FaQuoteRight className="inline text-xl text-indigo-900 mr-2 mb-2" />
              )}
            </p>
            {isShown[index] &&
              rec.paragraphs.slice(1).map((paragraph, index) => (
                <>
                  <p
                    key={index}
                    className="mt-1 text-start text-sm text-slate-800"
                  >
                    {paragraph}
                    {index == isShown.length - 1 && (
                      <FaQuoteRight className="inline text-xl text-indigo-900 mr-2 mb-2" />
                    )}
                  </p>
                </>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
