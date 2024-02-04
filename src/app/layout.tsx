import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { FC, ReactNode } from "react";

import { Navbar } from "@/components/navbar/Navbar";

import "./globals.css";

const inter = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProp {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProp> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-gradient-to-t from-slate-900 ${inter.className}`}
      >
        <Navbar />
        <div className="mt-20 p-8 sm:p-10">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
