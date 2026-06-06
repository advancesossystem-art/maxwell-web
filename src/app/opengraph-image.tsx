import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div style={{ fontSize: 28, opacity: 0.85, letterSpacing: 4, textTransform: "uppercase" }}>
          Enterprise Software
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 36, marginTop: 24, opacity: 0.9 }}>{siteConfig.tagline}</div>
      </div>
    ),
    { ...size },
  );
}
