import Image from "next/image";
import { type FC } from "react";

import ProfilePicture from "../../assets/images/profile-picture-2.jpg";
import { InfoCard } from "../InfoCard";

export const ProfileCard: FC = () => {
  return (
    <InfoCard
      href="/about"
      className="flex max-w-xl flex-col items-center justify-center gap-8 p-10 md:flex-row"
    >
      <div className="w-full shrink-0 md:size-48">
        <Image
          className="rounded-br-3xl rounded-tl-3xl grayscale"
          src={ProfilePicture}
          placeholder="blur"
          alt="profile picture"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xs font-medium uppercase text-gray-light">
          A Frontend Developer
        </h3>
        <h2 className="text-3xl font-medium text-white">Haasin Farooq.</h2>
        <p className="mt-2 text-gray-light">
          I am a Frontend Developer based in Finland.
        </p>
      </div>
    </InfoCard>
  );
};
