# Copilot Instructions for AI Agents

## Project Overview
- **Architecture:**
  - Monorepo with `frontEnd/` (Vue 3 + Vite + TypeScript) and `backEnd/` (PocketBase binary, data, and migrations).
  - `frontEnd/` is a SPA using Vue SFCs (`<script setup>`) and TypeScript. Entry: `src/main.ts`, root component: `src/App.vue`.
  - `backEnd/` runs PocketBase (Go-based backend) via `pocketbase.exe`, with data in `pb_data/` and schema migrations in `pb_migrations/`.

## Developer Workflows
- **Frontend:**
  - Install dependencies: `npm install` in `frontEnd/`
  - Start dev server: `npm run dev` (Vite)
  - Build: `npm run build`
  - Main config: `vite.config.ts`, TypeScript: `tsconfig*.json`
- **Backend:**
  - Run backend: execute `pocketbase.exe` in `backEnd/`
  - Data and files: `pb_data/` (databases, file storage)
  - Migrations: JavaScript files in `pb_migrations/` (run via PocketBase CLI or manually)

## Project-Specific Patterns
- **Frontend:**
  - Vue components in `src/components/`, styles in `src/styles/` (SCSS and Tailwind CSS)
  - API communication: see `src/pocketBase.js` and `src/api.js` for PocketBase client usage
  - Use `<script setup lang="ts">` in Vue SFCs
  - Use composables and utility components in `src/components/utils/`
- **Backend:**
  - No custom Go code; backend logic is managed via PocketBase's built-in features and migrations
  - Migrations are timestamped JS files in `pb_migrations/`

## Integration Points
- **Frontend ↔ Backend:**
  - Communicate via PocketBase REST API (see `src/pocketBase.js`)
  - File uploads and static assets are stored in `backEnd/pb_data/storage/`

## Conventions & Tips
- Use clear, timestamped migration filenames for schema changes
- Keep frontend and backend code separated by directory
- Reference `README.md` in `frontEnd/` for Vue/Vite/TypeScript setup tips
- For new features, add Vue components to `src/components/` and register routes in `src/router.ts`

## Key Files & Directories
- `frontEnd/src/` — main app source
- `frontEnd/src/pocketBase.js` — PocketBase API client
- `backEnd/pb_migrations/` — backend schema/data migrations
- `backEnd/pb_data/` — database and file storage

---
For more details, inspect the respective `README.md` or config files in each subproject.
