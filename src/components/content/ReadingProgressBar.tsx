"use client";

import { useEffect, useState } from "react";
import { trackScrollDepth } from "@/lib/conversion-events";

/** Top reading progress bar for long-form content */
export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const [tracked, setTracked] = useState({ p25: false, p50: false, p75: false, p100: false });

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? Math.min(100, Math.round((scrollTop / height) * 100)) : 0;
      setProgress(pct);

      if (pct >= 25 && !tracked.p25) {
        trackScrollDepth(25);
        setTracked((t) => ({ ...t, p25: true }));
      }
      if (pct >= 50 && !tracked.p50) {
        trackScrollDepth(50);
        setTracked((t) => ({ ...t, p50: true }));
      }
      if (pct >= 75 && !tracked.p75) {
        trackScrollDepth(75);
        setTracked((t) => ({ ...t, p75: true }));
      }
      if (pct >= 98 && !tracked.p100) {
        trackScrollDepth(100);
        setTracked((t) => ({ ...t, p100: true }));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [tracked]);

  if (progress <= 0) return null;

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-0.5 w-full bg-transparent"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-[#4f46e5] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
