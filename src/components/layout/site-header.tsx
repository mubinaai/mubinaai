"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

const ThemeToggle = dynamic(() => import("@/components/layout/theme-toggle").then((mod) => mod.ThemeToggle), {
  ssr: false,
});

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-width flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image src="/star-icon.png" alt="Mubinaai logo" width={24} height={24} className="size-6 rounded-sm" />
          Mubinaai
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === link.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
