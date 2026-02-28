"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/types/blog";
import { filterPosts } from "@/lib/blog/filters";
import { paginatePosts } from "@/lib/blog/pagination";
import { CategoryFilter } from "@/components/blog/category-filter";
import { PaginationControls } from "@/components/blog/pagination-controls";
import { PostCard } from "@/components/blog/post-card";
import { SearchInput } from "@/components/blog/search-input";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n";

interface BlogListClientProps {
  initialPosts: BlogPost[];
  categories: string[];
  locale?: Locale;
  emptyMessage?: string;
  noMatchMessage?: string;
  searchPlaceholder?: string;
  allCategoryLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  pageOfTemplate?: string;
}

const PAGE_SIZE = 9;

export function BlogListClient({
  initialPosts,
  categories,
  locale = "uz",
  emptyMessage = "No posts yet. New posts will be added soon.",
  noMatchMessage = "No articles match your search.",
  searchPlaceholder = "Search articles...",
  allCategoryLabel = "All",
  previousLabel = "Previous",
  nextLabel = "Next",
  pageOfTemplate = "Page {page} of {total}",
}: BlogListClientProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(allCategoryLabel);
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(() => filterPosts(initialPosts, query, category), [initialPosts, query, category]);
  const paginated = useMemo(() => paginatePosts(filteredPosts, page, PAGE_SIZE), [filteredPosts, page]);

  if (initialPosts.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-border/70">
        <CardContent className="space-y-4 p-4">
          <SearchInput
            value={query}
            placeholder={searchPlaceholder}
            onChange={(value) => {
              setQuery(value);
              setPage(1);
            }}
          />
          <CategoryFilter
            categories={categories}
            activeCategory={category}
            allLabel={allCategoryLabel}
            onSelect={(value) => {
              setCategory(value);
              setPage(1);
            }}
          />
        </CardContent>
      </Card>

      {paginated.items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">{noMatchMessage}</div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {paginated.items.map((post) => <PostCard key={post.slug} post={post} locale={locale} />)}
        </div>
      )}

      <PaginationControls
        page={paginated.page}
        totalPages={paginated.totalPages}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        pageOfTemplate={pageOfTemplate}
        onPageChange={setPage}
      />
    </div>
  );
}
