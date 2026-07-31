---
name: VisionCraft AI
description: Credit-based AI image editing tool — restore, fill, remove, recolor
colors:
  ink: "#0f172a"
  body-text: "#334155"
  muted-text: "#64748b"
  surface: "#ffffff"
  surface-sunken: "#f8fafc"
  border: "#e2e8f0"
  border-strong: "#cbd5e1"
  accent: "#0f766e"
  accent-hover: "#115e59"
  accent-tint: "#f0fdfa"
  accent-tint-strong: "#ccfbf1"
  destructive: "#dc2626"
typography:
  display:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "16px"
  nav-item-active:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.accent}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
---

# Design System: VisionCraft AI

## 1. Overview

**Creative North Star: "The Contact Sheet"**

VisionCraft AI is a room where the photographs do the talking. Like a contact sheet or a light table, the interface is a quiet, neutral surface built to let images sit at full color and full attention — everything around them (nav, cards, buttons, chrome) recedes into grayscale structure so nothing competes with the photo being edited. One accent color, a deep teal, marks what's actionable and what's active; it never spreads across gradients, banners, or backgrounds. This system explicitly rejects the generic purple/indigo SaaS gradient look this product shipped with previously — the hero gradient banner, the purple pill buttons, the purple-tinted card shadows and borders, and decorative sparkle particles. It also rejects overcorrecting into a warm cream/sand neutral; the neutrals here are true cool grays with no warm tint.

**Key Characteristics:**
- Grayscale chrome, color-only-where-it-matters (accent used on primary actions and active states, nowhere else)
- Flat surfaces with tonal layering instead of drop shadows
- One geometric-technical typeface (IBM Plex Sans) carrying the whole hierarchy through weight, not decoration
- Structure and whitespace establish importance; gradients and particle effects do not appear anywhere

## 2. Colors

Mostly neutral grayscale with a single deliberate accent; the images supply the color the interface withholds.

### Primary
- **Deep Teal** (`#0f766e`): primary buttons, active nav state, links, focus rings, selected/checked states. Nothing else uses this color at full strength.
- **Teal Hover** (`#115e59`): hover/pressed state for teal surfaces.

### Neutral
- **Ink** (`#0f172a`): headings, primary text, icons at rest.
- **Body Text** (`#334155`): paragraph and label text (≥4.5:1 on white).
- **Muted Text** (`#64748b`): secondary/meta text — timestamps, helper copy, placeholder text at the same contrast floor as body text where it's load-bearing.
- **Surface** (`#ffffff`): page and card background.
- **Surface Sunken** (`#f8fafc`): page background behind cards, input fields at rest.
- **Border** (`#e2e8f0`): default dividers, card borders, input borders.
- **Border Strong** (`#cbd5e1`): hover state on borders, emphasized dividers.
- **Accent Tint** (`#f0fdfa`): active nav item background, selected-row background — a wash, not a fill.
- **Accent Tint Strong** (`#ccfbf1`): hover state on tinted surfaces, badge backgrounds.

### Named Rules
**The One Voice Rule.** Deep Teal appears on primary buttons, active/selected states, links, and focus rings — and nowhere else. No teal gradients, no teal page backgrounds, no teal card borders. Its rarity is what makes it legible as "this is actionable."

**The No-Tint-Everything Rule.** Card borders and shadows stay neutral gray (`#e2e8f0`), never accent-tinted. The previous system tinted card shadows purple (`shadow-purple-200/10`); this system never tints structural chrome with the accent color.

## 3. Typography

**Display/Body Font:** IBM Plex Sans (with `ui-sans-serif, system-ui` fallback)

**Character:** A single geometric-humanist sans carried across every role through weight and size rather than font-pairing — engineered and legible, never decorative. Its slightly technical, monospace-adjacent letterforms (visible in numerals and the lowercase "a") reinforce the "precision tool" read without needing an actual mono font.

### Hierarchy
- **Display** (600, `clamp(1.75rem, 3vw, 2.5rem)`, 1.15 line-height, -0.02em tracking): page-level headings, one per screen.
- **Headline** (600, 1.25rem, 1.3 line-height): section headings, card group titles ("Recent Edits").
- **Title** (500, 1rem, 1.4 line-height): card titles, dialog titles.
- **Body** (400, 0.9375rem, 1.6 line-height): paragraph text, form labels, list content. Cap prose at 65–75ch.
- **Label** (500, 0.8125rem, 1.4 line-height): buttons, nav items, chips, meta text.

