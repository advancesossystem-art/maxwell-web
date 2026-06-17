import { ImageResponse } from "next/og";
import { getServiceBySlug, serviceSlugs } from "@/lib/services-data";
import { siteConfig } from "@/lib/constants";

export const alt = "Maxwell Electrodeal service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceOpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const title = service?.title ?? "Software Development";
  const subtitle = service?.headline ?? siteConfig.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0f2744 0%, #1A4B8C 50%, #2563EB 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.85, letterSpacing: 3, textTransform: "uppercase" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 32, marginTop: 20, opacity: 0.9, maxWidth: 900 }}>{subtitle}</div>
      </div>
    ),
    { ...size },
  );
}
