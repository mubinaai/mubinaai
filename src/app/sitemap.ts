import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog/posts";
import { locales } from "@/lib/i18n";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const now = new Date();
  const slugs = await getAllPostSlugs();

  return locales.flatMap((locale) =>
    ["", "/blog", "/about", ...slugs.map((slug) => `/blog/${slug}`)].map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: now,
    })),
  );
}
