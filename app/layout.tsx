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
        className={`${inter.className} bg-indigo-100 text-slate-50 relative 
        h-[5000px] pt-28 sm:pt-36`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
