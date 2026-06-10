export function MemorySection() {
  return (
    <section className="section" id="memory">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow">Memory federation<span className="vtag">coming in v1.0</span></span>
          <h2 className="title">Memory that&apos;s shared,<br />not scattered.</h2>
          <p className="lead">
            Three tiers, one federation. Agents keep what&apos;s theirs, pool what&apos;s shared, and surface
            what matters to the whole system.{' '}
            <em className="it">Arcana owns its memory; you own your knowledge.</em>
          </p>
          <p className="impl-note">Not in the current release. Shipping in v1.0.</p>
        </div>
        <div className="tiers">
          <div className="tier">
            <div className="tier-k"><span className="tn">01</span> Private</div>
            <h3>The agent&apos;s own</h3>
            <p>A per-agent SQLite store with its own vector index. This agent only: its episodic history, its learned preferences.</p>
            <div className="scope">scope · <b>this agent</b></div>
          </div>
          <div className="tier">
            <div className="tier-k"><span className="tn">02</span> Shared</div>
            <h3>Named pools</h3>
            <p>Cross-agent pools any agent can opt into. A research team of agents drawing from the same well of findings.</p>
            <div className="scope">scope · <b>opted-in agents</b></div>
          </div>
          <div className="tier">
            <div className="tier-k"><span className="tn">03</span> Global</div>
            <h3>The World knows</h3>
            <p>The system-wide store. All agents read it; only The World writes. Importance ≥ 0.9 is auto-promoted here.</p>
            <div className="scope">read · <b>all</b> · write · <b>The World</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}
