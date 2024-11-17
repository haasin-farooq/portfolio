import { InfoCard } from "../InfoCard";
import Image from "next/image";
import ProfilePicture from "../../assets/images/profile-picture.jpg";
import { type FC } from "react";

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
          alt="profile picture"
        />
      </div>
    </InfoCard>
  );
};
