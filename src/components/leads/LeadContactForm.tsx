"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { trackFormStart, trackFormComplete } from "@/lib/conversion-events";
import { FormTrustFooter } from "@/components/conversion/FormTrustFooter";
import {
  validateConsultationFormFields,
  validateLeadFormFields,
  type LeadFormFieldErrors,
} from "@/lib/form-validation";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";
import { HoneypotField, honeypotValueFromFormData } from "@/components/leads/HoneypotField";
import { mergeLeadContexts, readLeadContextFromDocumentCookie, readLeadContextFromUrlSearchParams } from "@/lib/lead-context";
import { CTA_LABELS } from "@/lib/conversion-copy";
import { cn } from "@/lib/utils";

const budgetOptions = [
  "₹35,000–₹75,000",
  "₹50K–₹1L",
  "₹1L–₹5L",
  "₹5L–₹10L",
  "₹10L+",
  "Not sure yet",
];

const serviceOptions = [
  "Website Development",
  "Manufacturer Catalog",
  "SEO/AMC",
  "Website Redesign",
  "Other",
];

const compactInputClass = cn(
  "w-full min-h-10 rounded-lg border border-[var(--v6-border)] bg-[#f8fafc] px-3 py-2 text-base text-[var(--v6-text)] md:text-sm",
  "placeholder:text-[var(--v6-text-muted)] transition-colors",
  "focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20",
);

function fieldInputClass(hasError?: boolean, compact?: boolean) {
  return cn(
    compact ? compactInputClass : inputClass,
    hasError && "border-red-500/50 focus:border-red-500 focus:ring-red-500/25",
  );
}

function isConsultationSource(source: string) {
  return source === "book-consultation" || source === "discovery-call" || source === "contact";
}

function readFormValues(form: HTMLFormElement) {
  const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
  const phone = composeInternationalPhone(
    raw.phoneCountry || defaultCountryIso,
    raw.phoneLocal || raw.phone || "",
  );
  return { raw, phone };
}

function LeadContactFormInner({
  source = "contact",
  defaultService = "",
  defaultIndustry = "",
  defaultMessage = "",
  submitLabel = CTA_LABELS.primary,
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

  function focusFirstInvalid(form: HTMLFormElement) {
    const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true']");
    firstInvalid?.focus();
  }

  async function completeSubmission(form: HTMLFormElement) {
    setError("");
    setFieldErrors({});

    const { raw, phone } = readFormValues(form);
    const validation = isConsultationSource(source)
      ? validateConsultationFormFields({
          name: raw.name,
          email: raw.email,
          phone,
          company: raw.company,
          message: raw.message,
          projectType: raw.projectType,
          budget: raw.budget,
        })
      : validateLeadFormFields({
          name: raw.name,
          email: raw.email,
          phone,
          company: raw.company,
          message: raw.message,
          projectType: raw.projectType,
          budget: raw.budget,
        });

    if (!validation.success) {
      setFieldErrors(validation.errors);
      focusFirstInvalid(form);
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
          mx_hp_field: honeypotValueFromFormData(new FormData(form)),
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await completeSubmission(e.currentTarget);
  }

  const ic = (err?: boolean | string) => fieldInputClass(Boolean(err), compact);
  const serviceDefault = defaultService || "Website Development";

  return (
    <form onSubmit={handleSubmit} className={cn(compact ? "space-y-3.5" : "space-y-5")} noValidate>
      <HoneypotField />

      <div className="space-y-3.5">
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
          <FormField
            label="Work Email"
            htmlFor="email"
            error={fieldErrors.email}
            hint="Optional — phone is enough for a quote"
          >
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              maxLength={254}
              className={ic(fieldErrors.email)}
              placeholder="you@company.com"
            />
          </FormField>
        </div>

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

        <PhoneCountryFields
          phoneError={fieldErrors.phone}
          countryInputClassName={ic(false)}
          phoneInputClassName={ic(fieldErrors.phone)}
          compact={compact}
        />
        {source === "contact" ? (
          <p className="-mt-1 text-xs text-[var(--v6-text-muted)]">
            We use WhatsApp or a quick call — enter the number without country code.
          </p>
        ) : null}

        <div className="grid gap-3.5 sm:grid-cols-2">
          <FormField
            label="Service Needed"
            htmlFor="service"
            error={fieldErrors.projectType}
            hint="Optional — defaults to website development"
          >
            <select
              id="service"
              name="projectType"
              className={ic(fieldErrors.projectType)}
              defaultValue={serviceDefault}
            >
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </FormField>
          <FormField
            label="Project Budget"
            htmlFor="budget"
            error={fieldErrors.budget}
            hint="Optional — pick “Not sure yet” if you prefer"
          >
            <select
              id="budget"
              name="budget"
              className={ic(fieldErrors.budget)}
              defaultValue="Not sure yet"
            >
              <option value="">Select budget range (optional)</option>
              {budgetOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        {defaultIndustry && <input type="hidden" name="industry" value={defaultIndustry} />}

        <FormField
          label="Project Details"
          htmlFor="message"
          error={fieldErrors.message}
          hint="Optional — even one sentence helps us prepare"
        >
          <textarea
            id="message"
            name="message"
            rows={source === "contact" ? 3 : compact ? 4 : 5}
            maxLength={5000}
            defaultValue={defaultMessage}
            className={cn(ic(fieldErrors.message), "resize-none")}
            placeholder="e.g. Need a manufacturer catalog website for our Vadodara plant (optional)"
          />
        </FormField>
      </div>

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

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size={compact ? "md" : "lg"} disabled={loading} className="w-full sm:w-auto min-w-[12rem]">
          {loading ? "Sending..." : submitLabel}
        </Button>
      </div>
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
  const leadContext = mergeLeadContexts(
    readLeadContextFromDocumentCookie(),
    readLeadContextFromUrlSearchParams(searchParams),
  );
  const defaultService = leadContext.service ?? "";
  const defaultIndustry = leadContext.industry ?? "";
  const defaultMessage = defaultIndustry
    ? `I'm interested in software solutions for the ${defaultIndustry} industry. `
    : "";

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

function ConsultationFormFallback({ compact }: { compact?: boolean }) {
  const fieldClass = "h-10 w-full rounded-lg bg-[var(--v6-bg-soft,#f1f5f9)] animate-pulse";
  return (
    <div className={cn("space-y-3.5", compact ? "" : "space-y-5")} aria-busy="true" aria-label="Loading form">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <div className={fieldClass} />
        <div className={fieldClass} />
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <div className={fieldClass} />
        <div className={fieldClass} />
      </div>
      <div className={fieldClass} />
      <div className={cn("rounded-lg bg-[var(--v6-bg-soft,#f1f5f9)] animate-pulse", compact ? "h-24" : "h-28")} />
      <div className="h-11 w-36 rounded-full bg-[var(--v6-bg-soft,#f1f5f9)] animate-pulse" />
    </div>
  );
}

export function LeadContactForm(props: {
  source?: string;
  submitLabel?: string;
  compact?: boolean;
  defaultService?: string;
  defaultIndustry?: string;
  defaultMessage?: string;
}) {
  return <LeadContactFormInner {...props} />;
}

/** Use on pages that pre-fill from URL query params (requires Suspense boundary). */
export function LeadContactFormFromUrl(props: {
  source?: string;
  submitLabel?: string;
  compact?: boolean;
}) {
  return (
    <Suspense fallback={<ConsultationFormFallback compact={props.compact} />}>
      <LeadContactFormWithParams {...props} />
    </Suspense>
  );
}
