import Image from "next/image";
import { type FC } from "react";

import ProfilePicture from "../../assets/images/profile-picture-2.jpg";
import { InfoCard } from "../InfoCard";
import { Socials } from "../common/Socials";

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
      <Socials />
    </InfoCard>
  );
};
