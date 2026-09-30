import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

/** Renders children on a fixed 1920x1080 canvas scaled to fit the parent. */
export default function ScaledSlide({ children }: { children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [k, setK] = useState(0);
  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => setK(Math.min(el.clientWidth / 1920, el.clientHeight / 1080));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={box} className="relative h-full w-full overflow-hidden">
      <div style={{ width: 1920, height: 1080, position: 'absolute', left: '50%', top: '50%', transform: `translate(-50%,-50%) scale(${k})` }}>
        {children}
      </div>
    </div>
  );
}
