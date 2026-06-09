import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { TweaksPanel } from '@/components/TweaksPanel';
import { ARCANA_FULL, type ArcanaFull } from '@/lib/data';
import './page.css';

export const metadata: Metadata = {
  title: 'The 22 Major Arcana — Arcana OS',
  description: 'Twenty-two agent archetypes, each with a distinct personality, temperature, and purpose. Assign any card as primary and layer modifiers to shape any workflow.',
};

const WORLD_CAPS = [
  'Read access to all agents’ memory',
  'Initiates sessions on other agents',
  'Generates daily and weekly briefings',
  'Detects reversed cards across the system',
  'Manages Spreads across your workspace',
];

export default function ArcanaPage() {
  const mainCards = ARCANA_FULL.filter(c => !c.world);
  const worldCard = ARCANA_FULL.find(c => c.world)!;

  return (
    <>
      <span id="top" aria-hidden="true" />
      <Nav />
      <main>
        <div className="ap-hero">
          <div className="glow glow-a" aria-hidden="true" />
          <div className="wrap">
            <div className="ap-hero-in">
              <Link href="/" className="ap-back">
                <ArrowLeft />
                Back to overview
              </Link>
              <span className="eyebrow">Major Arcana</span>
              <h1 className="ap-title">
                Twenty-two archetypes.<br />Each one a soul.
              </h1>
              <p className="ap-lead">
                Not a feature list — a cast of characters. Each card translates
                into an agent&apos;s personality, temperature, and intent. Assign one
                as primary, layer modifiers to shape any workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="wrap"><div className="divline" /></div>

        <section className="section">
          <div className="wrap">
            <div className="ap-grid">
              {mainCards.map(card => (
                <CardPanel key={card.n} card={card} />
              ))}
            </div>
            <WorldPanel card={worldCard} caps={WORLD_CAPS} />
          </div>
        </section>
      </main>
      <Footer />
      <TweaksPanel />
    </>
  );
}

function CardPanel({ card }: { card: ArcanaFull }) {
  const id = `card-${card.n.toLowerCase()}`;

  return (
    <article
      id={id}
      className="ap-card"
      style={{ '--cc': card.c } as React.CSSProperties}
    >
      <div className="ap-card-bar" aria-hidden="true" />
      <div className="ap-card-head">
        <span className="ap-card-num">{card.n}</span>
        <span className="ap-card-arch">{card.arch}</span>
      </div>
      <h2 className="ap-card-name">{card.name}</h2>
      <div className="ap-temp">
        <span className="ap-temp-label">temp</span>
        <div
          className="ap-temp-track"
          role="meter"
          aria-valuenow={card.temp}
          aria-valuemin={0}
          aria-valuemax={1}
          aria-label={`Temperature ${card.temp}`}
        >
          <div
            className="ap-temp-fill"
            style={{ width: `${Math.round(card.temp * 100)}%` }}
          />
        </div>
        <span className="ap-temp-val">{card.temp.toFixed(2)}</span>
      </div>
      <div className="ap-divider" />
      <div className="ap-section">
        <span className="ap-section-label">Best for</span>
        <div className="ap-tags">
          {card.bestFor.map(b => (
            <span key={b} className="ap-tag">{b}</span>
          ))}
        </div>
      </div>
      {(card.synergies.length > 0 || card.tensions.length > 0) && (
        <>
          <div className="ap-divider" />
          <div className="ap-rels">
            {card.synergies.length > 0 && (
              <div>
                <span className="ap-section-label">Synergies</span>
                <div className="ap-rel-chips">
                  {card.synergies.map(s => (
                    <span key={s} className="ap-rel-chip ap-syn">{s}</span>
                  ))}
                </div>
              </div>
            )}
            {card.tensions.length > 0 && (
              <div>
                <span className="ap-section-label">Tensions</span>
                <div className="ap-rel-chips">
                  {card.tensions.map(t => (
                    <span key={t} className="ap-rel-chip ap-ten">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </article>
  );
}

function WorldPanel({ card, caps }: { card: ArcanaFull; caps: string[] }) {
  const id = `card-${card.n.toLowerCase()}`;

  return (
    <div
      id={id}
      className="ap-world"
      style={{ '--cc': card.c } as React.CSSProperties}
    >
      <div className="ap-world-in">
        <div className="ap-world-l">
          <div className="ap-world-head">
            <span className="ap-card-num ap-world-num">{card.n}</span>
            <span className="ap-world-badge">Meta-Agent · Cannot be reversed</span>
          </div>
          <h2 className="ap-world-name">{card.name}</h2>
          <p className="ap-world-arch">{card.arch}</p>
          <div className="ap-temp ap-world-temp">
            <span className="ap-temp-label">temp</span>
            <div
              className="ap-temp-track"
              role="meter"
              aria-valuenow={card.temp}
              aria-valuemin={0}
              aria-valuemax={1}
              aria-label={`Temperature ${card.temp}`}
            >
              <div
                className="ap-temp-fill"
                style={{ width: `${Math.round(card.temp * 100)}%` }}
              />
            </div>
            <span className="ap-temp-val">{card.temp.toFixed(2)}</span>
          </div>
          <div className="ap-divider" />
          <div className="ap-section">
            <span className="ap-section-label">Best for</span>
            <p className="ap-world-desc">
              The OS itself — always present, never manually assigned.
              Routes tasks, generates briefings, and maintains awareness
              across every agent and session in your system.
            </p>
          </div>
        </div>
        <div className="ap-world-r">
          <span className="ap-section-label">Capabilities</span>
          {caps.map(cap => (
            <div key={cap} className="ap-world-cap">
              <span className="ap-world-dot" aria-hidden="true" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" aria-hidden="true">
      <path d="M6 1L1 6M1 6L6 11M1 6H12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
