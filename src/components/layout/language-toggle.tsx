"use client";

import { Suspense, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select } from "@/components/ui/select";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n";

const labels: Record<Locale, string> = {
  uz: "O'zbek",
  en: "English",
  ru: "Русский",
};

interface LanguageToggleProps {
  locale: Locale;
  ariaLabel: string;
}

function LanguageToggleContent({ locale, ariaLabel }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const segments = useMemo(
    () => pathname.split("/").filter(Boolean),
    [pathname],
  );

  function changeLocale(nextLocale: Locale) {
    const nextSegments = [...segments];

    if (nextSegments.length > 0 && isLocale(nextSegments[0])) {
      nextSegments[0] = nextLocale;
    } else {
      nextSegments.unshift(defaultLocale);
      nextSegments[0] = nextLocale;
    }

    const nextPath = `/${nextSegments.join("/")}`;
    const query = searchParams.toString();
    router.push(query ? `${nextPath}?${query}` : nextPath);
  }

  return (
    <div className="w-[126px]" aria-label={ariaLabel}>
      <Select
        value={locale}
        onChange={(event) => changeLocale(event.target.value as Locale)}
        aria-label={ariaLabel}
        className="h-8"
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {labels[item]}
          </option>
        ))}
      </Select>
    </div>
  );
}

export function LanguageToggle(props: LanguageToggleProps) {
  return (
    <Suspense fallback={<div className="h-8 w-[126px]" />}>
      <LanguageToggleContent {...props} />
    </Suspense>
  );
}
