export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  coverImage?: string;
  featured?: boolean;
  draft?: boolean;
}

export interface TocItem {
  level: 2 | 3;
  text: string;
  id: string;
}

export interface BlogPost {
  slug: string;
  meta: BlogPostMeta;
  content: string;
  source: string;
  readingTime: string;
  toc: TocItem[];
}

export interface PaginatedPostsResult {
  items: BlogPost[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface SearchDocument {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}
