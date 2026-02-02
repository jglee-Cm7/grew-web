import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageHeader } from "@/components/layout";
import { PostList, SearchBar, Pagination } from "@/components/features/board";
import {
  getCategoryBySlug,
  getCategories,
  getPostsByCategory,
  urlFor,
} from "@/lib/sanity";

// searchParams 사용으로 인한 동적 렌더링 명시
export const dynamic = "force-dynamic";

interface BoardPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string; q?: string }>;
}

export async function generateMetadata({ params }: BoardPageProps) {
  const { category: categorySlug } = await params;
  const category = await getCategoryBySlug(categorySlug);

  if (!category) {
    return { title: "게시판 - 그루 Grew" };
  }

  return {
    title: `${category.title} - 그루 Grew`,
    description: category.description || `${category.title} 게시판`,
  };
}

// 정적 생성을 위한 경로 생성
export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.slug.current,
  }));
}

export default async function BoardPage({
  params,
  searchParams,
}: BoardPageProps) {
  const { category: categorySlug } = await params;
  const { page: pageParam, q: searchQuery } = await searchParams;

  const category = await getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const pageSize = 5;

  const { posts, total } = await getPostsByCategory(
    categorySlug,
    page,
    pageSize,
    searchQuery,
  );

  const totalPages = Math.ceil(total / pageSize);

  // 헤더 배경 이미지 결정
  const headerImage = category.headerImage
    ? urlFor(category.headerImage).width(1920).url()
    : "/posts-page/column-top-bg.webp";

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader backgroundImage={headerImage}>{category.title}</PageHeader>

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-12 sm:px-6 lg:px-8">
        {/* 제목 및 검색 영역 */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-900">{category.title}</h1>

          <Suspense
            fallback={
              <div className="h-10 w-64 animate-pulse rounded bg-gray-200" />
            }
          >
            <SearchBar currentCategorySlug={categorySlug} />
          </Suspense>
        </div>

        {/* 게시글 목록 */}
        <PostList posts={posts} categorySlug={categorySlug} total={total} />

        {/* 페이지네이션 */}
        <Suspense fallback={null}>
          <div className="mt-auto pt-8">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              categorySlug={categorySlug}
            />
          </div>
        </Suspense>
      </section>
    </div>
  );
}
