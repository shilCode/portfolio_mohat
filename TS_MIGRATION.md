Migration notes — Convert project to TypeScript

This project has been prepared to support TypeScript for gradual migration.

What I changed:
- Added `tsconfig.json` with `allowJs: true` so JS/JSX files continue to work while you migrate.
- Installed `typescript`, `@types/react`, and `@types/react-dom` as devDependencies.
- Added an alias `@` -> `src` in `vite.config.js` and mirrored the path in `tsconfig.json`.

Recommended incremental migration steps:
1. Rename entry files first:
   - `src/index.jsx` -> `src/index.tsx`
   - `src/App.jsx` -> `src/App.tsx`
2. Convert components one-by-one from `.jsx` to `.tsx` and add typed props.
3. If a file contains only JS logic (no JSX), rename to `.ts` and add/types annotations.
4. Keep `allowJs: true` until all files are migrated, then set `allowJs: false` and enable stricter checks.
5. Run `npm run dev` frequently and fix type errors incrementally.

Quick commands

Install dependencies (already done):
```bash
npm install
```

Start dev server:
```bash
npm run dev
```

Build:
```bash
npm run build
```

If you want, I can:
- Convert a few example components to TypeScript (`App`, `index`, and one section) to show the pattern.
- Add linting (ESLint + TypeScript) and a pre-configured rule set for safety.

