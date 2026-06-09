export function TheWorldSection() {
  return (
    <section className="section" id="world" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="world-card">
          <div className="world-in">
            <div className="world-l">
              <span className="eyebrow">XXI · The World</span>
              <h2>One meta-agent<br />that sees everything.</h2>
              <p className="lead">
                The OS itself, made conscious. The World reads across every agent, every memory tier,
                every session — routing intelligence, detecting reversed cards, and writing your daily briefing.
                The one card that cannot be reversed.
              </p>
              <div className="world-stats">
                <div className="wstat"><div className="wn">3</div><div className="wl">agents active</div></div>
                <div className="wstat"><div className="wn">2,341</div><div className="wl">memories federated</div></div>
                <div className="wstat"><div className="wn">$0.34</div><div className="wl">spend today</div></div>
              </div>
            </div>
            <div className="world-r">
              <div className="brief-k">Morning briefing · 06:00</div>
              <div className="brief-row">
                <span className="bd run" />
                <div><b>sage</b> <span className="bc">IX · Hermit</span> — finished the RAG vs fine-tuning analysis overnight. 3 sources promoted to global.</div>
              </div>
              <div className="brief-row">
                <span className="bd thk" />
                <div><b>writer</b> <span className="bc">III · Empress</span> — drafting the launch post. Pulled tone from your shared brand pool.</div>
              </div>
              <div className="brief-row">
                <span className="bd idle" />
                <div><b>oracle</b> <span className="bc">II · Priestess</span> — idle. Flagged a pattern across last week&apos;s journals.</div>
              </div>
              <div className="brief-row">
                <span className="bd run" />
                <div><b>1 reversed card</b> resolved — a runaway loop caught and paused before cost.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
