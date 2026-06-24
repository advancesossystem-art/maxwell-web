import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { PageSection, SectionHeader } from "@/components/design/PageSection";

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function CodeBracketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

const columns = [
  {
    title: "How We Protect Client Privacy",
    Icon: ShieldIcon,
    text: "All case studies are published with client permission. Business metrics are shared with client approval. Client names are disclosed only when explicitly authorized.",
  },
  {
    title: "What \"Custom\" Actually Means",
    Icon: CodeBracketIcon,
    text: "Every system we ship is built from scratch for that specific business. No templates. No white-labeled products. You own the source code.",
  },
  {
    title: "Want to See More Detail?",
    Icon: ChatIcon,
    text: "We share full technical walkthroughs, architecture diagrams, and live demos on consultation calls.",
    cta: true,
  },
] as const;

export function CaseStudyBehindTheWork() {
  return (
    <PageSection tone="elevated" aria-label="Behind the work">
      <SectionHeader
        title="Behind the Work"
        description="How we document delivery outcomes while respecting client confidentiality."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {columns.map((col) => (
          <div key={col.title} className="v6-card flex flex-col p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4f46e5]/10 text-[#4f46e5]">
              <col.Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-[var(--v6-text)]">{col.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{col.text}</p>
            {"cta" in col && col.cta ? (
              <Button
                href="/book-consultation?source=case-studies-trust"
                variant="secondary"
                size="md"
                className="mt-6 w-full sm:w-auto"
              >
                Book a 30-min walkthrough <ArrowRight />
              </Button>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-[var(--v6-text-secondary)]">
        Looking for technical details?{" "}
        <Link href="/work" className="font-medium text-[#4f46e5] hover:underline">
          See the technical portfolio →
        </Link>
      </p>
    </PageSection>
  );
}
