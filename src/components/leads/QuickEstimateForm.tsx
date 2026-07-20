"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { submitLeadForm } from "@/lib/submit-lead-form";
import { composeInternationalPhone, defaultCountryIso } from "@/lib/country-phone-codes";
import { PhoneCountryFields } from "@/components/leads/PhoneCountryFields";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Website Development",
  "ERP",
  "CRM",
  "Custom Software",
  "AI Solutions",
  "Mobile App",
  "Other",
] as const;

const BUDGETS = [
  "Under ₹1L",
  "₹1L–₹3L",
  "₹3L–₹10L",
  "₹10L+",
  "Not sure yet",
] as const;

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "UAE / Middle East",
  "Turkey",
  "Germany",
  "Canada",
  "Australia",
  "Singapore",
  "Other",
] as const;

const SERVICE_PREFILL_MAP: Record<string, (typeof SERVICES)[number]> = {
  "Website Development": "Website Development",
  "Manufacturer Website": "Website Development",
  website: "Website Development",
  "website-development": "Website Development",
  ERP: "ERP",
  "erp-development": "ERP",
  CRM: "CRM",
  "crm-development": "CRM",
  "Custom Software": "Custom Software",
  "custom-software-development": "Custom Software",
  "AI Solutions": "AI Solutions",
  "ai-solutions": "AI Solutions",
  "Mobile App": "Mobile App",
  "mobile-app-development": "Mobile App",
};

const inputCls =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition";

const CHECK_ICON = (
  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

function resolvePrefillService(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  if ((SERVICES as readonly string[]).includes(trimmed)) return trimmed;
  return SERVICE_PREFILL_MAP[trimmed] ?? SERVICE_PREFILL_MAP[decodeURIComponent(trimmed)] ?? "";
}

export function QuickEstimateForm({
  prefillService = "",
  referralSource = "",
}: {
  prefillService?: string;
  /** Landing/referral tag only — never sent as API source (must be get-estimate) */
  referralSource?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const serviceDefault =
    resolvePrefillService(prefillService) ||
    resolvePrefillService(searchParams.get("service") ?? "") ||
    "";
  const referral =
    referralSource.trim() ||
    searchParams.get("source")?.trim() ||
    searchParams.get("ref")?.trim() ||
    "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const country = String(fd.get("country") || "").trim();
    const description = String(fd.get("description") || "").trim();
    const projectType = String(fd.get("service") || "").trim();
    const budget = String(fd.get("budget") || "").trim();
    const phone = composeInternationalPhone(
      String(fd.get("phoneCountry") || defaultCountryIso),
      String(fd.get("phoneLocal") || ""),
    );

    const messageParts = [
      description,
      country ? `Country: ${country}` : "",
      referral ? `Landing source: ${referral}` : "",
    ].filter(Boolean);

    const result = await submitLeadForm({
      source: "get-estimate",
      name: fd.get("name"),
      email: fd.get("email"),
      phone,
      projectType,
      budget,
      message: messageParts.join("\n"),
      industry: country || undefined,
    });

    setLoading(false);
    if (!result.success) {
      setError(result.error || "Could not submit. Please try again.");
      return;
    }
    router.push("/thank-you?source=get-estimate");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <input name="website_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="qe-name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="qe-name"
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="Your name"
          className={inputCls}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="qe-email" className="block text-sm font-medium text-gray-700 mb-1">
          Work Email <span className="text-red-500">*</span>
        </label>
        <input
          id="qe-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className={inputCls}
          autoComplete="email"
        />
      </div>

      <PhoneCountryFields
        countryInputClassName={inputCls}
        phoneInputClassName={inputCls}
        required
      />
      <p className="-mt-2 text-xs text-gray-500">
        WhatsApp preferred for India/UAE/UK. Enter the number without country code.
      </p>

      <div>
        <label htmlFor="qe-country" className="block text-sm font-medium text-gray-700 mb-1">
          Your Country <span className="text-red-500">*</span>
        </label>
        <select
          id="qe-country"
          name="country"
          required
          defaultValue=""
          className={cn(inputCls, "appearance-none")}
        >
          <option value="" disabled>
            Select your country
          </option>
          {COUNTRIES.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="qe-service" className="block text-sm font-medium text-gray-700 mb-1">
          Service needed <span className="text-red-500">*</span>
        </label>
        <select
          id="qe-service"
          name="service"
          required
          defaultValue={serviceDefault}
          className={cn(inputCls, "appearance-none")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="qe-description" className="block text-sm font-medium text-gray-700 mb-1">
          Brief project description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="qe-description"
          name="description"
          required
          minLength={20}
          rows={3}
          placeholder="e.g. We need a product catalog website for our chemical business in Vadodara"
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="qe-budget" className="block text-sm font-medium text-gray-700 mb-1">
          Budget range <span className="text-red-500">*</span>
        </label>
        <select
          id="qe-budget"
          name="budget"
          required
          defaultValue=""
          className={cn(inputCls, "appearance-none")}
        >
          <option value="" disabled>
            Select a budget range
          </option>
          {BUDGETS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 pt-1 mb-4">
        {[
          "No obligation",
          "USD / GBP / AED pricing available",
          "NDA on request",
          "Response within 4 hours",
          "Full IP ownership",
        ].map((sig) => (
          <span key={sig} className="flex items-center gap-1.5">
            {CHECK_ICON}
            {sig}
          </span>
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-600 rounded-lg border border-red-200 bg-red-50 px-4 py-2" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-4 px-6 rounded-lg text-base transition flex items-center justify-center gap-3"
      >
        {loading ? (
          "Submitting…"
        ) : (
          <>
            Get My Free Estimate →
            <span className="text-sm font-normal opacity-80">We work with clients globally</span>
          </>
        )}
      </button>

      <div className="border-t border-gray-100 pt-5">
        <p className="text-sm font-medium text-gray-700 mb-3">What happens after you submit:</p>
        <ol className="text-sm text-gray-600 space-y-2">
          {[
            "We review your requirements within 4 business hours",
            "We send a detailed phased estimate on WhatsApp and email within 24 hours",
            "We schedule a free 30-minute call to discuss your project",
            "You decide with no pressure — zero cost for the estimate and consultation",
          ].map((step, i) => (
            <li key={i} className="flex gap-2">
              <span className="font-bold text-blue-600 flex-shrink-0">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <p className="text-center text-xs text-gray-400">
        Prefer the detailed estimator?{" "}
        <Link href="#wizard" className="text-blue-600 hover:underline font-medium">
          Use the guided wizard →
        </Link>
      </p>
    </form>
  );
}
