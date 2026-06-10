import { BrandMark, CloudIcon } from './BrandMark';
import { CopyPillClient } from './CopyPillClient';

function OSSMarkSmall() {
  return (
    <svg viewBox="0 0 40 70" width="13" height="22" fill="none" aria-hidden="true">
      <rect x="0.75" y="0.75" width="38.5" height="68.5" rx="2.5" stroke="var(--txt3)" strokeWidth="2" />
      <path d="M20 23 L23.54 31.46 L32 35 L23.54 38.54 L20 47 L16.46 38.54 L8 35 L16.46 31.46 Z" fill="var(--txt3)" />
    </svg>
  );
}

export function OSSCloudSection() {
  return (
    <section className="section" id="cloud">
      <div className="wrap">
        <div className="shead center">
          <span className="eyebrow">Open source &amp; cloud</span>
          <h2 className="title">Run it yourself.<br />Or let us run it.</h2>
          <p className="lead">
            Arcana is local-first and free forever. When you&apos;d rather not host it, Arcana Cloud syncs,
            backs up, and manages the models for you; same OS, zero ops.
          </p>
        </div>
        <div className="split">
          <div className="path oss">
            <div className="path-k"><OSSMarkSmall /> Open Source</div>
            <h3>Self-hosted</h3>
            <p className="pdesc">The real product. The Python core, the CLI, and a local server: running on your machine, offline, yours to fork.</p>
            <ul>
              <li><span className="ck">✓</span> arcana-core, CLI &amp; local server</li>
              <li><span className="ck">✓</span> All 22 cards &amp; full memory federation</li>
              <li><span className="ck">✓</span> Local models via Ollama (no API needed)</li>
              <li><span className="ck">✓</span> Your keys, your data, your hardware</li>
              <li><span className="ck">✓</span> MIT licensed <span className="mut">· free forever</span></li>
            </ul>
            <CopyPillClient />
          </div>
          <div className="path cloud">
            <div className="path-k"><CloudIcon /> Arcana Cloud</div>
            <h3>Hosted &amp; managed</h3>
            <p className="pdesc">Everything in the OSS, hosted for you. Sync across devices, automatic backup, managed models, and team workspaces.</p>
            <ul>
              <li><span className="ck">✓</span> Sync agents &amp; memory across devices</li>
              <li><span className="ck">✓</span> Automatic encrypted cloud backup</li>
              <li><span className="ck">✓</span> Managed models (no keys to wrangle)</li>
              <li><span className="ck">✓</span> Shared agents &amp; team workspaces</li>
              <li><span className="ck">✓</span> Always-on automations &amp; briefings</li>
            </ul>
            <a href="#pricing" className="btn btn-p btn-lg">Start your cloud workspace</a>
          </div>
        </div>
      </div>
    </section>
  );
}
