import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Maxwell",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A1628",
    theme_color: "#1A4B8C",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/logo-mark.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
