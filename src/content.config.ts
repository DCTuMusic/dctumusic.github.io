import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			titleZh: z.string().optional(),
			client: z.string().optional(),
			clientZh: z.string().optional(),
			year: z.number(),
			role: z.string().optional(),
			roleZh: z.string().optional(),
			// Free-form tags: add a new value here and it automatically shows up
			// as a filter option on the portfolio page, no code changes needed.
			mediaType: z.array(z.string()),
			musicGenre: z.array(z.string()),
			featured: z.boolean().default(false),
			cover: image(),
			// Paste one or more full embed snippets from Vimeo, YouTube,
			// SoundCloud, or anywhere else that gives you an <iframe> — each
			// renders as-is, in the order listed.
			embeds: z.array(z.string()).default([]),
			// true = lay multiple embeds out two-per-row (good for tall/portrait
			// clips that would otherwise show huge black bars full-width).
			// false (default) = stack each one full-width, one per row.
			embedsGrid: z.boolean().default(false),
			gallery: z.array(image()).default([]),
			summary: z.string(),
			summaryZh: z.string().optional(),
			// Free-form role/name pairs, e.g. { role: "Director", name: "..." }.
			// Add as many as the project needs — roleZh is optional per entry.
			credits: z
				.array(
					z.object({
						role: z.string(),
						roleZh: z.string().optional(),
						name: z.string(),
						nameZh: z.string().optional(),
					}),
				)
				.default([]),
			order: z.number().default(0),
		}),
});

const art = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/art' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			titleZh: z.string().optional(),
			year: z.number(),
			cover: image(),
			// Paste one or more full embed snippets from Vimeo, YouTube,
			// SoundCloud, or anywhere else that gives you an <iframe> — each
			// renders as-is, in the order listed.
			embeds: z.array(z.string()).default([]),
			// true = lay multiple embeds out two-per-row (good for tall/portrait
			// clips that would otherwise show huge black bars full-width).
			// false (default) = stack each one full-width, one per row.
			embedsGrid: z.boolean().default(false),
			images: z.array(image()).default([]),
			summary: z.string().optional(),
			summaryZh: z.string().optional(),
			// Free-form role/name pairs, e.g. { role: "Director", name: "..." }.
			// Add as many as the project needs — roleZh is optional per entry.
			credits: z
				.array(
					z.object({
						role: z.string(),
						roleZh: z.string().optional(),
						name: z.string(),
						nameZh: z.string().optional(),
					}),
				)
				.default([]),
			order: z.number().default(0),
		}),
});

export const collections = { portfolio, art };
