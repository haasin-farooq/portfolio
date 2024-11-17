import { MoveRight } from "lucide-react";
import Link from "next/link";
import type { FC, PropsWithChildren } from "react";

interface InfoCardProps {
  href?: string;
  className?: string;
}

export const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  href,
  className: classNameProp = "",
  children,
}) => {
  const className = `rounded-3xl border-[#171717] border bg-gradient-to-br from-[#202020] via-[#181818] to-[#121212] ${classNameProp}`;

  return href ? (
    <Link href={href} className={`group relative ${className}`}>
      {children}
      <MoveRight className="absolute bottom-6 right-6 size-6 text-gray-light transition delay-75 ease-in-out group-hover:text-white" />
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
};
