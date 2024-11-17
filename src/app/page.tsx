import { ProfileCard } from "@/components/home/ProfileCard";
import { ProjectsCard } from "@/components/home/ProjectsCard";
import { StatsCard } from "@/components/home/StatsCard";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ProfileCard />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProjectsCard />
      </div>
      <StatsCard />
    </div>
  );
};

export default HomePage;
