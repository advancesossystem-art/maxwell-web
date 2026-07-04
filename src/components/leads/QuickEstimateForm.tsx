"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { submitLeadForm } from "@/lib/submit-lead-form";
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

export function QuickEstimateForm({ prefillService = "", prefillSource = "" }: { prefillService?: string; prefillSource?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const result = await submitLeadForm({
      source: prefillSource || "get-estimate-quick",
      name: fd.get("name"),
      phone: String(fd.get("whatsapp") || ""),
      service: fd.get("service"),
      message: fd.get("description"),
      budget: fd.get("budget"),
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
      {/* Honeypot */}
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
          placeholder="Your name"
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="qe-whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
          WhatsApp Number <span className="text-red-500">*</span>
        </label>
        <input
          id="qe-whatsapp"
          name="whatsapp"
          type="tel"
          required
          placeholder="+91 98765 43210"
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="qe-service" className="block text-sm font-medium text-gray-700 mb-1">
          Service needed <span className="text-red-500">*</span>
        </label>
        <select
          id="qe-service"
          name="service"
          required
          defaultValue={prefillService || ""}
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

      {/* Trust signals */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 pt-1">
        {[
          "No obligation",
          "Response within 24 hours",
          "GST invoice included",
          "50+ projects delivered",
        ].map((sig) => (
          <span key={sig} className="flex items-center gap-1.5">
            {CHECK_ICON}
            {sig}
          </span>
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-600 rounded-lg border border-red-200 bg-red-50 px-4 py-2">
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
            <span className="text-sm font-normal opacity-80">Response in 24 hours</span>
          </>
        )}
      </button>

      {/* What happens next */}
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
