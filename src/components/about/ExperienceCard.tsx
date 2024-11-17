import { type FC } from "react";

import { InfoCard } from "../InfoCard";

export const ExperienceCard: FC = () => {
  return (
    <InfoCard className="flex break-inside-avoid flex-col gap-6 p-8">
      <h1 className="text-xl font-medium text-white">Experience</h1>
      <div className="flex flex-col gap-8">
        <Experience
          period="Mar 2024 - Present"
          position="Frontend Developer"
          company="Gubbe"
          location="Helsinki, Uusimaa, Finland · Hybrid"
        />
        <Experience
          period="Jul 2021 - Feb 2024"
          position="Frontend Engineer"
          company="Leland"
          location="United States · Remote"
        />
        <Experience
          period="Sep 2020 - Feb 2024"
          position="Software Engineer"
          company="Tintash"
          location="Lahore, Pakistan · Hybrid"
        />
        <Experience
          period="Jun 2019 - Aug 2019"
          position="Software Developer Intern"
          company="Techlogix"
          location="Lahore, Pakistan · On-site"
        />
        <Experience
          period="Jul 2018 - Sep 2018"
          position="Android Developer Intern"
          company="Vanilla Arcade (Pvt) Ltd"
          location="Lahore, Pakistan · On-site"
        />
      </div>
    </InfoCard>
  );
};

interface ExperienceProps {
  period: string;
  position: string;
  company: string;
  location?: string;
}

const Experience: FC<ExperienceProps> = ({
  period,
  position,
  company,
  location,
}) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <p className="text-xs text-gray-light">{period}</p>
      <h3 className="font-medium text-white">{position}</h3>
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <p className="text-gray-light">{company}</p>
        {location ? (
          <p className="text-xs text-gray-light">{location}</p>
        ) : null}
      </div>
    </div>
  );
};
