import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";

/** Header + main only — Footer stays a server sibling in LayoutBody (hydration-safe). */
export function SiteChromeShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="mobile-main-pad" tabIndex={-1} aria-label="Main content">
        {children}
      </main>
    </>
  );
}
