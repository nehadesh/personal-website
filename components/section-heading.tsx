import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-4xl font-medium capitalize text-indigo-900">
      {children}
    </h2>
  );
}
