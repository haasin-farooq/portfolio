import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { FC, ReactNode } from "react";

import { Navbar } from "@/components/navbar/Navbar";

import "./globals.css";

import { Footer } from "@/components/footer/Footer";

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
      <body className={`bg-gradient-to-t from-slate-900 ${inter.className}`}>
        <Navbar />
        <div className="min-h-screen p-8 pt-28 sm:p-10 sm:pt-28">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
