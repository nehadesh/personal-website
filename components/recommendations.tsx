"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { recsData } from "@/lib/data";
import { useState } from "react";
import clsx from "clsx";

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
              "bg-[#eef2ff] bg-opacity-80 border shadow-sm shadow-slate-500 rounded-xl px-5 py-3 hover:scale-110 transition max-h-[20rem] max-w-[20rem] cursor-pointer",
              { "max-h-max, max-w-[30rem] overflow-auto": isShown[index] }
            )}
            onClick={() =>
              setIsShown((prev) => prev.map((_, i) => i === index))
            }
          >
            <p className="mt-4 text-lg text-indigo-900 font-semibold text-slate-800">
              {rec.author}
            </p>
            <p className="text-sm font-normal text-slate-800">{rec.title}</p>
            <p className="mt-4 text-sm text-start text-slate-800">
              {rec.paragraphs[0]}
            </p>
            {isShown[index] &&
              rec.paragraphs.slice(1).map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-1 text-start text-sm text-slate-800"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
