import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "AI Blog | Machine Learning & IT Insights", template: "%s | AI Blog" },
  description: "A modern blog about Artificial Intelligence, Machine Learning, and practical IT engineering knowledge.",
  keywords: ["AI", "Machine Learning", "LLM", "Software Engineering", "IT"],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "AI Blog | Machine Learning & IT Insights",
    description: "A modern blog about Artificial Intelligence, Machine Learning, and practical IT engineering knowledge.",
    siteName: "AI Blog",
    images: [{ url: "/og/default-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Blog | Machine Learning & IT Insights",
    description: "A modern blog about Artificial Intelligence, Machine Learning, and practical IT engineering knowledge.",
    images: ["/og/default-og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
