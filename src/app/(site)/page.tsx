import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog/posts";
import { PostCard } from "@/components/blog/post-card";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const [featuredPosts, allPosts] = await Promise.all([getFeaturedPosts(), getAllPosts()]);
  const recentPosts = allPosts.slice(0, 6);

  return (
    <div className="space-y-14">
      <section className="rounded-2xl border border-border/70 bg-gradient-to-b from-muted/40 to-transparent p-8 shadow-sm sm:p-12">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-medium tracking-wide text-primary">AI BLOG</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Practical AI, machine learning, and IT insights.</h1>
          <p className="text-lg leading-8 text-muted-foreground">Clear and actionable articles for engineers, builders, and tech teams working with modern AI systems.</p>
          <Button asChild size="lg" className="rounded-xl">
            <Link href="/blog">Read Articles <ArrowRight className="ml-2 size-4" /></Link>
          </Button>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Posts</h2>
          <Link href="/blog" className="text-sm text-primary hover:underline">View all</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredPosts.map((post) => <PostCard key={post.slug} post={post} featured />)}
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Recent Posts</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {recentPosts.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </section>
    </div>
  );
}
