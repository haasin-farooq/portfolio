import { InfoCard } from "../InfoCard";
import { type FC } from "react";

interface AboutMeCardProps {
  className?: string;
}

export const AboutMeCard: FC<AboutMeCardProps> = ({ className }) => {
  return (
    <InfoCard className={`flex flex-col gap-4 p-8 ${className}`}>
      <h1 className="text-4xl font-medium text-white">Haasin Farooq</h1>
      <p className="text-gray-extra-light">
        I'm a Frontend Developer based in Finland with expertise in ReactJS,
        Next.js, TypeScript, and JavaScript. I've led impactful projects and
        mentored teams at companies like Leland and Tintash. Currently, I'm
        working at Gubbe, a Finnish startup revolutionizing elderly care by
        creating the best matchmaking platform for homes and nursing facilities
        in Finland and Sweden.
      </p>
      <p className="text-gray-extra-light">
        I'm also pursuing a Master's in Software Product Management & Business
        at LUT University, enhancing my skills at the intersection of technology
        and business.
      </p>
    </InfoCard>
  );
};
