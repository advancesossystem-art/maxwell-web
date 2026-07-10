"use client";

import { SiteChromeShell } from "@/components/layout/SiteChromeShell";

export function SiteChromeClient({ children }: { children: React.ReactNode }) {
  return <SiteChromeShell>{children}</SiteChromeShell>;
}
