import type { BlogPost } from "@/types/blog";
import { formatPostDate } from "@/lib/date";

export function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
      <span>{formatPostDate(post.meta.date)}</span>
      <span>-</span>
      <span>{post.readingTime}</span>
      <span>-</span>
      <span>{post.meta.category}</span>
      <span>-</span>
      <span>{post.meta.author}</span>
    </div>
  );
}
