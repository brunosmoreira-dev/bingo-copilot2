# AI Agent Instructions for bingo-copilot2

This repository is a Vite + React + TypeScript + Tailwind CSS project for a bingo game workshop.

## Key facts
- Uses React 19 with functional components and hooks.
- TypeScript project with `tsconfig.json` and `vite.config.ts`.
- Tailwind CSS configured via `@tailwindcss/vite`.
- Tests use Vitest with `src/test/setup.ts`.
- The repository includes workshop content under `workshop/` for guided exercises.

## Important files
- `package.json` — scripts and dependencies.
- `vite.config.ts` — Vite/Tailwind/test config.
- `src/App.tsx` — app entry component.
- `src/hooks/useBingoGame.ts` — game state and logic hook.
- `src/components/` — UI components for the game.
- `src/utils/bingoLogic.ts` — bingo board generation and win detection.
- `src/data/questions.ts` — bingo question pool.
- `workshop/` — lab guide and exercises (do not change unless requested).

## Recommended workflows
- Use `npm install` to install dependencies.
- Use `npm run dev` to start the local dev server.
- Use `npm run build` to build production assets.
- Use `npm run lint` to run ESLint.
- Use `npm test` to run Vitest.

## Agent behavior
- Prefer small, incremental edits and preserve project structure.
- Avoid modifying workshop guides unless the task explicitly involves documentation.
- Keep styling in existing Tailwind classes and avoid adding unrelated global UI frameworks.
- When changing behavior, update or add tests in `src/utils/bingoLogic.test.ts` or nearby relevant test files.

## Notes for maintainers
- There is no existing `.github/copilot-instructions.md` or `AGENTS.md` in this repository prior to adding this file.
- The project is designed for a dev container and Codespaces environment, but local development with Node.js 22+ is supported.
