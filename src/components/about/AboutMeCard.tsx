import { type FC } from "react";

import { InfoCard } from "../InfoCard";

interface AboutMeCardProps {
  className?: string;
}

export const AboutMeCard: FC<AboutMeCardProps> = ({ className }) => {
  return (
    <InfoCard className={`flex flex-col gap-4 p-8 ${className}`}>
      <h1 className="text-4xl font-medium text-white">Haasin Farooq</h1>
      <div className="flex flex-col gap-4">
        <p className="text-gray-extra-light">
          I&apos;m a Software Engineer with 5+ years of professional experience
          specializing in front-end development using ReactJS, Next.js,
          TypeScript, JavaScript, and Tailwind CSS. I combine technical
          expertise with creative problem-solving to deliver scalable,
          user-friendly, and impactful solutions.
        </p>
        <p className="text-gray-extra-light">
          Alongside my work, I&apos;m pursuing a Master&apos;s degree in
          Software Product Management & Business at LUT University in Finland.
          This program is helping me deepen my understanding of how technology
          and business intersect to solve real-world problems.
        </p>
      </div>
    </InfoCard>
  );
};
