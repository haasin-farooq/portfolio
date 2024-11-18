import { Signature } from "lucide-react";
import { type FC } from "react";

import { InfoCard } from "../InfoCard";

export const CredentialsCard: FC = () => {
  return (
    <InfoCard
      href="/credentials"
      className="flex break-inside-avoid flex-col justify-center gap-3 p-8"
    >
      <Signature />
      <div className="flex flex-col gap-1">
        <h3 className="text-xxs uppercase text-gray-light">More about me</h3>
        <h2 className="text-xl font-medium text-white">Credentials</h2>
      </div>
    </InfoCard>
  );
};
