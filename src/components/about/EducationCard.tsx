import { type FC } from "react";

import { InfoCard } from "../InfoCard";

export const EducationCard: FC = () => {
  return (
    <InfoCard className="flex break-inside-avoid flex-col gap-6 p-8">
      <h1 className="text-xl font-medium text-white">Education</h1>
      <div className="flex flex-col gap-8">
        <Education
          period="Aug 2023 - Present"
          degree="Master's in Software Product Management & Business"
          school="LUT University"
          location="Lahti, Finland"
        />
        <Education
          period="Aug 2016 - Jul 2020"
          degree="Bachelor's in Electrical Engineering"
          school="FAST NUCES"
          location="Lahore, Pakistan"
        />
        <Education
          period="2012 - 2016"
          degree="O & A Level"
          school="NMEIS"
          location="Riyadh, Saudi Arabia"
        />
      </div>
    </InfoCard>
  );
};

interface EducationProps {
  period: string;
  degree: string;
  school: string;
  location?: string;
}

const Education: FC<EducationProps> = ({
  period,
  degree,
  school,
  location,
}) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <p className="text-xs text-gray-light">{period}</p>
      <h3 className="font-medium text-white">{degree}</h3>
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <p className="text-gray-light">{school}</p>
        {location ? (
          <p className="text-xs text-gray-light">{location}</p>
        ) : null}
      </div>
    </div>
  );
};
