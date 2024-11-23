import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { type FC } from "react";

import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/utils/constants";

import { SocialInfo } from "./SocialInfo";

export const Socials: FC = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <SocialInfo href={FACEBOOK_URL} Icon={Facebook} />
      <SocialInfo href={INSTAGRAM_URL} Icon={Instagram} />
      <SocialInfo href={LINKEDIN_URL} Icon={Linkedin} />
      <SocialInfo href={GITHUB_URL} Icon={Github} />
    </div>
  );
};
