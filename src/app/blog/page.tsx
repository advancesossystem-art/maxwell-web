import { BlogHub } from "@/components/content/BlogHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Blog | Manufacturer Websites & Industrial SEO",
  description:
    "Guides for Gujarat manufacturers — owned catalog websites, GIDC SEO, RFQ architecture, and what buyers search on Google. Practical, not fluff.",
  path: "/blog",
  keywords: ["manufacturer website guide", "industrial website blog", "GIDC SEO guide", "website for manufacturers India", "RFQ website guide"],
});

export default function BlogPage() {
  return <BlogHub />;
}
