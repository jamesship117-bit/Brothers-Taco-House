# Brothers Taco House

Marketing site for Brothers Taco House (Houston). Built with [Next.js](https://nextjs.org/) (App Router), React, and custom global styles. Tailwind is present for legacy utilities; primary layout and theme live in `app/globals.css`.

## Requirements

- Node.js 20+ (LTS recommended; Vercel currently uses Node 24.x on this project)
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port Next prints if 3000 is in use).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Next.js dev server       |
| `npm run build`| Production build         |
| `npm run start`| Run production build     |
| `npm run lint` | ESLint via `next lint`   |

## Deployment (Vercel)

This repo is connected to the Vercel project **brothers-taco-house**. Production URL: [brothers-taco-house.vercel.app](https://brothers-taco-house.vercel.app).

**Important:** The project must be built as **Next.js**, not as a generic static “Other” preset. If the framework is wrong, Vercel can show a platform `404 NOT_FOUND` even when the Git build succeeds.

This repository includes [`vercel.json`](vercel.json) to pin:

- `framework`: `nextjs`
- `buildCommand`: `npm run build`

Do not set a custom **Output Directory** for this app unless you intentionally use static export (`output: 'export'`). For standard Next on Vercel, leave output at the default.

Git pushes to `main` trigger production deployments when the Git integration is enabled.

## Project layout

- `app/` — routes (`page.tsx`, `layout.tsx`, `menu/page.tsx`)
- `components/` — shared UI (header, footer, logo)
- `lib/menu-data.ts` — copy and menu structure
- `public/` — static assets (e.g. logo PNG)

## License

Private project (`"private": true` in `package.json`).
