import { SolutionsHub } from "@/components/solutions/SolutionsHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Website Development Company Vadodara | SEO & AMC | Maxwell",
  description:
    "Website development, SEO, and monthly AMC for businesses in Vadodara and Gujarat. Sites from ₹35,000. AMC from ₹15,000.",
  path: "/solutions",
  keywords: [
    "website development company",
    "website development company India",
    "business website development",
    "manufacturer website development",
    "web development company India",
    "website development company Vadodara",
    "corporate website design",
    "industrial website development",
    "web application development company",
  ],
});

export default function SolutionsPage() {
  return <SolutionsHub />;
}
