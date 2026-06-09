'use client';

import { useCallback } from 'react';
import { useToast } from './ToastProvider';

export function CopyPillClient({ command = 'pip install arcana-os' }: { command?: string }) {
  const { flash } = useToast();
  const handleClick = useCallback(() => {
    navigator.clipboard?.writeText(command).catch(() => {});
    flash('Copied  ' + command);
  }, [command, flash]);

  return (
    <button className="copy-pill" onClick={handleClick}>
      <span className="pr">$</span>
      <span className="cmd">{command}</span>
      <span className="cp">copy</span>
    </button>
  );
}
