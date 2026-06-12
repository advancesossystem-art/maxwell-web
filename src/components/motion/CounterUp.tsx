"use client";

import { useEffect, useRef } from "react";
import { observeCounter } from "@/lib/animations";

export function CounterUp({
  value,
  className,
  duration,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeCounter(el, value, { duration });
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
