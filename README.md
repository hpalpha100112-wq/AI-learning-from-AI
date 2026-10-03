# Pulse — AI Learning Command Center

A polished React/Vite front-end for an AI learning platform designed around a 24-hour learning cycle.

## Product DNA

- **The Rundown AI** → daily brief + guides + tools + courses + action-oriented learning.
- **AInformed** → daily digest, topic taxonomy and source-oriented discovery.
- **Hugging Face Learn** → modular learning tracks and progressive skill architecture.
- **Krea** → minimal, visual-first interface language with low-friction actions.
- **Codrops Creative Hub** → 3D core, motion, hover and experimental-web inspiration.

The implementation does not copy their branding or page layouts. It translates the selected patterns into the Pulse product language.

## Included pages

- `/` — Command Center / daily overview
- `/pulse` — AI Pulse with topic filters
- `/learn` — modular learning map
- `/tools` — practical tool radar
- `/playbook` — daily 50-minute action sequence
- `/lab` — game invitation / Game Lab landing
- `/game` — extensible scenario game room (starter mechanics only)
- `/progress` — learning streaks, XP and badges
- `/sources` — reference-to-product mapping

## Local setup

### 1. Install Node.js

Node 20+ is recommended. Node 22 works well.

### 2. Install packages

```bash
npm install
```

### 3. Start development

```bash
npm run dev
```

Open the local URL Vite prints in Terminal.

### 4. Production build

```bash
npm run build
npm run preview
```

## Vercel deployment

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Important: the 24-hour data engine

The UI includes the daily-cycle experience and refresh indicator, but the bundled content is intentionally demo data so the project can run immediately without API keys.

For a production data layer, add a server/edge function that:

1. Fetches allowed RSS/API feeds from your selected AI sources.
2. Deduplicates stories by canonical URL.
3. Classifies items into models, agents, research, open-source, tools, industry and policy.
4. Generates `what changed`, `why it matters`, `try this`, and `learn this` fields.
5. Caches a daily snapshot and exposes it to the React UI.
6. Records the refresh timestamp so the front-end can display the exact cycle.

A clean production API contract is:

```json
{
  "date": "2026-10-02",
  "refreshedAt": "2026-10-02T06:00:00Z",
  "stats": { "updates": 12, "tools": 8, "research": 4 },
  "stories": [],
  "tools": [],
  "playbook": []
}
```

## Game extension point

`src/pages/Game.jsx` is intentionally small. The invitation surface and the game room already exist. The game rules, scoring, level system, timer and question bank can be replaced with your next specification without changing the main navigation.
