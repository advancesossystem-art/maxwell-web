import { PageHero } from "@/components/design/PageHero";
import { CompanyBreadcrumb } from "@/components/company/CompanyCTA";

type CompanyPageHeroProps = {
  breadcrumb: { label: string; href?: string }[];
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  below?: React.ReactNode;
  children?: React.ReactNode;
  compact?: boolean;
};

export function CompanyPageHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  below,
  children,
  compact = true,
}: CompanyPageHeroProps) {
  return (
    <PageHero
      compact={compact}
      prepend={
        <CompanyBreadcrumb
          items={breadcrumb}
          className="mb-3 flex flex-wrap items-center gap-2 text-sm text-[var(--v6-text-muted)]"
        />
      }
      eyebrow={eyebrow}
      title={title}
      description={description}
      below={below}
    >
      {children}
    </PageHero>
  );
}
