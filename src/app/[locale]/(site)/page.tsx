import Link from "next/link";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog/posts";
import { PostCard } from "@/components/blog/post-card";
import { SiteHero } from "@/components/layout/site-hero";
import { isLocale, messages } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uz";
  const t = messages[safeLocale];

  const [featuredPosts, allPosts] = await Promise.all([getFeaturedPosts(), getAllPosts()]);
  const recentPosts = allPosts.slice(0, 6);

  return (
    <div className="space-y-14">
      <SiteHero
        badge={t.home.badge}
        title={t.home.title}
        description={t.home.description}
        ctaLabel={t.home.readArticles}
        ctaHref={`/${safeLocale}/blog`}
      />
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">{t.home.featured}</h2>
          <Link href={`/${safeLocale}/blog`} className="text-sm text-primary hover:underline">{t.home.viewAll}</Link>
        </div>
        {featuredPosts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
            {t.blog.empty}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredPosts.map((post) => <PostCard key={post.slug} post={post} featured locale={safeLocale} />)}
          </div>
        )}
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">{t.home.recent}</h2>
        {recentPosts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
            {t.blog.empty}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {recentPosts.map((post) => <PostCard key={post.slug} post={post} locale={safeLocale} />)}
          </div>
        )}
      </section>
    </div>
  );
}
