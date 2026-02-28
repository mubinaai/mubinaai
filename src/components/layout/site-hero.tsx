import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SiteHeroProps {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function SiteHero({
  badge,
  title,
  description,
  ctaLabel,
  ctaHref,
}: SiteHeroProps) {
  return (
    <section className="rounded-2xl border border-border/70 bg-gradient-to-b from-muted/40 to-transparent p-8 shadow-sm sm:p-12">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          <span className="inline-block animate-wave">👋</span> {title}
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">{description}</p>
        <Button asChild size="lg" className="rounded-xl">
          <Link href={ctaHref}>
            {ctaLabel} <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
