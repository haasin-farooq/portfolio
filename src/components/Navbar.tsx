import Link from "next/link";
import { FC } from "react";

import Logo from "../assets/images/logo.png";
import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-10 flex h-20 w-full items-center justify-between gap-4 bg-black bg-opacity-80 p-4 backdrop-saturate-50 sm:px-8">
        <Link href="/" className="cursor-pointer">
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </Link>
        <div className="flex items-center space-x-3">
          <NavLink name="About" href="/" />
          <NavLink name="Work" href="/" />
          <NavLink name="Projects" href="/" />
        </div>
      </nav>
      <div className="h-20">&nbsp;</div>
    </>
  );
};

interface NavLinkProps {
  name: string;
  href: string;
}

const NavLink: FC<NavLinkProps> = ({ name, href }) => {
  return (
    <Link
      href={href}
      className="hover:border-portfolio-slate flex items-center justify-center rounded-lg border-2 border-transparent px-3 py-2 text-gray-400 transition duration-200 ease-in-out"
    >
      {name}
    </Link>
  );
};
