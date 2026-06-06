import { SolutionsHub } from "@/components/solutions/SolutionsHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Software, ERP, CRM & AI Development Company — India, USA, UAE",
  description:
    "Commercial solution pages: software development company, ERP, CRM, web, mobile, AI, SaaS, digital transformation & business automation — Maxwell Electrodeal, Vadodara India.",
  path: "/solutions",
  keywords: [
    "software development company",
    "software development company India",
    "ERP development company India",
    "CRM development company",
    "software development company Vadodara",
    "software development company Gujarat",
    "mobile app development company India",
    "AI development company India",
    "digital transformation company",
    "business automation services",
  ],
});

export default function SolutionsPage() {
  return <SolutionsHub />;
}
