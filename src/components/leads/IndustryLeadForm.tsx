"use client";

import { ServiceLeadForm } from "@/components/leads/ServiceLeadForm";

export function IndustryLeadForm({
  industryName,
  industrySlug,
}: {
  industryName: string;
  industrySlug: string;
}) {
  return (
    <ServiceLeadForm
      serviceName={`${industryName} Software`}
      serviceSlug={industrySlug}
      source={`industry-${industrySlug}`}
    />
  );
}
