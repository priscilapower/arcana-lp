'use client';

import { useCallback, useState } from 'react';
import { ACCENTS } from '@/lib/data';
import type { AccentKey } from '@/lib/data';
import { applyAccent } from '@/lib/accent';

export function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState<AccentKey>('cyan');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const applyTheme = useCallback((newTheme: 'dark' | 'light', newAccent: AccentKey) => {
    document.documentElement.dataset.theme = newTheme;
    applyAccent(newAccent, newTheme);
  }, []);

  const handleAccent = useCallback((key: AccentKey) => {
    setAccent(key);
    applyTheme(theme, key);
  }, [theme, applyTheme]);

  const handleTheme = useCallback((t: 'dark' | 'light') => {
    setTheme(t);
    applyTheme(t, accent);
  }, [accent, applyTheme]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed', bottom: 22, right: 22, zIndex: 199,
          background: 'var(--surf)', border: '1px solid var(--bdr)',
          borderRadius: '100px', padding: '8px 14px',
          fontFamily: 'var(--fm)', fontSize: '11px', letterSpacing: '.12em',
          textTransform: 'uppercase', color: 'var(--txt3)', cursor: 'pointer',
          display: open ? 'none' : 'block',
        }}
        aria-label="Open appearance panel"
      >
        Appearance
      </button>

      {open && (
        <div className="twp" role="dialog" aria-label="Appearance settings">
          <div className="tw-hd">
            Appearance
            <span className="tw-x" role="button" tabIndex={0} onClick={() => setOpen(false)} onKeyDown={(e) => e.key === 'Enter' && setOpen(false)}>✕</span>
          </div>
          <div className="tw-row">
            <div className="tw-lbl">Colors</div>
            <div className="tw-opts">
              {(Object.entries(ACCENTS) as [AccentKey, typeof ACCENTS[AccentKey]][]).map(([key, val]) => (
                <span
                  key={key}
                  className={`tw-opt${accent === key ? ' sel' : ''}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleAccent(key)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAccent(key)}
                >
                  <span className="tw-sw">
                    <i style={{ background: val.swatch[0] }} />
                    <i style={{ background: val.swatch[1] }} />
                  </span>
                  {val.label}
                </span>
              ))}
            </div>
          </div>
          <div className="tw-row inline">
            <div className="tw-lbl">Theme</div>
            <div className="tw-opts">
              {(['dark', 'light'] as const).map((t) => (
                <span
                  key={t}
                  className={`tw-opt${theme === t ? ' sel' : ''}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleTheme(t)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTheme(t)}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
