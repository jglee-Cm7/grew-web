import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "카테고리",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "카테고리명",
      type: "string",
      description: "예: 목회 칼럼, 설교 영상, 연구 자료",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "슬러그",
      type: "slug",
      description: "URL에 사용될 고유 식별자 (예: column, sermon, research)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "설명",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "headerImage",
      title: "헤더 배경 이미지",
      type: "image",
      description: "게시판 페이지 상단에 표시될 배경 이미지",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "정렬 순서",
      type: "number",
      description: "낮은 숫자가 먼저 표시됩니다",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
