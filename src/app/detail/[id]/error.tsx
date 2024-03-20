"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-full flex flex-col justify-center items-center pt-32">
      <h2>Something went wrong!</h2>
      <button
        className="bg-cus-purple w-[100px] rounded-sm"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
