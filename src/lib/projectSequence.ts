import type { CollectionEntry } from 'astro:content';

type Entry = CollectionEntry<'portfolio'>;

// Priority order for grouping: a project joins the first group in this list
// that it has as a mediaType tag (so Film beats Animation, Commercial beats
// Animation). Tags not listed fall back to the project's first mediaType.
const groupOrder = ['Exhibition', 'Performance', 'Film', 'Commercial','Animation', 'Dance', 'Installation'];

export function getGroup(entry: Entry) {
	return groupOrder.find((g) => entry.data.mediaType.includes(g)) ?? entry.data.mediaType[0] ?? '';
}

export function getProjectSequence(all: Entry[]) {
	const rank = (e: Entry) => {
		const i = groupOrder.indexOf(getGroup(e));
		return i === -1 ? groupOrder.length : i;
	};
	return [...all].sort(
		(a, b) =>
			rank(a) - rank(b) ||
			getGroup(a).localeCompare(getGroup(b)) ||
			a.data.order - b.data.order ||
			b.data.year - a.data.year ||
			a.data.title.localeCompare(b.data.title),
	);
}

export function getPrevNext(all: Entry[], id: string) {
	const current = all.find((e) => e.id === id)!;
	const group = getProjectSequence(all).filter((e) => getGroup(e) === getGroup(current));
	const i = group.findIndex((e) => e.id === id);
	return {
		prev: group[(i - 1 + group.length) % group.length],
		next: group[(i + 1) % group.length],
	};
}
