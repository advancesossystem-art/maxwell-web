"use client";

import { ServiceLeadForm } from "@/components/leads/ServiceLeadForm";

export function IndustryLeadForm({
  industryName,
  industrySlug,
  formTitle,
  submitLabel,
}: {
  industryName: string;
  industrySlug: string;
  formTitle?: string;
  submitLabel?: string;
}) {
  return (
    <ServiceLeadForm
      serviceName={`${industryName} Software`}
      serviceSlug={industrySlug}
      source={`industry-${industrySlug}`}
      formTitle={formTitle}
      submitLabel={submitLabel}
    />
  );
}
