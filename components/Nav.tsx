'use client';

import { useEffect, useRef, useState } from 'react';
import { BrandMark, GithubIcon } from './BrandMark';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav ref={navRef} className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-in">
        <a href="#top" className="brand">
          <BrandMark />
          <span className="brand-name">ARCANA</span>
          <span className="brand-os">OS</span>
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#cards">The Cards</a>
          <a href="#memory">Memory</a>
          <a href="#cloud">Cloud</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
        </nav>
        <div className="nav-right">
          <a href="#" className="gh-pill">
            <GithubIcon />
            <b>4.2k</b> <span className="star">★</span>
          </a>
          <a href="#cloud" className="btn btn-s">Sign in</a>
          <a href="#pricing" className="btn btn-p">Get started</a>
        </div>
      </div>
    </nav>
  );
}
