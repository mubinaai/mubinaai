import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import Link from "next/link";
import { SiteLogo } from "@/components/layout/site-logo";
import { Button } from "@/components/ui/button";
import { messages, type Locale } from "@/lib/i18n";

interface SiteFooterProps {
  locale?: Locale;
}

export function SiteFooter({ locale = "uz" }: SiteFooterProps) {
  const t = messages[locale];

  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <div className="container-width grid gap-6 py-10 text-sm text-muted-foreground md:grid-cols-2 md:items-end">
        <div className="space-y-2">
          <SiteLogo href={`/${locale}`} />
          <p>{t.footer.description}</p>
          <p>&copy; {new Date().getFullYear()} Mubinaai</p>
        </div>
        <div className="space-y-4 md:text-right">
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <Link href={`/${locale}/about`} className="transition-colors hover:text-foreground">{t.nav.about}</Link>
            <Link href={`/${locale}/blog`} className="transition-colors hover:text-foreground">{t.nav.blog}</Link>
          </div>
          <div className="flex items-center md:justify-end">
            <Button asChild variant="outline" size="icon" className="rounded-full" aria-label="Mubinaai Telegram">
              <a href="https://t.me/mubinaai" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="size-[18px]" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
