import { BrandMark } from './BrandMark';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              <BrandMark width={18} height={31} />
              <span className="brand-name">ARCANA</span>
              <span className="brand-os">OS</span>
            </div>
            <p>The OS that gives your agents a soul. Open source, local-first, cloud-optional.</p>
          </div>
          <div className="foot-col">
            <h5>Product</h5>
            <a href="/arcana">The Cards</a>
            <a href="#how">How it works</a>
            <a href="#install">Install</a>
          </div>
          <div className="foot-col">
            <h5>Open Source</h5>
            <a href="https://github.com/priscilapower/arcana" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://github.com/priscilapower/arcana" target="_blank" rel="noopener noreferrer">arcana-core</a>
            <a href="https://github.com/priscilapower/arcana" target="_blank" rel="noopener noreferrer">Roadmap</a>
            <a href="https://github.com/priscilapower/arcana" target="_blank" rel="noopener noreferrer">Contribute</a>
          </div>
          <div className="foot-col">
            <h5>Resources</h5>
            <a href="#">Docs</a>
            <a href="#">CLI reference</a>
            <a href="#">Changelog</a>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Arcana OS · MIT licensed</span>
          <span>arcanum — secret, mystery</span>
        </div>
      </div>
    </footer>
  );
}
