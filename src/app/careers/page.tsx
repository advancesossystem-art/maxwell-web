import { CareersPageContent } from "@/components/company/CareersPageContent";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Careers — Join Our Team",
  description:
    "Careers at Maxwell Electrodeal. Remote opportunities, competitive benefits, and growth paths for engineers, designers, and project managers.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="careers" path="/careers" title="Careers" />
      <CareersPageContent />
    </>
  );
}
