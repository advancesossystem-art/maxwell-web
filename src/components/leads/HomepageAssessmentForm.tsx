"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";
import { Button } from "@/components/ui/Button";
import { submitLeadForm } from "@/lib/submit-lead-form";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { cn } from "@/lib/utils";

const BUSINESS_TYPES = [
  "Manufacturing",
  "Trading",
  "Retail",
  "Healthcare",
  "Education",
  "Real Estate",
  "Other",
] as const;

const SERVICE_OPTIONS = ["ERP", "CRM", "Website", "Mobile App", "AI", "Other"] as const;

export function HomepageAssessmentForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    if (String(fd.get("website_url") || "").trim()) {
      router.push("/thank-you?source=homepage-assessment");
      return;
    }

    const phone = composeInternationalPhone(
      String(fd.get("phoneCountry") || defaultCountryIso),
      String(fd.get("phoneLocal") || ""),
    );
    const businessType = String(fd.get("businessType") || "");

    const result = await submitLeadForm({
      source: "homepage-assessment",
      name: fd.get("name"),
      email: fd.get("email"),
      phone,
      businessType,
      services: selectedServices,
      industry: businessType,
      features: selectedServices,
      message: `Free software needs assessment. Business type: ${businessType}. Services needed: ${selectedServices.join(", ") || "not specified"}.`,
    });

    setLoading(false);
    if (!result.success) {
      setError(result.error || "Could not submit. Please try again.");
      return;
    }
    router.push(
      `/thank-you?source=homepage-assessment${result.leadTier ? `&tier=${result.leadTier}` : ""}`,
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 lg:p-10">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <input name="website_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <FormField label="Business type" htmlFor="assess-business" required>
        <select id="assess-business" name="businessType" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select your industry
          </option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </FormField>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-[var(--v6-text)]">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((service) => {
            const active = selectedServices.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-[#4f46e5] bg-[#4f46e5]/10 text-[#4f46e5]"
                    : "border-[var(--v6-border)] bg-[#f8fafc] text-[var(--v6-text-secondary)] hover:border-[#4f46e5]/40",
                )}
                aria-pressed={active}
              >
                {service}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" htmlFor="assess-name" required>
          <input id="assess-name" name="name" required className={inputClass} autoComplete="name" />
        </FormField>
        <FormField label="Email" htmlFor="assess-email" required>
          <input
            id="assess-email"
            name="email"
            type="email"
            required
            className={inputClass}
            autoComplete="email"
          />
        </FormField>
      </div>

      <PhoneCountryFields countryInputClassName={inputClass} phoneInputClassName={inputClass} required />

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
          {loading ? "Sending…" : "Get My Free Assessment →"}
        </Button>
        <p className="text-xs leading-relaxed text-[var(--v6-text-muted)]">
          No spam. We only use this to respond to your assessment request.
        </p>
      </div>
    </form>
  );
}
