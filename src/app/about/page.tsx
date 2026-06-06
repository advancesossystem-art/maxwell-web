import { AboutPageContent } from "@/components/company/AboutPageContent";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "About Us — Our Story, Mission & Team",
  description: `Learn about ${siteConfig.name} — our mission, values, journey, and documented enterprise software delivery.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="about" path="/about" title="About Us" />
      <AboutPageContent />
    </>
  );
}
