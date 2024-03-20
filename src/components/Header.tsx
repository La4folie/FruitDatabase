import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { HeaderNavs } from "./HeaderNavs";

export const Header = () => {
  return (
    <header className="absolute h-20 inset-0 z-50 bg-cus-black">
      <div className="mx-auto h-20 flex items-center justify-center text-white">
        <HeaderNavs />
        <div className="absolute top-50% right-6 text-white">
          <Link href="/favorites">
            <CiHeart size="24px" />
          </Link>
        </div>
      </div>
    </header>
  );
};
