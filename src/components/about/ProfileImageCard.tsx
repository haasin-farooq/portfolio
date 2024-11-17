import Image from "next/image";
import { type FC } from "react";

import ProfilePicture from "../../assets/images/profile-picture.jpg";
import { InfoCard } from "../InfoCard";

interface ProfileImageCardProps {
  className?: string;
}

export const ProfileImageCard: FC<ProfileImageCardProps> = ({ className }) => {
  return (
    <InfoCard className={`p-8 ${className}`}>
      <div className="w-full shrink-0">
        <Image
          className="rounded-3xl grayscale"
          src={ProfilePicture}
          placeholder="blur"
          alt="profile picture"
        />
      </div>
    </InfoCard>
  );
};
