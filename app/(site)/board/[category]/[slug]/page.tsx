import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "next-sanity";
import {
  ArrowLeft,
  Calendar,
  User,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PageHeader } from "@/components/layout";
import {
  getPostBySlug,
  getCategoryBySlug,
  getAdjacentPosts,
  getCategories,
  getPostsByCategory,
  urlFor,
} from "@/lib/sanity";
import columnBg from "@/public/posts-page/column-top-bg.webp";
import { TypedObject } from "sanity";

interface PostPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps) {
  const { category: categorySlug, slug } = await params;
  const post = await getPostBySlug(categorySlug, slug);

  if (!post) {
    return { title: "게시글 - 그루 Grew" };
  }

  return {
    title: `${post.title} - ${post.category.title} - 그루 Grew`,
    description: post.excerpt || `${post.title}`,
  };
}

// 정적 생성을 위한 경로 생성
export async function generateStaticParams() {
  const categories = await getCategories();
  const paths: { category: string; slug: string }[] = [];

  for (const category of categories) {
    const { posts } = await getPostsByCategory(category.slug.current, 1, 100);
    for (const post of posts) {
      paths.push({
        category: category.slug.current,
        slug: post.slug.current,
      });
    }
  }

  return paths;
}

export default async function PostPage({ params }: PostPageProps) {
  const { category: categorySlug, slug } = await params;

  const [post, category] = await Promise.all([
    getPostBySlug(categorySlug, slug),
    getCategoryBySlug(categorySlug),
  ]);

  if (!post || !category) {
    notFound();
  }

  const { prev, next } = await getAdjacentPosts(categorySlug, post.publishedAt);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // 헤더 배경 이미지 결정
  const headerImage = category.headerImage
    ? urlFor(category.headerImage).width(1920).url()
    : columnBg;

  return (
    <main>
      <PageHeader backgroundImage={headerImage}>{category.title}</PageHeader>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 목록으로 돌아가기 */}
        <Link
          href={`/board/${categorySlug}`}
          className="mb-6 inline-flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-green-600"
        >
          <ArrowLeft className="h-4 w-4" />
          목록으로
        </Link>

        {/* 게시글 헤더 */}
        <header className="mb-8 border-b border-gray-200 pb-6">
          {post.featured && (
            <span className="mb-2 inline-block rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
              중요
            </span>
          )}
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </div>
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            )}
          </div>
        </header>

        {/* 본문 */}
        {post.content && (
          // eslint-disable-next-line tailwindcss/no-custom-classname
          <div className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg max-w-none">
            <PortableText
              value={post.content as TypedObject[]}
              components={{
                types: {
                  image: ({ value }) => {
                    if (!value?.asset?._ref) return null;
                    return (
                      <figure className="my-8">
                        <Image
                          src={urlFor(value).width(800).url()}
                          alt={value.alt || ""}
                          className="w-full rounded-lg"
                          width={800}
                          height={800}
                        />
                        {value.caption && (
                          <figcaption className="mt-2 text-center text-sm text-gray-500">
                            {value.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  },
                },
              }}
            />
          </div>
        )}

        {/* 첨부파일 */}
        {post.attachment?.asset?.url && (
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="mb-2 text-sm font-medium text-gray-700">첨부파일</h3>
            <a
              href={post.attachment.asset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-600 hover:underline"
            >
              <Download className="h-4 w-4" />
              {post.attachment.description || "파일 다운로드"}
            </a>
          </div>
        )}

        {/* 이전/다음 게시글 네비게이션 */}
        <nav className="mt-12 grid grid-cols-1 gap-4 border-t border-gray-200 pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/board/${categorySlug}/${prev.slug.current}`}
              className="group flex items-center gap-2 rounded-lg border border-gray-200 p-4 transition-colors hover:border-green-300 hover:bg-green-50"
            >
              <ChevronLeft className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-green-600" />
              <div className="min-w-0">
                <span className="text-xs text-gray-500">이전 글</span>
                <p className="truncate text-sm font-medium text-gray-900 group-hover:text-green-600">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/board/${categorySlug}/${next.slug.current}`}
              className="group flex items-center justify-end gap-2 rounded-lg border border-gray-200 p-4 text-right transition-colors hover:border-green-300 hover:bg-green-50"
            >
              <div className="min-w-0">
                <span className="text-xs text-gray-500">다음 글</span>
                <p className="truncate text-sm font-medium text-gray-900 group-hover:text-green-600">
                  {next.title}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-green-600" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </main>
  );
}
