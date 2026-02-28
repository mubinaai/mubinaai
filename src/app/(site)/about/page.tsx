import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Mubinaai and its editorial focus.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-4xl font-semibold tracking-tight">About Mubinaai</h1>
      <p className="text-lg leading-8 text-muted-foreground">Mubinaai publishes practical, engineering-focused articles on machine learning systems, LLM operations, and modern IT architecture.</p>
      <p className="leading-8 text-muted-foreground">The goal is simple: help teams ship reliable AI products with clean abstractions, measurable outcomes, and maintainable code.</p>
    </section>
  );
}
