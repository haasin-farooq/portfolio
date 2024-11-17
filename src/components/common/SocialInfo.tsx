import { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, FC, RefAttributes } from "react";
import { InfoCard } from "../InfoCard";

interface SocialInfoProps {
  href: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const SocialInfo: FC<SocialInfoProps> = ({ href, Icon }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <InfoCard className="group relative !rounded-full p-6">
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-transparent transition duration-300 ease-in-out group-hover:bg-white group-hover:text-black-primary">
          <Icon className="size-5" />
        </div>
      </InfoCard>
    </a>
  );
};
