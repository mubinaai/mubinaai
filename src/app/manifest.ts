import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mubinaai",
    short_name: "Mubinaai",
    description: "AI, Machine Learning, and IT engineering insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#2563eb",
    icons: [{ src: "/star-icon.png", type: "image/png" }],
  };
}
