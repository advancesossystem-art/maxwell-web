export interface ErpRequirementInput {
  companyName: string;
  industry: string;
  userCount: number;
  warehouseCount: number;
  modules: string[];
  integrations: string[];
  complianceNeeds: string;
}

export interface ErpRequirementResult {
  documentTitle: string;
  executiveSummary: string;
  functionalRequirements: string[];
  technicalRequirements: string[];
  integrationRequirements: string[];
  nonFunctionalRequirements: string[];
  implementationPhases: { phase: string; duration: string; scope: string }[];
  summary: string;
}

const MODULE_REQUIREMENTS: Record<string, string[]> = {
  "Inventory Management": ["Multi-warehouse stock tracking", "Reorder alerts and min/max levels", "Batch/lot and expiry tracking"],
  "Production Planning": ["BOM management and work orders", "Shop-floor status tracking", "Capacity planning dashboard"],
  "Finance & Accounting": ["GST-compliant invoicing", "P&L, balance sheet, cash flow", "Cost center and project accounting"],
  "HR & Payroll": ["Employee master and attendance", "Payroll with statutory compliance", "Leave and shift management"],
  "Multi-warehouse": ["Inter-warehouse transfers", "Location-wise stock valuation", "Pick-pack-ship workflows"],
  "Barcode Scanning": ["Mobile barcode receive/issue", "GRN and dispatch scanning", "Cycle count support"],
  "Supplier Portal": ["PO visibility for vendors", "ASN and invoice submission", "Vendor performance scorecard"],
  "Reporting & Analytics": ["Role-based dashboards", "Scheduled PDF/Excel reports", "Drill-down from KPI to transaction"],
};

export function generateErpRequirements(input: ErpRequirementInput): ErpRequirementResult {
  const functionalRequirements: string[] = [];
  for (const mod of input.modules) {
    const reqs = MODULE_REQUIREMENTS[mod];
    if (reqs) functionalRequirements.push(...reqs.map((r) => `[${mod}] ${r}`));
    else functionalRequirements.push(`[${mod}] Module per business process map`);
  }

  if (functionalRequirements.length === 0) {
    functionalRequirements.push(
      "Core inventory, sales order, and purchase order workflows",
      "Financial posting from operational transactions",
      "Role-based access for finance, warehouse, and management",
    );
  }

  const integrationRequirements = [
    ...input.integrations.map((i) => `${i} integration with bi-directional sync where applicable`),
    input.complianceNeeds !== "None" ? `${input.complianceNeeds} compliance documentation and audit trails` : "Standard GST and audit logging",
  ];

  const scaleNote =
    input.userCount > 100 ? "High-availability architecture with load balancing" : "Single-tenant cloud deployment with daily backups";

  return {
    documentTitle: `ERP Requirements — ${input.companyName}`,
    executiveSummary: `${input.industry} ERP for ${input.userCount} users across ${input.warehouseCount} warehouse(s). Modules: ${input.modules.join(", ") || "core operations"}.`,
    functionalRequirements: functionalRequirements.slice(0, 20),
    technicalRequirements: [
      scaleNote,
      "Web-first UI with optional mobile apps for warehouse/sales",
      "REST APIs for third-party integrations",
      "Role-based access control with audit logs",
      "Cloud hosting (AWS/Azure) with 99.9% uptime target",
      "Data migration from existing spreadsheets/legacy ERP",
    ],
    integrationRequirements,
    nonFunctionalRequirements: [
      "Page load under 3s on standard broadband",
      "Concurrent users: " + Math.ceil(input.userCount * 0.3),
      "RPO ≤ 24 hours, RTO ≤ 4 hours",
      "Training and hypercare for 30 days post go-live",
    ],
    implementationPhases: [
      { phase: "Discovery & process mapping", duration: "2–3 weeks", scope: "As-is/to-be workflows, data audit" },
      { phase: "Core modules build", duration: "10–16 weeks", scope: input.modules.slice(0, 4).join(", ") || "Inventory, sales, purchase, finance" },
      { phase: "Integrations & UAT", duration: "3–4 weeks", scope: input.integrations.join(", ") || "Tally/GST, email alerts" },
      { phase: "Go-live & hypercare", duration: "2–3 weeks", scope: "Training, cutover, stabilization" },
    ],
    summary: `Generated ${functionalRequirements.length} functional requirements for ${input.companyName} ERP across ${input.modules.length || "core"} modules.`,
  };
}

export const erpModuleOptions = Object.keys(MODULE_REQUIREMENTS);
export const erpIntegrationOptions = ["Tally", "GST Portal", "WhatsApp API", "E-commerce", "Barcode Hardware", "Bank Feeds"];
