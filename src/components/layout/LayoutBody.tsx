import { GlobalSiteJsonLd } from "@/components/seo/GlobalSiteJsonLd";
import { LayoutClientExtras } from "@/components/layout/LayoutClientExtras";
import { SiteChromeClient } from "@/components/layout/SiteChromeClient";

export function LayoutBody({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalSiteJsonLd />
      <SiteChromeClient>{children}</SiteChromeClient>
      <LayoutClientExtras />
    </>
  );
}
