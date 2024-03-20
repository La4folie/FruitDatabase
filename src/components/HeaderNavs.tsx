"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderNavs = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-10  items-center tracking-custom-wide">
      <Link
        href="/"
        className={` active:text-white ${pathname === "/" ? "text-white" : "text-white/50"}`}
      >
        SEARCH
      </Link>
      <Link
        href="/list"
        className={` active:text-white ${pathname === "/list" ? "text-white" : "text-white/50"}`}
      >
        LIST
      </Link>
      <span
        className={`${pathname.includes("detail") ? "text-white" : "text-white/50"}`}
      >
        DETAIL
      </span>
    </div>
  );
};
