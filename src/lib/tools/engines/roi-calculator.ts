import { formatINR } from "../format";

export interface RoiInput {
  monthlyProcessCost: number;
  employeeCount: number;
  hoursPerWeekManual: number;
  errorRatePercent: number;
  automationReductionPercent: number;
}

export interface RoiResult {
  annualCurrentCost: number;
  annualSavings: number;
  productivityGainHours: number;
  errorReductionValue: number;
  totalAnnualBenefit: number;
  estimatedProjectCost: number;
  roiPercent: number;
  paybackMonths: number;
  fiveYearValue: number;
  summary: string;
}

export function calculateRoi(input: RoiInput): RoiResult {
  const annualCurrentCost = input.monthlyProcessCost * 12;
  const laborSavings = input.employeeCount * input.hoursPerWeekManual * 52 * 500 * (input.automationReductionPercent / 100);
  const automationSavings = annualCurrentCost * (input.automationReductionPercent / 100) * 0.6;
  const errorReductionValue = annualCurrentCost * (input.errorRatePercent / 100) * 0.4;
  const totalAnnualBenefit = Math.round(laborSavings + automationSavings + errorReductionValue);
  const productivityGainHours = Math.round(input.employeeCount * input.hoursPerWeekManual * 52 * (input.automationReductionPercent / 100));

  const estimatedProjectCost = Math.max(500000, Math.min(annualCurrentCost * 0.8, 5000000));
  const roiPercent = Math.round((totalAnnualBenefit / estimatedProjectCost) * 100);
  const paybackMonths = totalAnnualBenefit > 0 ? Math.max(1, Math.round((estimatedProjectCost / totalAnnualBenefit) * 12)) : 24;
  const fiveYearValue = totalAnnualBenefit * 5 - estimatedProjectCost;

  return {
    annualCurrentCost,
    annualSavings: Math.round(automationSavings + laborSavings),
    productivityGainHours,
    errorReductionValue: Math.round(errorReductionValue),
    totalAnnualBenefit,
    estimatedProjectCost,
    roiPercent,
    paybackMonths,
    fiveYearValue,
    summary: `Automating ${input.automationReductionPercent}% of manual work for ${input.employeeCount} employees could save ${formatINR(totalAnnualBenefit)}/year with ~${paybackMonths} month payback on a ${formatINR(estimatedProjectCost)} investment.`,
  };
}
