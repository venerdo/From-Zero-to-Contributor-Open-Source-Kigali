# From Zero to Contributor — Open Source Kigali x ALU

Interactive 22-slide presentation (React 18, TypeScript, Tailwind CSS 3, Vite) for the OSK session at ALU, plus a searchable Git & GitHub handbook. It opens directly into the slides. No backend, no environment variables.

## Run
```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the build
```

**This slide is deployed to Vercel**
URL: [from-zero-to-contributor-open-sourc.vercel.app](https://from-zero-to-contributor-open-sourc.vercel.app/)

## Edit content
- **Slides and speaker notes:** `src/slides/slides.ts`. Each entry has `id`, `title`, `layout`, text fields and `notes`.
- **Add or reorder slides:** add, remove or move objects in that array. Numbering, URL, title, overview and print all follow the array order.
- **Layouts:** `title`, `statement`, `cards`, `steps`, `bullets`, `rows` (rendered in `src/components/SlideView.tsx`).
- **Commands and links:** `src/data/commands.ts`, `src/data/resources.ts`.
- **Handbook:** edit `src/content/handbook.md`; it is rendered automatically.
- **Colours:** CSS variables at the top of `src/styles/presentation.css`.

## Controls
Right / Space / Page Down: next · Left / Shift+Space / Page Up: previous · Home / End · F fullscreen · O overview · N notes · S navigator · C commands · ? help · swipe left/right on touch. URLs: `?slide=N`, `?view=handbook`, `?print=1` (print to PDF, landscape 16:9, no margins).

Prepare and sign off by: **Ushindi Bihame Victoire**