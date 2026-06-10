export function ProblemSection() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow plain">The problem</span>
          <h2 className="title">Your agents have no soul.</h2>
          <p className="lead">
            No consistent character, no overview, nobody in charge. You can&apos;t tell what they know,
            why they behaved the way they did, or who to hold responsible when they go off-track.
          </p>
        </div>
        <div className="prob-list">
          <div className="prob-item">
            <span className="prob-n">I</span>
            <div className="prob-body">
              <span className="pk">Identity</span>
              <h3>No soul</h3>
              <p>Agents are a model name and a system prompt. No archetype, no voice, nothing that makes one reliably different from the next. Same tool, different answer, no explanation why.</p>
            </div>
          </div>
          <div className="prob-item">
            <span className="prob-n">II</span>
            <div className="prob-body">
              <span className="pk">Character</span>
              <h3>No consistent character</h3>
              <p>Personality evaporates between prompts. The same agent runs differently every session because there&apos;s nothing anchoring who it is, just a system prompt you rewrite by hand.</p>
            </div>
          </div>
          <div className="prob-item">
            <span className="prob-n">III</span>
            <div className="prob-body">
              <span className="pk">Oversight</span>
              <h3>No overview</h3>
              <p>Nothing logs intent. You see the output, not the reasoning: the cost, not the cause. When something breaks, you&apos;re debugging a black box.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
