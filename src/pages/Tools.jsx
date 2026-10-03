import React, { useState } from 'react';
import { ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { tools } from '../data/content';
import SectionHeader from '../components/SectionHeader';

export default function Tools() {
  const [query, setQuery] = useState('');
  const filtered = tools.filter(t => `${t.name} ${t.category} ${t.use}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="page-grid">
      <div className="page-hero"><div><div className="eyebrow"><Sparkles size={13} /> Curated tool radar</div><h1>Tools, without the hype.</h1><p>Find tools by the job you want to do. Each card is designed to lead you toward a small, testable experiment.</p></div></div>
      <div className="tool-search"><Search size={18} /><input placeholder="Search tools, categories or tasks" value={query} onChange={e => setQuery(e.target.value)} /></div>
      <SectionHeader eyebrow="Library" title="Your practical AI stack" description={`${filtered.length} tools surfaced in this demo library.`} />
      <div className="tools-grid">{filtered.map(tool => <article className={`tool-card tone-${tool.color}`} key={tool.id}><div className="tool-card-top"><span className="pill">{tool.category}</span><ArrowUpRight size={17} /></div><h3>{tool.name}</h3><p>{tool.use}</p><div className="tool-card-bottom"><span>{tool.signal}</span><span>Try a 15 min test →</span></div></article>)}</div>
    </div>
  );
}