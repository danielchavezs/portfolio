# Portfolio Redesign Plan (Checklist)

Scope: refresh UI/UX with 2025/26 look, keep Intro + InfiniteSlider mostly intact, add project modal with gallery, update assets structure by id, and improve SEO. The description content must remain consistent; only add a short teaser for cards.

## 0) Constraints and Decisions
- Assets are organized by id: `public/projects/{id}/...`.
- Use absolute imports only (`@/...`).
- Short teaser on cards; full description in modal.
- Project URL is optional; show "Not available" when missing.
- Gradient backgrounds and simple OG/Twitter images should be created by agent.
- Glass effect and subtle glow can be used sparingly (cards/modal/sections).

## 1) Data Model and Assets
- [x] Update `ProjectType` in `src/app/assets/types.ts` to support:
  - `shortDescription: string`
  - `fullDescription: string`
  - `gallery: string[]`
  - `href?: string`
  - replace `images` with `cover`
- [x] Update `src/app/assets/seed.ts` to the new shape:
  - preserve existing full description content verbatim
  - add `shortDescription` teasers
  - add `gallery` (include cover + additional images)
  - remove hard dependency on `href`
- [x] Reorganize project assets to:
  - `public/projects/{id}/cover.png`, `public/projects/{id}/gallery-1.png`, etc
- [x] Update all image references to match the new paths

## 2) UI Components: Projects
- [x] Create a Projects section layout refresh (grid or stacked cards):
  - use card surface with optional glass effect
  - include title, date, tech tags (optional), teaser text
  - add a CTA button "View case study"
- [x] Implement modal + gallery (custom modal + scroll-snap gallery):
  - gallery horizontal on desktop, vertical on mobile
  - include full description + images
  - include project link button:
    - when `href` exists -> normal link
    - when missing -> disabled button with "Not available"
- [x] Ensure AOS remains functional or replace with consistent animation

## 3) About + Contact Refresh
- [x] Reflow layout into modern section blocks:
  - two-column on desktop, stacked on mobile
  - add glass card for contact info and resume
  - keep content copy the same
- [x] Improve CTA clarity (LinkedIn/GitHub/WhatsApp/Email)
- [x] Keep Contact form intact, update styles only

## 4) Visual System
- [x] Update `src/app/globals.css` to define new CSS variables:
  - background gradient (deep navy + blue)
  - subtle purple accent in gradients only
  - glass surface style (backdrop blur, border, shadow)
  - optional glow utility
- [x] Add soft background shapes (pseudo-elements or divs) for depth
- [x] Adjust typography scale and spacing (headings more impact)

## 5) SEO and Metadata
- [x] Update `src/app/layout.tsx` metadata:
  - title/description
  - Open Graph + Twitter
  - icons and OG image assets
- [x] Create simple gradient OG/Twitter images in `public/og/`

## 6) QA and Polish
- [ ] Responsive checks (desktop/tablet/mobile)
- [x] Modal focus + keyboard close (Escape + scroll lock)
- [x] Ensure `href` optional does not break
- [x] Run `pnpm build`

## Notes for Agent
- Keep changes minimal and aligned with existing component patterns.
- Avoid new dependencies unless using shadcn (allowed).
- Ensure all imports use `@/...`.
- Use TypeScript-safe updates.
