import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/utils/constants";

import { FooterLink } from "./FooterLink";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black flex w-full flex-col items-center justify-between gap-10 px-8 py-10 md:h-20 md:flex-row md:gap-8 md:py-0">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
        <FooterLink name="Facebook" href={FACEBOOK_URL} />
        <FooterLink name="Instagram" href={INSTAGRAM_URL} />
        <FooterLink name="GitHub" href={GITHUB_URL} />
        <FooterLink name="LinkedIn" href={LINKEDIN_URL} />
      </div>
      <p className="text-sm text-gray-400">
        © {currentYear} All rights reserved.
      </p>
    </div>
  );
};
