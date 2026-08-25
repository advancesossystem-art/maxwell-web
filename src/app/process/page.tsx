import { ProcessPageContent } from "@/components/company/ProcessPageContent";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { MoneyInternalLinks } from "@/components/seo/MoneyInternalLinks";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Our Process — Website Delivery for Manufacturers",
  description:
    "Maxwell Electrodeal website delivery process: discovery, design, build, SEO go-live, and AMC support — clear milestones for manufacturer and business sites.",
  path: "/process",
  keywords: [
    "website development process Vadodara",
    "manufacturer website delivery timeline",
    "Next.js website launch process India",
  ],
});

export default function ProcessPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="process" path="/process" title="Our Process" />
      <ProcessPageContent />
      <MoneyInternalLinks path="/process" />
    </>
  );
}
