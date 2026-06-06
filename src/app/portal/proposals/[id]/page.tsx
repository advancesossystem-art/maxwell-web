import { PortalProposalDetail } from "@/components/portal/PortalProposalDetail";
import { mockProposals } from "@/lib/portal/mock-data";
import { buildPageMetadata } from "@/lib/seo-helpers";

export function generateStaticParams() {
  return mockProposals.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const proposal = mockProposals.find((p) => p.id === id);
    return buildPageMetadata({
      title: proposal ? `${proposal.title} — Proposal` : "Proposal",
      description: proposal?.summary ?? "View proposal details",
      path: `/portal/proposals/${id}`,
      noIndex: true,
    });
  });
}

export default async function PortalProposalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <PortalProposalDetail proposalId={id} />;
}
