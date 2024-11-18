import { type FC } from "react";

import { EducationSection } from "@/components/about/EducationSection";
import { ExperienceSection } from "@/components/about/ExperienceSection";
import { AboutMe } from "@/components/credentials/AboutMe";
import { ProfileCardWithSocials } from "@/components/credentials/ProfileCardWithSocials";

const CredentialsPage: FC = () => {
  return (
    <div className="grid gap-14 md:grid-cols-3 md:gap-20">
      <ProfileCardWithSocials className="h-fit md:sticky md:top-28 md:col-span-1" />
      <div className="flex flex-col gap-20 md:col-span-2">
        <AboutMe />
        <ExperienceSection
          titleClassName="uppercase"
          highlightPosition
          withDescription
        />
        <EducationSection titleClassName="uppercase" highlightDegree />
      </div>
    </div>
  );
};

export default CredentialsPage;
