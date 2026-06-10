export function ConnectSection() {
  return (
    <section className="section" id="connect">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow">Connect everything</span>
          <h2 className="title">Bring your own<br />models and tools.</h2>
          <p className="lead">
            Adapters all the way down. MCP servers registered once, models behind one gateway,
            your knowledge read where it lives: never copied, never owned.
          </p>
        </div>
        <div className="conn">
          <div className="conn-c">
            <h4>Model gateway</h4>
            <p>Local or hosted, one interface. Swap models without touching an agent.</p>
            <div className="chips">
              {['Ollama', 'Claude', 'OpenAI', 'LM Studio', 'any compat'].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
          <div className="conn-c">
            <h4>MCP, OS-level</h4>
            <p>Connect a server once; every agent subscribes to the tools it needs. No per-agent auth.</p>
            <div className="chips">
              {['Notion', 'web search', 'filesystem', '+ your servers'].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
          <div className="conn-c">
            <h4>Knowledge connectors</h4>
            <p>Your notes stay yours. Arcana reads and indexes; the source of truth never leaves home.</p>
            <div className="chips">
              {['Obsidian', 'Notion', 'Markdown'].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
