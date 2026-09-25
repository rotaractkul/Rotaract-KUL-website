import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), // e.g. "2026-11-14"
    location: z.string(),
    status: z.enum(['upcoming', 'past']),
    image: z.string().optional(),
    registrationLink: z.string().optional(),
    summary: z.string(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    linkedin: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { events, team };
