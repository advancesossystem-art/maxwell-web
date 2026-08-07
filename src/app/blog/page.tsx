import { BlogHub } from "@/components/content/BlogHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Blog — Manufacturer Website & Industrial SEO Guides",
  description:
    "Practical guides for Gujarat manufacturers: how to replace IndiaMart with an owned catalog website, GIDC estate SEO, RFQ architecture, and what buyers actually search on Google.",
  path: "/blog",
  keywords: ["manufacturer website guide", "industrial website blog", "GIDC SEO guide", "website for manufacturers India", "RFQ website guide"],
});

export default function BlogPage() {
  return <BlogHub />;
}
