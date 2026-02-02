import Link from "next/link";
import { Clock } from "lucide-react";
import type { PostListItem } from "@/lib/sanity";

interface PostCardProps {
  post: PostListItem;
  categorySlug: string;
}

export function PostCard({ post, categorySlug }: PostCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <article className="border-b border-gray-200 transition-colors hover:bg-gray-50">
      <Link
        href={`/board/${categorySlug}/${post.slug.current}`}
        className="block py-6"
      >
        <div className="flex items-start gap-2">
          {post.featured && (
            <span className="inline-flex shrink-0 items-center rounded-full bg-green-600 px-2 py-0.5 text-xs font-medium text-white">
              중요
            </span>
          )}
          <h3 className="line-clamp-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-green-600">
            {post.title}
          </h3>
        </div>

        {post.excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {post.excerpt}
          </p>
        )}

        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
          {post.author && <span>작성자: {post.author}</span>}
        </div>
      </Link>
    </article>
  );
}
