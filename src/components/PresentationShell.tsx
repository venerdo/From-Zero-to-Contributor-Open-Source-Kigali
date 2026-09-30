import { useCallback, useEffect, useRef, useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, ExternalLink, HelpCircle, LayoutGrid, Maximize, Minimize, PanelLeft, Printer, StickyNote, Terminal } from 'lucide-react';
import { slides } from '../slides/slides';
import { commandGroups } from '../data/commands';
import { resources } from '../data/resources';
import { useFullscreen, useIdle, useSwipe } from '../hooks/usePresentation';
import ScaledSlide from './ScaledSlide';
import SlideView from './SlideView';
import Dialog from './Dialog';
import CopyButton from './CopyButton';

const total = slides.length;
const clamp = (n: number) => Math.min(total - 1, Math.max(0, n));
const readSlide = () => {
  const n = parseInt(new URLSearchParams(location.search).get('slide') ?? '1', 10);
  return clamp(Number.isNaN(n) ? 0 : n - 1);
};

function IconBtn({ label, onClick, children, active }: { label: string; onClick: () => void; children: React.ReactNode; active?: boolean }) {
  return (
    <button onClick={onClick} aria-label={label} title={label} aria-pressed={active}
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg hover:bg-deep ${active ? 'bg-deep text-bright' : ''}`}>{children}</button>
  );
}

export default function PresentationShell() {
  const [i, setI] = useState(readSlide);
  const [overview, setOverview] = useState(false);
  const [notes, setNotes] = useState(false);
  const [nav, setNav] = useState(false);
  const [dlg, setDlg] = useState<null | 'help' | 'cmds' | 'links'>(null);
  const root = useRef<HTMLDivElement>(null);
  const { isFs, toggle } = useFullscreen(root);
  const idle = useIdle(isFs);
  const next = useCallback(() => setI((x) => clamp(x + 1)), []);
  const prev = useCallback(() => setI((x) => clamp(x - 1)), []);
  const swipe = useSwipe(next, prev);

  useEffect(() => {
    const p = new URLSearchParams(location.search);
    p.set('slide', String(i + 1));
    history.replaceState(null, '', `?${p.toString()}`);
    document.title = `${i + 1}/${total} — ${slides[i].title}`;
  }, [i]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement).tagName;
      const map: Record<string, () => void> = {
        ArrowRight: next, PageDown: next, ArrowLeft: prev, PageUp: prev,
        Home: () => setI(0), End: () => setI(total - 1),
        f: toggle, o: () => setOverview((v) => !v), n: () => setNotes((v) => !v), s: () => setNav((v) => !v),
        c: () => setDlg('cmds'), '?': () => setDlg('help'),
      };
      if (e.key === ' ' && tag !== 'BUTTON') { e.preventDefault(); (e.shiftKey ? prev : next)(); return; }
      if (map[e.key]) { e.preventDefault(); map[e.key](); }
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [next, prev, toggle]);

  const s = slides[i];
  const hidden = isFs && idle;
  return (
    <div ref={root} className={`flex h-dvh flex-col bg-ink text-warm ${hidden ? 'hide-cursor' : ''}`}>
      <div className="flex min-h-0 flex-1">
        {nav && (
          <nav aria-label="Slide navigator" className="w-64 shrink-0 overflow-y-auto border-r border-deep p-2">
            {slides.map((x, n) => (
              <button key={x.id} onClick={() => setI(n)} aria-current={n === i} className={`mb-1 flex min-h-11 w-full gap-2 rounded px-2 py-2 text-left text-sm hover:bg-deep ${n === i ? 'bg-deep text-bright' : ''}`}>
                <span className="w-6 shrink-0 text-muted">{n + 1}</span>{x.title}
              </button>
            ))}
          </nav>
        )}
        <main className="min-w-0 flex-1" aria-label={`Slide ${i + 1} of ${total}: ${s.title}`} {...swipe}>
          {overview ? (
            <div className="h-full overflow-y-auto p-4">
              <h1 className="sr-only">All slides</h1>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {slides.map((x, n) => (
                  <button key={x.id} onClick={() => { setI(n); setOverview(false); }} aria-label={`Go to slide ${n + 1}: ${x.title}`}
                    className={`aspect-video overflow-hidden rounded-lg border-2 ${n === i ? 'border-amber' : 'border-deep'}`}>
                    <ScaledSlide><SlideView s={x} n={n + 1} total={total} /></ScaledSlide>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div key={i} className="h-full w-full"><h1 className="sr-only">{s.title}</h1><ScaledSlide><SlideView s={s} n={i + 1} total={total} /></ScaledSlide></div>
          )}
        </main>
      </div>
      {notes && (
        <section aria-label="Speaker notes" className="max-h-[30dvh] overflow-y-auto border-t border-deep bg-deep p-4 text-lg">
          <h2 className="mb-1 text-sm font-bold uppercase tracking-widest text-amber">Speaker notes</h2>{s.notes}
        </section>
      )}
      <div className={`transition-opacity duration-300 ${hidden ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
        <div className="flex" role="group" aria-label="Slide progress">
          {slides.map((x, n) => (
            <button key={x.id} onClick={() => setI(n)} aria-label={`Slide ${n + 1}: ${x.title}`} aria-current={n === i} className="group h-4 flex-1 px-px">
              <span className={`block h-1 ${n <= i ? 'bg-osk' : 'bg-deep'} group-hover:bg-amber`} />
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-1 px-2 pb-2">
          <div className="flex items-center">
            <IconBtn label="Previous slide" onClick={prev}><ChevronLeft /></IconBtn>
            <span className="min-w-[4.5rem] text-center text-sm tabular-nums" aria-live="polite">{i + 1} / {total}</span>
            <IconBtn label="Next slide" onClick={next}><ChevronRight /></IconBtn>
          </div>
          <div className="flex flex-wrap items-center">
            <IconBtn label="Slide navigator (S)" onClick={() => setNav((v) => !v)} active={nav}><PanelLeft /></IconBtn>
            <IconBtn label="Overview grid (O)" onClick={() => setOverview((v) => !v)} active={overview}><LayoutGrid /></IconBtn>
            <IconBtn label="Speaker notes (N)" onClick={() => setNotes((v) => !v)} active={notes}><StickyNote /></IconBtn>
            <IconBtn label="Command reference (C)" onClick={() => setDlg('cmds')}><Terminal /></IconBtn>
            <IconBtn label="GitHub resources" onClick={() => setDlg('links')}><ExternalLink /></IconBtn>
            <IconBtn label="Open handbook" onClick={() => { location.href = '?view=handbook'; }}><BookOpen /></IconBtn>
            <IconBtn label="Print / PDF mode" onClick={() => window.open('?print=1', '_blank')}><Printer /></IconBtn>
            <IconBtn label="Help (?)" onClick={() => setDlg('help')}><HelpCircle /></IconBtn>
            <IconBtn label={isFs ? 'Exit fullscreen (F)' : 'Fullscreen (F)'} onClick={toggle}>{isFs ? <Minimize /> : <Maximize />}</IconBtn>
          </div>
        </div>
      </div>
      {dlg === 'help' && (
        <Dialog title="Controls" onClose={() => setDlg(null)}>
          <ul className="space-y-2">
            {[['Right / Space / Page Down', 'Next slide'], ['Left / Shift+Space / Page Up', 'Previous slide'], ['Home / End', 'First / last slide'], ['F', 'Fullscreen'], ['O', 'Overview grid'], ['N', 'Speaker notes'], ['S', 'Slide navigator'], ['C', 'Command reference'], ['?', 'This help'], ['Swipe left/right', 'Touch navigation']].map(([a, b]) => (
              <li key={a} className="flex justify-between gap-4 border-b border-line py-1"><kbd className="font-mono text-sm">{a}</kbd><span>{b}</span></li>
            ))}
          </ul>
        </Dialog>
      )}
      {dlg === 'links' && (
        <Dialog title="GitHub resources" onClose={() => setDlg(null)}>
          <ul className="space-y-2">
            {resources.map((r) => (
              <li key={r.url}><a className="flex min-h-11 items-center gap-2 text-osk underline" href={r.url} target="_blank" rel="noopener noreferrer">{r.label}<ExternalLink size={16} /></a></li>
            ))}
          </ul>
        </Dialog>
      )}
      {dlg === 'cmds' && (
        <Dialog title="Command reference" onClose={() => setDlg(null)}>
          {commandGroups.map((g) => (
            <section key={g.title} className="mb-5">
              <h3 className="font-display text-lg font-bold text-osk">{g.title}</h3>
              {g.note && <p className="text-sm text-muted">{g.note}</p>}
              {g.cmds.map((c) => (
                <div key={c.c} className="flex items-center gap-2 border-b border-line py-1">
                  <div className="min-w-0 flex-1"><code className="break-all font-mono text-sm">{c.c}</code><p className="text-sm text-muted">{c.d}</p></div>
                  <CopyButton text={c.c} />
                </div>
              ))}
            </section>
          ))}
        </Dialog>
      )}
    </div>
  );
}
