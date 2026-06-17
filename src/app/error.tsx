"use client";

import { useEffect } from "react";
import Link from "next/link";

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
    <main className="v6-container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="mx-display text-3xl font-bold text-white">Something went wrong</h1>
      <p className="mt-3 max-w-md text-[var(--v6-text-secondary)]">
        We encountered an unexpected error. Please try again or return to the homepage.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={() => reset()} className="v6-btn v6-btn-primary">
          Try again
        </button>
        <Link href="/" className="v6-btn v6-btn-secondary">
          Go home
        </Link>
      </div>
    </main>
  );
}
