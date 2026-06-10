---
target: arcana-lp homepage
total_score: 26
p0_count: 0
p1_count: 1
p2_count: 3
timestamp: 2026-06-09T18-48-34Z
slug: arcana-lp-homepage
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Tweaks panel shows active state, nav border-bottom on scroll, copy toast present — no active section indicator in nav |
| 2 | Match System / Real World | 3 | Developer terminology on-point; "reversed cards" appears in The World briefing with no explanation |
| 3 | User Control and Freedom | 3 | Mobile drawer has Escape key, Tweaks has close; landing page context limits scope |
| 4 | Consistency and Standards | 3 | Token system coherent; "Install" appears as both nav link and primary CTA button |
| 5 | Error Prevention | 2 | "Read the docs →" in FinalCTA is href="#" — dead link shipped to production |
| 6 | Recognition Rather Than Recall | 3 | All 22 arcana visible as chips, trust strip surfaces key benefits up front |
| 7 | Flexibility and Efficiency of Use | 2 | No skip-to-content; no keyboard shortcuts; TweaksPanel unlabeled for unfamiliar visitors |
| 8 | Aesthetic and Minimalist Design | 3 | Palette atmospheric and intentional; eyebrow-on-every-section adds noise without adding signal |
| 9 | Help Users Recognize, Diagnose, Recover from Errors | 2 | Dead docs link has no fallback or feedback |
| 10 | Help and Documentation | 2 | Docs nav link routes to FinalCTA install section, not actual documentation |
| **Total** | | **26/40** | **Acceptable** |

## Anti-Patterns Verdict

**LLM assessment**: Not obviously AI-generated. The tarot fan, per-card OKLCH tokens, and CLI demos with authentic agent dialogue are product-specific. Three tells: (1) eyebrow label used as section grammar on every section (9+ uses); (2) identical 3-equal-card grids in both Problem and Memory sections; (3) DM Sans body font is on the brand register reflex-reject list.

**Deterministic scan**: 1 finding — border-left on .world-r (globals.css:346). FALSE POSITIVE — structural column separator, not a decorative accent stripe.

## Priority Issues

**[P1] Dead documentation paths** — Docs nav link routes to FinalCTA install section. "Read the docs →" in FinalCTA is href="#". Two dead ends at first visit. Fix: point both to GitHub README at minimum.

**[P2] Eyebrow label as section grammar** — Used on 9+ sections as template scaffolding. Brand register calls this AI tell explicitly. Fix: keep on 4-5 sections where it adds context; remove from mechanical sections.

**[P2] DM Sans is on the reflex-reject list** — Body font is a training-data default. Spectral and JetBrains Mono are strong; the body sans should match that ambition. Candidates: Mona Sans, Geist, Satoshi.

**[P2] Problem section uses identical 3-equal-card template** — Three equal .pcard items with same structure. Fix: typographic treatment or asymmetric layout instead of card chrome.

**[P3] TweaksPanel is persistent and unlabeled** — "Tweaks" button means nothing to non-developers. Fix: rename or add caption.
