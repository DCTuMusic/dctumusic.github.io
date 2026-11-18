export type SummaryBlock = { heading?: string; body: string };

// A line of its own in a summary, marking where a video should sit between
// sections rather than above or below the whole write-up.
export const VIDEO_MARKER = '[video]';

const MAX_HEADING_LENGTH = 70;
const SENTENCE_ENDINGS = /[.。!！?？,，;；:：]$/;

/** Flattens a summary into a single line fit for a meta description. */
export function summaryToDescription(summary: string): string {
	return parseSummary(summary)
		.filter((block) => block.body !== VIDEO_MARKER)
		.map((block) => block.body.replace(/\s+/g, ' '))
		.join(' ')
		.trim();
}

/**
 * A block's first line is treated as a heading only when it is short, has body
 * text under it, and doesn't read as a sentence — so an ordinary one-paragraph
 * summary still renders as plain prose.
 */
export function parseSummary(summary: string): SummaryBlock[] {
	return summary
		.split(/\n\s*\n/)
		.map((block) => block.replace(/\s+$/, ''))
		.filter((block) => block.trim().length > 0)
		.map((block) => {
			const [first, ...rest] = block.split('\n');
			const heading = first.trim();
			const body = rest.join('\n').trim();

			if (body && heading.length <= MAX_HEADING_LENGTH && !SENTENCE_ENDINGS.test(heading)) {
				return { heading, body };
			}

			return { body: block.trim() };
		});
}
