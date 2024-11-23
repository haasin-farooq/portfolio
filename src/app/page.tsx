import { CredentialsCard } from "@/components/about/CredentialsCard";
import { ProfileCard } from "@/components/home/ProfileCard";
import { ProjectsCard } from "@/components/home/ProjectsCard";
import { RecommendationsCard } from "@/components/home/RecommendationsCard";
import { StatsCard } from "@/components/home/StatsCard";

const HomePage = () => {
  return (
    <div className="columns-1 gap-6 space-y-6 md:columns-2">
      <ProfileCard />
      <StatsCard className="hidden break-inside-avoid md:grid" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CredentialsCard />
        <ProjectsCard />
      </div>
      <StatsCard className="break-inside-avoid md:hidden" />
      <RecommendationsCard className="break-inside-avoid " />
    </div>
  );
};

export default HomePage;
