import type { Metadata } from "next";
import { BlogListClient } from "@/components/blog/blog-list-client";
import { getAllPosts, getAllCategories } from "@/lib/blog/posts";
import { isLocale, messages } from "@/lib/i18n";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uz";
  const t = messages[safeLocale];

  return {
    title: t.blog.title,
    description: t.blog.description,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uz";
  const t = messages[safeLocale];

  const [posts, categories] = await Promise.all([getAllPosts(), getAllCategories()]);

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">{t.blog.title}</h1>
        <p className="max-w-2xl text-muted-foreground">{t.blog.description}</p>
      </div>
      <BlogListClient
        locale={safeLocale}
        initialPosts={posts}
        categories={categories}
        emptyMessage={t.blog.empty}
        noMatchMessage={t.blog.noMatch}
        searchPlaceholder={t.blog.searchPlaceholder}
        allCategoryLabel={t.blog.allCategory}
        previousLabel={t.blog.previous}
        nextLabel={t.blog.next}
        pageOfTemplate={t.blog.pageOf}
      />
    </section>
  );
}
