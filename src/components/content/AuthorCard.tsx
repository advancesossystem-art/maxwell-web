import type { Author } from "@/lib/content/authors";
import { Card } from "@/components/design/Card";
import { H3, Caption } from "@/components/design/typography";

export function AuthorCard({ author, variant = "inline" }: { author: Author; variant?: "inline" | "full" }) {
  void author;

  if (variant === "inline") {
    return (
      <Card padding="md" className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
          ME
        </div>
        <div>
          <H3 className="text-base">Maxwell Electrodeal</H3>
          <Caption>Editorial standards & delivery experience</Caption>
        </div>
      </Card>
    );
  }

  return (
    <Card interactive={false} padding="lg">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
          ME
        </div>
        <div>
          <H3>Maxwell Electrodeal</H3>
          <Caption className="text-brand-500">Company perspective</Caption>
          <Caption className="mt-1">ERP, CRM, AI, SaaS & custom software</Caption>
          <Caption className="mt-3 leading-relaxed">
            This content reflects Maxwell delivery patterns, implementation experience, and ongoing research across
            enterprise software, automation, and digital transformation projects.
          </Caption>
          <Caption className="mt-2 text-sm">
            <span className="font-medium text-[var(--v6-text)]">Coverage:</span> ERP, CRM, AI, cloud, web, mobile,
            and digital transformation.
          </Caption>
          <div className="mt-4 flex flex-wrap gap-2">
            {["ERP", "CRM", "AI", "Cloud", "Web", "Mobile"].map((e) => (
              <span key={e} className="v6-chip">
                {e}
              </span>
            ))}
          </div>
          <Caption className="mt-4">Published guidance, reports, resources, and implementation insights.</Caption>
        </div>
      </div>
    </Card>
  );
}
