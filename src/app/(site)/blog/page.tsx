import type { Metadata } from "next";
import { BlogListClient } from "@/components/blog/blog-list-client";
import { getAllPosts, getAllCategories } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore AI, machine learning, and IT engineering articles.",
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getAllPosts(), getAllCategories()]);
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
        <p className="max-w-2xl text-muted-foreground">Search, filter, and read practical articles on AI, ML, and modern IT.</p>
      </div>
      <BlogListClient initialPosts={posts} categories={categories} />
    </section>
  );
}
