import { EarlyClientSetup } from "@/components/seo/EarlyClientSetup";
import { GlobalSiteJsonLd } from "@/components/seo/GlobalSiteJsonLd";
import { AnalyticsScripts } from "@/components/seo/AnalyticsScripts";
import { LayoutClientExtras } from "@/components/layout/LayoutClientExtras";
import { SiteChromeClient } from "@/components/layout/SiteChromeClient";

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
      <AnalyticsScripts nonce={nonce} />
      <LayoutClientExtras />
    </>
  );
}
