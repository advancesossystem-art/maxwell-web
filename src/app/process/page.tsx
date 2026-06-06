import { ProcessPageContent } from "@/components/company/ProcessPageContent";
import { CompanyPageJsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Our Process — Software Development Lifecycle",
  description:
    "Maxwell Electrodeal software development process: discovery, planning, design, development, testing, deployment, and support with clear deliverables.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <CompanyPageJsonLd pageType="process" path="/process" title="Our Process" />
      <ProcessPageContent />
    </>
  );
}
