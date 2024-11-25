"use client";

import { motion } from "framer-motion";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

import { Breakpoints, useMediaQuery } from "@/utils/hooks/useMediaQuery";

import { DownloadCVButton } from "./DownloadCVButton";
import { NavLink } from "./NavLink";

const COLOR_PORTFOLIO_SLATE = "#67e8f9";

export const NavMenu = () => {
  const isSM = useMediaQuery(Breakpoints.SM);

  const [isOpen, setOpen] = useState(false);

  const variants = {
    open: { opacity: 1, y: 120 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <>
      {isSM ? null : (
        <Hamburger
          color={COLOR_PORTFOLIO_SLATE}
          toggled={isOpen}
          toggle={setOpen}
          size={24}
        />
      )}
      <motion.ul
        className="absolute left-0 flex w-full flex-col items-center justify-center bg-black-primary p-4"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        <NavLink name="Home" href="/" />
        <NavLink name="About" href="/about" />
        <NavLink name="Projects" href="/" />
        <DownloadCVButton className="mt-2" />
      </motion.ul>
      <ul className="hidden items-center space-x-3 md:flex">
        <NavLink name="Home" href="/" />
        <NavLink name="About" href="/about" />
        <NavLink name="Projects" href="/" />
      </ul>
    </>
  );
};
