import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "게시글",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "슬러그",
      type: "slug",
      description: "URL에 사용될 고유 식별자",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "카테고리",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "요약",
      type: "text",
      rows: 3,
      description: "게시글 목록에 표시될 짧은 요약",
    }),
    defineField({
      name: "content",
      title: "본문",
      type: "blockContent",
    }),
    defineField({
      name: "publishedAt",
      title: "게시일",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "작성자",
      type: "string",
    }),
    defineField({
      name: "attachment",
      title: "첨부파일",
      type: "file",
      fields: [
        {
          name: "description",
          type: "string",
          title: "파일 설명",
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "중요 게시글",
      type: "boolean",
      description: "체크하면 목록 상단에 고정됩니다",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "게시일 (최신순)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "게시일 (오래된순)",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
    {
      title: "제목순",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category.title",
      date: "publishedAt",
    },
    prepare({ title, category, date }) {
      return {
        title,
        subtitle: `${category || "미분류"} • ${date ? new Date(date).toLocaleDateString("ko-KR") : "날짜 없음"}`,
      };
    },
  },
});
