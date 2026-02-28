"use client";

import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
  allLabel?: string;
}

export function CategoryFilter({ categories, activeCategory, onSelect, allLabel = "All" }: CategoryFilterProps) {
  const all = [allLabel, ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {all.map((category) => (
        <Button
          key={category}
          type="button"
          size="sm"
          variant={activeCategory === category ? "default" : "outline"}
          className="rounded-full"
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
