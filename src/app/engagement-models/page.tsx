import { EngagementModelsPageContent } from "@/components/company/EngagementModelsPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Engagement Models — Fixed Price, T&M & Dedicated Team",
  description:
    "Compare Maxwell Electrodeal engagement models: fixed-price projects, time & materials, and dedicated development teams. Milestone billing, weekly demos, full IP ownership.",
  path: "/engagement-models",
});

export default function EngagementModelsPage() {
  return <EngagementModelsPageContent />;
}
