import { Laptop } from "lucide-react";
import { type FC } from "react";

import { InfoCard } from "../InfoCard";

export const ProjectsCard: FC = () => {
  return (
    <InfoCard
      href="/"
      className="flex flex-col items-start justify-center gap-3 p-8"
    >
      <Laptop className="size-8" />
      <div className="flex flex-col gap-1">
        <h3 className="text-xxs uppercase text-gray-light">Showcase</h3>
        <h2 className="text-xl font-medium text-white">Projects.</h2>
      </div>
    </InfoCard>
  );
};
