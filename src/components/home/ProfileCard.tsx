import { type FC } from "react";
import { InfoCard } from "../InfoCard";
import Image from "next/image";

import ProfilePicture from "../../assets/images/profile-picture.jpg";

export const ProfileCard: FC = () => {
  return (
    <InfoCard
      href="/profile"
      className="flex max-w-xl flex-col items-center justify-center gap-8 p-10 md:flex-row"
    >
      <div className="w-full shrink-0 md:size-48">
        <Image
          className="rounded-br-3xl rounded-tl-3xl grayscale"
          src={ProfilePicture}
          alt="profile picture"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-gray-light text-xs font-medium uppercase">
          A Frontend Developer
        </h3>
        <h2 className="text-3xl font-medium text-white">Haasin Farooq.</h2>
        <p className="text-gray-light mt-2">
          I am a Frontend Developer based in Finland.
        </p>
      </div>
    </InfoCard>
  );
};
