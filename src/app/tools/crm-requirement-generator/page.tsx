import dynamic from "next/dynamic";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const CrmRequirementGeneratorTool = dynamic(() =>
  import("@/components/tools/implementations/CrmRequirementGeneratorTool").then((m) => ({ default: m.CrmRequirementGeneratorTool })),
);

const tool = getToolBySlug("crm-requirement-generator")!;

export const metadata = buildPageMetadata({
  title: `${tool.name} — CRM Pipeline & Automation Spec`,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.tags,
});

export default function Page() {
  return <CrmRequirementGeneratorTool />;
}
