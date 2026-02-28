import { cache } from "react";
import type { BlogPost } from "@/types/blog";

export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  return [];
});

export async function getAllPostSlugs() {
  return [] as string[];
}

export async function getPostBySlug(slug: string) {
  void slug;
  return null as BlogPost | null;
}

export async function getFeaturedPosts() {
  return [] as BlogPost[];
}

export async function getAllCategories() {
  return [] as string[];
}
