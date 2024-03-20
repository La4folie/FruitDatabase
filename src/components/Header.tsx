import Link from "next/link";
import { CiHeart } from "react-icons/ci";

export const Header = () => {
  return (
    <header className="absolute h-20 inset-0 z-50 bg-cus-black">
      <div className="mx-auto h-20 flex items-center justify-center text-white">
        <div className="flex gap-10  items-center tracking-custom-wide">
          <Link href="/" className="text-white active:text-white/50">
            SEARCH
          </Link>
          <Link href="/list" className="text-white">
            LIST
          </Link>
          <span>DETAIL</span>
        </div>
        <div className="absolute top-50% right-6 text-white">
          <Link href="/favorites">
            <CiHeart size="24px" />
          </Link>
        </div>
      </div>
    </header>
  );
};
