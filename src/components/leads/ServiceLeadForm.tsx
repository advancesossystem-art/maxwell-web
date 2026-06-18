"use client";

import { useState } from "react";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";
import { Button } from "@/components/ui/Button";
import { submitLeadForm } from "@/lib/submit-lead-form";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { Container } from "@/components/ui/Container";

export function ServiceLeadForm({
  serviceName,
  serviceSlug,
  source,
}: {
  serviceName: string;
  serviceSlug: string;
  source?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const phone = composeInternationalPhone(
      String(fd.get("phoneCountry") || defaultCountryIso),
      String(fd.get("phoneLocal") || ""),
    );
    const message = String(fd.get("message") || "").trim();

    const result = await submitLeadForm({
      source: source ?? `service-${serviceSlug}`,
      name: fd.get("name"),
      email: fd.get("email"),
      phone,
      projectType: serviceName,
      message: message || `${serviceName} quote request from service page.`,
    });

    setLoading(false);
    if (!result.success) {
      setError(result.error || "Could not submit. Please try again.");
      return;
    }
    setDone(true);
  }

  return (
    <section className="border-t border-[var(--v6-border)] bg-[#f8fafc] py-16" aria-label={`${serviceName} quote form`}>
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--v6-border)] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-bold text-[var(--v6-text)] sm:text-3xl">
            Ready to Build Your {serviceName}?
          </h2>
          <p className="mt-3 text-[var(--v6-text-secondary)]">
            Tell us about your project and get a free quote within 4 business hours.
          </p>

          {done ? (
            <p className="mt-6 rounded-xl border border-[#4f46e5]/20 bg-[#4f46e5]/5 p-4 text-sm text-[var(--v6-text)]">
              Thanks — we&apos;ll review your project details and respond within 4 business hours.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <input name="website_url" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <FormField label="Name" htmlFor={`svc-name-${serviceSlug}`} required>
                <input id={`svc-name-${serviceSlug}`} name="name" required className={inputClass} />
              </FormField>
              <FormField label="Email" htmlFor={`svc-email-${serviceSlug}`} required>
                <input id={`svc-email-${serviceSlug}`} name="email" type="email" required className={inputClass} />
              </FormField>
              <PhoneCountryFields
                countryInputClassName={inputClass}
                phoneInputClassName={inputClass}
                required
              />
              <FormField label="Brief project description" htmlFor={`svc-msg-${serviceSlug}`} required>
                <textarea
                  id={`svc-msg-${serviceSlug}`}
                  name="message"
                  required
                  rows={4}
                  minLength={20}
                  className={inputClass}
                  placeholder="What problem are you solving? Timeline, users, integrations…"
                />
              </FormField>
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <Button type="submit" size="lg" disabled={loading}>
                {loading ? "Sending…" : "Get Free Quote →"}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
