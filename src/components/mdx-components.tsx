import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2 className="mt-10 scroll-mt-24 text-3xl font-semibold tracking-tight" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mt-8 scroll-mt-24 text-2xl font-semibold tracking-tight" {...props}>{children}</h3>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-2 border-primary/60 pl-6 italic" {...props}>{children}</blockquote>
  ),
};
