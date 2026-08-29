import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { createServiceMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/services-data";

const slug = "website-technologies";

export const metadata: Metadata = createServiceMetadata(getServiceBySlug(slug)!);

export default function WebsiteTechnologiesPage() {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  return <ServiceLandingPage service={service} />;
}
