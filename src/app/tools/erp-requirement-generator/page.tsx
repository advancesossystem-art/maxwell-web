import dynamic from "next/dynamic";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const ErpRequirementGeneratorTool = dynamic(() =>
  import("@/components/tools/implementations/ErpRequirementGeneratorTool").then((m) => ({ default: m.ErpRequirementGeneratorTool })),
);

const tool = getToolBySlug("erp-requirement-generator")!;

export const metadata = buildPageMetadata({
  title: `${tool.name} — ERP RFP & Module Spec`,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return <ErpRequirementGeneratorTool />;
}
