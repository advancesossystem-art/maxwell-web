"use client";

import { usePathname } from "next/navigation";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPortal = pathname?.startsWith("/portal");

  if (isPortal) {
    return <>{children}</>;
  }

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="mobile-main-pad" tabIndex={-1} aria-label="Main content">
        {children}
      </main>
      <Footer />
    </>
  );
}
