import { defineField, defineType } from "sanity";
import { BiFile } from "react-icons/bi";

export default defineType({
  name: "skeleton",
  title: "Skeleton",
  type: "document",
  icon: BiFile,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "url",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      description: "Upload a picture",
      options: {
        hotspot: true,
        metadata: ["lqip", "palette"], // "blurhash", "palette", etc
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              title: "Image caption",
              type: "string",
              description: "Text displayed below the image.",
            },
            {
              name: "alt",
              title: "Alt text",
              type: "string",
              description: "Important for SEO and accessiblity.",
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});
