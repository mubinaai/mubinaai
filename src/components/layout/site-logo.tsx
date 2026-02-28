import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  href: string;
  className?: string;
}

export function SiteLogo({ href, className }: SiteLogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 font-semibold tracking-tight",
        className,
      )}
    >
      <Image
        src="/star-icon.png"
        alt="Mubinaai logo"
        width={24}
        height={24}
        className="size-6 rounded-sm"
      />
      Mubinaai
    </Link>
  );
}
