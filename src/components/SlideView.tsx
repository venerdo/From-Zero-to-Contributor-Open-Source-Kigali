import type { SlideData } from '../slides/slides';

export default function SlideView({ s, n, total }: { s: SlideData; n: number; total: number }) {
  const d = s.dark;
  const accent = d ? 'text-bright' : 'text-osk';
  const sub = d ? 'text-warm/80' : 'text-muted';
  const card = d ? 'bg-deep border-osk/40' : 'bg-white border-line';
  const cols = s.items && s.items.length === 4 ? 'grid-cols-4' : s.items && s.items.length === 3 ? 'grid-cols-3' : 'grid-cols-2';
  return (
    <div className={`slide-in relative flex h-[1080px] w-[1920px] flex-col overflow-hidden px-[120px] pb-[110px] pt-[80px] ${d ? 'bg-ink text-warm' : 'bg-warm text-ink'}`}>
      <div className="absolute left-0 top-0 h-full w-[14px] bg-osk" aria-hidden />
      {s.kicker && <p className={`font-display text-[24px] font-bold tracking-[0.2em] ${accent}`}>{s.kicker}</p>}
      <div className={`mt-6 flex min-h-0 flex-1 flex-col ${s.image ? 'w-[1080px]' : ''}`}>
        {s.layout === 'title' && <img src="/assets/osk-logo-white.svg" alt="Open Source Kigali logo" className="mb-10 h-[110px] w-auto self-start" />}
        <h1 className={`font-display font-bold leading-[1.02] ${s.layout === 'title' ? 'text-[104px]' : s.heading.length > 60 ? 'text-[72px]' : 'text-[88px]'}`}>{s.heading}</h1>
        {s.sub && <p className={`mt-8 max-w-[1500px] text-[40px] leading-snug ${sub}`}>{s.sub}</p>}
        {s.lines && (
          <ul className="reveal mt-10 space-y-6">
            {s.lines.map((l) => (
              <li key={l} className={`max-w-[1500px] text-[34px] leading-snug ${s.layout === 'bullets' ? 'flex gap-5' : ''}`}>
                {s.layout === 'bullets' && <span className={`mt-[14px] h-4 w-4 shrink-0 rounded-full bg-osk`} aria-hidden />}
                {l}
              </li>
            ))}
          </ul>
        )}
        {s.items && s.layout === 'cards' && (
          <div className={`reveal mt-12 grid gap-8 ${cols}`}>
            {s.items.map((i) => (
              <div key={i.t} className={`rounded-2xl border-2 p-10 ${card}`}>
                {i.k && <p className="font-display text-[26px] font-bold tracking-widest text-amber">{i.k}</p>}
                <h2 className="mt-3 font-display text-[44px] font-bold leading-tight">{i.t}</h2>
                {i.d && <p className={`mt-4 text-[30px] leading-snug ${sub}`}>{i.d}</p>}
              </div>
            ))}
          </div>
        )}
        {s.items && s.layout === 'steps' && (
          <ol className="reveal mt-12 grid grid-cols-4 gap-8">
            {s.items.map((i) => (
              <li key={i.t} className={`flex items-center gap-6 rounded-2xl border-2 p-8 ${card}`}>
                <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-osk font-display text-[38px] font-bold text-ink">{i.k}</span>
                <span className="font-display text-[42px] font-bold leading-tight">{i.t}</span>
              </li>
            ))}
          </ol>
        )}
        {s.items && s.layout === 'rows' && (
          <div className="reveal mt-10 space-y-5">
            {s.items.map((i) => (
              <div key={i.t} className={`flex items-center gap-10 rounded-xl border-2 px-8 py-5 ${card}`}>
                <span className={`${s.mono ? 'font-mono w-[760px] text-[34px]' : 'w-[200px] text-[38px] font-display'} shrink-0 font-bold ${accent}`}>{i.k}</span>
                <span className="text-[32px]">{i.t}</span>
              </div>
            ))}
          </div>
        )}
        {s.foot && <p className="mt-auto pt-8 font-display text-[40px] font-bold text-amber">{s.foot}</p>}
      </div>
      {s.image && (
        <img src="/assets/portrait.jpg" alt="Ub-Victor, speaker, standing in front of an Unlocking Freelance banner" className="absolute right-[120px] top-[120px] h-[780px] w-[585px] rounded-2xl border-4 border-osk object-cover object-top" />
      )}
      {s.question && <span className="absolute right-[120px] top-[80px] rounded-full bg-amber px-6 py-2 font-display text-[24px] font-bold text-ink">ASK THE ROOM</span>}
      <div className={`absolute bottom-[40px] left-[120px] right-[120px] flex justify-between text-[22px] ${sub}`}>
        <span>Open Source Kigali x ALU</span>
        <span>{n} / {total}</span>
      </div>
    </div>
  );
}
