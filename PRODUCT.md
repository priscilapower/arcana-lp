# Product

## Register

brand

## Users

**Phase 1 — Developers (primary landing page audience):** ML engineers, indie developers, and AI researchers building multi-agent systems. Already fluent in Claude API, MCP, LangChain, Ollama. They live in the terminal, version-control everything, and are allergic to enterprise tooling. They know the configuration problem firsthand: system prompts scattered across scripts, no shared memory between agents, personality that evaporates when the model changes.

**Phase 3 — Power users (secondary audience):** Knowledge workers who subscribe to multiple AI tools but manage them like separate apps. No shared memory, no coordination. Obsidian users. Freelancers juggling client contexts. Executives who want an AI chief of staff that accumulates context over time.

## Product Purpose

Arcana OS is a multi-agent management system where each AI agent is assigned a **tarot card archetype** — a bundle of system prompt philosophy, memory profile, tool preferences, temperature, and communication tone. A meta-agent called **The World** routes tasks, generates briefings, and detects when agents go off-track ("reversed cards"). Local-first, developer-first, with a hosted path at arcana.cloud.

The landing page converts two audiences: developers arriving from GitHub or a pip recommendation (bottom of funnel — show the CLI and code), and discovery-mode visitors who haven't heard the pitch (top of funnel — sell the concept before the implementation).

Success: developer installs `arcana-os`. Non-technical visitor joins the arcana.cloud waitlist.

## Brand Personality

**Arcane, precise, alive.**

Tagline: *"The OS that gives your agents a soul."*

The tone sits exactly at the intersection of developer credibility and conceptual daring. Written by someone who can argue memory federation architecture and quote the tarot's archetypal history in the same sentence. Not mystical-vague. Not dry-technical. Both at once.

Voice: confident without hype, concrete without being cold, strange without being pretentious. Sentences land. No hedging. Short declarative statements earn more than elaborate ones.

## Anti-references

- **Generic SaaS landing pages:** cream backgrounds, teal accents, hero metric grids ("10,000+ teams"), identical icon-heading-text card grids
- **Crypto/web3 aesthetics:** neon on near-black, aggressive gradients, "revolutionize" copy
- **Enterprise DevOps tools (LangSmith, AgentOps visual style):** utilitarian gray-on-gray, observability-dashboard aesthetics, corporate cold
- **Mindfulness/spiritual aesthetics:** soft sage green, lotus/moon decorative iconography, pastel chakra palettes — tarot is not this
- **Standard dark developer tool:** GitHub-flavored navy and blue, neutral grays, forgettable

The design should surprise someone who expects any of these five categories.

## Design Principles

1. **Precision of the arcane.** Tarot is a system: 22 cards, each numbered and named with defined energy. The visual language should feel equally systematic — structured, deliberate, each element with a reason. Mystery through clarity, not through vagueness.
2. **Show the machinery.** Developers buy trust through evidence. CLI output, config samples, and agent logs earn more than any headline. Put the technical reality on screen.
3. **OSS is the anchor, not the fallback.** The free tier is not a downgrade — it's the product. Cloud is the convenience layer. Design should honor this, not bury it.
4. **Characters, not features.** The 22 Arcana are entities with personality. The UI should feel like meeting a cast, not reading a feature checklist. Let the tarot cards be visually present and humanized.
5. **Reward attention at every zoom level.** Scanning: the concept lands immediately. Reading carefully: the system architecture reveals itself. Hovering: micro-interactions confirm quality.

## Accessibility & Inclusion

WCAG AA minimum. `prefers-reduced-motion` is already implemented in globals.css — all transitions are suppressed when the media query fires. Dark/light theme toggle is present. No specific known accommodation requirements beyond standard practice.
