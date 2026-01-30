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
  - `mobileGallery?: string[]`
  - `href?: string`
  - replace `images` with `cover`
- [x] Update `src/app/assets/seed.ts` to the new shape:
  - preserve existing full description content verbatim
  - add `shortDescription` teasers
  - add `gallery` (include cover + additional images)
  - add `mobileGallery` for mobile-specific assets
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
- [x] Add loader mock component for future integration

## Post-Plan Enhancements (Applied)
- Added reusable SVG loader component with updated purple tone (`src/app/components/Loader.tsx`) and saved asset (`public/loader.svg`).
- Restored original purple-to-orange gradient for the hero subtitle (`src/app/components/Intro/Tittle.tsx`).
- Recentered Intro profile picture alignment on desktop (`src/app/components/Intro/Intro.tsx`).
- Enabled modal internal scrolling without locking page scroll (`src/app/components/Projects/ProjectModal.tsx`).
- Added themed global scrollbars to match the app background (`src/app/globals.css`).
- Updated gallery UX to show both desktop and mobile images with filters and labels (`src/app/components/Projects/ProjectGallery.tsx`).

## Notes for Agent
- Keep changes minimal and aligned with existing component patterns.
- Avoid new dependencies unless using shadcn (allowed).
- Ensure all imports use `@/...`.
- Use TypeScript-safe updates.
