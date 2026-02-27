import type { BlogPost, SearchDocument } from "@/types/blog";

export function buildSearchIndex(posts: BlogPost[]): SearchDocument[] {
  return posts.map((post) => ({
    slug: post.slug,
    title: post.meta.title,
    description: post.meta.description,
    category: post.meta.category,
    tags: post.meta.tags,
  }));
}

export function searchPosts(query: string, docs: SearchDocument[]) {
  const term = query.trim().toLowerCase();
  if (!term) return docs;

  return docs.filter((doc) => {
    const haystack = [doc.title, doc.description, doc.category, ...doc.tags].join(" ").toLowerCase();
    return haystack.includes(term);
  });
}
