import { BlogHub } from "@/components/content/BlogHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Blog — Software Engineering Insights",
  description:
    "Expert articles on ERP, AI, cloud, SaaS, mobile apps, and digital transformation from Maxwell Electrodeal engineers.",
  path: "/blog",
  keywords: ["software development blog", "ERP articles", "AI insights", "digital transformation"],
});

export default function BlogPage() {
  return <BlogHub />;
}
