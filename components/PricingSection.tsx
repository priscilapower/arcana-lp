import { PLANS } from '@/lib/data';
import { CopyPillClient } from './CopyPillClient';

export function PricingSection() {
  return (
    <section className="section" id="pricing" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="shead center">
          <span className="eyebrow">Pricing</span>
          <h2 className="title">Free to run. Pay only<br />when you want the cloud.</h2>
        </div>
        <div className="prices">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`price${plan.feat ? ' feat-tier' : ''}`}>
              {plan.feat && <span className="badge-pop">Most popular</span>}
              <div className="pname">{plan.name}</div>
              <div className="ptag">{plan.tag}</div>
              <div className="pamt">
                {plan.amt.startsWith('$') ? (
                  <><small>$</small>{plan.amt.slice(1)}</>
                ) : plan.amt}
              </div>
              <div className="pper">{plan.per}</div>
              <ul>
                {plan.feats.map((f) => (
                  <li key={f}><span className="ck">✓</span> {f}</li>
                ))}
              </ul>
              {plan.kind === 'copy' ? (
                <CopyPillClient command="pip install arcana-os" />
              ) : (
                <a href="#" className={`btn btn-${plan.kind}`}>{plan.cta}</a>
              )}
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--txt3)', fontSize: '13px', fontFamily: 'var(--fm)', marginTop: '26px' }}>
          Cloud plans billed monthly · cancel anytime · the OSS is, and always will be, free.{' '}
          Need enterprise features?{' '}
          <a href="mailto:hello@arcana.cloud" style={{ color: 'var(--txt2)', textDecoration: 'underline' }}>Contact us</a>.
        </p>
      </div>
    </section>
  );
}
