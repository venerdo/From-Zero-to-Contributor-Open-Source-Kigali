import PresentationShell from './components/PresentationShell';
import PrintView from './components/PrintView';
import Handbook from './components/Handbook';

export default function App() {
  const p = new URLSearchParams(location.search);
  if (p.get('print') === '1') return <PrintView />;
  if (p.get('view') === 'handbook') return <Handbook />;
  return <PresentationShell />;
}
