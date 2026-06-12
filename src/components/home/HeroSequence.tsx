"use client";

import { useEffect, useRef } from "react";
import { runHeroSequence } from "@/lib/animations";

export function HeroSequence({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    return runHeroSequence(root);
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
