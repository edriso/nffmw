# NFFMW — Need for Frontend: Most Wanted

A gamified frontend engineering roadmap app. Track your journey through 5 phases of frontend mastery with a light NFS (Need for Speed) racing theme.

## Phases

1. **The Starting Line** — CSS, HTML/A11y, Browser Internals, JS Deep Dive
2. **Turbo Boost** — Advanced React, TypeScript, State Management, Next.js
3. **Nitro Zone** — Performance, Testing, Design Systems, Accessibility
4. **Pro Circuit** — Tooling/DX, API Layer, Architecture
5. **The Blacklist** — Build in Public, Write/Teach, Open Source, Soft Skills

## Features

- 19 topics with detailed focus areas, notes, takeaways, purpose, and relevance
- Progress tracking persisted in localStorage
- Speed ranks per phase: Parked / Cruising / Speeding / Finished
- "Most Wanted" banner when all topics are cleared
- Prev/next navigation across phase boundaries
- Responsive design (mobile/tablet/desktop)

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router v7

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── main.jsx                    # Entry point — wraps App in BrowserRouter
├── App.jsx                     # Route definitions (3 routes)
├── index.css                   # Tailwind imports + NFS theme colors + global styles
├── data/
│   └── roadmap.js              # All content lives here (single source of truth)
├── hooks/
│   └── useProgress.js          # localStorage-backed progress state
├── utils/
│   └── progress.js             # Completion %, speed rank calculations
├── components/
│   ├── Layout.jsx              # Shell: Header + <Outlet> + Footer + scroll-to-top
│   ├── Header.jsx              # Logo, overall progress bar, Most Wanted banner
│   ├── Footer.jsx              # Minimal footer
│   ├── ProgressBar.jsx         # Reusable animated progress bar
│   ├── PhaseCard.jsx           # Phase card for the home grid
│   ├── TopicCard.jsx           # Topic row with checkbox + link
│   ├── CheckpointCheckbox.jsx  # Accessible styled checkbox
│   ├── SpeedBadge.jsx          # Parked / Cruising / Speeding / Finished label
│   └── BackLink.jsx            # Back arrow breadcrumb
└── pages/
    ├── HomePage.jsx            # Grid of 5 phase cards
    ├── PhasePage.jsx           # Phase detail: topic list with checkboxes
    └── TopicPage.jsx           # Full topic view: 5 content sections + prev/next
```

## How to Update

### Edit topic content

All roadmap content is in `src/data/roadmap.js`. Each topic has these fields:

```js
{
  id: "topic-slug",        // used in URLs — don't change existing ones
  title: "Topic Title",
  focus: [],               // what to focus on (array of strings)
  notes: [],               // learning tips and observations
  takeaways: [],           // key things to remember
  purpose: "",             // why this topic matters
  relevance: "",           // career/market relevance
}
```

To add a new topic, add it to the `topics` array of the relevant phase. The app picks it up automatically — no other files need to change.

### Add a new phase

Add a new object to the `roadmap` array in `roadmap.js` with an `id`, `title`, `tagline`, `icon`, and `topics` array. That's it — routing and progress tracking are dynamic.

### Change theme colors

Edit the `@theme` block in `src/index.css`. All components use `nfs-*` color names from there.

### Progress storage

Progress is stored in localStorage under the key `nffmw-progress` as `{ "topic-id": true }`. The `useProgress` hook in `src/hooks/useProgress.js` handles read/write. The hook is called once in `Layout.jsx` and passed down via React Router's `useOutletContext`.

## Notes

- **No backend** — everything runs client-side. Progress lives in localStorage.
- **Single data file** — `roadmap.js` is the only file you need to edit for content changes. It also exports helper functions (`getPhase`, `getTopic`, `getAdjacentTopics`, `allTopics`).
- **Slug-based routing** — URLs use topic/phase IDs as slugs (e.g. `/phase/turbo-boost/topic/advanced-react`). Don't rename existing IDs or saved progress will break.
- **Progress is passed via Outlet context** — pages access `{ progress, toggleTopic, resetProgress }` through `useOutletContext()`, not prop drilling or global state.
- **Speed ranks** — calculated from completion percentage: 0% = Parked, 1-49% = Cruising, 50-99% = Speeding, 100% = Finished. Logic is in `src/utils/progress.js`.
