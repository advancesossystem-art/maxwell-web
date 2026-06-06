import { WhyMaxwellPageContent } from "@/components/company/WhyMaxwellPageContent";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Why Maxwell — Enterprise Quality at Competitive Rates",
  description:
    "Why choose Maxwell Electrodeal over freelancers and agencies? Compare communication, speed, quality, support, and industry expertise.",
  path: "/why-maxwell",
});

export default function WhyMaxwellPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="why-maxwell" path="/why-maxwell" title="Why Maxwell" />
      <WhyMaxwellPageContent />
    </>
  );
}
