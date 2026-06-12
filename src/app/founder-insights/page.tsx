import { FounderInsightsHub } from "@/components/founder/FounderInsightsHub";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getFounderAuthor } from "@/lib/content/authors";

const founder = getFounderAuthor();

export const metadata = buildPageMetadata({
  title: `Founder Insights — ${founder.name}, ${founder.role}`,
  description:
    "Founder perspectives on ERP failures, CRM mistakes, manufacturing automation, AI implementation, digital transformation, and technology strategy from Maxwell Electrodeal.",
  path: "/founder-insights",
  keywords: ["ERP failures", "CRM mistakes", "digital transformation", "AI implementation", "technology strategy"],
});

export default function FounderInsightsPage() {
  return <FounderInsightsHub />;
}
