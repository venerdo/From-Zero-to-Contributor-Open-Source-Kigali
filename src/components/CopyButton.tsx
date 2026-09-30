import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CopyButton({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setOk(true); window.setTimeout(() => setOk(false), 1500); } catch { /* clipboard unavailable */ }
  };
  return (
    <button onClick={copy} aria-label={ok ? 'Copied' : `Copy: ${text}`} title="Copy"
      className="grid h-11 w-11 shrink-0 place-items-center rounded text-muted hover:bg-line hover:text-ink">
      {ok ? <Check size={18} /> : <Copy size={18} />}
    </button>
  );
}
