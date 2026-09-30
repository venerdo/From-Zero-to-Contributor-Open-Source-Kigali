import { useEffect, useRef, useState, type RefObject } from 'react';

export function useFullscreen(ref: RefObject<HTMLElement>) {
  const [isFs, setIsFs] = useState(false);
  useEffect(() => {
    const on = () => setIsFs(document.fullscreenElement !== null);
    document.addEventListener('fullscreenchange', on);
    return () => document.removeEventListener('fullscreenchange', on);
  }, []);
  const toggle = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void ref.current?.requestFullscreen?.();
  };
  return { isFs, toggle };
}

/** True once the pointer has been still for `ms` (only while active). */
export function useIdle(active: boolean, ms = 2500) {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    if (!active) { setIdle(false); return; }
    let t = window.setTimeout(() => setIdle(true), ms);
    const wake = () => { setIdle(false); window.clearTimeout(t); t = window.setTimeout(() => setIdle(true), ms); };
    window.addEventListener('pointermove', wake);
    window.addEventListener('pointerdown', wake);
    return () => { window.clearTimeout(t); window.removeEventListener('pointermove', wake); window.removeEventListener('pointerdown', wake); };
  }, [active, ms]);
  return idle;
}

export function useSwipe(onLeft: () => void, onRight: () => void) {
  const start = useRef<{ x: number; y: number } | null>(null);
  return {
    onTouchStart: (e: React.TouchEvent) => { start.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; },
    onTouchEnd: (e: React.TouchEvent) => {
      const s = start.current; start.current = null;
      if (!s) return;
      const dx = e.changedTouches[0].clientX - s.x;
      const dy = e.changedTouches[0].clientY - s.y;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? onLeft : onRight)();
    },
  };
}
