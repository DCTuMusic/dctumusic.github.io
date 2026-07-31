# Content guide

How to add or update content on this site without touching any code.

## Links and IDs used across the site

`src/data/site.ts` is the one place for values that show up in more than one spot — contact email, social links (Instagram / Facebook / SoundCloud), and the showreel embed. Edit them there and every page that uses them (including both language versions) updates together.

## Add a portfolio project

1. Go to `src/content/portfolio/`
2. Duplicate an existing folder (e.g. `documentary-score/`) and rename it — the folder name becomes the page's URL (`/portfolio/your-folder-name`)
3. Put your cover image in that folder (jpg/png/webp all work), replacing `cover.svg`
4. Open `index.md` and fill in the frontmatter (the `---` block at the top):

```
title: "Project name"
titleZh: "案子的中文名稱"        # optional — see "Adding Traditional Chinese" below
client: "Client or director name"
year: 2024
role: "Composer"                     # optional
roleZh: "作曲"                       # optional
mediaType: ["Film", "Dance"]         # any labels you want — shows up as filter options automatically
musicGenre: ["Orchestral"]           # same — new genres just work, no setup needed
featured: true                       # true = shows on the homepage (keep this to 3 entries at a time)
cover: "./cover.jpg"                 # match whatever you named the image file
embeds: []                           # optional — see "Embedding video/audio" below
gallery: ["./photo2.jpg", "./photo3.jpg"]   # optional extra images, drop the files in the same folder
summary: "One or two sentences shown under the title."
summaryZh: "中文簡介"                 # optional
order: 6                             # controls display order — see "What order does" below
```

**Want line breaks in `summary`** (e.g. a credits list or festival laurels instead of a single sentence)? Writing text across multiple plain lines gets flattened into one line — instead use a `|` right after the field name, then indent every line under it by two spaces:

```
summary: |
  Director: Jane Doe
  Producer: John Smith

  2024 Some Film Festival (Official Selection)
  2024 Another Festival (Award Winner)
```

Blank lines inside that block become paragraph breaks on the page. This works the same way for `summaryZh` and any other text field.

5. Anything you write below the `---` block (the body text) shows as the longer description on the project's own page.
6. If a project isn't ready to publish yet, just don't create the folder — nothing needs "hiding."

To remove a project, delete its folder.

## What `order` does

`order` is just a sort key — it decides what comes first, nothing else. Lower numbers show up earlier:

- On the **Portfolio** page, projects are listed in `order` order.
- On the **Homepage**, the up-to-3 projects marked `featured: true` are picked in `order` order.
- On the **Art** page, pieces appear in `order` order in the list below the intro. (The rotating photo at the top is separate — see "Art page hero photos" below.)

It doesn't have to be sequential or unique — if two entries share a number, they just keep whatever order they'd otherwise fall in. Change the number whenever you want to reshuffle without renaming anything.

## Embedding video or audio (Vimeo, YouTube, SoundCloud, anywhere)

The `embeds` field (portfolio) and `showreelEmbed` (homepage, in `src/data/site.ts`) work the same way: **paste the full embed snippet**, not just a link or ID.

Every platform has a "Share → Embed" option that gives you a block of HTML looking like:

```
<iframe src="https://player.vimeo.com/video/123456789?h=abcdef" width="640" height="360" ...></iframe>
```

Copy that whole snippet and paste it in as-is (as a string) — you don't need to edit hash parameters or anything else in the URL. This works for Vimeo, YouTube, SoundCloud, or anything else that gives you an iframe embed code.

**The `width`/`height` on that snippet matter — they set the frame's shape.** The site reads those two numbers to decide the aspect ratio of the box the video sits in; it doesn't know or check the actual video file. If the numbers are wrong, the box comes out the wrong shape and the video ends up squished or letterboxed with black bars — even though the video itself is fine.

Don't trust the snippets in `dctumusic-archive.md` for this: many were normalized to a generic `640×360` regardless of what the actual video's real shape is, so a portrait clip pasted with those numbers will show black bars down the sides. Before pasting, get the real width/height one of two ways:

- Go back to the platform and copy a **fresh** embed snippet from its own Share → Embed panel — most reliable.
- For Vimeo specifically, check `https://vimeo.com/api/oembed.json?url=<the video's URL>` in a browser — it returns the true `width`/`height` in the response.

**Symptom to watch for**: if a freshly-added video looks squished, cropped, or has black bars on the page, this is almost always the cause — go back and fix the `width`/`height` on that embed's `<iframe>` tag.

**A portfolio project can have more than one.** `embeds` is a list, so if a project has a video *and* a separate SoundCloud track, just add both:

```
embeds:
  - '<iframe src="https://player.vimeo.com/video/123456789?h=abcdef" ...></iframe>'
  - '<iframe src="https://w.soundcloud.com/player/?url=..." ...></iframe>'
```

They'll stack in the order listed, each in its own frame. If a portfolio project has no embeds at all, its cover image is shown instead — so this field is always optional and can be left as `embeds: []`.

## Add an art piece

