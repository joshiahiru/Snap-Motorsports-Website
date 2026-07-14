# Snap Motorsports — Design System

Snap Motorsports manufactures suspension parts — coilovers, dampers, sway bars,
bushings, and related hardware — for track and street cars. The brand serves two
overlapping audiences: weekend track-day drivers upgrading a daily, and
dedicated racers speccing a build. Everything in this system should read as
**precision hardware**, not lifestyle apparel: technical, confident, exact.

## Sources

This system was built entirely from a small brand drop, not a codebase or
Figma file:

- `uploads/Logo.svg` — primary lockup (blue plate + white wordmark)
- `uploads/Logo on Page.svg` — the lockup placed on a page, for scale/clearance reference
- `uploads/Logo Square.png` — square/social version of the lockup
- `uploads/Style Guide.docx` — one-page brand sheet: logo, font names, and color spec

No product codebase, Figma file, deck, or existing website was provided. There
is **no defined component inventory or product UI to recreate**, so the
component set below is a standard, from-scratch set sized to what a
performance-parts storefront needs (see "Components" in the index), and the
UI kit is an original recreation-style layout for a plausible Snap Motorsports
storefront — not a copy of an existing site.

If a real codebase, Figma file, or additional brand materials (packaging,
signage, past ads, real font files) exist, attach them and this system should
be revised to match — see the ask at the end of this file.

## Brand sheet, verbatim

From `Style Guide.docx`:

- **Logo Font Main:** Bicyclette Black
- **Logo Font Sub:** Bicyclette Oblique
- **Color:** RGB 0, 107, 166 · HEX `#006BA6` · CMYK 100/36/0/35 · Pantone 307 U/C · RAL 5007

That's it — one color, two font names, no type scale, no secondary palette, no
UI. Everything else in this system (neutrals, semantic colors, spacing,
shadow, motion, and the component/UI-kit designs) is derived to be consistent
with that single data point and the tone of the logo itself, and should be
treated as a proposal to refine, not settled brand law.

## Fonts

**Bicyclette** (Kostić Type Foundry) — real font files were supplied and are
now self-hosted in `assets/fonts/`: Thin, Light, Regular, Italic, Bold,
Black, and Ultra. `--font-display` uses Bicyclette Ultra/Black; `--font-body`
and `--font-label` use Bicyclette Regular/Bold/Italic. No substitution
remains for the brand typeface.

**IBM Plex Mono** is self-hosted from an uploaded file and used for
`--font-mono` (specs/part numbers).

## Content fundamentals

Voice and tone are inferred from the logo/brand tone (blunt, technical,
performance-focused) and the product category — there is no existing copy
corpus to draw from, so treat this section as a proposed starting point:

- **Direct address, second person.** Speak to the driver building their car —
  "you," not "our customers." Imperative verbs for CTAs: "Build Your Kit,"
  "Find Your Fitment," "Shop Coilovers" — not "Learn More."
- **Spec-first, adjective-last.** Lead with the number, not the feeling:
  "32-way adjustable damping" before "confidence-inspiring." The audience is
  buying measurable performance; let the spec do the persuading.
- **Short, clipped sentences.** Motorsport copy reads like pit-lane radio —
  no filler, no throat-clearing. Prefer fragments over compound sentences.
- **Case:** Sentence case for body copy and UI labels. ALL CAPS is reserved
  for the logo lockup, eyebrow labels, and short badges/tags (e.g. "IN STOCK,"
  "TRACK-READY") — never for full sentences.
- **No emoji, no exclamation-point enthusiasm.** This is a technical brand
  bought by people who read torque specs for fun; keep the register flat and
  competent, closer to a spec sheet or a pit crew than a lifestyle ad.
- **Vocabulary:** street/track dual-use framing throughout ("built for the
  street, proven on track"), fitment/compatibility language (year/make/model,
  "confirm fitment"), and racing-adjacent verbs (dial in, set up, drop it).
- Example headline in this voice: "Coilovers. Dialed in for street or track."
  Example UI label: "IN STOCK — SHIPS TODAY." Example body line: "32-way
  adjustable, monotube construction, rebuildable for the life of the car."

## Visual foundations

- **Color:** one brand color, `#006BA6` (Snap Blue), used deliberately and
  sparingly — as a flat fill (the logo plate, primary buttons, active states),
  never as a gradient. Neutrals are cool, blue-tinted steel grays (`--snap-ink-*`,
  derived in OKLCH from the same hue) rather than true black/gray, so dark UI
  and light UI both feel like the same brand. Semantic colors (success/warning/
  danger) are desaturated to match the brand's flat, industrial mood — no
  candy-bright alerts.
- **Type:** heavy, wide, blocky display type (Bicyclette Ultra/Black, the
  real brand face) for headlines and big numbers/specs; Bicyclette Italic
  for eyebrows, labels, and catalog-style sub-lines; Bicyclette
  Regular/Bold for body copy. Display type is set tight (`line-height ~1.0`,
  slightly negative tracking); labels are set with wide positive tracking in
  caps, echoing the logo's "MOTORSPORTS" sub-line.
