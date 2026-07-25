// Reads the width/height attributes off a pasted <iframe> embed snippet and
// returns a ready-to-use CSS style string for sizing its wrapper box.
//
// - Pixel width + pixel height (most video embeds: Vimeo, YouTube, Wistia)
//   -> a box that's capped at 80vh tall AND 100% wide, whichever is tighter,
//   with the other dimension derived from the true aspect ratio so nothing
//   gets distorted or letterboxed. Just setting `height: 80vh` here is NOT
//   enough: on a narrow (mobile) viewport, `max-width: 100%` on the wrapper
//   clamps the width down below what 80vh-tall would need, but the browser
//   does not shrink height to compensate — aspect-ratio and an independently
//   fixed height don't reconcile with each other, so the box ends up far
//   taller than it is wide regardless of the embed's real shape. Computing
//   `width: min(100%, 80vh * ratio)` up front and leaving height to derive
//   from that via aspect-ratio sidesteps the whole issue.
// - Percentage width + pixel height (SoundCloud's default embed code, e.g.
//   width="100%" height="166") -> a literal fixed height instead. A percentage
//   and a pixel number aren't the same unit, so treating them as an
//   aspect-ratio (100 / 166) produces a wildly wrong, oversized box — this
//   was a real bug, not just a style choice.
// - Neither found -> standard 16:9 video box.
export function getEmbedStyle(embed: string): string {
	const widthMatch = embed.match(/width=["'](\d+)(%)?["']/i);
	const heightMatch = embed.match(/height=["'](\d+)(%)?["']/i);

	const widthIsPercent = widthMatch?.[2] === '%';
	const heightValue = heightMatch?.[1];

	if (widthIsPercent && heightValue) {
		return `height: ${heightValue}px;`;
	}

	if (widthMatch?.[1] && heightValue && !widthIsPercent) {
		const w = Number(widthMatch[1]);
		const h = Number(heightValue);
		return `aspect-ratio: ${w} / ${h}; width: min(100%, calc(80vh * ${w / h}));`;
	}

	return 'aspect-ratio: 16 / 9; width: min(100%, calc(80vh * 1.778));';
}
