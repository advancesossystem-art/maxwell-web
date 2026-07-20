/**
 * Founder & CEO — single source of truth for leadership copy on the site.
 */

export const founderProfile = {
  name: "Sanjay Prajapati",
  slug: "sanjay-prajapati",
  role: "Founder & CEO",
  initials: "SP",
  experience: "15+ years",
  bio: "Founder & CEO of Maxwell Electrodeal. Sanjay leads website engineering and custom software delivery for manufacturers and growing businesses from Vadodara — product-catalog websites that generate direct inquiries, plus ERP, CRM, and automation when operations outgrow spreadsheets.",
  specialization:
    "Website engineering for manufacturers, B2B product catalogs, export-ready sites, and accountable software delivery",
  expertise: [
    "Website Engineering",
    "Manufacturer Catalogs",
    "B2B Lead Generation",
    "ERP & Operations",
    "Export Websites",
  ],
  message:
    "We built Maxwell for business owners who are tired of paying marketplace fees forever and still not owning their Google presence. Your website should show every product, every certificate, and every reason a buyer should call you — not hide behind a generic contact form. I stay involved from discovery through go-live: scope is fixed, progress is visible every week, and you own 100% of what we deliver.",
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
