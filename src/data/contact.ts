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
					body: "Let's set up a call and talk about your project over a coffee.",
				},
				{
					number: '02',
					title: 'Step 2',
					body: "I'll come back with a quote and a plan based on what we talked about.",
				},
				{
					number: '03',
					title: 'Step 3',
					body: 'Once that works for you, we start.',
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
					body: '根據談的內容，我提供報價與方案',
				},
				{
					number: '03',
					title: 'Step 3',
					body: '確認之後，開始合作',
				},
			],
		},
	},
};
