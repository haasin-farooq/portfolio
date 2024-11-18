import { type FC } from "react";

import { InfoCard } from "../InfoCard";

interface ExperienceSectionProps {
  isCard?: boolean;
  highlightPosition?: boolean;
  className?: string;
  titleClassName?: string;
}

export const ExperienceSection: FC<ExperienceSectionProps> = ({
  isCard,
  highlightPosition,
  className,
  titleClassName,
}) => {
  const CONTENT = (
    <>
      <h1 className={`text-xl font-medium text-white ${titleClassName}`}>
        Experience
      </h1>
      <div className="flex flex-col gap-8">
        <Experience
          period="Mar 2024 - Present"
          position="Frontend Developer"
          company="Gubbe"
          location="Helsinki, Finland · Hybrid"
          highlightPosition={highlightPosition}
        />
        <Experience
          period="Jul 2021 - Feb 2024"
          position="Frontend Engineer"
          company="Leland"
          location="United States · Remote"
          highlightPosition={highlightPosition}
        />
        <Experience
          period="Sep 2020 - Feb 2024"
          position="Software Engineer"
          company="Tintash"
          location="Lahore, Pakistan · Hybrid"
          highlightPosition={highlightPosition}
        />
        <Experience
          period="Jun 2019 - Aug 2019"
          position="Software Developer Intern"
          company="Techlogix"
          location="Lahore, Pakistan · On-site"
          highlightPosition={highlightPosition}
        />
        <Experience
          period="Jul 2018 - Sep 2018"
          position="Android Developer Intern"
          company="Vanilla Arcade (Pvt) Ltd"
          location="Lahore, Pakistan · On-site"
          highlightPosition={highlightPosition}
        />
      </div>
    </>
  );

  return isCard ? (
    <InfoCard className={`flex flex-col gap-6 p-8 ${className}`}>
      {CONTENT}
    </InfoCard>
  ) : (
    <div className={`flex flex-col gap-6 ${className}`}>{CONTENT}</div>
  );
};

interface ExperienceProps {
  period: string;
  position: string;
  company: string;
  location?: string;
  highlightPosition?: boolean;
}

const Experience: FC<ExperienceProps> = ({
  period,
  position,
  company,
  location,
  highlightPosition,
}) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <p className="text-sm text-gray-light">{period}</p>
      <h3
        className={`font-medium ${highlightPosition ? "text-cyan-300" : "text-white"}`}
      >
        {position}
      </h3>
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <p className="text-gray-light">{company}</p>
        {location ? (
          <p className="text-xs text-gray-light">{location}</p>
        ) : null}
      </div>
    </div>
  );
};
