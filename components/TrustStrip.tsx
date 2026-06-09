const ITEMS = [
  'Works fully offline',
  'Your keys, your machine',
  '22 agent archetypes',
  'MCP-native',
  'File-system as source of truth',
];

export function TrustStrip() {
  return (
    <div className="wrap">
      <div className="trust">
        {ITEMS.map((item) => (
          <div key={item} className="trust-i">
            <span className="dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
