import { type FC } from "react";

import { ProfileCardWithSocials } from "@/components/credentials/ProfileCardWithSocials";

const CredentialsPage: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <ProfileCardWithSocials />
    </div>
  );
};

export default CredentialsPage;
