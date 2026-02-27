"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelect }: CategoryFilterProps) {
  const all = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {all.map((category) => (
        <button
          key={category}
          type="button"
          className={cn(
            "rounded-full border px-3 py-1.5 text-sm transition-colors",
            activeCategory === category
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:text-foreground",
          )}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
