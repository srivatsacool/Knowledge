import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  domains: defineCollection({
    loader: glob({ pattern: '*/domain.md', base: '../domains' }),
    schema: z.object({
      id: z.string(),
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      subjects: z.array(z.string()).default([]),
    }),
  }),

  subjects: defineCollection({
    loader: glob({ pattern: '*/*/subject.md', base: '../domains' }),
    schema: z.object({
      id: z.string(),
      title: z.string(),
      slug: z.string(),
      domain: z.string(),
      courseName: z.string().optional(),
      professor: z.string().optional(),
      description: z.string(),
      notebooks: z.array(z.string()).default([]),
    }),
  }),

  notebooks: defineCollection({
    loader: glob({ pattern: '*/*/notebooks/*.{md,mdx}', base: '../domains' }),
    schema: z.object({
      title: z.string(),
      slug: z.string(),
      domain: z.string(),
      subject: z.string(),
      course: z.string().optional(),
      professor: z.string().optional(),
      description: z.string(),
      status: z.enum(['draft', 'published']).default('published'),
      version: z.string().default('1.0.0'),
      updated: z.string(),
      tags: z.array(z.string()).default([]),
      readingTimeMinutes: z.number().optional(),
      featured: z.boolean().default(false),
      interactive: z.object({
        available: z.boolean().default(false),
        slug: z.string().optional(),
        title: z.string().optional(),
      }).optional(),
      pdf: z.object({
        available: z.boolean().default(true),
      }).optional(),
    }),
  }),
};
