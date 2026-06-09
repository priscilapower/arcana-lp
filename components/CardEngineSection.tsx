export function CardEngineSection() {
  return (
    <section className="section" id="cards">
      <div className="wrap">
        <div className="feat">
          <div>
            <span className="eyebrow">The card engine</span>
            <h2 className="title">Every agent gets a card.</h2>
            <p className="lead">
              The 22 Major Arcana are rich archetypes that carry energy and intention — a perfect map for how
              prompting actually works. Assign a card and the engine writes the rest.
            </p>
            <div className="feat-list">
              <div className="feat-li">
                <span className="fi">✦</span>
                <div>
                  <h4>A soul, compiled</h4>
                  <p>Each card produces a system prompt, temperature, memory weights, and tool affinities — concrete config from an archetype.</p>
                </div>
              </div>
              <div className="feat-li">
                <span className="fi">◈</span>
                <div>
                  <h4>Blend &amp; modify</h4>
                  <p>Primary card = 70% weight. Add modifier cards for the rest. The Hermit with a touch of the Sun: deep research that reads beautifully.</p>
                </div>
              </div>
              <div className="feat-li">
                <span className="fi">⬡</span>
                <div>
                  <h4>Everything overridable</h4>
                  <p>The compiled config is plain JSON in ~/.arcana/agents/. Override any value the card produced. The card is the starting point, not a constraint.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cfg">
            <div className="cfg-top">
              <div className="tdot r" />
              <div className="tdot y" />
              <div className="tdot g" />
              <span className="cfg-ttl">arcana — agent create</span>
            </div>
            <div className="cfg-body">
              <span className="cl"><span className="c-pr">✦</span> <span className="c-cmd">arcana</span> <span className="c-arg">agent create</span> <span className="c-flag">--name</span> <span className="c-arg">sage</span> <span className="c-flag">--card</span> <span className="c-arg">hermit</span></span>
              <span className="cl">&nbsp;</span>
              <span className="cl c-mut">─── compiled from IX · The Hermit ───</span>
              <span className="cl c-ind"><span className="c-key">archetype  </span><span className="c-val">Researcher / Deep Analyst</span></span>
              <span className="cl c-ind"><span className="c-key">temp       </span><span className="c-val">0.35</span></span>
              <span className="cl c-ind"><span className="c-key">memory     </span><span className="c-val">semantic 0.95 · episodic 0.4</span></span>
              <span className="cl c-ind"><span className="c-key">tone       </span><span className="c-val">measured · cites everything</span></span>
              <span className="cl c-ind"><span className="c-key">card       </span><span className="c-card">IX · The Hermit</span></span>
              <span className="cl c-mut">──────────────────────────────────────</span>
              <span className="cl">&nbsp;</span>
              <span className="cl"><span className="c-ok">✓</span> <span className="c-arg">agent</span> <span className="c-val">sage</span> <span className="c-arg">created · ready in</span> <span className="c-val">~/.arcana/agents/</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
