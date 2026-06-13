import { ToolPageJsonLd } from "@/components/seo/JsonLd";
import { getToolBySlug } from "@/lib/tools/registry";

export function ToolRouteShell({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const tool = getToolBySlug(slug);
  return (
    <>
      {tool ? <ToolPageJsonLd tool={tool} /> : null}
      {children}
    </>
  );
}
