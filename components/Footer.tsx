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
            <a href="#cards">The Cards</a>
            <a href="#memory">Memory</a>
            <a href="#world">The World</a>
            <a href="#cloud">Cloud</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="foot-col">
            <h5>Open Source</h5>
            <a href="#">GitHub</a>
            <a href="#">arcana-core</a>
            <a href="#">arcana-cli</a>
            <a href="#">Roadmap</a>
            <a href="#">Contribute</a>
          </div>
          <div className="foot-col">
            <h5>Resources</h5>
            <a href="#">Docs</a>
            <a href="#">CLI reference</a>
            <a href="#">The 22 Arcana</a>
            <a href="#">Changelog</a>
            <a href="#">Discord</a>
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
