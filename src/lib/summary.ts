export type SummaryBlock = { heading?: string; body: string };

const MAX_HEADING_LENGTH = 70;
const SENTENCE_ENDINGS = /[.。!！?？,，;；:：]$/;

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
