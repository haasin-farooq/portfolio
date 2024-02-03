import Image from "next/image";

import ProfilePicture from "../assets/images/profile-picture.jpg";
import { ProfileSummary } from "@/components/home/ProfileSummary";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-[80ch] sm:mt-20">
      <ProfileSummary />
    </div>
  );
};

export default HomePage;
