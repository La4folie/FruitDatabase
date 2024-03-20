import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global">
      <div className="w-full h-full flex justify-center items-center pt-28">
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
