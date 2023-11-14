import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

export const inter = Red_Hat_Display({ subsets: ["latin"] });

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-indigo-100 text-slate-50 relative pt-28 sm:pt-36`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
