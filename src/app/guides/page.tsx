import { GuidesHub } from "@/components/content/GuidesHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Software Development Guides",
  description:
    "Long-form guides on ERP, AI, SaaS, mobile, cloud, and custom software development from Maxwell Electrodeal.",
  path: "/guides",
  keywords: ["ERP development guide", "AI implementation guide", "SaaS guide"],
});

export default function GuidesPage() {
  return <GuidesHub />;
}
