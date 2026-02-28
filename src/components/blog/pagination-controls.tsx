"use client";

import { Button } from "@/components/ui/button";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  previousLabel?: string;
  nextLabel?: string;
  pageOfTemplate?: string;
}

export function PaginationControls({
  page,
  totalPages,
  onPageChange,
  previousLabel = "Previous",
  nextLabel = "Next",
  pageOfTemplate = "Page {page} of {total}",
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  const pageText = pageOfTemplate
    .replace("{page}", String(page))
    .replace("{total}", String(totalPages));

  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant="outline" disabled={page === 1} onClick={() => onPageChange(page - 1)}>{previousLabel}</Button>
      <span className="text-sm text-muted-foreground">{pageText}</span>
      <Button variant="outline" disabled={page === totalPages} onClick={() => onPageChange(page + 1)}>{nextLabel}</Button>
    </div>
  );
}
