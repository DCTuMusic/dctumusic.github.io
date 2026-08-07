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
		slogan3: 'Designing Complete Listening Experiences.',
		bio: [
			'Yen-Hao "DC" Tu is a Taiwanese composer and sound designer working across film, animation, sound installation, exhibition, and performance.',
			'Films he has scored have been selected for the New York Asian Film Festival, Huesca International Film Festival, Uppsala International Short Film Festival, and PRIX JEUNESSE International in Munich. His acousmatic work was a winner of TPMC petites formes 2024 in Paris.',
			"He has created sound for the ASICS Women Running campaign, a Museum of Fine Arts Boston brand film, the Matsu Biennial motion identity, and Yodex's 40th anniversary campaign, working with studios including O.OO, Base Design, and Aaron Nieh Workshop. He was lead sound designer and immersive sound engineer for the 8-channel immersive theater at the National Museum of Natural Science.",
		],
		services: {
			label: 'Services',
			items: [
				
				{
					number: '01',
					title: 'Score & Sound Design',
					body: 'Original score and sound design for the moving image. Animation, brand films, films, dance.',
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
		process: {
			heading: 'How the work is made',
			items: [
				{
					number: '01',
					title: 'Goal',
					body: 'What the sound needs to achieve. What the audience should feel, and what they should remember.',
				},
				{
					number: '02',
					title: 'Tone',
					body: 'Texture, space, and distance. What instruments, melody or texture, restrained or lush.',
				},
				{
					number: '03',
					title: 'Production',
					body: 'Writing the full score and sound design. Deciding what you hear, and what sits behind it.',
				},
				{
					number: '04',
					title: 'Mix',
					body: 'Mixing is to sound what color grading is to picture. The same material can be finished to stand out, or to sit perfectly in the scene.',
				},
			],
		},
	},
	'zh-Hant': {
		heroTagline: {
			heading: '以聲音造境',
			subtext: '為影像、空間與表演藝術創作能讓人沉浸的配樂與聲音設計。',
		},
		slogan1: '我用聲音的材質與空間來刻畫場景',
		slogan2: '',
		slogan3: '透過聲音為你的作品創造完整的體驗',
		bio: [
			'杜彥豪(DC Tu)為台灣作曲家與聲音設計師，創作橫跨影像、動畫、藝術裝置、展覽與表演藝術。',
			'其擔任配樂之作品曾入選紐約亞洲影展、西班牙威斯卡國際影展、瑞典烏普薩拉國際短片影展與德國慕尼黑兒少影展；電聲作品獲巴黎 TPMC petites formes優勝。',
			'曾為 ASICS 形象廣告、波士頓美術館品牌影片、馬祖雙年展動態識別與新一代設計展四十週年主視覺創作聲音，合作的工作室包括 O.OO、Base Design 與 Aaron Nieh Workshop，並擔任國立自然科學博物館《鯨掘》沉浸劇場的聲音設計與音響工程。',
		],
		services: {
			label: '服務項目',
			items: [
				
				{
					number: '01',
					title: '影像配樂與聲音設計',
					body: '為影像量身打造原創音樂與聲音設計。動畫、品牌影片、電影、舞蹈。',
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
		process: {
			heading: '聲音設計流程',
			items: [
				{
					number: '01',
					title: '目標',
					body: '找出這件作品的聲音要達成什麼。觀眾該感覺到什麼，又該記得什麼。',
				},
				{
					number: '02',
					title: '定調',
					body: '決定聲音的質地、空間與距離。用什麼樂器，走旋律還是聲響，要隱晦還是華麗。',
				},
				{
					number: '03',
					title: '製作',
					body: '寫出完整的配樂與聲音設計，決定什麼該被聽見，什麼該退到後面。',
				},
				{
					number: '04',
					title: '混音',
					body: '混音之於聲音，就像調色之於影像。同樣的素材，可以修得奪目，也可以修得完全貼合場景。',
				},
			],
		},
	},
};
