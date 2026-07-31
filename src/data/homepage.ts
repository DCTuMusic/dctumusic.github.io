// Homepage prose, one block per language. Fill in the empty strings and both
// src/pages/index.astro and src/pages/zh-hant/index.astro pick it up
// automatically — no need to edit the page files themselves.
export const homepageCopy = {
	en: {
		heroTagline: {
			heading: 'Sound you can walk into.',
			subtext:
				'Sound design and original score for spaces, film, and performance — whether it surrounds a room, a screen, or a pair of headphones.',
		},
		slogan1: 'I shape scenes with sonic textures and acoustics.',
		slogan2: '',
		slogan3: 'Not just making music, but creating a complete listening experience',
		bio: `Hi, I'm Yen-Hao "DC" Tu, a composer and sound designer. I specialize in capturing the core concept of a project through communication and providing corresponding sound design. My work focuses on creating atmosphere and emotion, driving the story forward, supporting the narrative, and shaping each sound element with attention to detail and overall cohesion. I have collaborated with creators and studios in Taiwan and internationally, including O.OO, Base Design, and Aaron Nieh Workshop.`,
		services: {
			label: 'Services',
			items: [
				
				{
					number: '01',
					title: 'Score & Sound Design',
					body: 'Original score and sound design for the moving image. Animation, brand films, short films, dance.',
				},
				{
					number: '02',
					title: 'Spatial & Multichannel Sound',
					body: 'Sound for spaces, exhibitions, and immersive experiences. Produced remotely, delivered on-site.',
				},
				{
					number: '03',
					title: 'Music Supervision',
					body: 'Sourcing, curating, and clearing existing tracks.',
				},
			],
			howIWorkLabel: 'How I work',
			howIWork: 'Working remotely with clients worldwide. Available on-site for spatial projects.',
		},
	},
	'zh-Hant': {
		heroTagline: {
			heading: '以聲音造境',
			subtext: '為空間、影像與表演藝術創作配樂與聲音設計，讓人沉浸其中。',
		},
		slogan1: '我用聲音的材質與空間來刻畫場景',
		slogan2: '',
		slogan3: '不只是製作音樂，而是透過聲音為你的作品創造更完整的體驗',
		bio: '嗨，我是 杜彥豪(DC)，作曲家與聲音設計師。我擅長透過對話來抓取作品核心理念，進而提供相對應的聲音呈現。我的作品著重於營造氛圍與情緒，推動故事向前發展，並以對細節的執著與對整體的把握來塑造每一個聲音元素。我曾與台灣及國際的創作者和工作室合作，包括 O.OO、Base Design 與 Aaron Nieh Workshop。',
		services: {
			label: '服務項目',
			items: [
				
				{
					number: '01',
					title: '影像配樂與聲音設計',
					body: '為影像量身打造原創音樂與聲音設計。動畫、品牌影片、短片、舞蹈。',
				},
				{
					number: '02',
					title: '空間與多聲道聲音設計',
					body: '為空間、展覽與沉浸式體驗設計聲音。遠端製作，可到場執行。',
				},
				{
					number: '03',
					title: '音樂選曲',
					body: '協助尋找、篩選並處理既有曲目的授權。',
				},
			],
			howIWorkLabel: '合作方式',
			howIWork: '全球遠端合作；空間類專案可到場。',
		},
	},
};
