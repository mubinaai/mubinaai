"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteLogo } from "@/components/layout/site-logo";
import { messages, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ThemeToggle = dynamic(
  () =>
    import("@/components/layout/theme-toggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
  },
);

interface SiteHeaderProps {
  locale?: Locale;
}

export function SiteHeader({ locale = "uz" }: SiteHeaderProps) {
  const pathname = usePathname();
  const t = messages[locale];
  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/blog`, label: t.nav.blog },
    { href: `/${locale}/about`, label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-width flex h-16 items-center justify-between gap-4">
        <SiteLogo href={`/${locale}`} />

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
          <LanguageToggle
            locale={locale}
            ariaLabel={t.nav.language}
            className="hidden md:block"
          />
          <ThemeToggle />
          <MobileNav
            links={links}
            title={t.nav.navigation}
            openMenuLabel={t.nav.openMenu}
            locale={locale}
            languageLabel={t.nav.language}
          />
        </div>
      </div>
    </header>
  );
}
