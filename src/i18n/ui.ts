export const languages = {
	en: 'English',
	'zh-Hant': '中文',
};

export const defaultLang = 'en';

// Traditional Chinese strings are intentionally left blank for now — add them
// under the 'zh-Hant' key below and they will take over automatically.
// Until then every page falls back to the English copy.
export const ui = {
	en: {
		'nav.home': 'Service',
		'nav.portfolio': 'Portfolio',
		'nav.process': 'Design Process',
		'nav.art': 'Art',
		'nav.about': 'About',
		'nav.contact': 'Contact',
		'nav.inquire': 'Get in touch',
		'portfolio.heading': 'Portfolio',
		'portfolio.filterMedia': 'Media type',
		'portfolio.filterGenre': 'Music genre',
		'portfolio.clearFilters': 'Clear filters',
		'portfolio.empty': 'No work matches these filters yet.',
		'contact.label': 'Contact',
		'contact.heading1': 'Have a project in mind?',
		'contact.heading2': "Let's talk about it.",
		'contact.subtext': 'Film scoring, dance and sound design, or something else entirely — get in touch.',
		'process.heading': 'Design Process',
		'process.body': 'This page is a placeholder — a walkthrough of the working process will go here.',
		'art.label': 'Artist',
		'art.bio': 'Alongside commissioned scoring work, DC makes personal and experimental sound art — studies in texture, space, and listening that sit outside client work and follow their own logic.',
	},
	'zh-Hant': {
		'nav.home': '服務',
		'nav.portfolio': '作品集',
		'nav.process': '設計流程',
		'nav.art': '藝術創作',
		'nav.about': '關於',
		'nav.contact': '聯絡',
		'nav.inquire': '洽談合作',
		'portfolio.heading': '作品集',
		'portfolio.filterMedia': '媒體類別',
		'portfolio.filterGenre': '音樂類別',
		'portfolio.clearFilters': '清除篩選',
		'portfolio.empty': '目前沒有符合篩選條件的作品。',
		'contact.label': '聯絡',
		'contact.heading1': '有想合作的案子嗎',
		'contact.heading2': '一起聊聊吧',
		'contact.subtext': '配樂、聲音設計，或任何形式的合作，都歡迎與我聯繫。',
		'process.heading': '設計流程',
		'process.body': '此頁面尚在建置中，之後會放上完整的工作流程說明。',
		'art.label': '藝術家',
		'art.bio': '除了商業配樂委託之外，DC 也持續進行個人與實驗性的聲音創作——這些關於質地、空間與聆聽的探索，獨立於商業案之外，依循自己的邏輯發展。',
	},
} as const;
