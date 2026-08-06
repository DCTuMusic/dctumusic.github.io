// Contact page prose, one block per language. Both src/pages/contact.astro
// and src/pages/zh-hant/contact.astro read from this same file automatically.
export const contactCopy = {
	en: {
		nextSteps: {
			heading: 'Next',
			items: [
				{
					number: '01',
					title: 'Step 1',
					body: "Let's set up a call and talk about your project.",
				},
				{
					number: '02',
					title: 'Step 2',
					body: "I'll provide a quote and a solution.",
				},
				{
					number: '03',
					title: 'Step 3',
					body: 'We agree on the plan and start working together.',
				},
			],
		},
	},
	'zh-Hant': {
		nextSteps: {
			heading: '下一步',
			items: [
				{
					number: '01',
					title: 'Step 1',
					body: '跟我約一次線上會議，用一杯咖啡的時間聊你的專案',
				},
				{
					number: '02',
					title: 'Step 2',
					body: '提供報價與方案並討論細節',
				},
				{
					number: '03',
					title: 'Step 3',
					body: '達成共識、展開合作',
				},
			],
		},
	},
};
