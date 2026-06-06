"use client";

import { IntroProvider } from "@/components/brand/IntroProvider";

/** Intro context + overlay — homepage only (not root layout). */
export function HomeIntroBoundary({ children }: { children: React.ReactNode }) {
  return <IntroProvider>{children}</IntroProvider>;
}
