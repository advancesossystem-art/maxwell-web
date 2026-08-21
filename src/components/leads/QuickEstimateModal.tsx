"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import { ModalBackdrop, ModalPanel } from "@/components/motion/ModalEnter";
import { submitLeadForm } from "@/lib/submit-lead-form";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";
import { trackCTAClick } from "@/lib/conversion-events";
import { CONVERSION_EXPECTATIONS } from "@/lib/conversion-copy";

type QuickEstimateModalProps = {
  open: boolean;
  onClose: () => void;
  source?: string;
};

export function QuickEstimateModal({ open, onClose, source = "header-modal" }: QuickEstimateModalProps) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const close = useCallback(() => {
    if (!loading) onClose();
  }, [loading, onClose]);

  useEscapeKey(close, open);
  useFocusTrap(dialogRef, open);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const phone = composeInternationalPhone(
      String(fd.get("phoneCountry") || defaultCountryIso),
      String(fd.get("phoneLocal") || ""),
    );

    const description = String(fd.get("message") || "").trim();
    const referral = source !== "get-estimate" ? source : "";

    const result = await submitLeadForm(
      {
        source: "get-estimate",
        name: fd.get("name"),
        email: fd.get("email"),
        phone,
        message: [description, referral ? `Landing source: ${referral}` : ""].filter(Boolean).join("\n"),
        projectType: "Website / Software Inquiry",
      },
      { trackStart: true },
    );

    setLoading(false);

    if (!result.success) {
      setError(result.error || "Could not submit. Please try again or WhatsApp us.");
      return;
    }

    trackCTAClick("Get My Scoped Estimate", "/thank-you", source);
    onClose();
    router.push(`/thank-you?source=${encodeURIComponent(source)}`);
  }

  return (
    <>
      <ModalBackdrop
        className="fixed inset-0 z-[70] bg-black/45 backdrop-blur-sm"
        onClick={close}
      />
      <ModalPanel
        panelRef={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-estimate-modal-title"
        className="fixed left-1/2 top-1/2 z-[71] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[var(--v6-border)] bg-white p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close estimate form"
        >
          ×
        </button>

        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Free · No obligation</p>
        <h2 id="quick-estimate-modal-title" className="mt-2 font-display text-xl font-bold text-gray-900">
          Get your scoped project estimate
        </h2>
        <p className="mt-1 text-sm text-gray-500">{CONVERSION_EXPECTATIONS.estimateTimeline}</p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <input name="mx_hp_field" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="qem-name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="qem-name"
              name="name"
              type="text"
              required
              minLength={2}
              autoComplete="name"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="qem-email" className="block text-sm font-medium text-gray-700 mb-1">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              id="qem-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              placeholder="you@company.com"
            />
          </div>

          <PhoneCountryFields
            required
            phoneInputClassName="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            countryInputClassName="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            compact
          />

          <div>
            <label htmlFor="qem-message" className="block text-sm font-medium text-gray-700 mb-1">
              Brief project description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="qem-message"
              name="message"
              required
              minLength={15}
              rows={3}
              className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              placeholder="e.g. Manufacturer website with 50-product catalog and RFQ forms for Vadodara plant"
            />
          </div>

          {error ? (
            <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 disabled:opacity-60"
          >
            {loading ? "Sending…" : "Get My Scoped Estimate"}
          </button>

          <p className="text-center text-xs text-gray-400">{CONVERSION_EXPECTATIONS.privacyNote}</p>
        </form>
      </ModalPanel>
    </>
  );
}
