import Link from "next/link";
import type { PropsWithChildren, FC } from "react";
import { MoveRight } from "lucide-react";

interface InfoCardProps {
  href?: string;
  className?: string;
}

export const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  href,
  className: classNameProp = "",
  children,
}) => {
  const className = `rounded-3xl bg-gradient-to-br from-[#202020] via-[#181818] to-[#121212] ${classNameProp}`;

  return href ? (
    <Link href={href} className={`group relative ${className}`}>
      {children}
      <MoveRight className="text-gray-light absolute bottom-6 right-6 size-6 group-hover:text-white" />
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
};
