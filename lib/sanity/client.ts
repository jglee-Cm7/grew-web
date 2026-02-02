import { createClient } from "next-sanity";
import imageUrlBuilder, { SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// 타입 정의
export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  headerImage?: SanityImageSource;
  order?: number;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: Category;
  excerpt?: string;
  content?: unknown[];
  publishedAt: string;
  author?: string;
  attachment?: {
    asset: {
      _ref: string;
      url: string;
    };
    description?: string;
  };
  featured?: boolean;
}

export interface PostListItem {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  author?: string;
  featured?: boolean;
}

export interface PaginatedPosts {
  posts: PostListItem[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
