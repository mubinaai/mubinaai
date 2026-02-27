import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="container-width flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>(c) {new Date().getFullYear()} AI Blog</p>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-foreground">About</Link>
          <Link href="/blog" className="hover:text-foreground">Blog</Link>
        </div>
      </div>
    </footer>
  );
}
