import { Fragment, useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import raw from '../content/handbook.md?raw';
import CopyButton from './CopyButton';

type Block =
  | { t: 'h'; l: number; text: string }
  | { t: 'code'; text: string }
  | { t: 'p' | 'quote'; text: string }
  | { t: 'list'; items: string[] }
  | { t: 'table'; rows: string[][] };
interface Section { id: string; title: string; part: string; blocks: Block[]; text: string }

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function parse(md: string): Section[] {
  const lines = md.split('\n');
  const out: Section[] = [];
  let part = 'Introduction';
  let cur: Section = { id: 'intro', title: 'Introduction', part, blocks: [], text: '' };
  let i = 0;
  const push = () => { if (cur.blocks.length) out.push(cur); };
  while (i < lines.length) {
    const ln = lines[i];
    if (ln.startsWith('```')) {
      const buf: string[] = []; i++;
      while (i < lines.length && !lines[i].startsWith('```')) buf.push(lines[i++]);
      i++; cur.blocks.push({ t: 'code', text: buf.join('\n') }); cur.text += buf.join(' ') + ' '; continue;
    }
    const h = /^(#{1,4}) (.*)/.exec(ln);
    if (h) {
      const l = h[1].length;
      if (l === 1 && /^Part /.test(h[2])) { part = h[2]; } 
      else if (l === 2) { push(); cur = { id: slug(h[2]), title: h[2], part, blocks: [], text: h[2] + ' ' }; }
      else cur.blocks.push({ t: 'h', l, text: h[2] });
      cur.text += h[2] + ' '; i++; continue;
    }
    if (ln.startsWith('|')) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith('|')) { if (!/^\|[\s:|-]+\|?$/.test(lines[i])) rows.push(lines[i].split('|').slice(1, -1).map((c) => c.trim())); i++; }
      cur.blocks.push({ t: 'table', rows }); continue;
    }
    if (/^\s*([-*]|\d+\.) /.test(ln)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*([-*]|\d+\.) /.test(lines[i])) items.push(lines[i++].replace(/^\s*([-*]|\d+\.) /, ''));
      cur.blocks.push({ t: 'list', items }); cur.text += items.join(' ') + ' '; continue;
    }
    if (ln.startsWith('>')) { cur.blocks.push({ t: 'quote', text: ln.replace(/^>\s?/, '') }); i++; continue; }
    if (ln.trim() && !/^---+$/.test(ln.trim())) {
      const buf = [ln];
      while (i + 1 < lines.length && lines[i + 1].trim() && !/^(#|```|\||>|\s*([-*]|\d+\.) )/.test(lines[i + 1])) buf.push(lines[++i]);
      cur.blocks.push({ t: 'p', text: buf.join(' ') }); cur.text += buf.join(' ') + ' ';
    }
    i++;
  }
  push();
  return out;
}

function Inline({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return <>{parts.map((p, n) => {
    if (p.startsWith('`')) return <code key={n} className="rounded bg-line px-1 font-mono text-[0.9em]">{p.slice(1, -1)}</code>;
    if (p.startsWith('**')) return <strong key={n}>{p.slice(2, -2)}</strong>;
    const a = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(p);
    if (a) return <a key={n} href={a[2]} target="_blank" rel="noopener noreferrer" className="text-osk underline">{a[1]}</a>;
    return <Fragment key={n}>{p}</Fragment>;
  })}</>;
}

// Links from handbook sections back to related presentation slides (slide numbers).
const slideLinks: [RegExp, number][] = [[/git and github/i, 5], [/branch/i, 6], [/commit/i, 8], [/first contribution|pull request|fork/i, 6], [/why contribute/i, 10]];

export default function Handbook() {
  const [q, setQ] = useState('');
  const sections = useMemo(() => parse(raw), []);
  const shown = sections.filter((s) => s.text.toLowerCase().includes(q.toLowerCase()));
  const parts = [...new Set(shown.map((s) => s.part))];
  return (
    <div className="min-h-full bg-warm text-ink">
      <header className="sticky top-0 z-10 flex flex-wrap items-center gap-3 border-b border-line bg-warm p-3">
        <a href="?slide=1" className="flex min-h-11 items-center gap-2 font-semibold text-osk"><ArrowLeft size={18} />Presentation</a>
        <h1 className="font-display text-xl font-bold">Open Source, Git &amp; GitHub Handbook</h1>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search handbook" aria-label="Search handbook" className="ml-auto min-h-11 w-full rounded border border-line bg-white px-3 sm:w-72" />
      </header>
      <div className="mx-auto flex max-w-6xl gap-8 p-4">
        <nav aria-label="Table of contents" className="sticky top-20 hidden max-h-[80dvh] w-72 shrink-0 self-start overflow-y-auto text-sm lg:block">
          {parts.map((p) => (
            <div key={p} className="mb-3"><p className="font-bold text-muted">{p}</p>
              {shown.filter((s) => s.part === p).map((s) => <a key={s.id} href={`#${s.id}`} className="block py-1 hover:text-osk">{s.title}</a>)}
            </div>
          ))}
        </nav>
        <main className="min-w-0 max-w-[75ch] flex-1 text-lg leading-relaxed">
          {shown.length === 0 && <p>No sections match “{q}”.</p>}
          {shown.map((s) => {
            const link = slideLinks.find(([re]) => re.test(s.title));
            return (
              <section key={s.id} id={s.id} className="mb-12 scroll-mt-24">
                <p className="text-sm font-bold text-muted">{s.part}</p>
                <h2 className="font-display text-3xl font-bold">{s.title}</h2>
                {link && <a href={`?slide=${link[1]}`} className="text-sm text-osk underline">Related slide {link[1]}</a>}
                {s.blocks.map((b, n) => {
                  if (b.t === 'h') return <h3 key={n} className="mt-6 font-display text-xl font-bold">{b.text}</h3>;
                  if (b.t === 'p') return <p key={n} className="mt-3"><Inline text={b.text} /></p>;
                  if (b.t === 'quote') return <blockquote key={n} className="mt-3 border-l-4 border-amber pl-4"><Inline text={b.text} /></blockquote>;
                  if (b.t === 'list') return <ul key={n} className="mt-3 list-disc space-y-1 pl-6">{b.items.map((x, m) => <li key={m}><Inline text={x} /></li>)}</ul>;
                  if (b.t === 'table') return <div key={n} className="mt-3 overflow-x-auto"><table className="w-full text-left text-base"><tbody>{b.rows.map((r, m) => <tr key={m} className="border-b border-line">{r.map((c, k) => <td key={k} className="p-2 align-top"><Inline text={c} /></td>)}</tr>)}</tbody></table></div>;
                  return (
                    <div key={n} className="mt-3 flex items-start rounded-lg bg-ink text-warm">
                      <pre className="min-w-0 flex-1 overflow-x-auto p-4 font-mono text-sm"><code>{b.text}</code></pre>
                      <CopyButton text={b.text} />
                    </div>
                  );
                })}
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
}
