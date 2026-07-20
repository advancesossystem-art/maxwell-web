/**
 * Founder & CEO — single source of truth for leadership copy on the site.
 */

export const founderProfile = {
  name: "Sanjay Prajapati",
  slug: "sanjay-prajapati",
  role: "Founder & CEO",
  initials: "SP",
  /** Sanjay's software career before and since founding — not the same as company age. */
  careerExperience: "15+ years in enterprise software",
  bio: "Founder & CEO of Maxwell Electrodeal — website engineering and custom software from Vadodara, Gujarat.",
  specialization:
    "Website engineering for manufacturers, B2B product catalogs, export-ready sites, and accountable software delivery",
  expertise: [
    "Website Engineering",
    "Manufacturer Catalogs",
    "B2B Lead Generation",
    "ERP & Operations",
    "Export Websites",
  ],
  /** CEO journey — aligned with companyStory (founded 2018, Vadodara). */
  journey: [
    "Sanjay started Maxwell Electrodeal in 2018 after a Vadodara manufacturer asked for inventory software that matched how their stores team actually worked — not how an ERP consultant thought it should work. That first build synced two warehouses with Tally, cut manual re-entry, and earned adoption because the screens followed real shop-floor workflows.",
    "Word spread across Gujarat industrial belts. Manufacturers came for ERP and operations software; they stayed because Maxwell showed up on-site, scoped in writing, and delivered in weekly demos — not surprise invoices. Over eight years the work grew into full website engineering: product catalogs that rank on Google, export inquiry flows, and sites that replace marketplace dependency with direct buyer leads.",
    "Today Maxwell is known for published pricing, milestone billing, and 100% client ownership of code and design. Sanjay still leads discovery on manufacturer and B2B projects — from a 263-page chemical catalog (Drashti Chemicals, Vadodara) to multi-plant ERP — because the standard he set in 2018 has not changed: understand the work first, then build something people actually use.",
  ],
  message:
    "Your website should show every product, every certificate, and every reason a buyer should call you — not hide behind a generic contact form. I stay involved from discovery through go-live: fixed scope, visible progress every week, and full ownership of what we deliver.",
  principles: [
    "Published pricing — no quote games after the call",
    "Milestone billing tied to demos, not hours",
    "Catalog and inquiry flows designed for how buyers actually evaluate you",
    "On-site discovery for Gujarat manufacturers when the plant visit matters",
  ],
} as const;

/** Legacy author slug from earlier site versions — maps to current founder. */
export const founderAuthorSlugAliases: Record<string, string> = {
  "rajesh-mehta": founderProfile.slug,
};
