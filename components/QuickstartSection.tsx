import { CopyPillClient } from './CopyPillClient';

export function QuickstartSection() {
  return (
    <section className="section" id="install">
      <div className="wrap">
        <div className="feat rev">
          <div>
            <span className="eyebrow plain">Install</span>
            <h2 className="title">One command.</h2>
            <p className="lead">
              Ollama, Anthropic, or any OpenAI-compatible endpoint. Local models work out of the box —
              no API key required.
            </p>
            <div style={{ marginTop: '32px' }}>
              <CopyPillClient />
            </div>
            <p className="qs-meta">Python 3.10+ · pip or uv · MIT licensed</p>
          </div>
          <div className="cfg">
            <div className="cfg-top">
              <div className="tdot r" /><div className="tdot y" /><div className="tdot g" />
              <span className="cfg-ttl">example.py</span>
            </div>
            <div className="cfg-body">
              <span className="cl"><span className="c-mut">from</span> <span className="c-cmd">arcana</span> <span className="c-mut">import</span> <span className="c-val">Agent, Card</span></span>
              <span className="cl">&nbsp;</span>
              <span className="cl"><span className="c-arg">agent</span> <span className="c-mut">=</span> <span className="c-cmd">Agent</span><span className="c-val">(</span></span>
              <span className="cl c-ind"><span className="c-key">name  </span><span className="c-mut">=</span> <span className="c-ok">"researcher"</span><span className="c-mut">,</span></span>
              <span className="cl c-ind"><span className="c-key">card  </span><span className="c-mut">=</span> <span className="c-card">Card.HERMIT</span><span className="c-mut">,</span></span>
              <span className="cl c-ind"><span className="c-key">model </span><span className="c-mut">=</span> <span className="c-ok">"ollama/hermes-3"</span><span className="c-mut">,</span></span>
              <span className="cl"><span className="c-val">)</span></span>
              <span className="cl">&nbsp;</span>
              <span className="cl"><span className="c-arg">response</span> <span className="c-mut">= await</span> <span className="c-arg">agent</span><span className="c-val">.run(</span></span>
              <span className="cl c-ind"><span className="c-ok">"What are the tradeoffs of sqlite-vec vs Qdrant?"</span></span>
              <span className="cl"><span className="c-val">)</span></span>
              <span className="cl">&nbsp;</span>
              <span className="cl"><span className="c-mut">print</span><span className="c-val">(</span><span className="c-arg">response</span><span className="c-val">.content)</span></span>
              <span className="cl c-mut"># measured · cites sources · never veers off-brief</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
