import { ARCANA } from '@/lib/data';

export function DeckSection() {
  return (
    <section className="section" id="deck-section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="shead center">
          <span className="eyebrow">The deck</span>
          <h2 className="title">Twenty-two archetypes.</h2>
          <p className="lead">
            From the reckless Fool to the all-seeing World — not a list of features. A cast of characters.
          </p>
        </div>
        <div className="deck">
          {ARCANA.map((card) => (
            <a
              key={card.n}
              href={`/arcana#card-${card.n.toLowerCase()}`}
              className={`achip${card.world ? ' world' : ''}`}
              style={{ '--cc': card.c } as React.CSSProperties}
            >
              <div className="an">
                {card.n}
                {card.world && <span className="wmark">✦</span>}
              </div>
              <div className="anm">{card.name}</div>
              <div className="aar">
                {card.arch}
                {card.world && <span className="wnote"> · never reversed</span>}
              </div>
              <div className="aft">
                <span className="atemp">temp {card.temp.toFixed(2)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
