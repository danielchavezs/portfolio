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
- [ ] Update `ProjectType` in `src/app/assets/types.ts` to support:
  - `shortDescription: string`
  - `fullDescription: string`
  - `gallery: string[]`
  - `href?: string`
  - keep `images` or replace with `cover` (decide and apply consistently)
- [ ] Update `src/app/assets/seed.ts` to the new shape:
  - preserve existing full description content verbatim
  - add `shortDescription` teasers
  - add `gallery` (include cover + additional images)
  - remove hard dependency on `href`
- [ ] Reorganize project assets to:
  - `public/projects/6/cover.png`, `public/projects/6/gallery-1.png`, etc
  - same for ids 4,3,2,1 (and any new ones)
- [ ] Update all image references to match the new paths

## 2) UI Components: Projects
- [ ] Create a Projects section layout refresh (grid or stacked cards):
  - use card surface with optional glass effect
  - include title, date, tech tags (optional), teaser text
  - add a CTA button "View case study"
- [ ] Implement modal + gallery:
  - use shadcn `Dialog` for desktop
  - use shadcn `Drawer` for mobile (vertical layout)
  - use shadcn `Carousel` for gallery
  - gallery horizontal on desktop, vertical on mobile
  - include full description + images
  - include project link button:
    - when `href` exists -> normal link
    - when missing -> disabled button with "Not available"
- [ ] Ensure AOS remains functional or replace with consistent animation

## 3) About + Contact Refresh
- [ ] Reflow layout into modern section blocks:
  - two-column on desktop, stacked on mobile
  - add glass card for contact info and resume
  - keep content copy the same
- [ ] Improve CTA clarity (LinkedIn/GitHub/WhatsApp/Email)
- [ ] Keep Contact form intact, update styles only

## 4) Visual System
- [ ] Update `src/app/globals.css` to define new CSS variables:
  - background gradient (deep navy + blue)
  - subtle purple accent in gradients only
  - glass surface style (backdrop blur, border, shadow)
  - optional glow utility
- [ ] Add soft background shapes (pseudo-elements or divs) for depth
- [ ] Adjust typography scale and spacing (headings more impact)

## 5) SEO and Metadata
- [ ] Update `src/app/layout.tsx` metadata:
  - title/description
  - Open Graph + Twitter
  - icons and OG image assets
- [ ] Create simple gradient OG/Twitter images in `public/og/`

## 6) QA and Polish
- [ ] Responsive checks (desktop/tablet/mobile)
- [ ] Modal focus trap and keyboard close (Dialog/Drawer default)
- [ ] Ensure `href` optional does not break
- [ ] Run `pnpm lint` and `pnpm build` if time permits

## Notes for Agent
- Keep changes minimal and aligned with existing component patterns.
- Avoid new dependencies unless using shadcn (allowed).
- Ensure all imports use `@/...`.
- Use TypeScript-safe updates.