- **Backgrounds:** flat color fields — the brand blue plate, near-black
  panels, or plain white/light-gray surfaces. No gradients, no soft blurred
  blobs, no decorative illustration. Photography (product/vehicle shots)
  runs full-bleed and high-contrast when used; this system ships with
  placeholders only — no real product/vehicle photography was provided.
  Nothing textured or hand-drawn; this is a hard-edged, manufactured-goods
  brand, not a craft/artisan one.
- **Shape & radius:** mostly square. The logo plate and hero panels are hard
  right angles. Radius is used sparingly and only on small interactive
  controls (buttons, inputs, chips) at 2–6px — never pill-shaped except true
  pill/badge components, and never large soft "app-card" rounding.
  Component surfaces (cards, panels) default to `--radius-md` (4px) with a
  hairline border, not radius+shadow.
  cards look like spec plates: `1px` hairline border, `--radius-md`, flat
  white or ink surface, no drop shadow at rest — shadow appears only on
  raised/hover states (`--shadow-md`) or true overlays (`--shadow-lg`).
- **Shadows:** hard-edged and low-opacity, never soft ambient glows. Reserved
  for elevation that matters (dropdowns, dialogs, hovered cards) — flat
  surfaces at rest have none.
- **Borders:** hairline (`1px`) cool-gray borders do most of the separation
  work instead of shadow or background-color changes; a `2px` brand-blue
  border marks focus/selection instead of a glow.
  Never a colored left-border "accent strip" card — separation is a full
  hairline border or a flat color block, not a stripe.
- **Hover / press states:** hover darkens fills one step (`--color-brand` →
  `--color-brand-hover`) and, on outline/ghost elements, fills in with a flat
  tint — no lightening, no opacity fades. Press goes one step darker again
  (`--color-brand-active`) with a 1px translate-down, mechanical-switch
  feeling rather than a soft scale/shrink.
- **Motion:** fast and purposeful — 120–280ms, sharp eased or linear curves
  (`--ease-standard`), never a bounce/spring. Motion communicates state
  changes (open/close, selected), not decoration; no idle/looping animation.
- **Transparency & blur:** essentially unused. The one exception is a
  scrim (`--surface-overlay` at reduced opacity) behind modals/dialogs — no
  frosted-glass panels, no blurred backgrounds.
- **Imagery color vibe:** confirmed by a real track photo (`assets/imagery/`)
  — high-contrast, cool/neutral asphalt tones, shot from an elevated angle
  tracking the car through a corner. Full-bleed, no filters/vignettes, no
  warm golden-hour grading. Use this as the reference for future
  product/event photography.

## Iconography

No icon set, icon font, or SVG sprite was provided in the brand drop. Per
system policy this system does **not** invent icons from scratch. Instead:

- **Substitute set:** [Lucide](https://lucide.dev) icons, loaded from CDN in
  UI kit/component demos that need one (chevrons, cart, search, filter, etc).
  Lucide's stroke-based, geometric style is the closest free match to this
  brand's flat/technical mood (no filled cartoonish icon sets, no duotone).
- Stroke weight: 2px at 20–24px sizing, colored `--text-primary` or
  `--color-brand`, never multi-color.
- No emoji anywhere in UI (see Content fundamentals). Unicode symbols are not
  used as icons.
- **Ask:** if Snap Motorsports has a real icon set (or wants specific
  glyphs — damper, sway bar, adjustment-clicks, etc. — for a parts catalog),
  provide them and this section/asset folder should be updated.

## Index

- `styles.css` — root stylesheet; `@import`s everything below. Link this one file.
- `tokens/colors.css` — brand blue scale, neutral (ink) scale, semantic colors, aliases
- `tokens/typography.css` — font families (self-hosted Bicyclette + IBM Plex Mono `@font-face`), type scale
- `tokens/spacing.css` — spacing scale, radius, shadow, border, motion tokens
- `assets/logos/` — `snap-logo-mark.svg` (plate lockup), `snap-logo-on-page.svg`
  (placement/clearance reference), `snap-logo-square.png` (social/avatar)
- `guidelines/` — foundation specimen cards (Design System tab): colors, type, spacing, brand
- `components/core/` — Button, IconButton, Badge, Tag, Card
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/feedback/` — Toast, Tooltip, Dialog
- `components/navigation/` — Tabs
- `ui_kits/storefront/` — original recreation-style e-commerce screens (Home,
  Category/PLP, Product Detail, Cart, Account/Garage)
- `SKILL.md` — Claude Code-compatible skill wrapper for this system

## Caveats & the ask

- **Only one real brand color exists.** Every other color is derived, not
  specified — flag anything that reads wrong.
- **No codebase, Figma, or existing site was provided**, so components and
  the UI kit are original designs sized to the product category, not
  recreations. If a real site/app exists, attach it and this should be
  rebuilt against the real thing.
- **No product photography, icon set, or copy corpus was provided** — the UI
  kit uses placeholder imagery and inferred copy in the voice described above.

**Please help iterate:** react to the derived colors and the storefront UI
kit direction, and send any of the missing pieces above (a live site,
photography, an icon set) so this system can move from "reasonable starting
point" to "actually Snap Motorsports."