### Named Rules
**The Weight-Not-Width Rule.** Hierarchy is built by moving between 400/500/600 weight and adjusting size — never by introducing a second typeface or letter-spaced uppercase eyebrows.

## 4. Elevation

Flat by default. This system uses tonal layering, not drop shadows: hierarchy comes from stepping between `surface` (#ffffff) and `surface-sunken` (#f8fafc), plus a single 1px `border` (#e2e8f0). Shadows appear only as a direct response to a floating state — a dropdown menu, a modal, a toast — never at rest under a static card.

### Shadow Vocabulary
- **Floating** (`box-shadow: 0 8px 24px -4px rgb(15 23 42 / 0.12)`): dropdowns, popovers, toasts — anything genuinely layered above the page.
- **Modal** (`box-shadow: 0 20px 48px -8px rgb(15 23 42 / 0.2)`): modal/dialog surfaces only.

### Named Rules
**The Flat-At-Rest Rule.** No shadow is applied to a card, sidebar, or button in its default state. Depth is earned only by genuinely floating above other content.

## 5. Components

### Buttons
- **Shape:** 8px radius (`{rounded.md}`).
- **Primary:** solid Deep Teal (`#0f766e`) background, white text, 10px/20px padding. No gradient background.
- **Hover / Focus:** background steps to `#115e59` on hover; a 2px teal focus ring (`outline: 2px solid #0f766e; outline-offset: 2px`) on keyboard focus.
- **Secondary / Ghost:** white background, `border` (#e2e8f0), Ink text. Hover steps the border to `border-strong` (#cbd5e1) and background to `surface-sunken`.

### Cards / Containers
- **Corner Style:** 16px radius (`{rounded.xl}`) — kept from the existing collection-card pattern; it's a distinctive, not generic, radius choice.
- **Background:** white (`surface`).
- **Shadow Strategy:** flat at rest per Elevation; on hover, a subtle lift via `transform: translateY(-2px)` plus the Floating shadow token, not a color-tinted shadow.
- **Border:** 1px `border` (#e2e8f0), never accent-tinted.
- **Internal Padding:** 16px (`{spacing.md}`).

### Inputs / Fields
- **Style:** white background, 1px `border` (#e2e8f0), 8px radius.
- **Focus:** border steps to Deep Teal, plus a 2px teal focus ring — no glow/shadow effect.

### Navigation (Sidebar)
- **Style:** white background, no gradient, no pill-shaped active state.
- **Default:** Ink icon + label on transparent background.
- **Active:** Accent Tint (#f0fdfa) background wash, Deep Teal text/icon, 8px radius — a tonal fill, not a solid teal pill.
- **Hover:** Surface Sunken (#f8fafc) background.
- **Mobile:** same tonal treatment inside a slide-over sheet; no bottom-tab pill styling.

### Hero / Banner (Signature Component)
Replaces the previous purple gradient banner. Flat `surface-sunken` background, Ink display heading, Deep Teal used only on the 4 feature icons' active/hover ring — no gradient fill, no decorative particle sparkles.

## 6. Do's and Don'ts

### Do:
- **Do** use Deep Teal (`#0f766e`) only for primary buttons, active nav state, links, and focus rings — the One Voice Rule.
- **Do** keep every card, sidebar, and button flat at rest; add elevation only for dropdowns/modals/toasts.
- **Do** keep card/border colors neutral gray (`#e2e8f0`) regardless of what's near them.
- **Do** carry hierarchy through IBM Plex Sans weight (400/500/600) and size, not through a second typeface.

### Don't:
- **Don't** reintroduce the purple/indigo gradient hero banner, gradient pill buttons, or purple-tinted card shadows/borders (`shadow-purple-200/10`) — the explicit anti-reference this redesign replaces.
- **Don't** use gradient text (`background-clip: text` with a gradient fill).
- **Don't** add decorative particle/sparkle effects to headings or banners.
- **Don't** default to a warm cream/sand background to seem "less AI" — neutrals here are true cool grays, not warm-tinted.
- **Don't** use a colored `border-left`/`border-right` as a stripe accent on cards or list items.
