// Chinese display labels for mediaType/musicGenre tags used across portfolio
// entries. The English string in each entry's frontmatter (e.g. "Animation")
// stays the single source of truth for filtering — this dictionary only
// controls what label is *shown* on the zh-hant pages.
//
// Add an entry here any time you introduce a new tag and want it translated.
// Tags with no entry just fall back to showing the English word.
export const tagLabelsZh: Record<string, string> = {
	Animation: '動畫',
	Film: '電影',
	Dance: '舞蹈',
	Documentary: '紀錄片',
	Commercial: '廣告',
	Installation: '藝術裝置',
	Game: '遊戲',
	Orchestral: '管弦',
	Electronic: '電子',
	SoundDesign: '聲音設計',
	Experimental: '實驗',
	Acoustic: '原聲',
	Ambient: '氛圍',
	
};

export function translateTag(tag: string, lang: string): string {
	if (lang === 'zh-Hant') {
		return tagLabelsZh[tag] ?? tag;
	}
	return tag;
}
