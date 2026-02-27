"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <Card className="h-full border-border/70 shadow-sm transition-shadow hover:shadow-md">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>{new Date(post.meta.date).toLocaleDateString()}</span>
            <span>{post.readingTime}</span>
          </div>
          <Badge variant="secondary" className="w-fit">{post.meta.category}</Badge>
          <CardTitle className={featured ? "text-2xl" : "text-xl"}>
            <Link href={`/blog/${post.slug}`} className="hover:text-primary">{post.meta.title}</Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">{post.meta.description}</p>
        </CardContent>
      </Card>
    </motion.article>
  );
}
