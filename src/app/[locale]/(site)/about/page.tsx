import type { Metadata } from "next";
import { isLocale, messages } from "@/lib/i18n";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uz";
  const t = messages[safeLocale];

  return {
    title: t.about.title,
    description: t.about.description,
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uz";
  const t = messages[safeLocale];

  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-4xl font-semibold tracking-tight">{t.about.heading}</h1>
      <p className="text-lg leading-8 text-muted-foreground">{t.about.lead}</p>
      <p className="leading-8 text-muted-foreground">{t.about.goal}</p>
    </section>
  );
}
