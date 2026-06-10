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
            <h3 className="how-h">Connect a model</h3>
            <p className="how-p">
              Local or hosted, your choice. Your keys never leave your machine.
            </p>
          </div>
          <div className="how-sep" aria-hidden="true">→</div>
          <div className="how-step">
            <div className="how-n">02</div>
            <h3 className="how-h">Pick a card</h3>
            <p className="how-p">
              Choose from 22 Major Arcana. Each is a complete archetype: behavioral traits,
              temperature, memory style, communication tone. The Hermit researches. The Empress
              creates. The Emperor orchestrates.
            </p>
          </div>
          <div className="how-sep" aria-hidden="true">→</div>
          <div className="how-step">
            <div className="how-n">03</div>
            <h3 className="how-h">Create the agent</h3>
            <p className="how-p">
              Arcana reads the card and writes the config: system prompt, temperature, memory weights, tool affinities. Ready to run.
            </p>
          </div>
        </div>
        <div className="cfg" style={{ marginTop: '40px' }}>
          <div className="cfg-top">
            <div className="tdot r" /><div className="tdot y" /><div className="tdot g" />
            <span className="cfg-ttl">arcana — quickstart</span>
          </div>
          <div className="cfg-body">
            <span className="cl c-mut"># 01 · connect a model</span>
            <span className="cl"><span className="c-pr">✦</span> <span className="c-cmd">arcana</span> <span className="c-arg">connect model</span> <span className="c-val">ollama</span></span>
            <span className="cl"><span className="c-ok">✓</span> <span className="c-arg">ollama connected</span> <span className="c-mut">· hermes-3 ready (local)</span></span>
            <span className="cl">&nbsp;</span>
            <span className="cl c-mut"># 02 · pick a card</span>
            <span className="cl"><span className="c-pr">✦</span> <span className="c-cmd">arcana</span> <span className="c-arg">agent create</span></span>
            <span className="cl">&nbsp;</span>
            <span className="cl c-mut">  ? Pick a card</span>
            <span className="cl"><span className="c-flag">  ❯</span> <span className="c-val">IX · The Hermit</span>    <span className="c-mut">Researcher · temp 0.35</span></span>
            <span className="cl c-mut">    III · The Empress   Creator · temp 0.85</span>
            <span className="cl c-mut">    I · The Magician    Executor · temp 0.50</span>
            <span className="cl c-mut">    …and 19 more</span>
            <span className="cl">&nbsp;</span>
            <span className="cl c-mut">  ? Agent name › <span className="c-val">sage</span></span>
            <span className="cl c-mut">  ? Model › <span className="c-val">ollama/hermes-3</span></span>
            <span className="cl">&nbsp;</span>
            <span className="cl c-mut"># 03 · agent compiled from the card</span>
            <span className="cl"><span className="c-ok">✓</span> <span className="c-arg">agent</span> <span className="c-val">sage</span> <span className="c-arg">created</span> <span className="c-mut">· ~/.arcana/agents/sage.json</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
