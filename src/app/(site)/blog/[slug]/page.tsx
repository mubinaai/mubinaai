import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { AuthorBox } from "@/components/blog/author-box";
import { PostMeta } from "@/components/blog/post-meta";
import { ShareButtons } from "@/components/blog/share-buttons";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { mdxComponents } from "@/components/mdx-components";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog/posts";
import { mdxRemoteOptions } from "@/lib/mdx/serialize";
import { createPostMetadata } from "@/lib/seo/metadata";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return createPostMetadata(post);
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_260px]">
      <article className="space-y-8">
        <header className="space-y-4 border-b border-border pb-8">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{post.meta.title}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">{post.meta.description}</p>
          <PostMeta post={post} />
        </header>

        <div className="prose prose-slate dark:prose-invert">
          <MDXRemote source={post.source} components={mdxComponents} options={mdxRemoteOptions} />
        </div>

        <div className="space-y-6 border-t border-border pt-8">
          <ShareButtons title={post.meta.title} url={`${process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"}/blog/${post.slug}`} />
          <AuthorBox author={post.meta.author} />
        </div>
      </article>

      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <TableOfContents items={post.toc} />
        </div>
      </aside>
    </div>
  );
}
