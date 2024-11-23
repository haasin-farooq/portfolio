"use client";

import { CredentialsCard } from "@/components/about/CredentialsCard";
import { ProfileCard } from "@/components/home/ProfileCard";
import { ProjectsCard } from "@/components/home/ProjectsCard";
import { RecommendationsCard } from "@/components/home/RecommendationsCard";
import { SocialsCard } from "@/components/home/SocialsCard";
import { StatsCard } from "@/components/home/StatsCard";
import { Breakpoints, useMediaQuery } from "@/utils/hooks/useMediaQuery";

const HomePage = () => {
  const iMd = useMediaQuery(Breakpoints.MD);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ProfileCard />
      <SocialsCard className="break-inside-avoid md:hidden" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CredentialsCard />
        <ProjectsCard />
      </div>
      <div className="columns-1 gap-6 space-y-6 md:col-span-2 md:columns-2">
        {iMd ? <SocialsCard className="break-inside-avoid" /> : null}
        <StatsCard className="break-inside-avoid" />
        <RecommendationsCard className="break-inside-avoid" />
      </div>
    </div>
  );
};

export default HomePage;
