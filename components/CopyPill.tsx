'use client';

import { useCallback } from 'react';

interface CopyPillProps {
  command?: string;
  onCopy?: (text: string) => void;
  className?: string;
}

export function CopyPill({ command = 'pip install arcana-os', onCopy, className }: CopyPillProps) {
  const handleClick = useCallback(() => {
    navigator.clipboard?.writeText(command).catch(() => {});
    onCopy?.(command);
  }, [command, onCopy]);

  return (
    <button className={`copy-pill${className ? ` ${className}` : ''}`} onClick={handleClick}>
      <span className="pr">$</span>
      <span className="cmd">{command}</span>
      <span className="cp">copy</span>
    </button>
  );
}
