import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container-width flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-muted-foreground">The page you are looking for does not exist or has moved.</p>
      <Button asChild><Link href="/">Back to home</Link></Button>
    </main>
  );
}
