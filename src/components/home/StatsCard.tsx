import { type FC } from "react";

import { InfoCard } from "../InfoCard";

interface StatsCardProps {
  className?: string;
}

export const StatsCard: FC<StatsCardProps> = ({ className }) => {
  return (
    <InfoCard className={`grid gap-8 p-8 md:grid-cols-3 ${className}`}>
      <Stat
        className="[counter-set:_num_var(--num-experience)]"
        label="Years experience"
      />
      <Stat
        className="[counter-set:_num_var(--num-clients)]"
        label="Global clients"
      />
      <Stat
        className="[counter-set:_num_var(--num-projects)]"
        label="Professional projects"
      />
    </InfoCard>
  );
};

interface StatProps {
  label: string;
  className: string;
}

const Stat: FC<StatProps> = ({ label, className }) => {
  return (
    <InfoCard className="flex flex-col items-center justify-center gap-3 p-8 text-center">
      <h2
        className={`animate-[counter_2s_ease-out_forwards] text-4xl font-medium tabular-nums before:content-[counter(num)] ${className}`}
      >
        <span className="sr-only">Stat</span>
      </h2>
      <p className="text-xs uppercase text-gray-light">{label}</p>
    </InfoCard>
  );
};
