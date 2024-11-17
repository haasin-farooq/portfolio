import Image from "next/image";
import Link from "next/link";

import Logo from "../../assets/images/logo.png";

import { NavMenu } from "./NavMenu";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 flex h-20 w-full items-center bg-black-primary/80">
      <div className="relative mx-auto flex w-full max-w-[110ch] items-center justify-between gap-4 p-6">
        <Link href="/" className="cursor-pointer">
          <Image src={Logo} alt="Logo" width={48} height={48} />
        </Link>
        <NavMenu />
      </div>
      <div className="h-20">&nbsp;</div>
    </nav>
  );
};
