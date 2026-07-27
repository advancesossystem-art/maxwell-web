/**
 * Canonical 3-year website TCO model — single source of truth sitewide.
 * Based on Vadodara/Gujarat market rates (2026): freelance WordPress vs custom Next.js.
 */

export const TCO_LIFECYCLE_YEARS = 3;

export type TcoLineItem = { label: string; amount: number };

export type TcoStack = {
  id: "wordpress" | "nextjs";
  label: string;
  subtitle: string;
  initial: number;
  annualItems: TcoLineItem[];
  performanceLossPerYear: number;
};

/** Typical mid-market WordPress agency build in Vadodara (theme + plugins). */
export const WORDPRESS_TCO_STACK: TcoStack = {
  id: "wordpress",
  label: "Standard WordPress Trap",
  subtitle: "Typical Vadodara agency — theme + plugins, 3-year lifecycle",
  initial: 25_000,
  annualItems: [
    { label: "Plugin licences", amount: 15_000 },
    { label: "Theme renewals", amount: 5_000 },
    { label: "Managed hosting", amount: 8_000 },
    { label: "Maintenance & security", amount: 12_000 },
    { label: "Developer overhead", amount: 14_000 },
  ],
  performanceLossPerYear: 30_000,
};

/** Maxwell Professional tier — comparable scope to a full business WordPress site. */
export const NEXTJS_PROFESSIONAL_TCO_STACK: TcoStack = {
  id: "nextjs",
  label: "Maxwell Next.js Custom Build",
  subtitle: "Professional tier · 100% code ownership · zero plugin dependency",
  initial: 75_000,
  annualItems: [
    { label: "Cloud serverless hosting", amount: 6_000 },
    { label: "Core maintenance", amount: 9_000 },
  ],
  performanceLossPerYear: 0,
};

export function annualRecurringTotal(stack: TcoStack): number {
  return stack.annualItems.reduce((sum, item) => sum + item.amount, 0);
}

export function totalTco(stack: TcoStack, years = TCO_LIFECYCLE_YEARS): number {
  return (
    stack.initial +
    years * annualRecurringTotal(stack) +
    years * stack.performanceLossPerYear
  );
}

export const WORDPRESS_TCO_3YR = totalTco(WORDPRESS_TCO_STACK);
export const NEXTJS_TCO_3YR = totalTco(NEXTJS_PROFESSIONAL_TCO_STACK);
export const TCO_SAVINGS_3YR = WORDPRESS_TCO_3YR - NEXTJS_TCO_3YR;

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatInrCompact(amount: number): string {
  if (amount >= 100_000) {
    const lakhs = amount / 100_000;
    return lakhs % 1 === 0 ? `₹${lakhs}L` : `₹${lakhs.toFixed(1)}L`;
  }
  return formatInr(amount);
}

/** FAQ / schema copy — keep wording identical wherever cited. */
export const TCO_FAQ_ANSWER =
  `TCO = initial build + annual licensing + hosting + maintenance + developer overhead + performance revenue loss. ` +
  `For a typical Vadodara WordPress site over 3 years: ${formatInr(25_000)} + ${formatInr(162_000)} recurring + ${formatInr(90_000)} performance loss = ${formatInr(WORDPRESS_TCO_3YR)}. ` +
  `For Maxwell's Next.js Professional build: ${formatInr(75_000)} + ${formatInr(45_000)} recurring + ${formatInr(0)} performance loss = ${formatInr(NEXTJS_TCO_3YR)}. ` +
  `Net saving: ${formatInr(TCO_SAVINGS_3YR)}.`;
