<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Next.js 16.4.6 App Router project (created with `create-next-app`), later initialized with shadcn CLI. React 19, TypeScript strict mode, Tailwind v4 via Turbopack. Package manager: **bun**.

## Commands

- `bun run dev` — dev server on port 3000 (Turbopack)
- `bun run build` — production build
- `bun run start` — serve the build
- `bun run lint` — ESLint (`eslint-config-next` core-web-vitals + typescript)

No test runner or typecheck script is configured. `next build` type-checks during build.

## Configuration that bites

- `next.config.ts` sets `cacheComponents: true` and `partialPrefetching: true`. `partialPrefetching` **requires** `cacheComponents` — `next dev`/`next build` throw at config validation otherwise. Don't remove either.
- `cacheComponents` enables `use cache` directive, `cacheLife`, `cacheTag`, and Partial Prerendering by default. `runtime` route segment config is unsupported with it.
- Turbopack handles CSS via `@tailwindcss/turbopack` loader in `next.config.ts`. No webpack/postcss config exists.
- `experimental.agentFeedback: true` is set. Running `next dev` as an agent will write a managed `<!-- BEGIN:nextjs-agent-feedback -->` block into this file. Commit it with your work to keep the tree clean.

## shadcn / UI conventions

- shadcn initialized with `--preset base-mira --template next --rtl --pointer`. Components live under `components/ui/`, utils in `lib/utils.ts`.
- Import aliases from `components.json`: `@/components`, `@/lib/utils`, `@/ui`, `@/hooks`.
- Primitives come from **`@base-ui/react`** (not radix-ui). `lib/utils.ts` re-exports `cn` from the `cn` package — use `import { cn } from "@/lib/utils"` for className merging.
- `app/globals.css` uses Tailwind v4 `@theme inline` + `@apply`; dark mode via `.dark` class (not `prefers-color-scheme` media query — the old media rule was replaced by `@custom-variant dark`).
- `@animate-ui/react` and `motion` are installed. Use `npx @animate-ui/cli@latest animate <component>` to swap shadcn primitives for Animate UI primitives.

## Gotchas

- `next-env.d.ts` is auto-generated; do not edit.
- `.next/`, `out/`, `build/`, `node_modules` are git-ignored.
- `package.json` declares `ignoreScripts` for `sharp` and `unrs-resolver` — bun install may skip their postinstall hooks.