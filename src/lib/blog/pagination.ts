import type { BlogPost, PaginatedPostsResult } from "@/types/blog";

export function paginatePosts(posts: BlogPost[], page: number, pageSize: number): PaginatedPostsResult {
  const totalItems = posts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    items: posts.slice(start, start + pageSize),
    page: currentPage,
    pageSize,
    totalItems,
    totalPages,
  };
}
