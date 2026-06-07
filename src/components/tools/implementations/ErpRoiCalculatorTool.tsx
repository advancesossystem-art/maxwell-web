"use client";

import { RoiCalculatorView } from "@/components/tools/RoiCalculatorView";

export function ErpRoiCalculatorTool() {
  return (
    <RoiCalculatorView
      config={{
        slug: "erp-roi-calculator",
        formTitle: "Model your ERP return on investment",
        formDescription:
          "Enter operations and finance team costs. We'll estimate inventory savings, automation benefit, payback, and 5-year ROI for a custom ERP deployment.",
        resultsTitle: "ERP ROI analysis",
        benefitLabel: "Annual ERP benefit",
        roiLabel: "ERP ROI (Year 1)",
        investmentLabel: "Indicative ERP investment",
        investmentSub: "Custom ERP — planning estimate",
        submitLabel: "Calculate ERP ROI",
        defaults: {
          monthlyProcessCost: 800000,
          employeeCount: 40,
          hoursPerWeekManual: 12,
          errorRatePercent: 8,
          automationReductionPercent: 45,
        },
        fields: {
          cost: {
            label: "Monthly operations cost (₹)",
            hint: "Production, inventory, finance, and procurement overhead.",
          },
          employees: {
            label: "Staff in operations / finance",
            hint: "People involved in manual ERP-related processes.",
          },
          hours: {
            label: "Manual hours / person / week",
            hint: "Spreadsheets, stock updates, order reconciliation.",
          },
          errors: {
            label: "Inventory / order error rate (%)",
            hint: "Stock mismatches, delayed orders, rework from bad data.",
          },
          automation: {
            label: "Expected ERP automation gain",
            hint: "Manufacturing SMEs typically automate 30–50% of manual ops.",
          },
        },
      }}
    />
  );
}
