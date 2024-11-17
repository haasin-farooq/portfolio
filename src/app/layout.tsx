import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { FC, ReactNode } from "react";

import { Footer } from "@/components/footer/Footer";
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
      <body className={`bg-black-primary ${inter.className}`}>
        <Navbar />
        <div className="mx-auto min-h-screen max-w-[110ch] p-6 pb-20 pt-32 md:pt-40">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
