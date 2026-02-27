# AI Blog Platform

Production-ready foundation for a modern AI-focused blog using Next.js App Router, TypeScript, TailwindCSS, shadcn/ui, MDX, and dark mode.

## Tech Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS + Typography plugin
- shadcn/ui components
- next-themes for dark/light mode
- MDX content pipeline with syntax highlighting

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project Structure

- `src/app/(site)` pages: home, blog list, blog detail, about
- `src/content/posts` local MDX blog content
- `src/lib/blog` post querying, filtering, pagination
- `src/lib/mdx` loading, parsing, TOC extraction, compile helpers
- `src/components` reusable layout, blog, and UI components

## Write a New Blog Post

1. Create `src/content/posts/<slug>.mdx`.
2. Add frontmatter:

```md
---
title: "..."
description: "..."
date: "2026-02-27"
author: "Your Name"
category: "AI Engineering"
tags: ["ai", "ml"]
featured: false
---
```

3. Add markdown/MDX content with `##` and `###` headings for automatic TOC.

## SEO

- Route metadata with OpenGraph and Twitter cards
- Dynamic post metadata
- `sitemap.ts`, `robots.ts`, and `manifest.ts`

## Notes

Set `NEXT_PUBLIC_SITE_URL` in production for canonical URLs and share links.
