import Image from "next/image";
import { type FC } from "react";

import ProfilePicture from "../../assets/images/profile-picture-2.jpg";
import { InfoCard } from "../InfoCard";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { SocialInfo } from "../common/SocialInfo";
import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/utils/constants";

interface ProfileCardWithSocialsProps {
  className?: string;
}

export const ProfileCardWithSocials: FC<ProfileCardWithSocialsProps> = ({
  className,
}) => {
  return (
    <InfoCard className={`flex flex-col items-center gap-8 p-8 ${className}`}>
      <div className="w-full shrink-0">
        <Image
          className="rounded-3xl grayscale"
          src={ProfilePicture}
          placeholder="blur"
          alt="profile picture"
        />
      </div>
      <h2 className="text-3xl font-medium">Haasin Farooq</h2>
      <div className="flex items-center justify-center gap-3">
        <SocialInfo href={FACEBOOK_URL} Icon={Facebook} />
        <SocialInfo href={INSTAGRAM_URL} Icon={Instagram} />
        <SocialInfo href={LINKEDIN_URL} Icon={Linkedin} />
        <SocialInfo href={GITHUB_URL} Icon={Github} />
      </div>
    </InfoCard>
  );
};
