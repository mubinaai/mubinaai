"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Locale } from "@/lib/i18n";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface MobileNavProps {
  links: Array<{ href: string; label: string }>;
  title: string;
  openMenuLabel: string;
  locale: Locale;
  languageLabel: string;
}

export function MobileNav({
  links,
  title,
  openMenuLabel,
  locale,
  languageLabel,
}: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon" aria-label={openMenuLabel}>
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[86vw] max-w-sm">
        <SheetHeader><SheetTitle>{title}</SheetTitle></SheetHeader>
        <div className="mt-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{languageLabel}</p>
          <LanguageToggle locale={locale} ariaLabel={languageLabel} className="w-full" />
        </div>
        <Separator className="my-5" />
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Button key={link.href} asChild variant="ghost" className="justify-start">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
