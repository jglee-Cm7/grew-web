import { PostCard } from "./post-card";
import type { PostListItem } from "@/lib/sanity";

interface PostListProps {
  posts: PostListItem[];
  categorySlug: string;
  total: number;
}

export function PostList({ posts, categorySlug, total }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-500">게시글이 없습니다.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-300 pb-4">
        <p className="text-sm text-gray-600">
          총 <span className="font-semibold text-green-600">{total}</span>건
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} categorySlug={categorySlug} />
        ))}
      </div>
    </div>
  );
}
