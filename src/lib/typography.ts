/**
 * Maxwell Electrodeal — Typography System V2
 * Single source of truth for type scale class names.
 */

export const typography = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  lead: "text-lead",
  body: "text-body",
  caption: "text-caption",
  eyebrow: "text-eyebrow font-semibold uppercase tracking-[0.22em] text-brand-500",
} as const;

export type TypographyScale = keyof typeof typography;
