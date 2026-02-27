import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/providers/motion-provider";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <MotionProvider>
        <main className="container-width py-10">{children}</main>
      </MotionProvider>
      <SiteFooter />
    </div>
  );
}
