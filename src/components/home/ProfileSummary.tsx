"use client";

import Image from "next/image";

import ProfilePicture from "../../assets/images/profile-picture.jpg";
import { Breakpoints, useMediaQuery } from "@/utils/hooks/use-media-query";

export const ProfileSummary = () => {
  const isSm = useMediaQuery(Breakpoints.SM);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
      <div className="shrink-0 rounded-full">
        <Image
          className="shrink-0 rounded-full"
          src={ProfilePicture}
          alt="profile picture"
          width={isSm ? 200 : 120}
          height={isSm ? 200 : 120}
        />
      </div>
      <div className="flex flex-col py-4">
        <p className="text-lg text-portfolio-slate">Frontend Developer</p>
        <h2 className="mt-2 text-4xl font-bold">Haasin Farooq</h2>
        <p className="mt-6 text-gray-400">
          A Frontend Developer based in Finland with a versatile skill set in
          technologies like ReactJS, Next.js, TypeScript and JavaScript. I bring
          a blend of technical expertise and creativity to every project.
        </p>
      </div>
    </div>
  );
};
