import loadingGif from "../app/assets/loadingGif.gif";
import Image from "next/image";

interface IProps {
  size?: number;
}

export const Loading = ({ size }: IProps) => {
  return (
    <div className="h-full flex justify-center items-center">
      <Image
        src={loadingGif}
        alt="loading..."
        width={size ?? 100}
        height={size ?? 100}
      />
    </div>
  );
};
