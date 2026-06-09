import { CopyPillClient } from './CopyPillClient';

export function FinalCTA() {
  return (
    <section className="section final" id="docs">
      <div className="glow glow-a" style={{ top: '-180px', opacity: 0.12 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>Begin the spread</span>
        <h2>Give your agents<br />a <em>soul</em>.</h2>
        <p className="lead">
          Start local in one command, or spin up a cloud workspace in a minute. The deck is waiting.
        </p>
        <div className="final-cta">
          <CopyPillClient />
          <a href="#cloud" className="btn btn-p btn-lg">Try Arcana Cloud</a>
          <a href="#" className="btn btn-ghost btn-lg">Read the docs →</a>
        </div>
      </div>
    </section>
  );
}
