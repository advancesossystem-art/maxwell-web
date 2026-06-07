"use client";

import { RoiCalculatorView } from "@/components/tools/RoiCalculatorView";

export function CrmRoiCalculatorTool() {
  return (
    <RoiCalculatorView
      config={{
        slug: "crm-roi-calculator",
        formTitle: "Model your CRM return on investment",
        formDescription:
          "Enter your sales team costs and manual workload. We'll estimate annual benefit, payback period, and 5-year value from pipeline visibility and faster follow-ups.",
        resultsTitle: "CRM ROI analysis",
        benefitLabel: "Annual CRM benefit",
        roiLabel: "CRM ROI (Year 1)",
        submitLabel: "Calculate CRM ROI",
        defaults: {
          monthlyProcessCost: 400000,
          employeeCount: 15,
          hoursPerWeekManual: 10,
          errorRatePercent: 12,
          automationReductionPercent: 35,
        },
        fields: {
          cost: {
            label: "Monthly sales ops cost (₹)",
            hint: "Include salaries, tools, and overhead for sales operations.",
          },
          employees: {
            label: "Sales team size",
            hint: "Reps, managers, and sales ops staff in the process.",
          },
          hours: {
            label: "Manual admin hours / person / week",
            hint: "CRM data entry, follow-up logging, report building.",
          },
          errors: {
            label: "Lost-lead / error rate (%)",
            hint: "Leads dropped, duplicate entries, or missed follow-ups.",
          },
          automation: {
            label: "Expected CRM efficiency gain",
            hint: "Typical CRM deployments recover 25–45% of manual sales admin.",
          },
        },
      }}
    />
  );
}
