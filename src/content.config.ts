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
			// Optional. Which part of the cover stays visible when the portfolio
			// grid crops it to 16:9, as a CSS object-position value ("x% y%").
			// "50% 0%" keeps the top, "50% 100%" keeps the bottom. Default: centre.
			coverPosition: z.string().optional(),
			// Optional. A different cover shown only on phone-sized screens (under 640px
			// wide) in the portfolio list. Same file rules as `cover`.
			coverMobile: image().optional(),
			// Optional. A different image to use only in the homepage "Featured work"
			// row (always shown 16:9). Falls back to `cover`.
			featuredImage: image().optional(),
			// Optional. Which part of the featured image stays visible in that 16:9
			// frame, as a CSS object-position ("50% 0%" = keep the top). Default: centre.
			featuredPosition: z.string().optional(),
			// Paste one or more full embed snippets from Vimeo, YouTube,
			// SoundCloud, or anywhere else that gives you an <iframe> — each
			// renders as-is, in the order listed.
			embeds: z.array(z.string()).default([]),
			// true = lay multiple embeds out two-per-row (good for tall/portrait
			// clips that would otherwise show huge black bars full-width).
			// false (default) = stack each one full-width, one per row.
			embedsGrid: z.boolean().default(false),
			// true = the YouTube embeds on this project are 360 videos. Embedded
			// YouTube players no longer expose their own 360 controls, so the site
			// drives the camera from pointer drags instead.
			video360: z.boolean().default(false),
			// Optional single image shown above the write-up, between the video
			// and the text.
			leadImage: image().optional(),
			gallery: z.array(image()).default([]),
			// Optional credit line under the gallery, e.g. "Images courtesy of …".
			photoCredit: z.string().optional(),
			photoCreditZh: z.string().optional(),
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
			// Optional photo credit shown as a small caption under the piece's
			// own photo gallery. Leave both blank and nothing renders.
			photoCredit: z.string().optional(),
			photoCreditZh: z.string().optional(),
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
