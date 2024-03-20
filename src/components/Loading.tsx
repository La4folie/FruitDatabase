import loadingGif from "../app/assets/loadingGif.gif";
import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Image src={loadingGif} alt="loading..." width={100} height={100} />
    </div>
  );
};
