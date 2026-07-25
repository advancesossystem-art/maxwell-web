/** Homepage scroll-marquee tiles — Maxwell outcomes (Jack dual-row pattern). */

export type MarqueeTile = {
  id: string;
  label: string;
  sublabel: string;
  gradient: string;
};

export const homeMarqueeRow1: MarqueeTile[] = [
  {
    id: "erp",
    label: "Production ERP",
    sublabel: "Inventory · GST · Shop floor",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)",
  },
  {
    id: "web",
    label: "Manufacturer sites",
    sublabel: "SEO catalogs · RFQ paths",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
  },
  {
    id: "crm",
    label: "CRM & portals",
    sublabel: "Dealer · distributor · field",
    gradient: "linear-gradient(135deg, #0f766e 0%, #115e59 100%)",
  },
  {
    id: "ai",
    label: "AI automation",
    sublabel: "Docs · workflows · insights",
    gradient: "linear-gradient(135deg, #b45309 0%, #9a3412 100%)",
  },
  {
    id: "chem",
    label: "Chemical export",
    sublabel: "263-page catalog case",
    gradient: "linear-gradient(135deg, #0369a1 0%, #1e40af 100%)",
  },
  {
    id: "logistics",
    label: "Fleet & dispatch",
    sublabel: "POD · route · warehouse",
    gradient: "linear-gradient(135deg, #334155 0%, #0f172a 100%)",
  },
];

export const homeMarqueeRow2: MarqueeTile[] = [
  {
    id: "pharma",
    label: "Pharma web",
    sublabel: "Compliance-ready UX",
    gradient: "linear-gradient(135deg, #047857 0%, #065f46 100%)",
  },
  {
    id: "textile",
    label: "Textile B2B",
    sublabel: "Export inquiry flows",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)",
  },
  {
    id: "speed",
    label: "Core Web Vitals",
    sublabel: "90+ mobile targets",
    gradient: "linear-gradient(135deg, #4338ca 0%, #6366f1 100%)",
  },
  {
    id: "ownership",
    label: "100% code ownership",
    sublabel: "No platform lock-in",
    gradient: "linear-gradient(135deg, #18181b 0%, #3f3f46 100%)",
  },
  {
    id: "vadodara",
    label: "Vadodara engineering",
    sublabel: "India · global clients",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
  },
];

function triple<T>(items: T[]): T[] {
  return [...items, ...items, ...items];
}

export const homeMarqueeRow1Loop = triple(homeMarqueeRow1);
export const homeMarqueeRow2Loop = triple(homeMarqueeRow2);
