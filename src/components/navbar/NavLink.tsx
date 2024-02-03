import Link from "next/link";
import { FC } from "react";

interface NavLinkProps {
  name: string;
  href: string;
}

export const NavLink: FC<NavLinkProps> = ({ name, href }) => {
  return (
    <li className="hover:border-portfolio-slate flex items-center justify-center rounded-lg border-2 border-transparent px-3 py-2 text-gray-400 transition duration-300 ease-in-out">
      <Link href={href}>{name}</Link>
    </li>
  );
};
