import type { TocItem } from "@/types/blog";

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-xl border border-border p-4">
      <p className="mb-3 text-sm font-medium">Table of contents</p>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
            <a href={`#${item.id}`} className="hover:text-foreground">{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
