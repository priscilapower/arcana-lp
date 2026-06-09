import { GithubIcon } from './BrandMark';
import { CopyPillClient } from './CopyPillClient';

export function FinalCTA() {
  return (
    <section className="section final" id="docs">
      <div className="glow glow-a" style={{ top: '-180px', opacity: 0.12 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>Begin the spread</span>
        <h2>Give your agents<br />a <em>soul</em>.</h2>
        <p className="lead">
          Start local in one command. The deck is waiting.
        </p>
        <div className="final-cta">
          <CopyPillClient />
          <a
            href="https://github.com/priscilapower/arcana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-p btn-lg"
          >
            <GithubIcon />
            Star on GitHub
          </a>
          <a href="#" className="btn btn-ghost btn-lg">Read the docs →</a>
        </div>
      </div>
    </section>
  );
}
