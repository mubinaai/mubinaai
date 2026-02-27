import matter from "gray-matter";
import { cache } from "react";
import { listPostFiles, loadPostSourceBySlug } from "@/lib/mdx/loader";
import { calculateReadingTime } from "@/lib/mdx/reading-time";
import { extractToc } from "@/lib/mdx/toc";
import type { BlogPost, BlogPostMeta } from "@/types/blog";

async function readPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const source = await loadPostSourceBySlug(slug);
    const parsed = matter(source);
    const meta = parsed.data as BlogPostMeta;

    if (meta.draft) return null;

    return {
      slug,
      meta,
      content: parsed.content,
      source: parsed.content,
      readingTime: calculateReadingTime(parsed.content),
      toc: extractToc(parsed.content),
    };
  } catch {
    return null;
  }
}

export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  const files = await listPostFiles();
  const slugs = files.map((file) => file.replace(/\.mdx$/, ""));
  const posts = await Promise.all(slugs.map((slug) => readPostBySlug(slug)));

  return posts
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
});

export async function getAllPostSlugs() {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getFeaturedPosts() {
  const posts = await getAllPosts();
  const featured = posts.filter((post) => post.meta.featured);
  return featured.length > 0 ? featured.slice(0, 3) : posts.slice(0, 3);
}

export async function getAllCategories() {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((post) => post.meta.category))).sort();
}
