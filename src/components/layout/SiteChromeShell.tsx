import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function SiteChromeShell({ children }: { children: React.ReactNode }) {
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
