import type { AccentKey } from './data';
import { ACCENTS } from './data';

export function applyAccent(key: AccentKey, theme: 'dark' | 'light') {
  const cfg = ACCENTS[key][theme];
  const root = document.documentElement;
  root.classList.add('accent-swapping');
  root.style.setProperty('--accent', cfg.a);
  root.style.setProperty('--accent-dim', cfg.ad);
  root.style.setProperty('--accent-bright', cfg.ab);
  root.style.setProperty('--accent-bg',  `oklch(${cfg.h} / ${theme === 'light' ? '0.09' : '0.10'})`);
  root.style.setProperty('--accent-bg2', `oklch(${cfg.h} / ${theme === 'light' ? '0.14' : '0.18'})`);
  root.style.setProperty('--accent-line',`oklch(${cfg.h} / ${theme === 'light' ? '0.30' : '0.32'})`);
  root.style.setProperty('--accent2', cfg.a2);
  root.style.setProperty('--accent2-dim', cfg.a2d);
  root.style.setProperty('--accent2-bg', `oklch(${cfg.h2} / 0.12)`);
  void root.offsetWidth;
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('accent-swapping')));
}
