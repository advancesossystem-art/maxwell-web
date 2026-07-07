import dynamic from "next/dynamic";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const ErpRoiCalculatorTool = dynamic(() =>
  import("@/components/tools/implementations/ErpRoiCalculatorTool").then((m) => ({ default: m.ErpRoiCalculatorTool })),
);
import { ToolRouteShell } from "@/components/tools/ToolRouteShell";
import { buildPageMetadata } from "@/lib/seo-helpers";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("erp-roi-calculator")!;

export const metadata = buildPageMetadata({
  title: "ERP ROI Calculator India 2026 — Free, No Signup | 4 Min",
  description:
    "Free ERP ROI calculator for Indian manufacturers: payback period, inventory savings & 5-year ROI. See if ERP pays off before you buy. Get numbers in 4 minutes — no signup.",
  path: `/tools/${tool.slug}`,
  keywords: [...tool.tags, "erp roi calculator india", "erp return on investment india", "erp payback period", "is erp worth it india"],
  absoluteTitle: true,
});

export default function Page() {
  return (
    <ToolRouteShell slug="erp-roi-calculator">
      {/* Intro section — adds keyword depth for positions 30–50 */}
      <section className="border-b border-border bg-white py-14">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-[var(--v6-text)] mb-4">
              How to Calculate ERP ROI for Indian Manufacturers
            </h2>
            <p className="text-[var(--v6-text-secondary)] leading-relaxed mb-4">
              The ERP ROI calculator India tool below uses 5 proven factors to estimate your payback period. Here&apos;s what drives the numbers for Indian SME manufacturers:
            </p>
            <ol className="space-y-3 text-[var(--v6-text-secondary)] mb-6">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 shrink-0">1.</span>
                <span><strong>Current manual process cost</strong> — labour hours multiplied by daily wage rate. Indian manufacturing teams often spend 4–6 hours per day on data entry that ERP eliminates.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 shrink-0">2.</span>
                <span><strong>Inventory carrying cost reduction</strong> — ERP typically delivers 15–25% inventory reduction by eliminating overstocking and dead stock from poor visibility.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 shrink-0">3.</span>
                <span><strong>Order processing speed improvement</strong> — ERP-enabled teams process orders 2–5× faster, directly increasing throughput and customer satisfaction.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 shrink-0">4.</span>
                <span><strong>Error rate reduction</strong> — manual data entry errors cost 1–3% of revenue across invoicing, stock counts, and production records.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 shrink-0">5.</span>
                <span><strong>Reporting time saved</strong> — finance teams in Indian manufacturing companies typically spend 30–40% of their time on Excel-based MIS reports that ERP automates.</span>
              </li>
            </ol>
            <p className="text-[var(--v6-text-secondary)] leading-relaxed mb-4">
              Typical ERP return on investment India timeline for an SME manufacturer: <strong>18–30 months to full payback</strong>. Maxwell Electrodeal clients average 2.2× ROI in year 1 after go-live, once production, inventory, and billing are unified.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/services/erp-development" className="text-blue-600 hover:underline font-medium">
                → ERP Development Services India
              </Link>
              <Link href="/solutions/erp-development-company-vadodara" className="text-blue-600 hover:underline font-medium">
                → ERP Development Company Vadodara
              </Link>
              <Link href="/compare/best-erp-for-fmcg" className="text-blue-600 hover:underline font-medium">
                → Best ERP for FMCG India 2026
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <ErpRoiCalculatorTool />
    </ToolRouteShell>
  );
}
