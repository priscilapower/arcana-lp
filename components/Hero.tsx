import { SPREAD } from '@/lib/data';
import { StarIcon } from './BrandMark';
import { CopyPillClient } from './CopyPillClient';

export function Hero() {
  return (
    <header className="hero">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="wrap hero-in">
        <div className="hero-tag">
          <span className="tg">Open Source</span>
          <span className="tx">Local-first · MIT licensed · public beta</span>
        </div>
        <h1>The OS that gives your agents a <em>soul</em>.</h1>
        <p className="hero-sub">
          Arcana is the home for your entire AI ecosystem. Give every agent a tarot card — a personality,
          a memory, a purpose — and one place that sees them all.
        </p>
        <div className="hero-cta">
          <CopyPillClient />
          <a href="#cloud" className="btn btn-p btn-lg">Start with Arcana Cloud</a>
        </div>
        <p className="hero-note">Run it yourself, <b>free forever</b> — or let the cloud host it for you.</p>
        <div className="spread">
          {SPREAD.map((card) => (
            <div key={card.n} className="tarot">
              <div className="t-num">{card.n}</div>
              <div className="t-star"><StarIcon /></div>
              <div className="t-name">{card.name}</div>
              <div className="t-agent">@{card.agent}</div>
              <div className="t-arch">{card.arch}</div>
              <div className="t-foot"><span>✦</span> temp {card.temp}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
