"use client";

import { useState } from "react";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";
import { Button } from "@/components/ui/Button";
import { submitLeadForm } from "@/lib/submit-lead-form";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { companyMetricDisplay } from "@/lib/company-metrics";
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

const TRUST_SIGNALS = [
  `Response within ${companyMetricDisplay.supportResponse.replace("<", "")}`,
  `${companyMetricDisplay.projectsCompleted} projects delivered`,
  "No obligation",
  "GST-ready solutions",
] as const;

export function HomepageAssessment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
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
    setDone(true);
    e.currentTarget.reset();
    setSelectedServices([]);
  }

  return (
    <section id="free-audit" className="v6-section v6-section--soft" aria-label="Free software assessment">
      <div className="v6-container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--v6-border)] bg-white p-6 shadow-sm sm:p-10">
          <p className="v6-eyebrow-line v6-eyebrow">Free assessment</p>
          <h2 className="v6-section-title mt-4 text-balance">Get a Free Software Needs Assessment</h2>
          <p className="v6-lead mt-4">
            Tell us about your business — we&apos;ll map out exactly what software would help you grow, save time, and
            cut costs. No obligation.
          </p>

          {done ? (
            <div className="mt-8 rounded-2xl border border-[#4f46e5]/20 bg-[#4f46e5]/5 p-6 text-center">
              <p className="font-display text-lg font-semibold text-[var(--v6-text)]">Thank you — we&apos;ll be in touch within 4 hours.</p>
              <p className="mt-2 text-sm text-[var(--v6-text-secondary)]">
                A solutions consultant will review your needs and follow up with tailored recommendations.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                <PhoneCountryFields
                  countryInputClassName={inputClass}
                  phoneInputClassName={inputClass}
                  required
                />
              </div>

              <FormField label="Email" htmlFor="assess-email" required>
                <input id="assess-email" name="email" type="email" required className={inputClass} autoComplete="email" />
              </FormField>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
                {loading ? "Sending…" : "Get My Free Assessment →"}
              </Button>
            </form>
          )}

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--v6-text-secondary)]">
            {TRUST_SIGNALS.map((signal) => (
              <li key={signal} className="flex items-center gap-1.5">
                <span className="text-[#4f46e5]" aria-hidden>
                  ✓
                </span>
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
