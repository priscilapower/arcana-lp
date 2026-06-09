'use client';

import { useEffect, useRef, useState } from 'react';
import { BrandMark, GithubIcon } from './BrandMark';

const LINKS = [
  { href: '#cards',   label: 'The Cards' },
  { href: '#memory',  label: 'Memory'    },
  { href: '#cloud',   label: 'Cloud'     },
  { href: '#pricing', label: 'Pricing'   },
  { href: '#docs',    label: 'Docs'      },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-in">
          <a href="#top" className="brand">
            <BrandMark />
            <span className="brand-name">ARCANA</span>
            <span className="brand-os">OS</span>
          </a>
          <nav className="nav-links" aria-label="Main">
            {LINKS.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <div className="nav-right">
            <a href="#" className="gh-pill">
              <GithubIcon />
              <b>4.2k</b> <span className="star">★</span>
            </a>
            <a href="#cloud" className="btn btn-s">Sign in</a>
            <a href="#pricing" className="btn btn-p">Get started</a>
            <button
              className="nav-menu-btn"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(v => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`drawer-backdrop${open ? ' open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <div
        id="mobile-nav"
        className={`drawer${open ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div className="drawer-head">
          <a href="#top" className="brand" onClick={close}>
            <BrandMark />
            <span className="brand-name">ARCANA</span>
            <span className="brand-os">OS</span>
          </a>
          <button className="drawer-close" aria-label="Close menu" onClick={close}>
            <CloseIcon />
          </button>
        </div>

        <nav className="drawer-links" aria-label="Mobile navigation">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              ref={i === 0 ? firstLinkRef : undefined}
              onClick={close}
            >
              <span className="dl-bullet" aria-hidden="true">✦</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="drawer-foot">
          <a href="#" className="gh-pill">
            <GithubIcon />
            <b>4.2k</b>&thinsp;<span className="star">★</span>
          </a>
          <a href="#cloud" className="btn btn-s" onClick={close}>Sign in</a>
          <a href="#pricing" className="btn btn-p" onClick={close}>Get started</a>
        </div>
      </div>
    </>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <rect y="0"    width="16" height="1.5" rx=".75" fill="currentColor" />
      <rect y="5.25" width="16" height="1.5" rx=".75" fill="currentColor" />
      <rect y="10.5" width="16" height="1.5" rx=".75" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
