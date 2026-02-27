import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// Shared MDX processing options used by MDXRemote in App Router.
export const mdxRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append", properties: { className: ["anchor"] } }],
      [rehypePrettyCode, { theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }],
    ],
  },
};
