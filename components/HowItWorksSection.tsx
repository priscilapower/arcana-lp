export function HowItWorksSection() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow plain">How it works</span>
          <h2 className="title">From card to agent<br />in three steps.</h2>
        </div>
        <div className="how-steps">
          <div className="how-step">
            <div className="how-n">01</div>
            <h3 className="how-h">Pick a card</h3>
            <p className="how-p">
              Choose from 22 Major Arcana. Each is a complete archetype: behavioral traits,
              temperature, memory style, communication tone. The Hermit researches. The Empress
              creates. The Emperor orchestrates.
            </p>
          </div>
          <div className="how-sep" aria-hidden="true">→</div>
          <div className="how-step">
            <div className="how-n">02</div>
            <h3 className="how-h">The card does the work</h3>
            <p className="how-p">
              Arcana reads the card and writes the config. Name your agent, assign a model,
              and it&apos;s ready to run.
            </p>
          </div>
          <div className="how-sep" aria-hidden="true">→</div>
          <div className="how-step">
            <div className="how-n">03</div>
            <h3 className="how-h">Run it</h3>
            <p className="how-p">
              One command. The agent behaves like its archetype, consistently, every session. Not a wrapper. A character.
            </p>
          </div>
        </div>
        <div className="cfg" style={{ marginTop: '40px' }}>
          <div className="cfg-top">
            <div className="tdot r" /><div className="tdot y" /><div className="tdot g" />
            <span className="cfg-ttl">arcana — quickstart</span>
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
            <span className="cl"><span className="c-ok">  ✓</span> <span className="c-arg">agent</span> <span className="c-val">sage</span> <span className="c-arg">created · saved to</span> <span className="c-val">~/.arcana/agents/sage.json</span></span>
            <span className="cl">&nbsp;</span>
            <span className="cl"><span className="c-pr">✦</span> <span className="c-cmd">arcana</span> <span className="c-arg">run</span> <span className="c-flag">--agent</span> <span className="c-val">sage</span> <span className="c-mut">"What are the tradeoffs of sqlite-vec vs Qdrant?"</span></span>
            <span className="cl">&nbsp;</span>
            <span className="cl"><span className="c-ok">  sage</span> <span className="c-mut">[IX · Hermit]</span></span>
            <span className="cl c-ind c-arg">  The choice depends on deployment context. sqlite-vec keeps everything in-process</span>
            <span className="cl c-ind c-arg">  with zero network overhead and pairs naturally with FTS5 for hybrid retrieval.</span>
            <span className="cl c-ind c-arg">  Qdrant offers HNSW tuning and horizontal scale when your team shares vector state.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
