# Design

## Theme

**Dark. Deep space-indigo.**

Scene: a developer at their terminal in the evening, building a multi-agent system, discovering something that feels unlike any developer tool they've used — precise but alive. The darkness is not "cool dark SaaS." It's the darkness of a clear night sky: not flat black, but deep with faint color and depth.

Dark mode is designed-first. Light mode (`[data-theme="light"]`) is a full inversion using the same token names.

## Color

**Strategy: Full palette.** Two accent roles plus status colors, all OKLCH. Four runtime-switchable accent pairings.

### Base tokens (dark default)

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(8% 0.030 270)` | Page background |
| `--bg-2` | `oklch(10% 0.032 270)` | Alternate background bands |
| `--deep` | `oklch(4% 0.020 270)` | Code panels, deepest inset |
| `--surf` | `oklch(13% 0.036 270)` | Cards and panels |
| `--surf2` | `oklch(17% 0.036 270)` | Hover surface |
| `--surf3` | `oklch(23% 0.034 270)` | Active surface |
| `--bdr` | `oklch(28% 0.034 270)` | Borders |
| `--bdr-s` | `oklch(20% 0.030 270)` | Subtle borders |
| `--txt` | `oklch(93% 0.010 85)` | Primary text (warm, not pure white) |
| `--txt2` | `oklch(70% 0.015 270)` | Secondary text |
| `--txt3` | `oklch(50% 0.020 270)` | Muted / labels |

### Accent tokens (default: Cyan + Amber)

| Token | Value | Role |
|---|---|---|
| `--accent` | `oklch(72% 0.14 198)` | Primary accent |
| `--accent-dim` | `oklch(60% 0.14 198)` | Dimmed accent |
| `--accent-bright` | `oklch(82% 0.12 198)` | Hover-bright accent |
| `--accent-bg` | `oklch(72% 0.14 198 / .10)` | Accent tint fill |
| `--accent-bg2` | `oklch(72% 0.14 198 / .18)` | Stronger accent tint |
| `--accent-line` | `oklch(72% 0.14 198 / .32)` | Accent-tinted border |
| `--accent2` | `oklch(80% 0.15 78)` | Secondary accent |
| `--accent2-dim` | `oklch(68% 0.15 78)` | Dimmed secondary |
| `--accent2-bg` | `oklch(80% 0.15 78 / .12)` | Secondary tint fill |
| `--green` | `oklch(70% 0.17 150)` | Success / running status |
| `--red` | `oklch(64% 0.18 28)` | Error / warning |

### Accent pairings (all runtime-switchable via TweaksPanel + `lib/accent.ts`)

| Key | Label | Accent 1 | Accent 2 |
|---|---|---|---|
| `cyan` | Cyan + Amber | `oklch(72% 0.14 198)` | `oklch(80% 0.15 78)` |
| `purple` | Purple + Orange | `oklch(66% 0.19 290)` | `oklch(73% 0.18 50)` |
| `violet` | Violet + Gold | `oklch(66% 0.19 290)` | `oklch(80% 0.15 80)` |
| `emerald` | Emerald + Amber | `oklch(72% 0.15 158)` | `oklch(80% 0.15 78)` |

Each of the 22 Arcana cards also carries an individual `--cc` color drawn from across the hue wheel — Explorer is warm amber, Archivist is steel blue, Creator is rose, etc.

## Typography

Three font roles, loaded via `next/font/google`:

| Token | Font | Use |
|---|---|---|
| `--fd` | Spectral | Display headings, tarot card names, section titles. Weight 300. Italic used expressively (hero `<em>`, final CTA). |
| `--fb` | DM Sans | Body, UI, navigation, button labels. Clean geometric humanist. |
| `--fm` | JetBrains Mono | Code, CLI, eyebrow labels, numerical data (temp, card numbers, tier keys). |

### Scale

| Element | Size | Weight | Tracking |
|---|---|---|---|
| Hero h1 | `clamp(44px, 7.2vw, 88px)` | 300 | -.025em |
| Section h2 (`.title`) | `clamp(32px, 4.6vw, 54px)` | 300 | -.015em |
| World card h2 | `clamp(30px, 3.6vw, 44px)` | 300 | -.01em |
| Final CTA h2 | `clamp(38px, 5.5vw, 68px)` | 300 | -.02em |
| Panel h3 | 23–30px | 300–400 | — |
| Lead (`.lead`) | `clamp(16px, 1.4vw, 19px)` | 400 | — |
| Body default | 16px | 400 | — |
| Eyebrow (`.eyebrow`) | 12px mono | — | .22em |
| Micro labels | 10–12px mono | — | .14–.18em |

Body line length capped at 620px (≈65ch at 19px). `.lead` has `max-width: 620px`.

## Elevation & Depth

Four surface levels:

1. `--bg` / `--bg-2` — page layer
2. `--deep` — code panels, inset code trays
3. `--surf` — cards and panels
4. `--surf2` / `--surf3` — hover and active states

Shadows use OKLCH black with opacity, not neutral gray:
- Tarot spread cards: `0 18px 50px -18px oklch(0% 0 0 / .7)`
- Code panels: `0 24px 60px -30px oklch(0% 0 0 / .8)`

## Spacing & Layout

- Max content width: `--mx: 1180px`
- Container: `.wrap` — max-width + 32px horizontal padding
- Section vertical rhythm: `clamp(80px, 11vw, 140px)`
- Section dividers: `.divline` — 1px linear-gradient fading to transparent at both edges

### Grid patterns

| Context | Columns | Gap |
|---|---|---|
| Feature (CardEngine, Memory, World) | 1.05fr / 0.95fr, 2-col | 56px |
| Problem cards | 3 equal | 18px |
| 22 Arcana deck | 4 equal | 12px |
| Pricing | 4 equal | 14px |
| Memory tiers | 3 equal | 16px |
| Connect integrations | 3 equal | 16px |
| OSS vs Cloud split | 2 equal | 18px |
| Footer | 1.6fr / 1fr / 1fr / 1fr | 32px |

## Border Radius

| Token | Value | Use |
|---|---|---|
| `--r1` | 4px | Icon boxes, micro chip elements |
| `--r2` | 7px | Buttons, nav links, copy pill |
| `--r3` | 11px | Problem cards, Arcana chips, tier cards, connect cards |
| `--r4` | 16px | Code panels, pricing featured card, World card, OSS/Cloud path blocks |
| `100px` | pill | Nav badges, copy pill outer, trust dots, pricing badge, gh pill |

## Components

### Tarot Cards (`.tarot`)
162px wide, `aspect-ratio: 2 / 3.05`. Background: `linear-gradient(170deg, --surf2, --surf)`. Border: 1px `--accent-line`. Inner frame: `::after` inset 6px, opacity .5. Drop shadow deep.

Fan layout by default (rotated/translated per nth-child). On `.spread:hover`: all cards flatten to 0deg with 6px margins. On individual `.tarot:hover`: translateY(-14px) + scale(1.03), border sharpens to `--accent`. Transition: `.35s cubic-bezier(.16,1,.3,1)`.

Anatomy (top to bottom): roman numeral (`--accent`, Spectral), star icon (centered flex), card name (Spectral), `@agent` alias (mono, txt2), archetype (txt3), `✦ temp X.XX` footer (mono, accent-dim).

### Code Panel (`.cfg`)
macOS traffic-light dots (red/amber/green in OKLCH). Centered mono filename label. Body: 13.5px JetBrains Mono, 1.85 line-height.

Syntax tokens:
- `.c-pr` — prompt / binary name: `--accent`
- `.c-cmd` — subcommand: `--accent2`
- `.c-arg` — positional args: `--txt2`
- `.c-flag` — flags: `--accent-bright`
- `.c-mut` / `.c-key` — muted tokens: `--txt3`
- `.c-val` — values: `--txt`
- `.c-card` — card names: `--accent2`
- `.c-ok` — success output: `--green`

### Copy Pill (`.copy-pill`)
Inline `pip install arcana-os`. Background `--deep`, 1px border, hover → `--accent-line`. Two sections: `$ ` prompt in `--accent`, command in `--txt`, separated by vertical 1px border from "Copy" label in `--txt3` → `--accent` on hover. Triggers a toast confirmation.

### Eyebrow Label (`.eyebrow`)
12px JetBrains Mono. Uppercase. Tracking .22em. Color `--accent`. `✦` prefix via `::before` (11px, opacity .9).

### Arcana Chips (`.achip`)
4-column grid. Each chip has `--cc` set inline for its individual hue. Top-edge 2px colored bar via `::before: background: var(--cc)`. `transform: translateY(-2px)` + border to `--cc` on hover. Shows: arcana number in `--cc` color, card name (Spectral 16px), archetype (txt3 12px), temp + tool-count footer (mono 10.5px).

Special `.achip.world`: accent-bg fill, accent-line border, right-aligned `META` label.

### Navigation
Sticky top. `backdrop-filter: blur(14px)`. Background `color-mix(in oklab, --bg 78%, transparent)`. Border bottom transparent → `--bdr-s` on `.scrolled` class (JS scroll detection).

Brand: SVG star mark + Spectral "Arcana" + mono superscript "OS" in `--accent`. Nav links: 14px DM Sans, `--txt2`, `--surf2` background on hover. Right: GitHub star pill (mono, pill border) + primary CTA button.

### Buttons

| Class | Style |
|---|---|
| `.btn-p` | Background `--accent`, color `oklch(14% 0.03 270)`. Hover: `--accent-bright` + translateY(-1px). |
| `.btn-s` | Transparent, border `--bdr`. Hover: border `--accent`, color `--accent-bright`. |
| `.btn-ghost` | No border/fill, color `--txt2`. Hover: `--txt`. |
| `.btn-lg` | 16px font, 13px/26px padding modifier on top of above. |

### Pricing Cards (`.price`)
4-column grid. Base: `--surf` background, `--bdr-s` border. Featured (`.feat-tier`): `linear-gradient(180deg, --accent-bg, --surf 40%)`, `--accent-line` border, floating badge chip above card (`position: absolute; top: -10px`). Price amount: Spectral weight 300 at 38px.

### The World Card (`.world-card`)
Full-width panel. Top 3px gradient bar: `linear-gradient(90deg, --accent, --accent2)`. Two-column split: left content pane (Spectral h2, lead text, stats), right code panel (`--deep` background, agent briefing rows with status dots — green/amber/gray).

### OSS vs Cloud Paths (`.path`)
Side-by-side. OSS: `--surf` background, `--bdr` border. Cloud: `linear-gradient(165deg, --accent-bg, --surf 55%)`, `--accent-line` border. Each has keyword chip, Spectral h3, description, feature list with `--accent` checkmarks, CTA button.

## Motion

- Tarot card hover/fan: `.35s cubic-bezier(.16, 1, .3, 1)` (expo-out)
- Buttons: `.16s` all
- Nav border: `.3s`
- Theme (bg/color): `.3s`
- Accent swap: transitions fully suppressed via `.accent-swapping` class applied momentarily to `<html>` during color variable updates

`@media (prefers-reduced-motion: reduce)`: `transition: none !important` on all elements, `scroll-behavior: auto` on html.

## Responsive

| Breakpoint | Changes |
|---|---|
| `< 900px` | Nav links hidden; feature, world, split, feat.rev → 1-col; problem grid, tiers, connect → 1-col; deck → 2-col; pricing → 2-col; footer → 2-col; world-r border: top not left |
| `< 560px` | Deck, pricing, footer → 1-col; spread → `scale(.82)` with reduced top margin; GitHub pill + secondary nav btn hidden |
