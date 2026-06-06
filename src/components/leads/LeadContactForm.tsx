"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { trackFormStart, trackFormComplete } from "@/lib/conversion-events";
import { FormTrustFooter } from "@/components/conversion/FormTrustFooter";
import {
  validateLeadFormFields,
  type LeadFormFieldErrors,
} from "@/lib/form-validation";
import { cn } from "@/lib/utils";

const budgetOptions = [
  "₹50K–₹1L",
  "₹1L–₹5L",
  "₹5L–₹10L",
  "₹10L+",
  "Not sure yet",
];

const serviceOptions = [
  "Website Development",
  "Custom Software Development",
  "Mobile App Development",
  "AI Solutions",
  "ERP Development",
  "CRM Development",
  "SaaS Development",
  "Cloud Solutions",
  "Multiple Services",
];

const compactInputClass = cn(
  "w-full min-h-10 rounded-lg border border-[var(--v6-border)] bg-[#f8fafc] px-3 py-2 text-sm text-[var(--v6-text)]",
  "placeholder:text-[var(--v6-text-muted)] transition-colors",
  "focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20",
);

function fieldInputClass(hasError?: boolean, compact?: boolean) {
  return cn(
    compact ? compactInputClass : inputClass,
    hasError && "border-red-500/50 focus:border-red-500 focus:ring-red-500/25",
  );
}

function LeadContactFormInner({
  source = "contact",
  defaultService = "",
  defaultIndustry = "",
  defaultMessage = "",
  submitLabel = "Send Message",
  compact = false,
}: {
  source?: string;
  defaultService?: string;
  defaultIndustry?: string;
  defaultMessage?: string;
  submitLabel?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LeadFormFieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries()) as Record<string, string>;
    if (raw.website_url?.trim()) {
      router.push(`/thank-you?source=${source}`);
      return;
    }

    const validation = validateLeadFormFields({
      name: raw.name,
      email: raw.email,
      phone: raw.phone,
      company: raw.company,
      message: raw.message,
      projectType: raw.projectType,
      budget: raw.budget,
    });

    if (!validation.success) {
      setFieldErrors(validation.errors);
      const firstInvalid = e.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    setLoading(true);
    trackFormStart(source);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          ...validation.data,
          industry: defaultIndustry || raw.industry,
          website_url: raw.website_url ?? "",
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Something went wrong");

      trackFormComplete(source, body.leadTier, body.leadScore);
      router.push(`/thank-you?source=${source}&tier=${body.leadTier}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setLoading(false);
    }
  }

  const ic = (err?: boolean | string) => fieldInputClass(Boolean(err), compact);

  return (
    <form onSubmit={handleSubmit} className={cn(compact ? "space-y-3.5" : "space-y-5")} noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website_url">Website</label>
        <input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="name" required error={fieldErrors.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            minLength={2}
            maxLength={80}
            className={ic(fieldErrors.name)}
            placeholder="Your full name"
          />
        </FormField>
        <FormField label="Work Email" htmlFor="email" required error={fieldErrors.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            maxLength={254}
            className={ic(fieldErrors.email)}
            placeholder="you@company.com"
          />
        </FormField>
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <FormField label="Company" htmlFor="company" error={fieldErrors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            className={ic(fieldErrors.company)}
            placeholder="Your Company"
          />
        </FormField>
        <FormField
          label="Phone"
          htmlFor="phone"
          required
          error={fieldErrors.phone}
          hint="10-digit Indian mobile (e.g. 9876543210 or +91 9876543210)"
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            minLength={10}
            maxLength={18}
            className={ic(fieldErrors.phone)}
            placeholder="9586868538"
          />
        </FormField>
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <FormField label="Service Needed" htmlFor="service" required error={fieldErrors.projectType}>
          <select
            id="service"
            name="projectType"
            required
            className={ic(fieldErrors.projectType)}
            defaultValue={defaultService}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Project Budget" htmlFor="budget" required error={fieldErrors.budget}>
          <select
            id="budget"
            name="budget"
            required
            className={ic(fieldErrors.budget)}
          >
            <option value="">Select budget range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </FormField>
      </div>
      {defaultIndustry && <input type="hidden" name="industry" value={defaultIndustry} />}
      <FormField label="Project Details" htmlFor="message" required error={fieldErrors.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 4 : 5}
          minLength={20}
          maxLength={5000}
          defaultValue={defaultMessage}
          className={cn(ic(fieldErrors.message), "resize-none")}
          placeholder="Tell us about your project goals, timeline, and requirements..."
        />
      </FormField>
      {error ? (
        <p role="alert" className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      ) : null}
      <FormTrustFooter
        variant={
          source === "book-consultation"
            ? "consultation"
            : source === "discovery-call"
              ? "discovery"
              : source === "get-estimate"
                ? "estimate"
                : "contact"
        }
        showTrustStrip={false}
        className={compact ? "!mt-2" : undefined}
      />
      <Button type="submit" size={compact ? "md" : "lg"} disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending..." : submitLabel}
      </Button>
    </form>
  );
}

function LeadContactFormWithParams({
  source,
  submitLabel,
  compact,
}: {
  source?: string;
  submitLabel?: string;
  compact?: boolean;
}) {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") ?? "";
  const defaultIndustry = searchParams.get("industry") ?? "";
  const defaultMessage = defaultIndustry ? `I'm interested in software solutions for the ${defaultIndustry} industry. ` : "";

  return (
    <LeadContactFormInner
      source={source}
      defaultService={defaultService}
      defaultIndustry={defaultIndustry}
      defaultMessage={defaultMessage}
      submitLabel={submitLabel}
      compact={compact}
    />
  );
}

export function LeadContactForm(props: {
  source?: string;
  submitLabel?: string;
  compact?: boolean;
}) {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-surface" />}>
      <LeadContactFormWithParams {...props} />
    </Suspense>
  );
}
