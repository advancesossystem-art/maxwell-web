"use client";

import { RoiCalculatorView } from "@/components/tools/RoiCalculatorView";

export function RoiCalculatorTool() {
  return (
    <RoiCalculatorView
      config={{
        slug: "roi-calculator",
        formTitle: "Model automation ROI for your process",
        formDescription:
          "Quantify savings from reducing manual work, errors, and rework. Adjust the sliders to see payback period and 5-year value instantly.",
        resultsTitle: "ROI analysis",
        benefitLabel: "Annual benefit",
        roiLabel: "ROI (Year 1)",
        investmentLabel: "Indicative project investment",
        investmentSub: "For planning purposes",
        submitLabel: "Calculate ROI",
        defaults: {
          monthlyProcessCost: 500000,
          employeeCount: 25,
          hoursPerWeekManual: 8,
          errorRatePercent: 5,
          automationReductionPercent: 40,
        },
        fields: {
          cost: {
            label: "Monthly process cost (₹)",
            hint: "Total monthly cost of the process you want to automate.",
          },
          employees: {
            label: "Employees in process",
            hint: "Headcount performing manual steps today.",
          },
          hours: {
            label: "Manual hours / employee / week",
            hint: "Data entry, approvals, reporting, reconciliation.",
          },
          errors: {
            label: "Error rate (%)",
            hint: "Rework, delays, or cost of mistakes in this process.",
          },
          automation: {
            label: "Automation reduction target",
            hint: "Share of manual work you expect software to eliminate.",
          },
        },
      }}
    />
  );
}
