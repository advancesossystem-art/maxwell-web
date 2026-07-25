/** Homepage “What we ship” tiles — exact dual-row screenshot layout. */

export type MarqueeTile = {
  id: string;
  label: string;
  sublabel: string;
  color: string;
};

export const homeMarqueeRow1: MarqueeTile[] = [
  {
    id: "erp",
    label: "Production ERP",
    sublabel: "Inventory · GST · Shop floor",
    color: "#1e3a8a",
  },
  {
    id: "web",
    label: "Manufacturer sites",
    sublabel: "SEO catalogs · RFQ paths",
    color: "#6d28d9",
  },
  {
    id: "crm",
    label: "CRM & portals",
    sublabel: "Dealer · distributor · field",
    color: "#0f766e",
  },
  {
    id: "ai",
    label: "AI automation",
    sublabel: "Docs · workflows · insights",
    color: "#c2410c",
  },
  {
    id: "chem",
    label: "Chemical export",
    sublabel: "263-page catalog case",
    color: "#0369a1",
  },
  {
    id: "logistics",
    label: "Fleet & dispatch",
    sublabel: "POD · route · warehouse",
    color: "#1e293b",
  },
];

export const homeMarqueeRow2: MarqueeTile[] = [
  {
    id: "pharma",
    label: "Pharma web",
    sublabel: "Compliance-ready UX",
    color: "#047857",
  },
  {
    id: "textile",
    label: "Textile B2B",
    sublabel: "Export inquiry flows",
    color: "#9a3412",
  },
  {
    id: "speed",
    label: "Core Web Vitals",
    sublabel: "90+ mobile targets",
    color: "#4338ca",
  },
  {
    id: "ownership",
    label: "100% code ownership",
    sublabel: "No platform lock-in",
    color: "#18181b",
  },
  {
    id: "vadodara",
    label: "Vadodara engineering",
    sublabel: "India · global clients",
    color: "#1d4ed8",
  },
];

function triple<T>(items: T[]): T[] {
  return [...items, ...items, ...items];
}

export const homeMarqueeRow1Loop = triple(homeMarqueeRow1);
export const homeMarqueeRow2Loop = triple(homeMarqueeRow2);
