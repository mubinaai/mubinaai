import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/providers/motion-provider";
import { isLocale } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleSiteLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader locale={locale} />
      <div className="flex-1">
        <MotionProvider>
          <main className="container-width py-10">{children}</main>
        </MotionProvider>
      </div>
      <SiteFooter locale={locale} />
    </div>
  );
}
