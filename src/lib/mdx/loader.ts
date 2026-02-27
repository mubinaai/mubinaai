import fs from "node:fs/promises";
import path from "node:path";

const postsDir = path.join(process.cwd(), "src", "content", "posts");

export async function listPostFiles() {
  const entries = await fs.readdir(postsDir);
  return entries.filter((entry) => entry.endsWith(".mdx"));
}

export async function loadPostSourceBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  return fs.readFile(filePath, "utf8");
}
