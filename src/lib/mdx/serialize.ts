import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { PluggableList } from "unified";

const remarkPlugins: PluggableList = [remarkGfm];

const rehypePlugins: PluggableList = [
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: "append", properties: { className: ["anchor"] } }],
  [rehypePrettyCode, { theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }],
];

// Shared MDX processing options used by MDXRemote in App Router.
export const mdxRemoteOptions: NonNullable<MDXRemoteProps["options"]> = {
  mdxOptions: {
    remarkPlugins,
    rehypePlugins,
  },
};
