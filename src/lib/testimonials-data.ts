import type { CaseStudyIndustry } from "@/lib/case-studies-data";

export type TestimonialRecord = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: CaseStudyIndustry | "SaaS Startup" | "Logistics" | "Manufacturing" | "Healthcare";
  companySize: string;
  projectType: string;
  outcome: string;
  projectValue?: string;
  verified?: boolean;
};

export const testimonials: TestimonialRecord[] = [
  {
    id: "precision-fab",
    quote:
      "Maxwell delivered our manufacturing ERP in 14 weeks. The system handles 3 facilities, 200+ SKUs, and cut manual processes by 40%. Enterprise quality at a fraction of what large consultancies quoted.",
    author: "",
    role: "COO",
    company: "",
    industry: "Manufacturing",
    companySize: "450 employees · 3 facilities",
    projectType: "ERP Development",
    outcome: "40% less manual entry · ₹12L annual savings",
    projectValue: "₹18L",
    verified: true,
  },
  {
    id: "flowmetrics",
    quote:
      "We needed an investor-ready SaaS MVP in 8 weeks. Maxwell architected for scale—we reached 500 users without a rewrite and closed our seed round two weeks after launch.",
    author: "",
    role: "Founder & CEO",
    company: "",
    industry: "SaaS Startup",
    companySize: "Series A · 12-person team",
    projectType: "SaaS Development",
    outcome: "500 users at launch · seed round closed post-launch",
    projectValue: "₹12L",
    verified: true,
  },
  {
    id: "carefirst",
    quote:
      "Our patient portal serves 10,000+ users across 15 clinics with 99.9% uptime since go-live. Healthcare compliance and patient UX were handled with equal rigor.",
    author: "",
    role: "Medical Director",
    company: "",
    industry: "Healthcare",
    companySize: "15 clinics · multi-city network",
    projectType: "Custom Software Development",
    outcome: "10,000+ active patients · 99.9% uptime",
    projectValue: "₹22L",
    verified: true,
  },
  {
    id: "logistream",
    quote:
      "As a US-based operator, we were cautious about offshore delivery. Maxwell's communication, code quality, and timezone overlap exceeded domestic agencies we evaluated.",
    author: "",
    role: "CTO",
    company: "",
    industry: "Logistics",
    companySize: "200+ fleet vehicles",
    projectType: "Logistics Platform",
    outcome: "25% faster deliveries · 30% fuel cost reduction",
    projectValue: "$45K",
    verified: true,
  },
  {
    id: "stylemart",
    quote:
      "Inventory sync across online and in-store channels went from a weekly nightmare to real-time accuracy. Online revenue grew 35% within two quarters of launch.",
    author: "",
    role: "Head of Digital",
    company: "",
    industry: "Retail",
    companySize: "40 stores · omnichannel",
    projectType: "Custom Software Development",
    outcome: "98% inventory sync · 35% online revenue growth",
    projectValue: "₹16L",
    verified: true,
  },
  {
    id: "buildright",
    quote:
      "Field teams finally report from site in one system. Project margin visibility improved because leadership sees labour and material burn weekly—not month-end.",
    author: "",
    role: "Operations Director",
    company: "",
    industry: "Construction",
    companySize: "8 active projects · 150+ field workers",
    projectType: "ERP Development",
    outcome: "Real-time site reporting · improved margin visibility",
    projectValue: "₹24L",
    verified: true,
  },
];

/** Anonymized success story cards for homepage social proof */
export const successStories = [
  {
    title: "Chemical batch ERP",
    industry: "Chemical",
    challenge: "Batch traceability and MSDS compliance tracked in spreadsheets",
    result: "99.5% batch record accuracy · audit-ready in 48 hours",
    href: "/case-studies/chemical-industry-erp",
  },
  {
    title: "Manufacturing CRM rollout",
    industry: "Manufacturing",
    challenge: "Field sales and distributor follow-ups lost in WhatsApp threads",
    result: "28% pipeline conversion lift · 40% faster quote turnaround",
    href: "/case-studies/manufacturing-crm",
  },
  {
    title: "Inventory automation",
    industry: "Distribution",
    challenge: "Multi-warehouse stock mismatches causing write-offs and delays",
    result: "96% inventory accuracy · ₹8L annual waste reduction",
    href: "/case-studies/inventory-automation",
  },
] as const;
