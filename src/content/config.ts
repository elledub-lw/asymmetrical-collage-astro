import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).optional(),
    author: z.string().optional(),
    summary: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { articles };
