import { ProfileCard } from "@/components/home/ProfileCard";
import { ProjectsCard } from "@/components/home/ProjectsCard";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-[105ch] sm:mt-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProfileCard />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProjectsCard />
        </div>
      </div>
      {/* <ProfileSummary />
      <div className="mt-36">
        <h1 className="text-4xl font-bold">What I Do</h1>
        <div className="mt-4 h-2 w-10 rounded-full bg-cyan-300" />
        <div className="mt-10 grid grid-cols-2 gap-6">
          <div className="h-32 rounded-lg bg-gray-950 shadow-md"></div>
          <div className="h-32 rounded-lg border border-cyan-300 shadow-lg"></div>
          <div className="h-32 rounded-lg border border-cyan-300 shadow-md"></div>
          <div className="h-32 rounded-lg border border-cyan-300 shadow-md"></div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
