import type { BlogPost } from "@/types/blog";
import { formatPostDate } from "@/lib/date";
import type { Locale } from "@/lib/i18n";

interface PostMetaProps {
  post: BlogPost;
  locale?: Locale;
}

export function PostMeta({ post, locale = "uz" }: PostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
      <span>{formatPostDate(post.meta.date, locale)}</span>
      <span>-</span>
      <span>{post.readingTime}</span>
      <span>-</span>
      <span>{post.meta.category}</span>
      <span>-</span>
      <span>{post.meta.author}</span>
    </div>
  );
}
