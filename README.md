# Portfolio

Personal portfolio site built with Next.js and Tailwind CSS.

## Tech stack
- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript
- Framer Motion

## Getting started
Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000

## Scripts
- `pnpm dev`: Start the local dev server
- `pnpm build`: Build for production
- `pnpm start`: Start the production server
- `pnpm lint`: Run Next.js lint

## Configuration
- Contact form submissions use Web3Forms in `src/app/actions/contactFormAction.ts`.
- The access key is currently hardcoded in `src/app/assets/utils.ts` as `MAIL_ACCESS_KEY`. Replace it with your own key (ideally via an environment variable).

## Project structure
- `src/app/page.tsx`: Home page
- `src/app/components`: Shared UI components
- `src/app/actions`: Server actions
- `public`: Static assets

## Deployment
Build and run:

```bash
pnpm build
pnpm start
```
