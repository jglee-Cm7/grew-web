import { client, type Category, type Post, type PostListItem } from "./client";

// 모든 카테고리 조회
export async function getCategories(): Promise<Category[]> {
  return client.fetch(
    `*[_type == "category"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      headerImage,
      order
    }`
  );
}

// 슬러그로 카테고리 조회
export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  return client.fetch(
    `*[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      headerImage,
      order
    }`,
    { slug }
  );
}

// 카테고리별 게시글 목록 조회 (페이지네이션)
export async function getPostsByCategory(
  categorySlug: string,
  page: number = 1,
  pageSize: number = 10,
  searchQuery?: string
): Promise<{ posts: PostListItem[]; total: number }> {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  // 검색어가 있는 경우 필터 추가
  const searchFilter = searchQuery
    ? `&& (title match "*${searchQuery}*" || excerpt match "*${searchQuery}*")`
    : "";

  const posts = await client.fetch(
    `*[_type == "post" && category->slug.current == $categorySlug ${searchFilter}] | order(featured desc, publishedAt desc) [$start...$end] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      author,
      featured
    }`,
    { categorySlug, start, end }
  );

  const total = await client.fetch(
    `count(*[_type == "post" && category->slug.current == $categorySlug ${searchFilter}])`,
    { categorySlug }
  );

  return { posts, total };
}

// 전체 게시글 검색 (카테고리 무관)
export async function searchPosts(
  searchQuery: string,
  page: number = 1,
  pageSize: number = 10
): Promise<{ posts: PostListItem[]; total: number }> {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const posts = await client.fetch(
    `*[_type == "post" && (title match "*${searchQuery}*" || excerpt match "*${searchQuery}*")] | order(publishedAt desc) [$start...$end] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      author,
      featured,
      "categorySlug": category->slug.current
    }`,
    { start, end }
  );

  const total = await client.fetch(
    `count(*[_type == "post" && (title match "*${searchQuery}*" || excerpt match "*${searchQuery}*")])`
  );

  return { posts, total };
}

// 개별 게시글 조회
export async function getPostBySlug(
  categorySlug: string,
  postSlug: string
): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $postSlug && category->slug.current == $categorySlug][0] {
      _id,
      title,
      slug,
      category->{
        _id,
        title,
        slug
      },
      excerpt,
      content,
      publishedAt,
      author,
      attachment {
        asset->{
          _ref,
          url
        },
        description
      },
      featured
    }`,
    { categorySlug, postSlug }
  );
}

// 이전/다음 게시글 조회
export async function getAdjacentPosts(
  categorySlug: string,
  publishedAt: string
): Promise<{ prev: PostListItem | null; next: PostListItem | null }> {
  const prev = await client.fetch(
    `*[_type == "post" && category->slug.current == $categorySlug && publishedAt < $publishedAt] | order(publishedAt desc) [0] {
      _id,
      title,
      slug
    }`,
    { categorySlug, publishedAt }
  );

  const next = await client.fetch(
    `*[_type == "post" && category->slug.current == $categorySlug && publishedAt > $publishedAt] | order(publishedAt asc) [0] {
      _id,
      title,
      slug
    }`,
    { categorySlug, publishedAt }
  );

  return { prev, next };
}

// 최근 게시글 조회 (홈페이지 등에서 사용)
export async function getRecentPosts(limit: number = 5): Promise<PostListItem[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "categorySlug": category->slug.current,
      "categoryTitle": category->title
    }`,
    { limit }
  );
}
