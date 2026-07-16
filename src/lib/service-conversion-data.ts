/** Pain → Agitate → Plan → Proof → Action narratives for priority service pages */

export type ServiceConversionNarrative = {
  pain: string;
  agitate: string;
  plan: { step: string; description: string }[];
  proof: { metric: string; label: string; href?: string }[];
  action: string;
};

export const serviceConversionNarratives: Record<string, ServiceConversionNarrative> = {
  "website-development-for-manufacturers": {
    pain: "Your buyers search Google for your product category. They find IndiaMART, TradeIndia, or your competitor — not you.",
    agitate:
      "Every month on a paid directory is ₹12,500–25,000 gone — leads you don't own, listed next to 20 competitors. A ₹15,000 website breaks in 6 months and never ranks.",
    plan: [
      { step: "Audit", description: "Map your product catalog and the search terms your buyers use" },
      { step: "Build", description: "Product pages, category SEO, WhatsApp inquiry on every page" },
      { step: "Launch", description: "Search Console, sitemap, PageSpeed — live in 21–30 days" },
    ],
    proof: [
      { metric: "263", label: "Pages for Drashti Chemicals", href: "/case-studies/drashti-chemicals" },
      { metric: "94", label: "Desktop PageSpeed score" },
      { metric: "6 wks", label: "Chemical supplier go-live" },
    ],
    action: "See published pricing — Starter ₹45,000, no quote games.",
  },
  "erp-development": {
    pain: "Production runs on WhatsApp, inventory lives in Excel, and month-end reconciliation takes two weeks.",
    agitate:
      "Generic SAP/Odoo implementations force your workflows into rigid templates — then charge ₹5L–₹20L to customize what should have been custom from day one.",
    plan: [
      { step: "Discovery", description: "On-site workflow mapping at your plant or office" },
      { step: "Build", description: "GST, Tally, inventory, production — phased by department" },
      { step: "Go-live", description: "Weekly demos, milestone billing, full IP transfer" },
    ],
    proof: [
      { metric: "40%", label: "Less manual entry (manufacturing ERP)" },
      { metric: "99.2%", label: "Inventory accuracy post go-live" },
      { metric: "14 wks", label: "Typical ERP delivery" },
    ],
    action: "Book a free ERP workflow audit — we'll tell you build vs buy honestly.",
  },
  "crm-development": {
    pain: "Leads sit in personal WhatsApp threads. Managers can't forecast. Deals die in silence.",
    agitate:
      "Salesforce seat fees punish growth — ₹8,000+ per user per month adds up fast for a 15-person Indian B2B sales team.",
    plan: [
      { step: "Map", description: "Pipeline stages, dealer hierarchies, WhatsApp follow-up rules" },
      { step: "Build", description: "Custom CRM with ERP sync — no per-seat tax" },
      { step: "Train", description: "Your team owns the system; we document every workflow" },
    ],
    proof: [
      { metric: "340%", label: "Qualified lead increase (SaaS client)" },
      { metric: "25–35%", label: "Follow-up discipline improvement" },
      { metric: "From ₹5L", label: "CRM MVP starting range" },
    ],
    action: "Get a CRM scope call — we'll map your pipeline in 30 minutes.",
  },
  "custom-software-development": {
    pain: "Critical operations still run on spreadsheets, phone calls, and tools that don't talk to each other.",
    agitate:
      "Off-the-shelf SaaS makes you adapt your business to their limits. When you outgrow it, migration costs more than building right once.",
    plan: [
      { step: "Audit", description: "Document workflows and integration points" },
      { step: "Architect", description: "Design for your process — not a template" },
      { step: "Deliver", description: "Phased releases so you see value before full go-live" },
    ],
    proof: [
      { metric: "50+", label: "Custom projects delivered" },
      { metric: "100%", label: "Code ownership on completion" },
      { metric: "98%", label: "Client retention" },
    ],
    action: "Free discovery call — we'll tell you if custom is worth it for your case.",
  },
  "ai-solutions": {
    pain: "Skilled staff spend hours on repetitive inspection, document reading, and data entry.",
    agitate:
      "Most 'AI pilots' never reach production — they demo well in a slide deck but fail on your factory floor or in your document workflow.",
    plan: [
      { step: "Feasibility", description: "2-week pilot on your real data or camera feed" },
      { step: "Production", description: "Deploy with monitoring, not PowerPoint" },
      { step: "ROI", description: "Measure hours saved and error reduction monthly" },
    ],
    proof: [
      { metric: "PPE", label: "Computer vision on factory floors" },
      { metric: "Doc AI", label: "Invoice & PO automation" },
      { metric: "From ₹3.5L", label: "AI pilot starting range" },
    ],
    action: "Book a free AI feasibility call — we'll say no if AI isn't the answer.",
  },
};

export const SERVICE_CONVERSION_SLUGS = Object.keys(serviceConversionNarratives);
