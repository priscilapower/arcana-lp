export function BrandMark({ width = 20, height = 35 }: { width?: number; height?: number }) {
  return (
    <svg viewBox="0 0 40 70" width={width} height={height} fill="none" aria-hidden="true">
      <rect x="0.75" y="0.75" width="38.5" height="68.5" rx="2.5" stroke="var(--accent)" strokeWidth="1.5" />
      <path d="M20 23 L23.54 31.46 L32 35 L23.54 38.54 L20 47 L16.46 38.54 L8 35 L16.46 31.46 Z" fill="var(--accent)" />
    </svg>
  );
}

export function StarIcon({ size = 46 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M20 4 L24.2 15.8 L36 20 L24.2 24.2 L20 36 L15.8 24.2 L4 20 L15.8 15.8 Z" fill="currentColor" />
    </svg>
  );
}

export function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function CloudIcon() {
  return (
    <svg width="18" height="13" viewBox="0 0 24 16" fill="none" aria-hidden="true">
      <path d="M6.5 14.5h11a4.5 4.5 0 0 0 .6-8.96A6 6 0 0 0 6.3 6.04 4.25 4.25 0 0 0 6.5 14.5Z" stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
