import type { Metadata } from "next";
import type { BlogPost } from "@/types/blog";

export function createPostMetadata(post: BlogPost): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.meta.title,
      description: post.meta.description,
      publishedTime: post.meta.date,
      tags: post.meta.tags,
      images: [{ url: "/og/default-og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
      images: ["/og/default-og.png"],
    },
  };
}
