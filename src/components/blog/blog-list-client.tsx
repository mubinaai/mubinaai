"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/types/blog";
import { filterPosts } from "@/lib/blog/filters";
import { paginatePosts } from "@/lib/blog/pagination";
import { CategoryFilter } from "@/components/blog/category-filter";
import { PaginationControls } from "@/components/blog/pagination-controls";
import { PostCard } from "@/components/blog/post-card";
import { SearchInput } from "@/components/blog/search-input";

interface BlogListClientProps {
  initialPosts: BlogPost[];
  categories: string[];
}

const PAGE_SIZE = 9;

export function BlogListClient({ initialPosts, categories }: BlogListClientProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(() => filterPosts(initialPosts, query, category), [initialPosts, query, category]);
  const paginated = useMemo(() => paginatePosts(filteredPosts, page, PAGE_SIZE), [filteredPosts, page]);

  return (
    <div className="space-y-6">
      <div className="space-y-4 rounded-xl border border-border/70 bg-card p-4">
        <SearchInput value={query} onChange={(value) => { setQuery(value); setPage(1); }} />
        <CategoryFilter categories={categories} activeCategory={category} onSelect={(value) => { setCategory(value); setPage(1); }} />
      </div>

      {paginated.items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">No articles match your search.</div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {paginated.items.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      )}

      <PaginationControls page={paginated.page} totalPages={paginated.totalPages} onPageChange={setPage} />
    </div>
  );
}
