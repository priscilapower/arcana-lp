'use client';

import { createContext, useCallback, useContext, useRef, useState } from 'react';

interface ToastCtx { flash: (msg: string) => void; }
const Ctx = createContext<ToastCtx>({ flash: () => {} });

export function useToast() { return useContext(Ctx); }

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [msg, setMsg] = useState('');
  const [visible, setVisible] = useState(false);
  const tid = useRef<ReturnType<typeof setTimeout>>(undefined);

  const flash = useCallback((text: string) => {
    clearTimeout(tid.current);
    setMsg(text);
    setVisible(true);
    tid.current = setTimeout(() => setVisible(false), 1700);
  }, []);

  return (
    <Ctx.Provider value={{ flash }}>
      {children}
      <div className={`toast${visible ? ' show' : ''}`}>{msg}</div>
    </Ctx.Provider>
  );
}
