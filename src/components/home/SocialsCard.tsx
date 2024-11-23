import { type FC } from "react";

import { InfoCard } from "../InfoCard";
import { Socials } from "../common/Socials";

interface SocialsCardProps {
  className?: string;
}

export const SocialsCard: FC<SocialsCardProps> = ({ className }) => {
  return (
    <InfoCard className={`p-8 ${className}`}>
      <Socials />
    </InfoCard>
  );
};
