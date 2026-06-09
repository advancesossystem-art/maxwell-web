import { z } from "zod";

const NAME_REGEX = /^[a-zA-Z][a-zA-Z\s.'-]{1,79}$/;

const BLOCKED_EMAIL_LOCALS = new Set([
  "test",
  "fake",
  "asdf",
  "example",
  "admin",
  "user",
  "none",
  "noemail",
  "email",
  "xxx",
]);

const BLOCKED_EMAIL_DOMAINS = new Set(["example.com", "test.com", "mailinator.com", "tempmail.com"]);

/** Stricter than browser `type="email"` — blocks obvious junk addresses */
export function isValidWorkEmail(email: string): boolean {
  const value = email.trim().toLowerCase();
  if (value.length < 6 || value.length > 254) return false;

  const match = value.match(
    /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]*[a-zA-Z0-9])?@([a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+)$/,
  );
  if (!match) return false;

  const local = value.split("@")[0] ?? "";
  const domain = match[1] ?? "";
  if (BLOCKED_EMAIL_LOCALS.has(local)) return false;
  if (BLOCKED_EMAIL_DOMAINS.has(domain)) return false;
  if (domain.endsWith(".test") || domain.endsWith(".invalid")) return false;

  const tld = domain.split(".").pop();
  return Boolean(tld && tld.length >= 2);
}

/** Indian mobile: 10 digits starting 6–9; also accepts +91 / leading 0 */
export function normalizeIndianPhone(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10 && /^[6-9]\d{9}$/.test(digits)) {
    return digits;
  }
  if (digits.length === 12 && digits.startsWith("91") && /^[6-9]\d{9}$/.test(digits.slice(2))) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith("0") && /^[6-9]\d{9}$/.test(digits.slice(1))) {
    return digits.slice(1);
  }

  return null;
}

export function isValidIndianPhone(phone: string): boolean {
  return normalizeIndianPhone(phone) !== null;
}

/** E.164-style: 7–15 digits; optional +, spaces, hyphens, parentheses */
export function normalizeInternationalPhone(phone: string): string | null {
  const trimmed = phone.trim();
  if (!trimmed || !/^[\d\s+\-().]+$/.test(trimmed)) return null;

  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return null;

  return trimmed.startsWith("+") ? `+${digits}` : digits;
}

export function isValidInternationalPhone(phone: string): boolean {
  return normalizeInternationalPhone(phone) !== null;
}

export function isValidFullName(name: string): boolean {
  const value = name.trim();
  return value.length >= 2 && value.length <= 80 && NAME_REGEX.test(value);
}

const nameField = z
  .string()
  .trim()
  .min(2, "Name must be at least 2 characters")
  .max(80, "Name is too long")
  .refine(isValidFullName, "Enter your full name using letters only");

const emailField = z
  .string()
  .trim()
  .min(1, "Email is required")
  .refine(isValidWorkEmail, "Enter a valid work email address");

const phoneField = z
  .string()
  .trim()
  .min(1, "Phone number is required")
  .max(25, "Phone number is too long")
  .refine(
    isValidInternationalPhone,
    "Enter a valid international phone number with country code (e.g. +91 9876543210 or +1 555 123 4567)",
  );

const messageField = z
  .string()
  .trim()
  .min(20, "Please describe your project in at least 20 characters");

export const leadFormFieldsSchema = z.object({
  name: nameField,
  email: emailField,
  phone: phoneField,
  company: z.string().trim().max(120).optional(),
  message: messageField,
  projectType: z.string().trim().min(1, "Select a service"),
  budget: z.string().trim().min(1, "Select a budget range"),
});

export type LeadFormFieldErrors = Partial<
  Record<"name" | "email" | "phone" | "company" | "message" | "projectType" | "budget", string>
>;

export const consultationStep1Schema = z.object({
  name: nameField,
  email: emailField,
  phone: phoneField,
  projectType: z.string().trim().min(1, "Select a service"),
});

export const consultationLeadFormSchema = z.object({
  name: nameField,
  email: emailField,
  phone: phoneField,
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().max(5000).optional(),
  projectType: z.string().trim().min(1, "Select a service"),
  budget: z.string().trim().max(80).optional(),
});

export const CONSULTATION_DEFAULT_MESSAGE =
  "Consultation request — details to be discussed on the call.";

export function validateConsultationStep1(data: {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
}):
  | { success: true; data: z.infer<typeof consultationStep1Schema> }
  | { success: false; errors: LeadFormFieldErrors } {
  const result = consultationStep1Schema.safeParse({
    name: data.name ?? "",
    email: data.email ?? "",
    phone: data.phone ?? "",
    projectType: data.projectType ?? "",
  });

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: LeadFormFieldErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (key === "name" || key === "email" || key === "phone" || key === "projectType") {
      if (!errors[key]) errors[key] = issue.message;
    }
  }

  return { success: false, errors };
}

export function validateConsultationFormFields(data: {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  projectType?: string;
  budget?: string;
}):
  | { success: true; data: z.infer<typeof consultationLeadFormSchema> & { message: string } }
  | { success: false; errors: LeadFormFieldErrors } {
  const result = consultationLeadFormSchema.safeParse({
    name: data.name ?? "",
    email: data.email ?? "",
    phone: data.phone ?? "",
    company: data.company ?? "",
    message: data.message ?? "",
    projectType: data.projectType ?? "",
    budget: data.budget ?? "",
  });

  if (result.success) {
    const trimmedMessage = result.data.message?.trim() ?? "";
    return {
      success: true,
      data: {
        ...result.data,
        message:
          trimmedMessage.length >= 20 ? trimmedMessage : CONSULTATION_DEFAULT_MESSAGE,
      },
    };
  }

  const errors: LeadFormFieldErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (
      key === "name" ||
      key === "email" ||
      key === "phone" ||
      key === "company" ||
      key === "message" ||
      key === "projectType" ||
      key === "budget"
    ) {
      if (!errors[key]) errors[key] = issue.message;
    }
  }

  return { success: false, errors };
}

export function validateLeadFormFields(data: {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  projectType?: string;
  budget?: string;
}): { success: true; data: z.infer<typeof leadFormFieldsSchema> } | { success: false; errors: LeadFormFieldErrors } {
  const result = leadFormFieldsSchema.safeParse({
    name: data.name ?? "",
    email: data.email ?? "",
    phone: data.phone ?? "",
    company: data.company ?? "",
    message: data.message ?? "",
    projectType: data.projectType ?? "",
    budget: data.budget ?? "",
  });

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: LeadFormFieldErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (
      key === "name" ||
      key === "email" ||
      key === "phone" ||
      key === "company" ||
      key === "message" ||
      key === "projectType" ||
      key === "budget"
    ) {
      if (!errors[key]) errors[key] = issue.message;
    }
  }

  return { success: false, errors };
}

export const zodNameField = nameField;
export const zodEmailField = emailField;
export const zodPhoneField = phoneField;
export const zodMessageField = messageField;
