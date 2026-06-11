"use client";

import { usePathname } from "next/navigation";
import { SiteChromeShell } from "@/components/layout/SiteChromeShell";

export function SiteChromeClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPortal = pathname?.startsWith("/portal");

  if (isPortal) {
    return <>{children}</>;
  }

  return <SiteChromeShell>{children}</SiteChromeShell>;
}
