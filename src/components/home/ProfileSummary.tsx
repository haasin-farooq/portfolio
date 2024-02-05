"use client";

import Image from "next/image";

import { Breakpoints, useMediaQuery } from "@/utils/hooks/use-media-query";

import ProfilePicture from "../../assets/images/profile-picture.png";
import { Button } from "../common/Button";

export const ProfileSummary = () => {
  const isSm = useMediaQuery(Breakpoints.SM);

  const onDownloadCV = () => {
    const pdfUrl = "cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "haasin-farooq.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-12">
      <div className="flex flex-col items-start py-4">
        <p className="text-lg text-cyan-300">Frontend Developer</p>
        <h2 className="mt-2 text-4xl font-bold">Haasin Farooq</h2>
        <p className="mt-6 text-gray-400">
          A Frontend Developer based in Finland with a versatile skill set in
          technologies like{" "}
          <span className="font-medium text-white">ReactJS</span>,{" "}
          <span className="font-medium text-white">Next.js</span>,{" "}
          <span className="font-medium text-white">TypeScript</span> and{" "}
          <span className="font-medium text-white">JavaScript</span>. I bring a
          blend of technical expertise and creativity to every project.
        </p>
        <Button className="mt-8" label="Download CV" onClick={onDownloadCV} />
      </div>
      <div className="shrink-0">
        <Image
          className="rounded-full border-4 grayscale"
          src={ProfilePicture}
          alt="profile picture"
          width={isSm ? 260 : 120}
          height={isSm ? 260 : 120}
        />
      </div>
    </div>
  );
};
