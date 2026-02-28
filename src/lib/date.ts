import type { Locale } from "@/lib/i18n";

const dateLocales: Record<Locale, string> = {
  uz: "uz-UZ",
  en: "en-US",
  ru: "ru-RU",
};

export function formatPostDate(date: string, locale: Locale = "uz"): string {
  return new Intl.DateTimeFormat(dateLocales[locale], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  }).format(new Date(date));
}
