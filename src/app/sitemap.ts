import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const now = new Date();
  const slugs = await getAllPostSlugs();

  return ["", "/blog", "/about", ...slugs.map((slug) => `/blog/${slug}`)].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }));
}
