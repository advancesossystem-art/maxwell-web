import { EarlyClientSetup } from "@/components/seo/EarlyClientSetup";
import { GlobalSiteJsonLd } from "@/components/seo/GlobalSiteJsonLd";
import { AnalyticsScripts } from "@/components/seo/AnalyticsScripts";
import { LayoutClientExtras } from "@/components/layout/LayoutClientExtras";
import { SiteChromeClient } from "@/components/layout/SiteChromeClient";
import { Footer } from "@/components/layout/Footer";

export function LayoutBody({
  children,
  nonce,
}: {
  children: React.ReactNode;
  nonce?: string;
}) {
  return (
    <>
      <EarlyClientSetup />
      <GlobalSiteJsonLd />
      <SiteChromeClient>{children}</SiteChromeClient>
      <Footer />
      <AnalyticsScripts nonce={nonce} />
      <LayoutClientExtras />
    </>
  );
}
