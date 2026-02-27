import type { BlogPost } from "@/types/blog";

export function filterPosts(posts: BlogPost[], query: string, category: string) {
  const term = query.trim().toLowerCase();

  return posts.filter((post) => {
    const matchesCategory = category === "All" || post.meta.category === category;
    if (!matchesCategory) return false;
    if (!term) return true;

    const haystack = [post.meta.title, post.meta.description, post.meta.category, ...post.meta.tags]
      .join(" ")
      .toLowerCase();

    return haystack.includes(term);
  });
}
