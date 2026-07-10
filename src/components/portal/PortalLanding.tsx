import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Card } from "@/components/design/Card";
import { DemoEnvironmentBadge, DemoDataNotice } from "@/components/portal/PortalDemo";
import { isPortalDemoEnabled } from "@/lib/portal/auth";
import { Eyebrow, H1, Lead, H3 } from "@/components/design/typography";

export function PortalLanding() {
  const showDemoCredentials = isPortalDemoEnabled();
  return (
    <div className="min-h-screen bg-[#030712]">
      <Container className="relative py-24 lg:py-32">
        <div className="mb-12 flex justify-center">
          <BrandLogo size="lg" href="/" priority />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <DemoEnvironmentBadge />
          </div>
          <Eyebrow>Client Portal</Eyebrow>
          <H1 className="mx-auto text-center">
            Your projects. <span className="text-brand-500">One professional hub.</span>
          </H1>
          <Lead className="mx-auto text-center text-[#94A3B8]">
            Review proposals, track milestones, access documents, manage support, and stay aligned with {siteConfig.name}.
          </Lead>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/portal/login" size="lg">Sign in</Button>
            <Button href="/contact" size="lg" variant="outline">
              Request access
            </Button>
          </div>
          <div className="mx-auto mt-10 max-w-xl text-left">
            <DemoDataNotice compact />
          </div>
          {showDemoCredentials && (
            <p className="mt-6 text-sm text-[#94A3B8]">
              Demo sign-in: client@demo.com / demo123 · Invite:{" "}
              <code className="text-brand-400">maxwell-invite-demo</code>
            </p>
          )}
        </div>
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Proposals", desc: "Review, approve, download" },
            { title: "Projects", desc: "Timeline, milestones, health" },
            { title: "Documents", desc: "Contracts, reports, invoices" },
            { title: "Support", desc: "Tickets with SLA tracking" },
          ].map((f) => (
            <Card key={f.title} interactive={false}>
              <H3>{f.title}</H3>
              <p className="mt-2 text-sm text-[#94A3B8]">{f.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
