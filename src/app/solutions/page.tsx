import { SolutionsHub } from "@/components/solutions/SolutionsHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Website Development Company — India, USA, UK, UAE | Maxwell",
  description:
    "Commercial solution pages for website development, manufacturer websites, web apps, and supporting software — Maxwell Electrodeal, Vadodara India.",
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
