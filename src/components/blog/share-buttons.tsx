"use client";

import { Facebook, Linkedin, Link2, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  title: string;
  url: string;
  heading?: string;
  copyLinkLabel?: string;
}

export function ShareButtons({
  title,
  url,
  heading = "Share this article",
  copyLinkLabel = "Copy link",
}: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">{heading}</p>
      <div className="flex flex-wrap gap-2">
        <Button asChild variant="outline" size="sm"><a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noreferrer"><Twitter className="mr-1 size-4" /> X</a></Button>
        <Button asChild variant="outline" size="sm"><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer"><Linkedin className="mr-1 size-4" /> LinkedIn</a></Button>
        <Button asChild variant="outline" size="sm"><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer"><Facebook className="mr-1 size-4" /> Facebook</a></Button>
        <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(url)}><Link2 className="mr-1 size-4" /> {copyLinkLabel}</Button>
      </div>
    </div>
  );
}
