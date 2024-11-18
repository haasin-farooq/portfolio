import { type FC } from "react";

import { AboutMeCard } from "@/components/about/AboutMeCard";
import { CredentialsCard } from "@/components/about/CredentialsCard";
import { EducationSection } from "@/components/about/EducationSection";
import { ExperienceSection } from "@/components/about/ExperienceSection";
import { ProfileImageCard } from "@/components/about/ProfileImageCard";

const AboutPage: FC = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        <ProfileImageCard className="col-span-1" />
        <AboutMeCard className="md:col-span-2" />
      </div>
      <div className="columns-1 gap-8 space-y-6 md:columns-2 md:space-y-8">
        <ExperienceSection className="break-inside-avoid" isCard />
        <EducationSection className="break-inside-avoid" isCard />
        <CredentialsCard />
      </div>
    </div>
  );
};

export default AboutPage;
