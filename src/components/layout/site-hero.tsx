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
    <section className="rounded-2xl border border-border/70 bg-gradient-to-b from-muted/50 to-transparent px-4 py-8 shadow-sm sm:px-8 sm:py-12">
      <div className="mx-auto space-y-5 text-center sm:space-y-6 sm:text-left">
        <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          <span className="mr-1 inline-block animate-wave align-middle">
            👋
          </span>
          <span className="align-middle">{title}</span>
        </h1>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {description}
        </p>
        <Button asChild size="lg" className="w-full rounded-xl sm:w-auto">
          <Link href={ctaHref}>
            {ctaLabel} <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
