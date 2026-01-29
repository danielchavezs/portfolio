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

