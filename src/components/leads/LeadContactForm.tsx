"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FormField, inputClass, ProgressBar } from "@/components/leads/LeadFormFields";
import { trackFormStart, trackFormComplete, trackFormStep } from "@/lib/conversion-events";
import { FormTrustFooter } from "@/components/conversion/FormTrustFooter";
import {
  validateLeadFormFields,
  validateConsultationStep1,
  validateConsultationFormFields,
  type LeadFormFieldErrors,
} from "@/lib/form-validation";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";
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
  "w-full min-h-10 rounded-lg border border-[var(--v6-border)] bg-[#f8fafc] px-3 py-2 text-base text-[var(--v6-text)] md:text-sm",
  "placeholder:text-[var(--v6-text-muted)] transition-colors",
  "focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20",
);

type ConsultationStep1Data = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
};

function fieldInputClass(hasError?: boolean, compact?: boolean) {
  return cn(
    compact ? compactInputClass : inputClass,
    hasError && "border-red-500/50 focus:border-red-500 focus:ring-red-500/25",
  );
}

function isConsultationSource(source: string) {
  return source === "book-consultation" || source === "discovery-call";
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
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<ConsultationStep1Data | null>(null);
  const isTwoStep = isConsultationSource(source);

  function focusFirstInvalid(form: HTMLFormElement) {
    const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true']");
    firstInvalid?.focus();
  }

  function advanceToStep2(form: HTMLFormElement): boolean {
    setError("");
    setFieldErrors({});

    const { raw, phone } = readFormValues(form);
    const validation = validateConsultationStep1({
      name: raw.name,
      email: raw.email,
      phone,
      projectType: raw.projectType,
    });

    if (!validation.success) {
      setFieldErrors(validation.errors);
      focusFirstInvalid(form);
      return false;
    }

    setStep1Data(validation.data);
    trackFormStart(source);
    trackFormStep(source, 1, "contact");
    setStep(2);
    trackFormStep(source, 2, "details");
    return true;
  }

  function handleContinue(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = e.currentTarget.form;
    if (form) advanceToStep2(form);
  }

  function handleFormKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
    if (e.key !== "Enter" || e.target instanceof HTMLTextAreaElement) return;
    if (isTwoStep && step === 1) {
      e.preventDefault();
      advanceToStep2(e.currentTarget);
    }
    if (isTwoStep && step === 2) {
      // Prevent budget/select fields from implicitly submitting step 2
      e.preventDefault();
    }
  }

  async function completeSubmission(form: HTMLFormElement) {
    setError("");
    setFieldErrors({});

    const { raw, phone } = readFormValues(form);
    if (raw.website_url?.trim()) {
      router.push(`/thank-you?source=${source}`);
      return;
    }

    const validation =
      isTwoStep || source === "contact"
        ? validateConsultationFormFields({
            name: step1Data?.name ?? raw.name,
            email: step1Data?.email ?? raw.email,
            phone: step1Data?.phone ?? phone,
            company: raw.company,
            message: raw.message,
            projectType: step1Data?.projectType ?? raw.projectType,
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
      if (isTwoStep) {
        const step1Keys = ["name", "email", "phone", "projectType"] as const;
        const hasStep1Error = step1Keys.some((key) => validation.errors[key]);
        setStep(hasStep1Error ? 1 : 2);
      }
      focusFirstInvalid(form);
      return;
    }

    setLoading(true);
    if (!isTwoStep) {
      trackFormStart(source);
    }

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

  function handleFinalSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = e.currentTarget.form;
    if (form) void completeSubmission(form);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isTwoStep && step === 1) {
      advanceToStep2(e.currentTarget);
      return;
    }
    if (isTwoStep && step === 2) {
      // Step 2 only submits via the explicit Book Consultation button
      return;
    }
    await completeSubmission(e.currentTarget);
  }

  const ic = (err?: boolean | string) => fieldInputClass(Boolean(err), compact);

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={handleFormKeyDown}
      autoComplete={isTwoStep ? "off" : undefined}
      className={cn(compact ? "space-y-3.5" : "space-y-5")}
      noValidate
    >
      {isTwoStep ? <ProgressBar current={step} total={2} /> : null}

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website_url">Website</label>
        <input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {(!isTwoStep || step === 1) && (
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
                defaultValue={step1Data?.name}
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
                defaultValue={step1Data?.email}
                className={ic(fieldErrors.email)}
                placeholder="you@company.com"
              />
            </FormField>
          </div>
          <div className="space-y-3.5">
            {!isTwoStep ? (
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
            ) : null}
            <PhoneCountryFields
              phoneError={fieldErrors.phone}
              countryInputClassName={ic(false)}
              phoneInputClassName={ic(fieldErrors.phone)}
              compact={compact}
            />
          </div>
          <div className={cn(!isTwoStep && "grid gap-3.5 sm:grid-cols-2")}>
            <FormField label="Service Needed" htmlFor="service" required error={fieldErrors.projectType}>
              <select
                id="service"
                name="projectType"
                required
                className={ic(fieldErrors.projectType)}
                defaultValue={step1Data?.projectType || defaultService}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </FormField>
            {!isTwoStep ? (
              <FormField
                label="Project Budget"
                htmlFor="budget"
                error={fieldErrors.budget}
                hint="Optional — helps us prioritize your request"
              >
                <select id="budget" name="budget" className={ic(fieldErrors.budget)}>
                  <option value="">Select budget range (optional)</option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </FormField>
            ) : null}
          </div>
        </div>
      )}

      {(!isTwoStep || step === 2) && (
        <div className="space-y-3.5">
          {isTwoStep ? (
            <FormField label="Company" htmlFor="company" error={fieldErrors.company} hint="Optional">
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
          ) : null}

          {isTwoStep ? (
            <FormField
              label="Project Budget"
              htmlFor="budget"
              error={fieldErrors.budget}
              hint="Optional — helps us prepare for your call"
            >
              <select
                id="budget"
                name="budget"
                autoComplete="off"
                className={ic(fieldErrors.budget)}
              >
                <option value="">Select budget range (optional)</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </FormField>
          ) : null}

          {defaultIndustry && <input type="hidden" name="industry" value={defaultIndustry} />}

          <FormField
            label="Project Details"
            htmlFor="message"
            error={fieldErrors.message}
            hint={
              isTwoStep || source === "contact"
                ? "Optional — share goals or timeline if you have them"
                : undefined
            }
          >
            <textarea
              id="message"
              name="message"
              rows={compact ? 4 : 5}
              maxLength={5000}
              defaultValue={defaultMessage}
              className={cn(ic(fieldErrors.message), "resize-none")}
              placeholder={
                isTwoStep || source === "contact"
                  ? "Brief context for your request (optional)..."
                  : "Tell us about your project goals, timeline, and requirements..."
              }
            />
          </FormField>
        </div>
      )}

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
        {isTwoStep && step === 2 ? (
          <Button
            type="button"
            variant="secondary"
            size={compact ? "md" : "lg"}
            onClick={() => setStep(1)}
            disabled={loading}
          >
            Back
          </Button>
        ) : null}
        {isTwoStep && step === 1 ? (
          <Button type="button" size={compact ? "md" : "lg"} onClick={handleContinue} className="w-full sm:w-auto">
            Continue
          </Button>
        ) : isTwoStep && step === 2 ? (
          <Button
            type="button"
            size={compact ? "md" : "lg"}
            disabled={loading}
            onClick={handleFinalSubmit}
            className="w-full sm:w-auto"
          >
            {loading ? "Sending..." : submitLabel}
          </Button>
        ) : (
          <Button type="submit" size={compact ? "md" : "lg"} disabled={loading} className="w-full sm:w-auto">
            {loading ? "Sending..." : submitLabel}
          </Button>
        )}
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

function ConsultationFormFallback({ compact }: { compact?: boolean }) {
  const fieldClass = "h-10 w-full rounded-lg bg-[var(--v6-bg-soft,#f1f5f9)] animate-pulse";
  return (
    <div className={cn("space-y-3.5", compact ? "" : "space-y-5")} aria-busy="true" aria-label="Loading form">
      <div className="h-2 w-full rounded-full bg-[var(--v6-bg-soft,#f1f5f9)] animate-pulse" />
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
