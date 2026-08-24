"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { submitLeadForm } from "@/lib/submit-lead-form";
import {
  composeInternationalPhone,
  countryPhoneCodes,
  countrySelectLabel,
  defaultCountryIso,
  phonePlaceholderForCountry,
} from "@/lib/country-phone-codes";
import { HoneypotField, honeypotValueFromFormData } from "@/components/leads/HoneypotField";
import {
  mergeLeadContexts,
  readLeadContextFromDocumentCookie,
  readLeadContextFromUrlSearchParams,
} from "@/lib/lead-context";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Website Development",
  "Website AMC / SEO",
  "Website Redesign",
  "Ecommerce Website",
  "Manufacturer Catalog",
  "Other",
] as const;

const BUDGETS = [
  "Under ₹1L",
  "₹1L–₹3L",
  "₹3L–₹10L",
  "₹10L+",
  "Not sure yet",
] as const;

const SERVICE_PREFILL_MAP: Record<string, (typeof SERVICES)[number]> = {
  "Website Development": "Website Development",
  "Manufacturer Website": "Manufacturer Catalog",
  website: "Website Development",
  "website-development": "Website Development",
  "website-maintenance": "Website AMC / SEO",
  AMC: "Website AMC / SEO",
  SEO: "Website AMC / SEO",
  "Website Redesign": "Website Redesign",
  redesign: "Website Redesign",
  Ecommerce: "Ecommerce Website",
  ecommerce: "Ecommerce Website",
};

const fieldCls =
  "w-full rounded-xl border border-white/10 bg-[#0e0e16] py-2.5 pl-10 pr-3 text-sm text-slate-100 placeholder:text-slate-500 shadow-sm transition focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20";

const selectCls = cn(fieldCls, "appearance-none cursor-pointer");

function resolvePrefillService(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  if ((SERVICES as readonly string[]).includes(trimmed)) return trimmed;
  return SERVICE_PREFILL_MAP[trimmed] ?? SERVICE_PREFILL_MAP[decodeURIComponent(trimmed)] ?? "";
}

function FieldIcon({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden>
      {children}
    </span>
  );
}

function IconUser() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.7 3.75 5.7 3.75 9S14.5 18.3 12 21c-2.5-2.7-3.75-5.7-3.75-9S9.5 5.7 12 3z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM13.5 6A2.25 2.25 0 0115.75 3.75H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
    </svg>
  );
}

function IconPencil() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
    </svg>
  );
}

function IconRupee() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3.75 3.75 0 000-7.5H6" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function Label({
  htmlFor,
  children,
  required,
  optional,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-300">
      {children}
      {required ? <span className="text-red-500"> *</span> : null}
      {optional ? <span className="font-normal text-slate-400"> (optional)</span> : null}
    </label>
  );
}

export function QuickEstimateForm({
  prefillService = "",
  referralSource = "",
}: {
  prefillService?: string;
  referralSource?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const leadContext = mergeLeadContexts(
    readLeadContextFromDocumentCookie(),
    readLeadContextFromUrlSearchParams(searchParams),
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countryIso, setCountryIso] = useState(defaultCountryIso);
  const [showAllCountries, setShowAllCountries] = useState(false);

  const selected = countryPhoneCodes.find((c) => c.iso === countryIso);
  const countriesToRender = useMemo(() => {
    if (showAllCountries) return countryPhoneCodes;
    const current = countryPhoneCodes.find((c) => c.iso === countryIso) ?? countryPhoneCodes[0];
    return current ? [current] : countryPhoneCodes.slice(0, 1);
  }, [countryIso, showAllCountries]);

  const serviceDefault =
    resolvePrefillService(prefillService) ||
    resolvePrefillService(leadContext.service ?? "") ||
    "";
  const referral =
    referralSource.trim() ||
    leadContext.source?.trim() ||
    leadContext.ref?.trim() ||
    "";

  function expandCountries() {
    setShowAllCountries(true);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const phoneCountry = String(fd.get("phoneCountry") || defaultCountryIso);
    const description = String(fd.get("description") || "").trim();
    const projectType = String(fd.get("service") || "").trim();
    const budget = String(fd.get("budget") || "").trim() || "Not sure yet";
    const phone = composeInternationalPhone(phoneCountry, String(fd.get("phoneLocal") || ""));

    const messageParts = [
      description || `Estimate request for ${projectType || "project"} — details to confirm on call.`,
      phoneCountry ? `Phone country: ${phoneCountry}` : "",
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
      industry: phoneCountry || undefined,
      mx_hp_field: honeypotValueFromFormData(fd),
    });

    setLoading(false);
    if (!result.success) {
      setError(result.error || "Could not submit. Please try again.");
      return;
    }
    router.push("/thank-you?source=get-estimate");
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-3.5">
      <HoneypotField />

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <Label htmlFor="qe-name" required>
            Full Name
          </Label>
          <div className="relative">
            <FieldIcon>
              <IconUser />
            </FieldIcon>
            <input
              id="qe-name"
              name="name"
              type="text"
              required
              minLength={2}
              placeholder="Your name"
              className={fieldCls}
              autoComplete="name"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="qe-email" required>
            Work Email
          </Label>
          <div className="relative">
            <FieldIcon>
              <IconMail />
            </FieldIcon>
            <input
              id="qe-email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className={fieldCls}
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phoneCountry" required>
            Country
          </Label>
          <div className="relative">
            <FieldIcon>
              <IconGlobe />
            </FieldIcon>
            <select
              id="phoneCountry"
              name="phoneCountry"
              className={selectCls}
              value={countryIso}
              onFocus={expandCountries}
              onMouseDown={expandCountries}
              onTouchStart={expandCountries}
              onChange={(e) => setCountryIso(e.target.value)}
            >
              {countriesToRender.map((country) => (
                <option key={country.iso} value={country.iso}>
                  {countrySelectLabel(country)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="phoneLocal" required>
            {selected ? `Phone (${selected.dialCode})` : "Phone"}
          </Label>
          <div className="relative">
            <FieldIcon>
              <IconPhone />
            </FieldIcon>
            <input
              id="phoneLocal"
              name="phoneLocal"
              type="tel"
              required
              autoComplete="tel-national"
              inputMode="tel"
              minLength={5}
              maxLength={20}
              className={fieldCls}
              placeholder={phonePlaceholderForCountry(countryIso)}
            />
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
            Enter your number without the country code — we add it automatically from your selection.
          </p>
        </div>
      </div>

      <div>
        <Label htmlFor="qe-service" required>
          Service needed
        </Label>
        <div className="relative">
          <FieldIcon>
            <IconGrid />
          </FieldIcon>
          <select
            id="qe-service"
            name="service"
            required
            defaultValue={serviceDefault}
            className={selectCls}
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
      </div>

      <div>
        <Label htmlFor="qe-description" optional>
          Brief project description
        </Label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-3.5 text-slate-400" aria-hidden>
            <IconPencil />
          </span>
          <textarea
            id="qe-description"
            name="description"
            rows={3}
            placeholder="e.g. Product catalog website for our chemical plant in Vadodara"
            className={cn(fieldCls, "min-h-[5.5rem] resize-y pt-3")}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="qe-budget" optional>
          Budget range
        </Label>
        <div className="relative">
          <FieldIcon>
            <IconRupee />
          </FieldIcon>
          <select id="qe-budget" name="budget" defaultValue="" className={selectCls}>
            <option value="" disabled>
              Select budget range
            </option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <IconSend />
        {loading ? "Submitting…" : "Get Free Estimate"}
      </button>

      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
        <IconLock />
        We respect your privacy. Your information is safe with us.
      </p>
    </form>
  );
}
