import { FC } from "react";

interface FooterLinkProps {
  name: string;
  href: string;
}

export const FooterLink: FC<FooterLinkProps> = ({ name, href }) => {
  return (
    <a
      className="text-sm text-gray-400 transition duration-300 ease-in-out hover:text-white"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  );
};
