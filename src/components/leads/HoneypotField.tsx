"use client";

/** Obscure honeypot — do not name this website_url (browsers autofill that and silently drop real leads). */
export const HONEYPOT_FIELD_NAME = "mx_hp_field";

export function HoneypotField() {
  return (
    <div
      className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      aria-hidden="true"
    >
      <label htmlFor={HONEYPOT_FIELD_NAME}>Company website</label>
      <input
        id={HONEYPOT_FIELD_NAME}
        name={HONEYPOT_FIELD_NAME}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}

export function honeypotValueFromFormData(fd: FormData): string {
  return String(fd.get(HONEYPOT_FIELD_NAME) || fd.get("website_url") || "").trim();
}
