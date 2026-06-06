import { DiscoveryCallPageContent } from "@/components/leads/DiscoveryCallPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Book a Discovery Call — Free Strategy Session",
  description:
    "Schedule a free 30-minute discovery call with Maxwell Electrodeal. Get clarity on scope, feasibility, timeline, and investment for your software project.",
  path: "/discovery-call",
});

export default function DiscoveryCallPage() {
  return <DiscoveryCallPageContent />;
}
