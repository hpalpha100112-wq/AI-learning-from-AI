import React from 'react';
import { ArrowUpRight, Database, Eye, Gamepad2, Layers3, Sparkles } from 'lucide-react';
import { sources } from '../data/content';
import SectionHeader from '../components/SectionHeader';

const mapping = [
  ['The Rundown AI', 'Content structure', 'Daily brief → practical guides → tools → courses → community'],
  ['AInformed', 'Information architecture', 'Digest → topic categories → research/model/tool discovery'],
  ['Hugging Face Learn', 'Learning architecture', 'Modular tracks → progressive depth → build-oriented learning'],
  ['Krea', 'UI language', 'Minimal interface → visual focus → low-friction action'],
  ['Codrops', 'Motion system', '3D core → scroll/motion → hover details → creative transitions'],
];

export default function Sources() {
  return (
    <div className="page-grid">
      <div className="page-hero"><div><div className="eyebrow"><Database size={13} /> Research DNA</div><h1>What we borrowed — and what we changed.</h1><p>This page is the product blueprint. Each reference contributes a specific pattern; none is copied as a whole.</p></div></div>
      <SectionHeader eyebrow="Reference map" title="Five inputs. One product language." description="This makes the design decisions auditable and easy to extend later." />
      <div className="reference-table"><div className="ref-head"><span>Reference</span><span>Picked for</span><span>How Pulse adapts it</span></div>{mapping.map(row => <div className="ref-row" key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><p>{row[2]}</p></div>)}</div>
      <div className="source-cards">{sources.map((source, i) => <a key={source.name} href={source.url} target="_blank" rel="noreferrer" className="source-card"><div className="source-number">0{i + 1}</div><div><strong>{source.name}</strong><span>{source.role}</span></div><ArrowUpRight size={17} /></a>)}</div>
      <div className="research-principles"><div><Eye size={18} /><strong>Observe, don't imitate.</strong><p>We take patterns, not brand identity.</p></div><div><Layers3 size={18} /><strong>Structure before decoration.</strong><p>Every visual effect supports navigation, hierarchy or motivation.</p></div><div><Gamepad2 size={18} /><strong>Keep the game extensible.</strong><p>The game room is a surface now; your future rules can plug into it.</p></div><div><Sparkles size={18} /><strong>Daily freshness is a product feature.</strong><p>The 24-hour cycle is visible, not hidden in the backend.</p></div></div>
    </div>
  );
}