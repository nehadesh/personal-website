import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neha Deshpande | Personal Portfolio",
  description: "Neha is a full-stack software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-slate-50 relative 
        h-[5000px] pt-28 sm:pt-36`}
      >
        <div
          className="bg-blue-950 absolute top-[-6rem] -z-10 right-[11rem] 
          h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
          opacity-50"
        ></div>
        <div
          className="bg-indigo-400 absolute top-[-1rem] -z-10 left-[-35rem] 
          h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]
          md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
          opacity-50"
        ></div>

        <Header />
        {children}
      </body>
    </html>
  );
}
