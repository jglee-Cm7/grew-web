import { defineType, defineArrayMember } from "sanity";

export const blockContent = defineType({
  title: "본문 내용",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "일반", value: "normal" },
        { title: "제목 1", value: "h1" },
        { title: "제목 2", value: "h2" },
        { title: "제목 3", value: "h3" },
        { title: "제목 4", value: "h4" },
        { title: "인용", value: "blockquote" },
      ],
      lists: [
        { title: "글머리 기호", value: "bullet" },
        { title: "번호 매기기", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "굵게", value: "strong" },
          { title: "기울임", value: "em" },
          { title: "밑줄", value: "underline" },
          { title: "취소선", value: "strike-through" },
        ],
        annotations: [
          {
            title: "링크",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "대체 텍스트",
          description: "이미지를 설명하는 텍스트 (접근성용)",
        },
        {
          name: "caption",
          type: "string",
          title: "캡션",
        },
      ],
    }),
  ],
});
