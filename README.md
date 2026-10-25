# Consumer Behaviour — Exam Prep

A static, module-wise study website for Consumer Behaviour, built from five course PDFs (Modules I–V). Every content block is labelled by where it comes from:

- **PDF Source: file, page** — taken from a slide in the course PDFs
- **Additional Explanation** — supplementary textbook material, not on the slides
- **Real-Life Example** — illustrative examples, mostly Indian businesses

## What's inside

| Section | Contents |
|---|---|
| Modules I–V | One page per topic, plus an **Exam preparation** page (5, 10 and 15-mark answer frameworks, important questions, common mistakes) and a **Revision notes** page (summary, key terms, quick-recall points) per module |
| Final Recap & Exam Revision | High-priority topics, theories and authors, diagrams to practise, key comparisons, numbers to remember, last-minute points |
| Topic & term index | Filterable A–Z index of about 150 theories, models, definitions and authors |
| Source coverage map | All 86 PDF pages, what each contains, and which topic explains it |
| Print views | `#/print/m1` … `#/print/m5` and `#/print/all` for saving notes as PDF |

Interactive diagrams (pyramid, matrices, flows, icebergs, hubs, toggles) are built from plain HTML buttons, so they work with keyboard and screen readers. Each diagram's explanations also print underneath it.

**Features:** persistent sidebar on desktop and collapsible menu on mobile, full-text search (press `/`), clickable on-page contents, previous/next navigation (`[` and `]`), light/dark theme, reading-progress bar, back-to-top button, print-friendly styles, reduced-motion support.

### Module sources

| Module | PDF | Pages | Title |
|---|---|---|---|
| I | `CB_MODULE I.pdf` | 29 | Consumer Behaviour |
| II | `CB_Module II.pdf` | 25 | Consumer behaviour (motivation, personality, self-concept, perception) |
| III | `CB_MODULE III.pdf` | 10 | Learning Theories and Their Applications |
| IV | `CB_MODULE IV.pdf` | 14 | Self-Concept |
| V | `CB_MODULE V.pdf` | 8 | Family Life Cycle |

Module V's title topic (family life cycle) appears only on its title slide, so that topic page is written from standard textbooks and labelled accordingly.

## Project structure

```
.
├── index.html              # App shell: top bar, sidebar, main area
├── vercel.json             # Optional headers for Vercel
├── assets/
│   ├── favicon.svg
│   ├── css/
│   │   ├── styles.css      # Glassmorphism theme, layout, diagrams, responsive rules
│   │   └── print.css       # Print / Save-as-PDF styles
│   └── js/
│       ├── diagrams.js     # Diagram builders (flow, hub, pyramid, matrix, iceberg, …)
│       └── app.js          # Hash router, navigation, search, TOC, theme, progress, print
└── content/
    ├── helpers.js          # Content registry and source-tag helpers
    ├── module1.js … module5.js
    ├── recap.js            # Final Recap & Exam Revision
    └── coverage.js         # Page-by-page coverage of every PDF
```

No build step, framework, backend or API keys. Fonts load from Google Fonts and fall back to system fonts if unavailable.

## Run locally

Any static file server works. From the project folder:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

or

```bash
npx serve .
```

Opening `index.html` directly from the file system also works, because content is loaded with ordinary `<script>` tags.

## Deploy to Vercel (free)

**From GitHub (recommended)**

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Other**. Leave Build Command and Output Directory empty (the root folder is served as-is).
4. Click **Deploy**. Every push to the default branch redeploys automatically.

**From the command line**

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

## Editing content

Each module file calls `CB.addModule({...})` with a list of topics. Topic HTML uses small helpers from `content/helpers.js`:

```js
pdf(1, '3', '<p>Text from slide 3</p>')   // PDF-sourced block
add('<p>Supplementary explanation</p>')   // Additional Explanation block
ex('<p>Indian example</p>')               // Real-Life Example block
D.flow({ title: '…', items: [{ t: 'Step', d: 'What it means' }] })  // diagram
```

Add terms for the index with `CB.addTerms('m1', [[term, topicId, definition], …])`, and update `content/coverage.js` if slides change.
