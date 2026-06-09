export function ProblemSection() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow">The problem</span>
          <h2 className="title">Your agents are strangers<br />to each other.</h2>
          <p className="lead">
            Claude, ChatGPT, local models, Notion AI — all siloed. No shared memory, no overview, no coordination.
            Observability tools watch them. Nobody gives them <em className="it">identity</em>.
          </p>
        </div>
        <div className="grid-3">
          <div className="pcard">
            <span className="pk">Siloed</span>
            <h3>No shared memory</h3>
            <p>Every tool starts from zero. What one agent learns, the others never see. Context dies at the end of each session.</p>
          </div>
          <div className="pcard">
            <span className="pk">Faceless</span>
            <h3>No identity</h3>
            <p>Agents are config blobs — a model name and a prompt. No personality, no purpose, nothing that makes one different from the next.</p>
          </div>
          <div className="pcard">
            <span className="pk">Uncoordinated</span>
            <h3>No overview</h3>
            <p>Nobody is watching the whole. No single place to see every agent, what it knows, what it costs, and what it&apos;s doing right now.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
