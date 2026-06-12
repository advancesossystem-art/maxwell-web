import Link from "next/link";
import { hasVideoLibrary, videoLibrary } from "@/lib/video-library-data";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Video Library — ERP, CRM & Project Walkthroughs",
  description:
    "Maxwell video library for ERP explainers, CRM guides, project walkthroughs, and founder insights — published when embeddable recordings are available.",
  path: "/videos",
  keywords: ["ERP explainer video", "CRM tutorial", "software project walkthrough"],
});

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Video library"
        title="ERP, CRM & project walkthroughs"
        description="Video explainers and walkthroughs will appear here as Maxwell publishes embeddable recordings. Written guides and answers are available now."
      />
      <PageSection>
        {hasVideoLibrary() ? (
          <div className="grid gap-8 md:grid-cols-2">
            {videoLibrary
              .filter((v) => v.embedUrl)
              .map((video) => (
                <div key={video.id} className="rounded-xl border border-border overflow-hidden">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="aspect-video w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="p-4">
                    <h2 className="font-display font-semibold">{video.title}</h2>
                    <p className="mt-2 text-sm text-muted">{video.description}</p>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-surface-elevated p-8 text-center">
            <p className="text-muted">
              No public videos are embedded yet. Explore the{" "}
              <Link href="/knowledge-center" className="text-brand-600 hover:text-brand-500">
                Knowledge Center
              </Link>
              ,{" "}
              <Link href="/answers" className="text-brand-600 hover:text-brand-500">
                Maxwell Answers
              </Link>
              , and{" "}
              <Link href="/project-gallery" className="text-brand-600 hover:text-brand-500">
                Project Gallery
              </Link>{" "}
              for written authority content and visual project proof.
            </p>
          </div>
        )}
      </PageSection>
    </>
  );
}
