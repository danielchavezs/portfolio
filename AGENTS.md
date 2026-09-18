# Agent instructions

## Project basics

- Framework: Next.js (App Router) with React, TypeScript, and Tailwind CSS.
- Package manager: pnpm (`pnpm-lock.yaml` is the source of truth).

## Common commands

- `pnpm dev` for local development
- `pnpm build` for production builds
- `pnpm start` to run the production server
- `pnpm lint` to lint

## Configuration notes

- Contact form submissions use Web3Forms in `src/app/actions/contactFormAction.ts`.
- The access key is currently hardcoded in `src/app/assets/utils.ts` as `MAIL_ACCESS_KEY`.

## General Instructions
- Use only absolute imports("@"), not relative ones.

## Repo conventions

- Keep changes minimal and aligned with existing component patterns in `src/app/components`.
- Prefer TypeScript-safe changes and avoid introducing new dependencies unless requested.

## Multi-Agent / "Ultra" Mode Discipline

Applies to any high-concurrency multi-agent orchestration mode — Claude Code's "Ultra" mode, Codex's equivalent, or any other setup where one agent spawns and manages sub-agents.

- **Size the fan-out to the task, not to the mode.** Concurrent/parallel sub-agents are fine when they genuinely help, but the orchestrator must weigh effectiveness against efficiency (cost, time, usage burn) before spawning them. Do not default to spawning tens or hundreds of sub-agents when a handful — or one — would do the job.
- **The orchestrator owns sub-agent liveness.** It is solely responsible for noticing and recovering from a stalled, hung, or silently-failed sub-agent — not the human.
- **The orchestrator owns sub-agent output quality.** Delegating a task does not discharge responsibility for the result. Review what a sub-agent returns for correctness and completeness before relying on it or passing it along.
- **The orchestrator owns context and skill handoff.** Give each sub-agent the relevant scope, constraints, and prior findings, plus the right skills/tools where applicable, rather than sending it in cold.
- **Never blindly accept sub-agent output.** Validate results — re-read, spot-check, or adversarially verify as the risk warrants — before merging, reporting, or acting on them.

**Preferred (not mandatory) — cheaper-model teams for reads.** For large-surface read-only work (broad exploration, multi-file audits, log/data sweeps), prefer a stronger model orchestrating a team of sub-agents on a smaller/cheaper model — e.g. for Claude: Fable 5.1 or Opus 5 orchestrating Sonnet 5 sub-agents; for Codex: GPT-5.6 Terra/Sol or GPT-6 Astra orchestrating GPT-5.6 Luna sub-agents. No separate approval is needed for this — it is the default for read-only fan-out.

**The same pattern for build/write work is preferred but needs a check-in first.** The same "cheap model does the bulk work, strong model validates before accepting and reporting to the human" pattern can extend to writing code, but — unlike reads — ask which approach the human prefers before using it on write operations, rather than applying it by default.

