import { SPREAD } from '@/lib/data';
import { GithubIcon, StarIcon } from './BrandMark';
import { CopyPillClient } from './CopyPillClient';

export function Hero() {
  return (
    <header className="hero">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="wrap hero-in">
        <div className="hero-top">
          <div className="hero-l">
            <div className="hero-tag">
              <span className="tg">Open Source</span>
              <span className="tx">Local-first · MIT licensed · public beta</span>
            </div>
            <h1>The OS that gives your agents a <em>soul</em>.</h1>
            <p className="hero-sub">
              Arcana lets you configure and run AI agents as tarot card archetypes — typed personalities
              where system prompt, temperature, and tone are compiled automatically from the card.
            </p>
            <div className="hero-cta">
              <CopyPillClient />
              <a
                href="https://github.com/priscilapower/arcana"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-s btn-lg hero-gh"
              >
                <GithubIcon />
                Star on GitHub
              </a>
            </div>
            <p className="hero-note"><b>Free forever.</b> MIT licensed. Python 3.10+.</p>
          </div>
          <div className="cfg">
            <div className="cfg-top">
              <div className="tdot r" /><div className="tdot y" /><div className="tdot g" />
              <span className="cfg-ttl">arcana — agent create</span>
            </div>
            <div className="cfg-body">
              <span className="cl"><span className="c-pr">✦</span> <span className="c-cmd">arcana</span> <span className="c-arg">agent create</span></span>
              <span className="cl">&nbsp;</span>
              <span className="cl c-mut">  ? Pick a card</span>
              <span className="cl"><span className="c-flag">  ❯</span> <span className="c-val">IX · The Hermit</span>    <span className="c-mut">Researcher · temp 0.35</span></span>
              <span className="cl"><span className="c-mut">    III · The Empress</span>   <span className="c-mut">Creator · temp 0.85</span></span>
              <span className="cl"><span className="c-mut">    I · The Magician</span>    <span className="c-mut">Executor · temp 0.50</span></span>
              <span className="cl"><span className="c-mut">    …and 19 more</span></span>
              <span className="cl">&nbsp;</span>
              <span className="cl c-mut">  ? Agent name › <span className="c-val">sage</span></span>
              <span className="cl c-mut">  ? Model › <span className="c-val">ollama/hermes-3</span></span>
              <span className="cl">&nbsp;</span>
              <span className="cl"><span className="c-ok">  ✓</span> <span className="c-arg">agent</span> <span className="c-val">sage</span> <span className="c-arg">created</span></span>
              <span className="cl c-ind c-mut">card   <span className="c-card">IX · The Hermit</span></span>
              <span className="cl c-ind c-mut">model  <span className="c-val">ollama/hermes-3</span></span>
              <span className="cl c-ind c-mut">path   <span className="c-val">~/.arcana/agents/sage.json</span></span>
            </div>
          </div>
        </div>
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
