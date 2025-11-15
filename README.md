# Streaming Dashboard Clone (Next.js + TypeScript + Tailwind)

This repository is a starter scaffold for the StoryBit frontend assignment: a small streaming-dashboard (Netflix/Hulu) clone using Next.js 14 App Router, TypeScript, and Tailwind.

Quick start (after cloning):

1. Install dependencies (choose manager):

```powershell
# using npm
npm install

# or using pnpm
pnpm install

# or using yarn
yarn install
```

2. Copy the example env and add your TMDB API key (optional):

```powershell
copy .env.local.example .env.local
# then edit .env.local and set TMDB_API_KEY
```

3. Run the dev server:

```powershell
npm run dev
```

Notes:
- If no `OMDB_API_KEY` is provided the app uses minimal mock data so the UI can render locally.
- The `AI_Report.md` contains details about AI assistance used to scaffold this starter.
