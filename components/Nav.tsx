'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BrandMark, GithubIcon } from './BrandMark';

const LINKS = [
  { href: '/arcana',   label: 'The Cards' },
  { href: '/#how',     label: 'How it works' },
  { href: '/#install', label: 'Install'   },
  { href: '/#docs',    label: 'Docs'      },
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
          <Link href="/" className="brand">
            <BrandMark />
            <span className="brand-name">ARCANA</span>
            <span className="brand-os">OS</span>
          </Link>
          <nav className="nav-links" aria-label="Main">
            {LINKS.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </nav>
          <div className="nav-right">
            <a
              href="https://github.com/priscilapower/arcana"
              target="_blank"
              rel="noopener noreferrer"
              className="gh-pill"
            >
              <GithubIcon />
              <span>GitHub</span> <span className="star">★</span>
            </a>
            <Link href="/#install" className="btn btn-p">Install</Link>
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
          <Link href="/" className="brand" onClick={close}>
            <BrandMark />
            <span className="brand-name">ARCANA</span>
            <span className="brand-os">OS</span>
          </Link>
          <button className="drawer-close" aria-label="Close menu" onClick={close}>
            <CloseIcon />
          </button>
        </div>

        <nav className="drawer-links" aria-label="Mobile navigation">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              ref={i === 0 ? firstLinkRef : undefined}
              onClick={close}
            >
              <span className="dl-bullet" aria-hidden="true">✦</span>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="drawer-foot">
          <a
            href="https://github.com/priscilapower/arcana"
            target="_blank"
            rel="noopener noreferrer"
            className="gh-pill"
          >
            <GithubIcon />
            <span>GitHub</span>&thinsp;<span className="star">★</span>
          </a>
          <Link href="/#install" className="btn btn-p" onClick={close}>Install</Link>
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
