"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  validateLeadFormFields,
  type LeadFormFieldErrors,
} from "@/lib/form-validation";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";
import { HoneypotField, honeypotValueFromFormData } from "@/components/leads/HoneypotField";
import { CTA_LABELS } from "@/lib/conversion-copy";

type FormState = "idle" | "loading" | "success" | "error";

const budgetOptions = [
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000",
  "₹10,00,000 – ₹25,00,000+",
  "Not sure yet",
];

const serviceOptions = [
  "Website Development",
  "Manufacturer Catalog",
  "SEO/AMC",
  "Website Redesign",
  "Other",
];

function fieldInputClass(base: string, hasError?: boolean) {
  return cn(
    base,
    hasError && "border-red-500/50 focus:border-red-500 focus:ring-red-500/25",
  );
}

function ContactFormInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") ?? "Website Development";
  const defaultIndustry = searchParams.get("industry") ?? "";
  const defaultMessage = defaultIndustry
    ? `I'm interested in a website for the ${defaultIndustry} industry. `
    : "";
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LeadFormFieldErrors>({});

  const inputClass = cn(
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-foreground md:text-sm",
    "placeholder:text-muted/60 transition-colors",
    "focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries()) as Record<string, string>;
    const phone = composeInternationalPhone(
      raw.phoneCountry || defaultCountryIso,
      raw.phoneLocal || raw.phone || "",
    );

    const validation = validateLeadFormFields({
      name: raw.name,
      email: raw.email,
      phone,
      company: raw.company,
      message: raw.message,
      projectType: raw.service,
      budget: raw.budget,
    });

    if (!validation.success) {
      setFieldErrors(validation.errors);
      const firstInvalid = e.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    setState("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact",
          name: validation.data.name,
          email: validation.data.email,
          phone: validation.data.phone,
          company: validation.data.company,
          message: validation.data.message,
          projectType: validation.data.projectType,
          budget: validation.data.budget,
          industry: raw.industry,
          mx_hp_field: honeypotValueFromFormData(formData),
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong");
      }

      const body = await res.json().catch(() => ({}));
      router.push(
        `/thank-you?source=contact${body.leadTier ? `&tier=${body.leadTier}` : ""}`,
      );
    } catch (err) {
      setState("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to submit");
    }
  }

  function FieldError({ id, message }: { id: string; message?: string }) {
    if (!message) return null;
    return (
      <p id={id} role="alert" className="mt-1.5 text-xs text-red-400">
        {message}
      </p>
    );
  }

  if (state === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-brand-600/20 bg-brand-50 p-10 text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-xl font-bold">Message received!</h3>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll respond within 24 hours with a clear path forward for your project.
        </p>
        <Button onClick={() => setState("idle")} variant="secondary" className="mt-6">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            minLength={2}
            maxLength={80}
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={fieldInputClass(inputClass, Boolean(fieldErrors.name))}
            placeholder="Your full name"
          />
          <FieldError id="name-error" message={fieldErrors.name} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Work Email <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={254}
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={fieldInputClass(inputClass, Boolean(fieldErrors.email))}
            placeholder="you@company.com"
          />
          <FieldError id="email-error" message={fieldErrors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={120}
          className={fieldInputClass(inputClass, Boolean(fieldErrors.company))}
          placeholder="Your Company"
        />
        <FieldError id="company-error" message={fieldErrors.company} />
      </div>

      <PhoneCountryFields
        phoneError={fieldErrors.phone}
        countryInputClassName={fieldInputClass(inputClass, false)}
        phoneInputClassName={fieldInputClass(inputClass, Boolean(fieldErrors.phone))}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
            Service Needed <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            id="service"
            name="service"
            aria-invalid={fieldErrors.projectType ? true : undefined}
            aria-describedby={fieldErrors.projectType ? "service-error" : undefined}
            className={fieldInputClass(inputClass, Boolean(fieldErrors.projectType))}
            defaultValue={defaultService}
          >
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <FieldError id="service-error" message={fieldErrors.projectType} />
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
            Project Budget <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            aria-invalid={fieldErrors.budget ? true : undefined}
            aria-describedby={fieldErrors.budget ? "budget-error" : undefined}
            className={fieldInputClass(inputClass, Boolean(fieldErrors.budget))}
            defaultValue="Not sure yet"
          >
            <option value="">Select budget range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <FieldError id="budget-error" message={fieldErrors.budget} />
        </div>
      </div>

      {defaultIndustry && <input type="hidden" name="industry" value={defaultIndustry} />}

      <HoneypotField />

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Project Details <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={5000}
          defaultValue={defaultMessage}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={cn(fieldInputClass(inputClass, Boolean(fieldErrors.message)), "resize-none")}
          placeholder="Tell us about your project goals, timeline, and any specific requirements..."
        />
        <FieldError id="message-error" message={fieldErrors.message} />
      </div>

      {state === "error" && (
        <p role="alert" className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={state === "loading"}>
        {state === "loading" ? "Sending..." : CTA_LABELS.primary}
      </Button>

      <p className="text-xs text-muted">
        By submitting, you agree to our privacy policy. We never share your information with third parties.
      </p>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-surface" />}>
      <ContactFormInner />
    </Suspense>
  );
}
