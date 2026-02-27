import type { TocItem } from "@/types/blog";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Lightweight TOC extraction for markdown headings before MDX compilation.
export function extractToc(content: string): TocItem[] {
  const lines = content.split("\n");

  return lines
    .map((line) => {
      const match = /^(##|###)\s+(.+)$/u.exec(line.trim());
      if (!match) return null;
      const level = match[1] === "##" ? 2 : 3;
      const text = match[2].replace(/[#*_`]/g, "").trim();
      return { level, text, id: slugify(text) } as TocItem;
    })
    .filter((item): item is TocItem => Boolean(item));
}