Same idea, in `src/content/art/`. Fields: `title`, `titleZh` (optional), `year`, `cover`, `embeds` (optional — works exactly like portfolio's `embeds`, see above), `images` (optional array — this is the piece's own gallery, separate from the site-wide hero photos below), `summary` (optional short write-up, shown on the piece's own page), `summaryZh` (optional), `order`. These show up in the alternating list on the Art page (the "full-bleed rotating photo" at the very top is a separate thing — see below).

Leave `summary` blank and the piece's page shows a placeholder box instead — same behavior as the homepage slogans.

Each piece also gets its own page at `/art/your-folder-name`, same as portfolio projects.

## Project page layout (Portfolio and Art)

Both project types render in this order: cover image or video embed, then the gallery grid, then the long-form body text, then credits (if any). Click any gallery photo to view it enlarged.

## Credits

Both portfolio and art entries support an optional `credits` list — free-form role/name pairs, shown at the bottom of the project's own page. Add as many as you need, in whatever order:

```
credits:
  - role: "Director"
    roleZh: "導演"        # optional
    name: "Jane Doe"
  - role: "Music Production"
    name: "DC"
```

Leave `credits: []` (or leave the field out entirely) and no Credits section shows at all — no placeholder box, it just doesn't render.

## Interleaving photos with body text

You're not limited to one block of text and a separate gallery — you can mix paragraphs and photos freely in the body (the part below the `---` in `index.md`), same as writing any Markdown file:

```
The piece started as a single recording made on a rooftop in Taipei.

![Rooftop recording setup](./rooftop.jpg)

Over the following months it grew into a four-channel installation...

![Installation view](./install-2.jpg)
```

Put the image file in the same folder as `index.md` and reference it with `./filename.jpg`. Each image gets styled and spaced automatically to match the rest of the page — no extra formatting needed. Plain text links also work with standard Markdown syntax: `[link text](https://example.com)`.

## Art page hero photos

The full-bleed photo that rotates at the very top of the Art page is intentionally a separate set of mood/atmosphere images — not tied to any individual piece below it.

To add, remove, or reorder them: go to `src/assets/art-hero/` and drop image files in there. Nothing else to configure — no `index.md`, no frontmatter.

- **Order**: controlled by filename, sorted alphabetically. Prefix files with a number, e.g. `01-skyline.jpg`, `02-studio.jpg`, `03-hands.jpg`.
- **How many**: any number — one photo just shows statically, two or more rotate.
- **Formats**: `.jpg`, `.png`, `.webp`, `.svg`.
- **Crossfade speed**: currently every 5 seconds. To change it, open `src/components/ArtHero.astro` and edit the `5000` (milliseconds) near the bottom.

## Homepage slogans and bio

All of this lives in one place: `src/data/homepage.ts`. It has an `en` block and a `zh-Hant` block, each with `heroTagline` (`heading` + `subtext`), `slogan1`, `slogan2`, `slogan3`, and `bio`. Fill in whichever strings you're ready to write — leave the rest as `''` and that section shows a placeholder box instead of breaking (the `heroTagline` is the exception: leaving `heading` blank just hides the text overlay on the hero video entirely, rather than showing a placeholder box on top of the video).

You don't need to touch `src/pages/index.astro` or `src/pages/zh-hant/index.astro` at all for this — both pages read from this same file and automatically pick the right language block.

## Homepage services section

Also in `src/data/homepage.ts`, right under `bio`, there's a `services` block — this is the numbered list (currently 01/02/03) shown right after the About section on the homepage:

```
services: {
  label: 'Services',              // small heading above the list
  items: [
    { number: '01', title: '...', body: '...' },
    { number: '02', title: '...', body: '...' },
    { number: '03', title: '...', body: '...' },
  ],
  howIWorkLabel: 'How I work',    // short label before the "｜"
  howIWork: '...',                // the sentence after it
},
```

Add, remove, or reorder entries in `items` freely — the list just renders whatever's there. Both the `en` and `zh-Hant` blocks have their own `services`, so update both if you want the change on both languages.

## Showreel video

Open `src/data/site.ts` and paste your embed snippet into `showreelEmbed` (see "Embedding video or audio" above). Both the English and Chinese homepage pick it up automatically.

## Contact email and social links

Open `src/data/site.ts` and edit `email` and the `socials` block (Instagram / Facebook / SoundCloud). Every page that shows these — the Contact page in both languages, the footer on every page — updates together.

## Images — practical notes

- Formats: `.jpg`, `.png`, `.webp`, `.svg` all work.
- You don't need to resize or compress images yourself — Astro's `<Image>` component optimizes them automatically at build time.
- Cover images don't need to share one fixed aspect ratio — the portfolio grid is a waterfall/masonry layout, so varied heights are expected and look better than uniform ones.

## Adding Traditional Chinese

Where the Chinese version of each kind of content goes:

- **Nav labels and other site-wide UI strings** — `src/i18n/ui.ts`, fill in the `'zh-Hant'` object.
- **Homepage slogans and bio** — `src/data/homepage.ts`, the `'zh-Hant'` block (see above).
- **Contact email / social links** — shared between languages by design (same email, same accounts), nothing to translate.
- **Portfolio project title / role / summary** — same `index.md` file as the English version, in the `titleZh` / `roleZh` / `summaryZh` fields right next to the English ones. Leave any of them blank and that entry falls back to the English text automatically.
- **Art piece title / summary** — same file, `titleZh` / `summaryZh` fields.
- **Portfolio/Art long-form body text** (the part below the `---` in `index.md`) — this is still English-only for now. It's a small enough amount of extra work to add a proper bilingual version later (most entries are just a placeholder sentence today anyway) — flag it when you're ready to write real long-form write-ups and it can be added the same way as the other `*Zh` fields.
