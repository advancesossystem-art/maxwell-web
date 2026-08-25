"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import { ModalBackdrop, ModalPanel } from "@/components/motion/ModalEnter";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { Button } from "@/components/ui/Button";
import { submitLeadForm } from "@/lib/submit-lead-form";
import { trackExitIntent } from "@/lib/conversion-events";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";
import { HoneypotField, honeypotValueFromFormData } from "@/components/leads/HoneypotField";
import { CTA_LABELS } from "@/lib/conversion-copy";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";
import { trackLeadClick } from "@/lib/conversion-events";

const STORAGE_KEY = "exit-shown";

export function ExitIntentPopup() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
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
    const email = String(fd.get("email") || "").trim();

    const result = await submitLeadForm({
      source: "exit-intent",
      name: fd.get("name"),
      email: email || undefined,
      phone,
      company: fd.get("company") || undefined,
      message: "Exit-intent — website quote request (Starter from ₹35,000).",
      mx_hp_field: honeypotValueFromFormData(fd),
    });

    setLoading(false);
    if (!result.success) {
      setError(result.error || "Could not submit. Please try again.");
      return;
    }

    trackExitIntent("convert", "website-quote");
    router.push(
      `/thank-you?source=exit-intent${result.leadTier ? `&tier=${result.leadTier}` : ""}`,
    );
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

        <h3 id="exit-popup-title" className="pr-8 font-display text-xl font-bold text-[var(--v6-text)] sm:text-2xl">
          Wait — get a website quote
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--v6-text-secondary)]">
          Manufacturer &amp; business websites from ₹35,000. AMC from ₹15,000/mo. Name + phone is enough —
          we reply within 4 hours.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <HoneypotField />
          <FormField label="Name" htmlFor="exit-name" required>
            <input id="exit-name" name="name" required className={inputClass} autoComplete="name" />
          </FormField>
          <FormField label="Email" htmlFor="exit-email" hint="Optional — phone is enough">
            <input
              id="exit-email"
              name="email"
              type="email"
              className={inputClass}
              autoComplete="email"
            />
          </FormField>
          <PhoneCountryFields
            countryInputClassName={inputClass}
            phoneInputClassName={inputClass}
            required
          />
          <FormField label="Company" htmlFor="exit-company">
            <input id="exit-company" name="company" className={inputClass} autoComplete="organization" />
          </FormField>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending…" : CTA_LABELS.primary}
          </Button>
          <a
            href={WHATSAPP_HREF_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadClick("whatsapp")}
            className="flex w-full items-center justify-center rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-3 text-sm font-semibold text-[#128C7E] hover:bg-[#25D366]/20"
          >
            {CTA_LABELS.secondary}
          </a>
          <p className="text-center text-xs text-[var(--v6-text-muted)]">
            Or see{" "}
            <Link href="/pricing" className="font-semibold text-indigo-600 hover:underline" onClick={close}>
              published pricing
            </Link>
            .
          </p>
        </form>
      </ModalPanel>
    </>
  );
}
