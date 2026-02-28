import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <div className="container-width grid gap-6 py-10 text-sm text-muted-foreground md:grid-cols-2 md:items-end">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Image src="/star-icon.png" alt="Mubinaai logo" width={20} height={20} className="size-5 rounded-sm" />
            <p className="text-base font-semibold text-foreground">Mubinaai</p>
          </div>
          <p>AI, Machine Learning va IT engineering bo&apos;yicha amaliy maqolalar.</p>
          <p>&copy; {new Date().getFullYear()} Mubinaai</p>
        </div>
        <div className="space-y-4 md:text-right">
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
            <Link href="/blog" className="transition-colors hover:text-foreground">Blog</Link>
          </div>
          <div className="flex items-center md:justify-end">
            <a
              href="https://t.me/mubinaai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mubinaai Telegram"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border/70 text-primary transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary/90"
            >
              <FaTelegramPlane className="size-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
