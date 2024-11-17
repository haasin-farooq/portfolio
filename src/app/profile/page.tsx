import { type FC } from "react";
import { ProfileImageCard } from "@/components/profile/ProfileImageCard";
import { AboutMeCard } from "@/components/profile/AboutMeCard";

const ProfilePage: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <ProfileImageCard className="col-span-1" />
      <AboutMeCard className="md:col-span-2" />
    </div>
  );
};

export default ProfilePage;
