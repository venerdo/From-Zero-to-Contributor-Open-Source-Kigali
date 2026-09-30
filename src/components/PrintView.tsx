import { useEffect } from 'react';
import { slides } from '../slides/slides';
import SlideView from './SlideView';

export default function PrintView() {
  useEffect(() => { document.title = 'From Zero to Contributor — print'; }, []);
  return (
    <div className="bg-white">
      {slides.map((s, i) => (
        <div key={s.id} className="print-page"><div><SlideView s={s} n={i + 1} total={slides.length} /></div></div>
      ))}
    </div>
  );
}
