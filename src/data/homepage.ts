// Homepage prose, one block per language. Fill in the empty strings and both
// src/pages/index.astro and src/pages/zh-hant/index.astro pick it up
// automatically — no need to edit the page files themselves.
//
// The About bio, Services, and Process sections have their own files:
// src/data/bio.ts, src/data/services.ts, src/data/process.ts.
export const homepageCopy = {
	en: {
		heroTagline: {
			heading: 'Sound you can walk into.',
			subtext:
				'Sound design and original score for spaces, film, and performance — whether it surrounds a room, a screen, or a pair of headphones.',
		},
		slogan1: 'Designing Complete Listening Experiences.',
		slogan2: '',
		slogan3:
			'More than a soundtrack.\nFinding the right sound is hard. Knowing when to hold back is harder.\nWhat you need is integrated music and sound design to bring your vision into focus, align sound with image, and make your story resonate long after it ends.',
		testimonials: {
			heading: 'Client Feedback',
			items: [
				{
					role: 'Animation Director',
					quote:
						"The hardest part of finding a composer is finding someone who truly understands the filmmaker's vision and actively thinks alongside you. Yen takes the time to grasp the core of the work before deciding where music is genuinely needed. He articulates the rationale behind every musical choice, which in turn inspired me to reflect on the rhythm and state of the visuals.",
				},
				{
					role: 'Choreographer',
					quote:
						'While stock music might get you close, it always feels limiting. Collaborating with Yen from the ground up made all the difference. We built the duration, structure, and mood together, giving the work a real sense of depth that transformed not just the audio, but the bodies and the entire space.',
				},
				{
					role: 'Documentary Director',
					quote:
						"Working with a composer for the first time, I was worried that not knowing the technical terms would make it hard to communicate. But Yen started with the story and how it felt. He told me that understanding the music was his job as a composer; mine was simply to be clear about what the film was trying to say. What he delivered captured exactly what I had described, and it tied the whole film together from start to finish.",
				},
			],
		},
	},
	'zh-Hant': {
		heroTagline: {
			heading: '以聲音造境',
			subtext: '為影像、空間與表演藝術創作能讓人沉浸的配樂與聲音設計。',
		},
		slogan1: '透過聲音為你的作品創造完整的體驗',
		slogan2: '',
		slogan3:
			'你需要的，不只是一首好聽的配樂\n不確定什麼情緒該用什麼聲音，也不確定哪個段落才真正需要留白。\n你需要的是一套系統性的音樂與聲音設計。\n讓聽覺精準咬合畫面，將作品的故事說得更深刻、更有份量。',
		testimonials: {
			heading: '客戶回饋',
			items: [
				{
					role: '動畫導演',
					quote:
						'找配樂師最難的，是對方要讀懂影像的人想說什麼，還要能幫你想。彥豪會先了解作品要談什麼，再判斷哪裡需要音樂，也會把詮釋的理由講出來，反過來讓我重新思考影像本身的狀態。',
				},
				{
					role: '編舞家',
					quote:
						'現成音樂雖然能找到接近的，但也會變成一種局限。和彥豪從零開始討論時長、架構與風格，做出來的音樂和氛圍讓作品更立體，不只是聽覺，對身體和空間都有幫助。',
				},
				{
					role: '紀錄片導演',
					quote:
						'第一次找配樂，我很擔心自己不懂音樂術語，沒辦法好好溝通。但 DC 從感受和故事聊起，他說懂音樂是配樂家的責任，我只要把片子想說的講清楚就好。後來交回來的配樂，就是我描述的那種感覺，整部片也從頭到尾連成一體。',
				},
			],
		},
	},
};
