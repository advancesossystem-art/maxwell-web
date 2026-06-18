"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import { ModalBackdrop, ModalPanel } from "@/components/motion/ModalEnter";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { Button } from "@/components/ui/Button";
import { submitLeadForm } from "@/lib/submit-lead-form";
import { trackExitIntent } from "@/lib/conversion-events";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";

const STORAGE_KEY = "exit-shown";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEscapeKey(close, open);
  useFocusTrap(dialogRef, open);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !localStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
      localStorage.setItem(STORAGE_KEY, "1");
      trackExitIntent("shown");
    }
  }, []);

  useEffect(() => {
    const delay = window.setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 8000);
    return () => {
      window.clearTimeout(delay);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const phone = composeInternationalPhone(
      String(fd.get("phoneCountry") || defaultCountryIso),
      String(fd.get("phoneLocal") || ""),
    );

    const result = await submitLeadForm({
      source: "exit-intent",
      name: fd.get("name"),
      email: fd.get("email"),
      phone: phone || undefined,
      company: fd.get("company") || undefined,
      message: "Exit-intent popup — free software audit request.",
    });

    setLoading(false);
    if (!result.success) {
      setError(result.error || "Could not submit. Please try again.");
      return;
    }

    trackExitIntent("convert", "free-audit");
    setSubmitted(true);
    window.setTimeout(() => setOpen(false), 2200);
  }

  if (!open) return null;

  return (
    <>
      <ModalBackdrop
        className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm"
        onClick={close}
      />
      <ModalPanel
        panelRef={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-title"
        className="fixed left-1/2 top-1/2 z-[61] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[var(--v6-border)] bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-[var(--v6-text-muted)] hover:bg-[#f8fafc] hover:text-[var(--v6-text)]"
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#4f46e5]">Thank you</p>
            <h3 className="mt-2 font-display text-xl font-bold text-[var(--v6-text)]">
              We&apos;ll review your request shortly
            </h3>
            <p className="mt-2 text-sm text-[var(--v6-text-secondary)]">
              Expect a response within 4 hours on business days.
            </p>
          </div>
        ) : (
          <>
            <h3 id="exit-popup-title" className="pr-8 font-display text-xl font-bold text-[var(--v6-text)] sm:text-2xl">
              Wait — Get a Free Software Audit
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--v6-text-secondary)]">
              We&apos;ll review your current processes and tell you exactly what custom software would save your
              business time and money.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <input name="website_url" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <FormField label="Name" htmlFor="exit-name" required>
                <input id="exit-name" name="name" required className={inputClass} autoComplete="name" />
              </FormField>
              <FormField label="Email" htmlFor="exit-email" required>
                <input id="exit-email" name="email" type="email" required className={inputClass} autoComplete="email" />
              </FormField>
              <PhoneCountryFields
                countryInputClassName={inputClass}
                phoneInputClassName={inputClass}
                required={false}
              />
              <FormField label="Company" htmlFor="exit-company">
                <input id="exit-company" name="company" className={inputClass} autoComplete="organization" />
              </FormField>
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending…" : "Get My Free Audit →"}
              </Button>
              <p className="text-center text-xs text-[var(--v6-text-muted)]">No spam. Response within 4 hours.</p>
            </form>
          </>
        )}
      </ModalPanel>
    </>
  );
}
