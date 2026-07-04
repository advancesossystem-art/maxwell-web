"use client";

import { useMemo, useState } from "react";
import { FormField } from "@/components/leads/LeadFormFields";
import {
  countryPhoneCodes,
  countrySelectLabel,
  defaultCountryIso,
  phonePlaceholderForCountry,
} from "@/lib/country-phone-codes";
import { cn } from "@/lib/utils";

type PhoneCountryFieldsProps = {
  phoneError?: string;
  countryInputClassName: string;
  phoneInputClassName: string;
  compact?: boolean;
  required?: boolean;
};

export function PhoneCountryFields({
  phoneError,
  countryInputClassName,
  phoneInputClassName,
  compact = false,
  required = true,
}: PhoneCountryFieldsProps) {
  const [countryIso, setCountryIso] = useState(defaultCountryIso);
  const [showAllCountries, setShowAllCountries] = useState(false);
  const selected = countryPhoneCodes.find((c) => c.iso === countryIso);

  const countriesToRender = useMemo(() => {
    if (showAllCountries) return countryPhoneCodes;
    const current = countryPhoneCodes.find((c) => c.iso === countryIso) ?? countryPhoneCodes[0];
    return current ? [current] : countryPhoneCodes.slice(0, 1);
  }, [countryIso, showAllCountries]);

  function expandCountries() {
    setShowAllCountries(true);
  }

  return (
    <div className={cn("grid gap-3.5", compact ? "sm:grid-cols-1" : "sm:grid-cols-2")}>
      <FormField label="Country" htmlFor="phoneCountry" required={required}>
        <select
          id="phoneCountry"
          name="phoneCountry"
          className={countryInputClassName}
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
      </FormField>
      <FormField
        label={selected ? `Phone (${selected.dialCode})` : "Phone"}
        htmlFor="phoneLocal"
        required={required}
        error={phoneError}
        hint="Enter your number without the country code — we add it automatically from your selection above."
      >
        <input
          id="phoneLocal"
          name="phoneLocal"
          type="tel"
          required={required}
          autoComplete="tel-national"
          inputMode="tel"
          minLength={5}
          maxLength={20}
          className={phoneInputClassName}
          placeholder={phonePlaceholderForCountry(countryIso)}
          aria-invalid={phoneError ? true : undefined}
        />
      </FormField>
    </div>
  );
}
